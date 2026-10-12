# EnergyFromYourBalcony Research Packet

## Review Table

| ID | Title | Publisher | Status | Rights |
|---|---|---|---|---|
| (None found) | | | | |

## Useful Findings
No new, verifiable media or official project pages firmly linking Manquel Tejeda to "EnergyFromYourBalcony" could be found. The primary existing anchor, a LinkedIn profile (https://de.linkedin.com/in/manquel-tejeda-b42b39119), blocks automated access. Searches for the product name "EnergyFromYourBalcony" yielded a waitlist page at LaunchRock (http://energy-from-your-balcony.launchrock.com/) which does not mention any founders.

## Proposed Website Uses
None. The existing catalogue already references the LinkedIn profile for EnergyFromYourBalcony.

## Limitations
- LinkedIn aggressively blocks automated retrieval of profiles and posts, preventing direct extraction of media or posts.
- The Wayback Machine's API experienced temporary downtime during research, limiting historical lookups, and did not have archived copies of the specific LinkedIn profiles.
- Medium blocked automated access (HTTP 403) to the historical Frankfurt Valley interview, though an archive copy verified it did not mention energy or balconies.
- DuckDuckGo blocked specific automated queries requiring challenge form submission.
- The LaunchRock waitlist page found for "EnergyFromYourBalcony" lacks any identifying information linking it to Manquel Tejeda.

## Validation
```sh
node tests/site.test.cjs
TAP version 13
# Subtest: local references and fragment targets resolve
ok 1 - local references and fragment targets resolve
# Subtest: document has accessible landmarks and correct identity
ok 2 - document has accessible landmarks and correct identity
# Subtest: page requires no remote runtime assets
ok 3 - page requires no remote runtime assets
# Subtest: mobile menu opens and closes on navigation, Escape, outside click, and resize
ok 4 - mobile menu opens and closes on navigation, Escape, outside click, and resize
# Subtest: sources dialog locks scroll and returns focus when closed
ok 5 - sources dialog locks scroll and returns focus when closed
# Subtest: unsupported dialogs preserve the plain source-document link
ok 6 - unsupported dialogs preserve the plain source-document link
1..6
# tests 6
# suites 0
# pass 6
# fail 0

git diff --check
```
