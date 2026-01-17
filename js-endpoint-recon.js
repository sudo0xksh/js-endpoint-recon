/*
=========================================
JS Endpoint Recon
=========================================

Extracts JavaScript files from a webpage
and searches them for API endpoints.

Developed by sudo_0xksh
=========================================
*/

const url = process.argv[2];

if (!url) {
  console.log("Usage: node js_recon.js <url>");
  process.exit(1);
}

(async () => {
  const res = await fetch(url);
  const html = await res.text();

  const jsRegex = /src="([^"]+\.js)"/g;
  let jsFiles = [];
  let match;

  while ((match = jsRegex.exec(html)) !== null) {
    jsFiles.push(match[1]);
  }

  console.log("[+] JS Files found:", jsFiles);

  const endpointRegex = /\/api\/[a-zA-Z0-9/_-]+/g;

  for (let js of jsFiles) {
    let fullUrl = js.startsWith("http") ? js : url + js;

    try {
      let r = await fetch(fullUrl);
      let content = await r.text();

      let endpoints = content.match(endpointRegex);

      if (endpoints) {
        console.log("\n[+] Endpoints in", js);
        endpoints.forEach(e => console.log(" ", e));
      }
    } catch (e) {
      console.log("Failed to fetch", js);
    }
  }

  console.log("\n=========================================");
  console.log("Developed by sudo_0xksh");
  console.log("=========================================");
})();
