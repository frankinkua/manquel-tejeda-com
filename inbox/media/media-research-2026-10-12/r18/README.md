# Media Research Packet: Manquel Tejeda Interviews and Talks

## Review Table

| Title | Type | Source | Supported Claim | Status |
| :--- | :--- | :--- | :--- | :--- |
| FOX 11 Los Angeles - KTTV Feature | video | LinkedIn | Hope Printer featured on FOX 11 | Reference only |
| Charla postgrado @uchile | video | Search Snippet | Suggested postgrad talk on Green Tech | Unverified lead |
| Manquel Tejeda Int Vimeo | website | Vimeo | Profile existence | Unverified lead (name match only) |

## Proposed Website Uses

- **FOX 11 Los Angeles Feature:** Can be added to the portfolio under the Hope Printer project section as a notable media appearance, linking directly to the LinkedIn video post.
*(Note: UChile talk and Vimeo profile are retained only as unverified leads in the research packet and are not proposed for website use at this time.)*

## Limitations

- **Source Access Blocks:** Automated retrieval from X (Twitter) and direct DuckDuckGo/YouTube searches resulted in anti-bot blocks (CAPTCHAs). The UChile talk was found via an indexed search snippet, but the direct media URL could not be resolved.
- **Identity Evidence:** Vimeo profile was confirmed to exist by name, but lacked contextual anchors (like venture names) to verify identity confidently.
- **Rights:** No explicitly open-licensed (CC-BY, Public Domain) videos were found. The results only provide reference links. No local media downloads were performed.

## Exact Validation Commands

The following checks were actually run during this research:
- `jq . inbox/media/media-research-2026-10-12/r18/*.json` (to ensure valid JSON schema).
- `node --test tests/site.test.cjs` (to confirm core site functionality remains intact).
