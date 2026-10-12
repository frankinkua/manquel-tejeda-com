import json
import sys
from urllib.parse import urlparse

def is_valid_url(url):
    if not isinstance(url, str):
        return False
    try:
        result = urlparse(url)
        return all([result.scheme in ['http', 'https'], result.netloc])
    except Exception:
        return False

def validate(catalog_path):
    try:
        with open(catalog_path, 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"File not found: {catalog_path}")
        return False
    except json.JSONDecodeError:
        print("Invalid JSON.")
        return False
    except Exception as e:
        print(f"Error reading file: {e}")
        return False

    if not isinstance(data, dict):
        print("Root must be a dictionary.")
        return False

    required_keys = ["schema_version", "generated_at", "subject", "search_queries", "items"]
    for key in required_keys:
        if key not in data:
            print(f"Missing required key in catalog: {key}")
            return False

    if data["schema_version"] != 1:
        print("Schema version must be 1.")
        return False

    if not isinstance(data["items"], list):
        print("items must be a list.")
        return False

    if not isinstance(data["search_queries"], list):
        print("search_queries must be a list.")
        return False

    item_required_keys = [
        "id", "type", "title", "source_url", "asset_url", "local_path", "person",
        "tags", "related_tags", "publisher", "date", "retrieved_at", "rights_status",
        "rights_evidence", "caption", "identity_evidence"
    ]

    seen_ids = set()

    for item in data["items"]:
        if not isinstance(item, dict):
            print("Each item must be a dictionary.")
            return False

        item_id = item.get('id')
        if not item_id or not isinstance(item_id, str):
            print("Item missing required string key: id")
            return False

        if item_id in seen_ids:
            print(f"Duplicate ID found: {item_id}")
            return False
        seen_ids.add(item_id)

        for key in item_required_keys:
            if key not in item:
                print(f"Item missing required key: {key} in item {item_id}")
                return False

        if not isinstance(item["title"], str):
            print(f"Item {item_id} title must be a string.")
            return False

        if not isinstance(item["tags"], list):
            print(f"Item {item_id} tags must be a list.")
            return False

        if not isinstance(item["related_tags"], list):
            print(f"Item {item_id} related_tags must be a list.")
            return False

        if item["local_path"] is not None:
            print(f"Item {item_id} local_path must be null for reference_only files.")
            return False

        source_url = item["source_url"]
        if source_url is None:
            print(f"Item {item_id} source_url cannot be null.")
            return False
        if not is_valid_url(source_url):
            print(f"Invalid source_url format in item {item_id}: {source_url}")
            return False

        asset_url = item["asset_url"]
        if asset_url is not None and not is_valid_url(asset_url):
            print(f"Invalid asset_url format in item {item_id}: {asset_url}")
            return False

    print(f"Validation passed for {catalog_path}.")
    return True

if __name__ == "__main__":
    catalog_file = sys.argv[1] if len(sys.argv) > 1 else "catalog.json"
    if validate(catalog_file):
        sys.exit(0)
    else:
        sys.exit(1)
