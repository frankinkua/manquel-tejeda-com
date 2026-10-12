# Media Research Packet: Manquel Tejeda Interviews and Talks

## Review Table

| Title | Type | Source | Supported Claim | Status |
| :--- | :--- | :--- | :--- | :--- |
| FOX 11 Los Angeles - KTTV Feature | video | LinkedIn | Hope Printer featured on FOX 11 | Reference only |
| Charla postgrado @uchile | video | Twitter/X | Postgrad talk on Green Tech | Reference only (needs human review) |
| Manquel Tejeda Int Vimeo | website | Vimeo | Profile existence | Reference only |

## Proposed Website Uses

- **FOX 11 Los Angeles Feature:** Can be added to the portfolio under the Hope Printer project section as a notable media appearance, linking directly to the LinkedIn video post.
- **UChile Postgraduate Talk:** Pending human review of the exact Twitter source, this can be listed as a speaking engagement under the entrepreneurship or education sections.

## Limitations

- **Source Access Blocks:** Automated retrieval from X (Twitter) and direct DuckDuckGo/YouTube searches resulted in anti-bot blocks (CAPTCHAs). The UChile talk was found via an indexed search snippet, but the direct media URL could not be resolved.
- **Video Scraping:** Vimeo profile was confirmed, but videos could not be enumerated via automated scripts.
- **Rights:** No explicitly open-licensed (CC-BY, Public Domain) videos were found. The results only provide reference links. No local media downloads were performed.

## Exact Validation Commands

- Run `jq . inbox/media/media-research-2026-10-12/r18/*.json` to ensure valid JSON schema.
- Run `node --test tests/site.test.cjs` to confirm core site functionality remains intact.
