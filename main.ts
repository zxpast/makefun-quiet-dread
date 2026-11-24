// Two Days of Quiet Dread — u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018
// Writes one single-line code review comment that approves a pull request
// while carrying quiet existential dread, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, no network, fully deterministic: the same bytes
// come out on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: approval first, then the dread lands in the last words —
// the reviewer deleted the one comment that understood the file, and
// approved anyway. Flat tone, no exclamation, no explanation of the joke.
const ENTRY =
  "Approved. The diff is small, the tests pass, and the comment I deleted was the only one that understood this file.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate self-check (mirrors the competition gate): UTF-8, 1–140
// characters, not only whitespace, exactly one line. Fail loudly
// rather than ever writing an invalid entry.
const chars = [...ENTRY];
if (
  chars.length < 1 ||
  chars.length > 140 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry fails gate: ${chars.length} characters`);
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
