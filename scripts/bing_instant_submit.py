#!/usr/bin/env python3
"""
Bing Webmaster Tools Instant URL Submitter for RenovaXpert
Submits priority URLs to Bing Webmaster Tools API for instant indexing.
Powers Bing Search, Microsoft Copilot, and ChatGPT Search.
"""

import urllib.request
import json
import xml.etree.ElementTree as ET
import sys

BING_API_KEY = "6d595f0913e545e19c7f8e13bc53f361"
SITE_URL = "https://renovaxpert.fr/"
SITEMAP_URL = "https://renovaxpert.fr/sitemap.xml"

def get_submission_quota():
    url = f"https://ssl.bing.com/webmaster/api.svc/json/GetUrlSubmissionQuota?siteUrl={SITE_URL}&apikey={BING_API_KEY}"
    req = urllib.request.Request(url, headers={"Content-Type": "application/json; charset=utf-8"})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
            return data.get("d", {})
    except Exception as e:
        print(f"Error fetching quota: {e}")
        return {}

def submit_urls(url_list):
    if not url_list:
        print("No URLs to submit.")
        return False
    payload = {
        "siteUrl": SITE_URL,
        "urlList": url_list
    }
    api_url = f"https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey={BING_API_KEY}"
    req = urllib.request.Request(
        api_url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json; charset=utf-8"}
    )
    try:
        with urllib.request.urlopen(req) as resp:
            if resp.status == 200:
                print(f"✅ Successfully submitted {len(url_list)} URLs to Bing Instant Indexer.")
                return True
    except urllib.error.HTTPError as e:
        print(f"❌ Bing API HTTPError {e.code}: {e.read().decode()}")
    except Exception as e:
        print(f"❌ Error submitting URLs: {e}")
    return False

def main():
    print("=" * 60)
    print("📡 BING WEBMASTER TOOLS INSTANT INDEXING")
    print("=" * 60)
    quota = get_submission_quota()
    daily_quota = quota.get("DailyQuota", 0)
    monthly_quota = quota.get("MonthlyQuota", 0)
    print(f"Daily Quota Remaining  : {daily_quota}")
    print(f"Monthly Quota Remaining: {monthly_quota}")

    if daily_quota <= 0:
        print("ℹ️ Daily quota exhausted for today. Try again tomorrow.")
        return

    # Fetch sitemap
    req = urllib.request.Request(SITEMAP_URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req) as resp:
        xml_content = resp.read()
    root = ET.fromstring(xml_content)
    all_urls = [elem.text for elem in root.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]

    to_submit = all_urls[:daily_quota]
    submit_urls(to_submit)

if __name__ == "__main__":
    main()
