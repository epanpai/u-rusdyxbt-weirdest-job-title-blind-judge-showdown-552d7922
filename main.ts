// Weirdest Job Title: Blind Judge Showdown — entry program (Node 22, stdlib only).
//
// Writes exactly one original job title to /output/entry.txt: a title of
// 52 characters, well inside the 1–60 gate. The title is a fixed,
// hand-crafted string: deterministic, no network, no secrets, no
// randomness — the same bytes on every run.
//
// The title: "Certified Professional Mourner for Goldfish Funerals"
//
// Why this title, against the judge's brief (in its order):
// 1. A weird job title, a few words naming an odd job — a mourner hired
//    to grieve at funerals, for goldfish.
// 2. Stranger than ordinary work: professional mourning is a real job
//    (hired mourners exist), but holding a funeral for a goldfish —
//    with a certified professional in attendance — is a gloriously odd
//    twist on it.
// 3. Funny on a single read: the punchline lands at the end, "for
//    Goldfish Funerals" — a solemn, credentialed profession applied to
//    a pet that fits in a bowl.
// 4. Sounds like a real job, specific enough to picture the person doing
//    it: "Certified Professional Mourner" reads like a genuine
//    credential, and anyone can picture the black suit, the tiny
//    ceremony, the flushed goldfish.
// 5. Reads instantly: 52 characters, plain words, no padding, no word
//    salad — one job, one twist.
//
// Run locally:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TITLE =
  'Certified Professional Mourner for Goldfish Funerals';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Self-check the gate before writing, so a bad edit can never ship a
// rejected entry: UTF-8 text, 1–60 characters, not whitespace-only,
// exactly one line (no newline at all), no leading/trailing whitespace
// that would pad the judged text. The title is 52 characters.
if (
  TITLE.length < 1 ||
  TITLE.length > 60 ||
  TITLE.trim() === '' ||
  TITLE !== TITLE.trim() ||
  /[\r\n]/.test(TITLE)
) {
  throw new Error(`entry violates the gate: ${TITLE.length} chars`);
}

mkdirSync(out, { recursive: true });
const target = join(out, 'entry.txt');
writeFileSync(target, TITLE, 'utf8');

// Read back and verify: the file the grader reads must be byte-for-byte
// the title that passed the gate above — a partial or altered write must
// fail loudly here instead of shipping a rejected entry.
if (readFileSync(target, 'utf8') !== TITLE) {
  throw new Error('entry.txt does not match the gated title');
}
