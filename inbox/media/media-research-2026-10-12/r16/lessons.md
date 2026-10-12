# Lessons Learned

- **LinkedIn Access Restrictions:** LinkedIn aggressively blocks automated access (`REJECTED_CLIENT_CAPABILITY`), making it impossible to retrieve posts or profile data without manual intervention or advanced proxy/browser solutions.
- **Wayback Machine Reliability:** The Wayback Machine is a vital fallback for blocked sites (like Medium), but its API can experience temporary outages. It also frequently lacks captures of dynamic or highly-restricted URLs like LinkedIn profiles.
- **Waitlist Pages Lack Identity:** Finding a waitlist page for a product name (e.g., `http://energy-from-your-balcony.launchrock.com/`) does not constitute verifiable evidence if it lacks names, contacts, or about pages linking back to the target individual.
- **Search Engine Limitations:** Standard HTML search engines like DuckDuckGo may throttle or block automated complex queries (e.g., those with multiple quoted phrases), requiring simpler keyword combinations or manual review.

## Improved Prompt Clause
"When primary source domains like LinkedIn block automated requests, document the failure and rely strictly on existing, confirmed repository sources or historical archives. Do not assume identity from unbranded landing pages."
