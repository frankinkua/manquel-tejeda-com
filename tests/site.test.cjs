const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync, existsSync } = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const html = readFileSync(path.join(root, "index.html"), "utf8");
const css = readFileSync(path.join(root, "styles.css"), "utf8");
const script = readFileSync(path.join(root, "site.js"), "utf8");

test("local references and fragment targets resolve", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size, "IDs must be unique");
  for (const [, url] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (url.startsWith("#")) assert.ok(ids.includes(url.slice(1)), url);
    else if (!url.startsWith("https://"))
      assert.ok(existsSync(path.join(root, url)), url);
  }
  for (const [, asset] of css.matchAll(/url\(['"]?([^'"\)]+)['"]?\)/g)) {
    assert.ok(existsSync(path.join(root, asset)), asset);
  }
});

test("document has accessible landmarks and correct identity", () => {
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<main id="main" tabindex="-1">/);
  assert.match(html, /aria-controls="navigation"/);
  assert.match(html, /<dialog[^>]*aria-labelledby="sources-title"/);
  assert.doesNotMatch(html, /Tejada|API[_ -]?KEY/i);
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g))
    assert.match(tag, /\balt="[^"]+"/);
  for (const [tag] of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g))
    assert.match(tag, /rel="noopener noreferrer"/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /focus-visible/);
});

test("page requires no remote runtime assets", () => {
  assert.doesNotMatch(html, /<(?:script|img)[^>]+src="https?:/);
  assert.doesNotMatch(css, /@import|url\(['"]?https?:/);
  assert.ok(existsSync(path.join(root, "assets/fonts/DM-Sans-OFL.txt")));
  assert.ok(
    existsSync(path.join(root, "assets/fonts/Instrument-Serif-OFL.txt")),
  );
});

function element() {
  const listeners = new Map();
  const attrs = new Map();
  const classes = new Set();
  return {
    listeners,
    attrs,
    classList: {
      add: (value) => classes.add(value),
      remove: (value) => classes.delete(value),
      contains: (value) => classes.has(value),
      toggle: (value, state) =>
        state ? classes.add(value) : classes.delete(value),
    },
    addEventListener: (name, fn) => listeners.set(name, fn),
    setAttribute: (key, value) => attrs.set(key, value),
    getAttribute: (key) => attrs.get(key),
    focus() {
      this.focused = true;
    },
    emit(name, event = {}) {
      listeners.get(name)?.(event);
    },
  };
}

function setup(withDialog = true) {
  const menu = element(),
    nav = element(),
    trigger = element(),
    dialog = element(),
    close = element();
  const doc = element(),
    media = element();
  doc.documentElement = element();
  doc.body = element();
  menu.setAttribute("aria-expanded", "false");
  doc.querySelector = (selector) =>
    ({
      ".menu-toggle": menu,
      "#navigation": nav,
      "#open-sources": trigger,
      "#sources-dialog": dialog,
    })[selector];
  dialog.querySelector = () => close;
  dialog.getBoundingClientRect = () => ({
    left: 10,
    right: 100,
    top: 10,
    bottom: 100,
  });
  if (withDialog)
    dialog.showModal = () => {
      dialog.open = true;
    };
  dialog.close = () => {
    dialog.open = false;
    dialog.emit("close");
  };
  vm.runInNewContext(script, {
    document: doc,
    window: { matchMedia: () => media },
  });
  return { menu, nav, trigger, dialog, close, doc, media };
}

test("mobile menu opens and closes on navigation, Escape, outside click, and resize", () => {
  const { menu, nav, doc, media } = setup();
  menu.emit("click");
  assert.equal(menu.getAttribute("aria-expanded"), "true");
  assert.ok(nav.classList.contains("is-open"));
  nav.emit("click", { target: { closest: () => ({}) } });
  assert.equal(menu.getAttribute("aria-expanded"), "false");
  menu.emit("click");
  doc.emit("keydown", { key: "Escape" });
  assert.ok(menu.focused);
  assert.equal(menu.getAttribute("aria-expanded"), "false");
  menu.emit("click");
  doc.emit("click", { target: { closest: () => null } });
  assert.equal(menu.getAttribute("aria-expanded"), "false");
  menu.emit("click");
  media.emit("change");
  assert.equal(menu.getAttribute("aria-expanded"), "false");
});

test("sources dialog locks scroll and returns focus when closed", () => {
  const { trigger, dialog, close, doc } = setup();
  let prevented = false;
  trigger.emit("click", {
    preventDefault: () => {
      prevented = true;
    },
  });
  assert.ok(
    prevented && dialog.open && doc.body.classList.contains("dialog-open"),
  );
  close.emit("click");
  assert.equal(dialog.open, false);
  assert.ok(trigger.focused);
  assert.equal(doc.body.classList.contains("dialog-open"), false);
  trigger.emit("click", { preventDefault() {} });
  dialog.emit("click", { target: dialog, clientX: 0, clientY: 0 });
  assert.equal(dialog.open, false);
});

test("unsupported dialogs preserve the plain source-document link", () => {
  const { trigger } = setup(false);
  assert.equal(trigger.listeners.has("click"), false);
  assert.equal(trigger.attrs.has("aria-haspopup"), false);
});
