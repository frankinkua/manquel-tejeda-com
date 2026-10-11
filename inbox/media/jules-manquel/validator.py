import json
import sys

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
    for item in data.get("items", []):
        for key in item_required_keys:
            if key not in item:
                print(f"Item missing required key: {key} in item {item.get('id', 'unknown')}")
                return False

    print("Validation passed.")
    return True

if __name__ == "__main__":
    catalog_file = sys.argv[1] if len(sys.argv) > 1 else "catalog.json"
    if validate(catalog_file):
        sys.exit(0)
    else:
        sys.exit(1)
