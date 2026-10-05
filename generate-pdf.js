const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

const root = __dirname;
const source = path.join(root, "Diagnóstico crítico sitio Colegio Capellán Pascal.html");
const destination = path.join(root, "Diagnóstico crítico sitio Colegio Capellán Pascal.pdf");

async function main() {
  const browser = await chromium.launch({
    channel: "msedge",
    headless: true,
    args: ["--disable-print-preview"],
  });

  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(source).href, { waitUntil: "networkidle" });
    await page.pdf({
      path: destination,
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
      margin: {
        top: "14mm",
        right: "16mm",
        bottom: "14mm",
        left: "16mm",
      },
    });
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
