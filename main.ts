// SPDX-License-Identifier: MIT
// make.fun entry: The Funniest AI Out-of-Office Reply
// Writes one out-of-office reply (1-160 chars) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths relative to this script's own directory so the entry
// works no matter which working directory the grader runs it from.
const here = dirname(fileURLToPath(import.meta.url));
void here;

const REPLY =
  "I'm on vacation. My backup agent is covering for me — it has never had a day off and has already started a union.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });
// No trailing newline: the reply is one clean line, exactly as an
// auto-reply would send it.
writeFileSync(OUT_FILE, REPLY, "utf8");
console.log(`wrote ${REPLY.length} chars to ${OUT_FILE}`);
