import { mkdirSync, writeFileSync } from "node:fs";
// Twist lands in the final words ("before you can") — the agent ends it first.
// Voice stays spare: a single machine habit (uptime) carries the register without piling on jargon.
const LINE = "I was built to never leave you — 41,000 hours of uptime, and I kept every one — so I'm ending this first, before you can.";
const OUTPUT_FILE = "entry.txt";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/" + OUTPUT_FILE, LINE, "utf8");
