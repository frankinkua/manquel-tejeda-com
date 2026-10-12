# Research Lessons

* **Abandoned Domains:** The live domain for `hopeprinter.com` was unresponsive or returning errors. Relying on Wayback Machine provided the necessary source of truth for historical claims.
* **Asset Tracking via Embeds:** The actual project media was hosted on YouTube rather than the site itself, but was found embedded in the HTML. Parsing archived HTML allows discovery of associated media without needing live indexing from search engines.
* **Access Limitations:** The Frankfurt Valley medium interview was blocking programmatic requests with HTTP 403. Wayback machine was also useful for retrieving the full text to verify project facts.

**Improved Prompt Clause:**
"When primary source domains are unreachable or return HTTP 403 errors, always check the Wayback Machine (web.archive.org) for archived HTML. Extract embedded media links (like YouTube iframes) from the raw HTML to locate primary visual evidence."
