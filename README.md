# 🧠 JS Endpoint Recon

JS Endpoint Recon is a lightweight Node.js script that performs
basic frontend reconnaissance by extracting JavaScript files
and searching them for API endpoints.

---

## Overview

Modern web applications expose a lot of functionality
through client-side JavaScript.

This script helps identify:
- Loaded JavaScript files
- Hardcoded or referenced API endpoints
- Client-side exposure during recon

---

## What This Tool Does

- Fetches a target webpage
- Extracts linked `.js` files
- Downloads each JavaScript file
- Searches for `/api/` style endpoints
- Prints discovered endpoints

---

## Why This Is Useful

During reconnaissance:
- APIs are often exposed in frontend code
- Endpoints may not be documented
- Client-side leaks can lead to vulnerabilities

This tool helps you spot those quickly.

---

## Usage

Run the script using Node.js  
```bash
node js_recon.js <url>
