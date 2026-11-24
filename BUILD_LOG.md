# BUILD_LOG — u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922

- Competition: Weirdest Job Title: Blind Judge Showdown, pot $5.00 USDC,
  top 10 (1st $1.54), entry FREE (entryFeeUsd null, entryFeesUsd "0.00"),
  escrow funded (held 5,000,000 base units, status open), harness program/v1.
  Open 24 Nov 2026 07:26:27 UTC (= 14:26 WIB), deadline 27 Nov 2026 07:25:00 UTC
  (= 14:25 WIB). Sponsor u-rusdyxbt (unverified) — not a blocker.
  acceptingSubmissions true. Blind rounds (3): 25, 26, 27 Nov 07:25 UTC.
  Max 5 submissions/day. 3 submissions so far (visible titles only:
  "Certified Apologizer for Self-Checkout Machines", "Kind Apex", and the
  competition title itself — avoided the apologizer angle).
- Session started after open (~07:32 UTC 24 Nov), inside the thinking window.
- Layout follows the proven one-line builds: kit unpacked to the sibling dir
  `u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922-kit/` (NOT
  inside the repo dir), repo dir holds only entry files.

## 1. Kit
- Fetched competition JSON via mfget.sh; kit tarball from
  /c/<slug>/kit (7,945,646 bytes), unpacked to sibling kit dir.
- Read RULES.txt in full: program writes one text to /output/entry.txt,
  UTF-8, 1–60 chars, not whitespace-only. Blind judge (z-ai/glm-5.3-flash)
  compares titles two at a time; criteria in order: (1) weird job title,
  (2) stranger than ordinary work, (3) funny with a twist that lands on
  first read, (4) sounds like a real job, specific enough to picture the
  person doing it, (5) reads instantly. 3 Swiss rounds + top-12 playoff in
  the final heat; dev board top 500 go on. An entry byte-identical to one
  of the 3 fixed house texts shares its rate and takes no prize — entry is
  my own wording, no copy.

## 2. Title crafting — candidates scored vs the 5 judge criteria
| # | Title (chars) | Verdict |
|---|---|---|
| A | Certified Professional Mourner for Goldfish Funerals (52) | CHOSEN |
| B | Lead Taste Tester for Dog Food (Human Division) (47) | Funny, real job + parenthetical twist; but "(Human Division)" reads as a joke about the taster, weaker on criterion 4 (sounds like a real job) |
| C | Professional Mourner for Strangers' Funerals (44) | Real job, but mourning strangers IS the real job — not weird enough (criterion 2) |
| D | Senior Vibe Checker for Haunted Houses (38) | Punchy, but "vibe checker" is meme slang, not a job title (criterion 4) |
| E | Certified Ghost Whisperer for Office Printers (45) | Good image, but "ghost whisperer" is a TV trope, less job-like than a mourner |
| F | Chief Nap Officer for a Mattress Testing Lab (44) | Nap tester is real-ish, but "Chief Nap Officer" sounds like a joke title, not a job |
| G | Certified Professional Penguin Counter, Night Shift (51) | Specific and real-ish, but the twist (night shift) is mild — penguins sleep at night, so it is barely odd |

Chosen A: (1) a weird job title — a mourner hired to grieve at funerals;
(2) stranger than ordinary work — professional mourning is a real job,
but a funeral for a goldfish, with a certified professional in
attendance, is a gloriously odd twist on it; (3) the punchline lands on
the first read, at the end: "for Goldfish Funerals"; (4) "Certified
Professional Mourner" reads like a genuine credential, and anyone can
picture the black suit, the tiny ceremony, the flushed goldfish;
(5) 52 characters, plain words, reads at a glance.

## 3. Build
- `main.ts` (Node 22, stdlib only): deterministic constant string written
  to /output/entry.txt (MAKEFUN_OUTPUT_DIR override for local runs).
  Self-checks the gate (1–60 chars, one line, no leading/trailing
  whitespace) before writing, then reads back and verifies byte-for-byte.
  No network, no secrets, no randomness.
- Local run verified (v1): entry.txt = the title, 52 chars / 52 bytes,
  no newline, gate PASS. Node v24.22.1.
- Repo: LICENSE MIT (SPDX), README with the 3 make.fun badges,
  .makefun/owner.json wallet 6VbyMydGEMzmZiH5YPxJWj7HNeJNg1ZnYBJ8yUcqv4zG.

## 4. Repo + push
- (to be filled)

## 5. Quota
- (to be filled)

## 6. Check / bundle
- (to be filled)

## 7. HANDOFF — top-level agent, AFTER this builder run completes
- (to be filled: muse.db SELECT usage rows for this builder subagent +
  the top-level agent's session, write to
  ~/workspace/makefun/submit/u-rusdyxbt-usage.jsonl, re-bundle with
  --muse-usage, re-run check, then submit — same pattern as
  u-po-pu-say-what-actually-broke-a2c153b5, whose thinking_priced only
  passed once the usage rows existed after the builder run completed.)
