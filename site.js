"use strict";

document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
};
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigation.classList.toggle("is-open", isOpen);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".header-inner")) closeMenu();
});
window.matchMedia("(min-width: 651px)").addEventListener("change", closeMenu);

const sourcesButton = document.querySelector("#open-sources");
const sourcesDialog = document.querySelector("#sources-dialog");
if (typeof sourcesDialog.showModal === "function") {
  sourcesButton.setAttribute("aria-haspopup", "dialog");
  sourcesButton.addEventListener("click", (event) => {
    event.preventDefault();
    sourcesDialog.showModal();
    document.body.classList.add("dialog-open");
  });
  sourcesDialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => sourcesDialog.close());
  sourcesDialog.addEventListener("click", (event) => {
    const bounds = sourcesDialog.getBoundingClientRect();
    if (
      event.target === sourcesDialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      sourcesDialog.close();
  });
  sourcesDialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    sourcesButton.focus({ preventScroll: true });
  });
}
