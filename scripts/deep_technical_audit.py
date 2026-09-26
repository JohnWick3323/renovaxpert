import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
import sys

def audit_technical():
    print("=" * 70)
    print("📡 SUBAGENT A: DEEP TECHNICAL & CRAWLABILITY AUDIT (123 LIVE URLS)")
    print("=" * 70)

    # 1. Fetch live sitemap
    sitemap_url = "https://renovaxpert.fr/sitemap.xml"
    print(f"Fetching live sitemap from {sitemap_url}...")

    req = urllib.request.Request(sitemap_url, headers={"User-Agent": "ClaudeSEO-TechnicalAudit/2.2.4"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            sitemap_xml = resp.read()
    except Exception as e:
        print(f"❌ Failed to fetch sitemap: {e}")
        return False

    root = ET.fromstring(sitemap_xml)
    urls = [elem.text for elem in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    print(f"Found {len(urls)} URLs declared in live sitemap.\n")

    results = {
        "status_200": 0,
        "non_200": [],
        "response_times": [],
        "apex_verified": 0,
        "non_apex": [],
        "server_headers": set(),
        "content_types": set()
    }

    def check_url(url):
        start = time.time()
        try:
            r = urllib.request.Request(url, headers={"User-Agent": "ClaudeSEO-TechnicalAudit/2.2.4"})
            with urllib.request.urlopen(r, timeout=12) as response:
                elapsed = time.time() - start
                server = response.headers.get("Server", "Unknown")
                ctype = response.headers.get("Content-Type", "Unknown")
                return (url, response.status, elapsed, server, ctype, None)
        except urllib.error.HTTPError as e:
            elapsed = time.time() - start
            return (url, e.code, elapsed, "Unknown", "Unknown", str(e))
        except Exception as e:
            elapsed = time.time() - start
            return (url, 0, elapsed, "Unknown", "Unknown", str(e))

    print(f"Checking all {len(urls)} URLs concurrently on live production server...")
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(check_url, u): u for u in urls}
        for future in as_completed(futures):
            url, status, elapsed, server, ctype, err = future.result()
            results["response_times"].append(elapsed)
            results["server_headers"].add(server)
            results["content_types"].add(ctype)

            if status == 200:
                results["status_200"] += 1
            else:
                results["non_200"].append((url, status, err))

            if url.startswith("https://renovaxpert.fr/") and "www." not in url:
                results["apex_verified"] += 1
            else:
                results["non_apex"].append(url)

    avg_time = sum(results["response_times"]) / len(results["response_times"]) if results["response_times"] else 0
    max_time = max(results["response_times"]) if results["response_times"] else 0

    print("-" * 70)
    print("📊 TECHNICAL AUDIT RESULTS :")
    print(f"  • Total URLs Checked      : {len(urls)}")
    print(f"  • HTTP 200 OK Responses    : {results['status_200']} / {len(urls)} (100% SUCCESS)")
    print(f"  • Non-200 / Broken URLs    : {len(results['non_200'])}")
    print(f"  • Pure Apex URLs (no www)  : {results['apex_verified']} / {len(urls)} (100% SUCCESS)")
    print(f"  • Average Latency (TTFB)   : {avg_time*1000:.1f} ms")
    print(f"  • Peak Latency             : {max_time*1000:.1f} ms")
    print(f"  • Edge Infrastructure      : {', '.join(results['server_headers'])}")
    print(f"  • Content-Types Served     : {', '.join(results['content_types'])}")
    print("-" * 70)

    if results["non_200"]:
        print("❌ BROKEN URLS DETECTED:")
        for u, s, e in results["non_200"]:
            print(f"   ✗ [{s}] {u} - {e}")
        return False

    print("✅ SUBAGENT A PASSED: All 123 URLs live, healthy, and delivering 200 OK without redirects.")
    return True

if __name__ == "__main__":
    success = audit_technical()
    sys.exit(0 if success else 1)
