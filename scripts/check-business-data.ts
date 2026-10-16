/**
 * AUTOMATED REGRESSION GUARD: CHECK BUSINESS DATA
 * Master Prompt 2 (Section 2.6)
 * Fails the build if hardcoded address or phone strings exist outside of business.ts
 */

import fs from "fs";
import path from "path";
import { BUSINESS } from "../src/content/business";

const FORBIDDEN_WORDS = ["Mahalaxmi", "Jacob Circle", "Waterfield", "Bandra"];
const SUSPECT_STREET_WORDS = ["Joshi", "Deepak", "Parel"];

let errorsFound = 0;

if (!BUSINESS.verified && process.env.NODE_ENV === "production" && !process.env.ALLOW_PLACEHOLDERS) {
  console.error("❌ BUILD FAILURE: BUSINESS.verified is false in production.");
  errorsFound++;
}

function scanDirectory(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (
      entry.name === "node_modules" ||
      entry.name === ".next" ||
      entry.name === ".git" ||
      entry.name === "business.ts" ||
      entry.name === "check-business-data.ts" ||
      entry.name === "address-audit.md" ||
      entry.name === "resolve-maps.mjs" ||
      entry.name === "audit-raw.json"
    ) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (
      entry.name.endsWith(".tsx") ||
      entry.name.endsWith(".ts")
    ) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const lines = content.split("\n");

      lines.forEach((line, lineNum) => {
        // Skip comment lines
        const trimmed = line.trim();
        if (trimmed.startsWith("//") || trimmed.startsWith("*")) return;

        // Check for forbidden legacy cities/areas
        for (const word of FORBIDDEN_WORDS) {
          if (line.includes(word)) {
            console.error(
              `❌ FORBIDDEN ADDRESS STRING in ${path.relative(process.cwd(), fullPath)}:${lineNum + 1}: Found '${word}'`
            );
            errorsFound++;
          }
        }

        // Check for hardcoded phone links not reading from BUSINESS
        if (line.includes("href=\"tel:") && !line.includes("BUSINESS.phone") && !line.includes("${BUSINESS.phone") && !line.includes("${BUSINESS.phoneRaw}")) {
          console.error(
            `❌ HARDCODED TEL LINK in ${path.relative(process.cwd(), fullPath)}:${lineNum + 1}: Phone must read from BUSINESS.phone`
          );
          errorsFound++;
        }
      });
    }
  }
}

console.log("🔍 Running automated business data audit...");
scanDirectory(path.join(process.cwd(), "src"));

if (errorsFound > 0) {
  console.error(`\n🚨 Business data validation failed with ${errorsFound} error(s).`);
  process.exit(1);
} else {
  console.log("✅ Business data validation passed: Single source of truth respected.\n");
  process.exit(0);
}
