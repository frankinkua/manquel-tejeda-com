# Research Packet R19: Conference and Pitch Documents

## Review Table

| Findings | Count |
| :--- | :--- |
| References | 1 |
| Local Media | 0 |

## Findings

- Found the CONNECTpreneur March 2024 pitch program PDF (`bicp_2024_mar_2.pdf`) where Manquel Tejeda is explicitly listed on page 26 as "Co-Founder 1A Robotics".
- No other media, videos, or presentation decks could be identified linking Manquel Tejeda, 1A Robotics, and the CONNECTpreneur pitch event through public indexing or Wayback Machine captures of the CONNECTpreneur event pages.

## Proposed Website Uses

- A reference to the program can be used as evidence for his past role as a Co-Founder of 1A Robotics.

## Limitations

- The CONNECTpreneur virtual pitch videos or event pages for March 2024 do not appear to be publicly accessible, rendering it impossible to retrieve multimedia content.
- Video search for "1A Robotics", "Manquel Tejeda", and "CONNECTpreneur" on YouTube returned no results, indicating these pitches are either unlisted or not hosted there.

## Exact Validation Commands and Results

```sh
# Validate JSON structure and keys
python3 -c '
import json
with open("findings.json") as f:
  data = json.load(f)
assert data["schema_version"] == 1
assert len(data["items"]) == 1
print("findings.json structure OK")
'

# Run overall project validation
node --check site.js
node tests/site.test.cjs
```
Commands pass without issues and JSON schemas are valid.
