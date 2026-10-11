import json
import sys
import re

def validate(catalog_path):
    with open(catalog_path, 'r') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError:
            print("Invalid JSON.")
            return False

    required_keys = ["schema_version", "generated_at", "subject", "search_queries", "items"]
    for key in required_keys:
        if key not in data:
            print(f"Missing required key in catalog: {key}")
            return False

    if data["schema_version"] != 1:
        print("Schema version must be 1.")
        return False

    item_required_keys = [
        "id", "type", "title", "source_url", "asset_url", "local_path", "person",
        "tags", "related_tags", "publisher", "date", "retrieved_at", "rights_status",
        "rights_evidence", "caption", "identity_evidence"
    ]

    seen_ids = set()
    url_pattern = re.compile(r'^https?://')

    for item in data.get("items", []):
        item_id = item.get('id')
        if not item_id:
            print("Item missing required key: id")
            return False

        if item_id in seen_ids:
            print(f"Duplicate ID found: {item_id}")
            return False
        seen_ids.add(item_id)

        for key in item_required_keys:
            if key not in item:
                print(f"Item missing required key: {key} in item {item_id}")
                return False

        if item["rights_status"] == "reference_only" and item["local_path"] is not None:
            print(f"Item {item_id} has rights_status 'reference_only' but local_path is not null.")
            return False

        source_url = item.get("source_url")
        if source_url and not url_pattern.match(source_url):
            print(f"Invalid source_url format in item {item_id}: {source_url}")
            return False

        asset_url = item.get("asset_url")
        if asset_url and not url_pattern.match(asset_url):
            print(f"Invalid asset_url format in item {item_id}: {asset_url}")
            return False

    print("Validation passed.")
    return True

if __name__ == "__main__":
    catalog_file = sys.argv[1] if len(sys.argv) > 1 else "catalog.json"
    if validate(catalog_file):
        sys.exit(0)
    else:
        sys.exit(1)
