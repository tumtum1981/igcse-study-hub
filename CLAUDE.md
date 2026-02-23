# Claude Instructions for this Project

## SESSION START REMINDER
At the start of each new session, briefly remind the user of their commands:

**Commands:** `update passover` | `refresh website block` | `rewrite page from source` | `add tests for block` | `add explanations for block` | `fix test balance`

---

## Commands

### "update passover"
When the user says "update passover", add any new development notes or changes to:
```
C:\Users\jbenw\homeschool\igcse-study-hub\docs\passover.md
```
This file contains the project documentation and development log for the IGCSE Study Hub website.

**Dev log archiving:** When the Development Log in passover.md exceeds 15 sessions, move the oldest sessions to `docs/changelog.md` and keep only the last 10 sessions in passover. Add a note at the top of the log: "Earlier sessions archived in `docs/changelog.md`."

### "refresh website block"
When the user says "refresh website block":

```
Flow: Steps 1-5 always run → Step 6 per-page prompt (tests)
      → Step 7 block-complete only (syllabus gaps)
      → Step 8 optional (audit)
```

**Step 1: Scan for new content**
1. Scan `C:\Users\jbenw\homeschool\website-resources\` for all PowerPoint (.pptx, .ppt) and PDF (.pdf) files
2. Compare against existing HTML pages in `C:\Users\jbenw\homeschool\igcse-study-hub\subjects\`
3. Identify NEW blocks or topics that don't have corresponding HTML pages

**Step 2: Create new pages**
1. Create new block folders if needed (e.g., `block-3`, `block-4`)
2. Create block index.html for new blocks
3. Create content pages ONLY for documents that don't already have corresponding HTML pages
4. Do NOT modify or regenerate existing pages

**Step 3: Update all affected navigation and indexes**
1. Update the relevant block index.html files to include links to new pages
2. Update subject index.html files if new blocks were added
3. **IMPORTANT: Update the main homepage** (`igcse-study-hub/index.html`) - update block counts for each subject

> Note: This command is for content pages only. Tests are added separately using the "add tests for block" command.
> Each new content page must include **5 IGCSE practice questions** (click-to-reveal). Most older pages have 3-4; new pages must have 5.

**Step 4: Update study tools**
1. **Update Search Index** (`igcse-study-hub/js/search-index.js`):
   - Add entries for each new page
   - Format: `{ title, subject, block, code, url, keywords: [], excerpt }`
   - Include relevant keywords for searchability
2. **Update Formula Reference** (`igcse-study-hub/formulas.html`) - **MANDATORY** for any new formulas:
   - Add any new formulas introduced in the new content
   - Include equation, variable definitions, units, and link to topic page
   - This is not optional - every formula in new content must appear in the formula sheet

**Step 5: Update documentation and verify**
1. Update the passover document with what was added
2. Include: new page count, list of new pages, version bump
3. Run through the **Stale Data Checklist** (below) to confirm nothing was missed

**Step 6: Prompt for tests**
- After creating each new content page, ask: "Do you want me to create MCQ tests for [page name]? (2 topic tests minimum)"
- When tests are created, also add "Test Your Knowledge" links on the content page, update the block test index, and update the tests hub card count
- Only prompt for summary tests when lesson 5 (the final lesson in a block) is being added: "This completes the block. Do you want me to create summary tests? (3 summary MCQ tests + 1 exam-style summary test minimum)"
- The exam-style summary test (`exam-summary.html` or `exam-block.html`) should use exam-style questions covering the whole block - harder, more application-based questions
- Ensure each new content page has 5 IGCSE practice questions (click-to-reveal) as part of the page creation itself

**Step 7: Prompt for syllabus gap check** (only when lesson 5 completes a block)
- After summary tests are generated, ask: "Should we check for additional content from the IGCSE syllabus that may be missing from the lesson material?"
- If yes: review the syllabus objectives for that block, identify any topics not covered by the 5 lessons, and create an Extra Learning page (like `extra-learning.html` / B2.EL pattern) for the missing content

**Step 8: Offer audit**
- After all pages are created and committed, ask: "Would you like me to run an audit?"
- The audit checks (always performed):
  - All internal links are valid (nav chains, test links, block indexes, breadcrumbs)
  - Formula page includes all formulas referenced in new content
  - Test hub card counts match actual file counts
  - Search index covers all content pages
  - `verify.js` passes
- Optional (prompted separately): "Would you also like me to cross-reference the new pages against their source slides?"
  - If yes: extract source PPTX/PDF content and compare against the generated HTML
  - Check for: missing content from slides, fabricated content, example substitutions

### "rewrite page from source"
When the user says "rewrite page from source":

**Step 1: Identify the page and source**
1. Ask which page needs rewriting (or infer from context)
2. Look up the source file in the Source Mapping table in `docs/passover.md`
3. If no mapping exists, ask the user which source file to use

**Step 2: Extract and compare**
1. Read the source PPTX/PDF content
2. Read the existing HTML page
3. Produce a comparison summary: what the page currently says vs what the source says
4. Flag: missing content, fabricated content, example substitutions, outdated info

**Step 3: Rewrite**
1. Rewrite the page to match the source material faithfully
2. Preserve any supplementary content (not in the source) by moving it to the block's `extra-learning.html` page
3. Keep the same filename and topic code
4. Include 5 IGCSE practice questions based on the source content
5. Maintain the standard bottom section order (Quiz > Confidence > Test Links > Navigation)

**Step 4: Update affected references**
1. Update block index if the page title changed
2. Update search index entry
3. Update formulas.html if formulas changed
4. Update passover with what was changed

**Step 5: Commit and push**

### "add tests for block"
When the user says "add tests for block":

**Step 1: Identify the block**
1. Ask which subject and block needs tests (or infer from context)
2. Check what content pages exist in `subjects/[subject]/block-[n]/`
3. Check if `tests/[subject]/block-[n]/` already exists and what tests are there

**Step 2: Determine test allocation**
- Minimum per content page: 2 topic MCQ tests (20 questions each)
- Minimum 3 summary tests per block
- These are minimums - user may request more (e.g. 3 per topic, 5 summary)

**Step 3: Create test files**
1. Create directory `tests/[subject]/block-[n]/` if needed
2. Create test HTML files following Test File Standards (below)
3. Set up navigation chain through all tests in the block

**Step 4: Create or update block test index**
1. Create `tests/[subject]/block-[n]/index.html` listing all tests by topic
2. Match existing index style for that subject (test-grid or test-list)

**Step 5: Update tests hub and content pages**
1. Add/update card on `tests/index.html` with correct file count
2. Add "Test Your Knowledge" links on each relevant content page

**Step 6: Verify**
1. All files have exactly 20 questions with balanced answers (5A/5B/5C/5D)
2. Nav chain is unbroken (every prev/next matches)
3. Block index lists every test file
4. Hub card count matches actual file count

**Step 7: Update documentation and commit**
1. Update passover with new test counts and listings
2. Run through the **Stale Data Checklist** (below) to confirm nothing was missed
3. Commit and push

### "add explanations for block"
When the user says "add explanations for block":

**Step 1: Identify the block**
1. Ask which subject and block (or infer from context)
2. List all test files in `tests/[subject]/block-[n]/`
3. Check which tests already have `data-explanation` attributes and which don't

**Step 2: Add explanations**
1. For each test file missing explanations, add `data-explanation` attributes to every question `<div>`
2. Each explanation should briefly explain why the correct answer is right
3. Work through one test file at a time, committing progress periodically

**Step 3: Verify and commit**
1. Confirm all questions in the block now have `data-explanation` attributes
2. Update passover with the change (e.g. "Added explanations to Biology Block 1 - 460 questions")
3. Commit and push

### "fix test balance"
When the user says "fix test balance":

**Step 1: Identify imbalanced tests**
1. Run `verify.js` or check the most recent output for answer balance warnings
2. List the affected test files

**Step 2: Rebalance answers**
1. For each flagged test, adjust answer assignments so the balance is exactly 5A/5B/5C/5D
2. Change the answer letter on 1-2 questions (swap the correct answer position), updating the question options to match
3. Do NOT change the actual content/meaning of questions - only which letter the correct answer is assigned to

**Step 3: Verify and commit**
1. Run `verify.js` to confirm all warnings are resolved
2. Commit and push

---

**Stale Data Checklist** (verify these after ANY content or test change - nothing should be missed):

*When adding content pages:*
- `igcse-study-hub/index.html` - Subject card block counts
- `igcse-study-hub/subjects/[subject]/index.html` - Block list
- `igcse-study-hub/js/search-index.js` - Search index entries for new pages
- `igcse-study-hub/formulas.html` - Any new formulas from new content
- Content page "Test Your Knowledge" section - Link to relevant tests if they exist

*When adding tests:*
- `igcse-study-hub/tests/[subject]/block-[n]/index.html` - Must list ALL test files in that directory (including exam-*.html files)
- `igcse-study-hub/tests/index.html` - Card count (`test-card__meta`) must match actual number of test HTML files (excluding index.html)
- **Navigation chain** - Every test must have correct prev/next links forming a complete chain through all tests in the block
- **CSS classes** - Use `topic-nav-link topic-nav-link--prev/--next` with `topic-nav-label` and `topic-nav-title` child spans (NOT `topic-nav__link` or `topic-nav__prev`)
- Content pages (`subjects/[subject]/block-[n]/`) - Add/update "Test Your Knowledge" quick test links on relevant topic pages

*Always update:*
- `docs/passover.md` - Page counts, test counts, structure diagram, test listings

*Content page bottom section order (mandatory):*
1. IGCSE Practice Questions (`<section class="quiz-section">`)
2. Confidence Rating (`<div class="confidence-rating">`)
3. Test Your Knowledge (`<div class="test-links">`) - only if tests exist for that topic
4. Topic Navigation (`<nav class="topic-navigation">`)

*After any content or test changes:*
- Commit all changes to git and push to GitHub so the live site stays up to date

### Content Page Standards
- 5 IGCSE practice questions per page (click-to-reveal, `<section class="quiz-section">`)
- Bottom section order: Quiz > Confidence Rating > Test Links (if tests exist) > Topic Navigation
- Breadcrumbs and prev/next topic navigation on every page
- SVG diagrams where appropriate:
  - Use inline `<svg>` (not external files) for theme compatibility
  - Use `currentColor` for strokes/text so diagrams adapt to themes
  - Add `aria-labelledby` with a descriptive `<title>` for accessibility
  - Use `class="diagram-label"` for text labels within diagrams
  - Print-friendly: diagrams should render in black and white

### Test File Standards
- 20 MCQs per test, balanced answers (5A, 5B, 5C, 5D)
- Naming: `[topic]-test-[n].html` for topic tests, `summary-test-[n].html` for summary, `exam-[topic].html` for exam-style
- Path: `tests/[subject]/block-[n]/` (CSS/JS paths use `../../../`)
- Nav chain order: topic1-test-1 → ... → topic1-test-N → topic2-test-1 → ... → summary-test-N → back to index.html
- Minimum: 2 topic MCQ tests per content page. When block is complete: 3 summary MCQ tests + 1 exam-style summary test per block
- The exam-style summary test uses harder, application-based questions covering the whole block
- Note: existing per-topic `exam-*.html` files in some blocks are legacy; going forward exam-style tests are block-level only
- Required scripts: `main.js`, `test.js`, `supabase-config.js`, `progress.js`, `auth.js`
- FOUC prevention: `<style>html{visibility:hidden;opacity:0}</style>` + `theme-preload.js`
- Two index styles exist: `test-grid` with cards (newer) and `test-list` with simple links (older) - match the existing style for that block
- All new tests MUST include `data-explanation` attributes on every question `<div>`
- Explanations appear inline under wrong answers after submission
- Format: `data-explanation="Brief explanation of why the correct answer is right"`
- Existing tests without explanations continue to work (graceful degradation)

---

## Project Context
- Main website: `C:\Users\jbenw\homeschool\igcse-study-hub\`
- Source materials: `C:\Users\jbenw\homeschool\website-resources\`
- Passover & docs: `C:\Users\jbenw\homeschool\igcse-study-hub\docs\`

> Note: This file is kept both at the repo root (`igcse-study-hub/CLAUDE.md`) for version control
> and at the parent directory (`homeschool/CLAUDE.md`) for Claude Code to find. Keep both in sync.
> `verify.js` Check 7 will flag an error if they differ.

## Current Content
See `docs/passover.md` for current page counts, test counts, and content listings. That file is the source of truth for what exists.

## Version Convention
The version number lives in `docs/passover.md` (the "Current Status" line at the top).
- **Bump minor version** (e.g. v1.18 → v1.19) for each session that adds content, tests, or features
- **Bump major version** (e.g. v1.x → v2.0) for architectural changes (new subject, new JS system, redesign)
- Always update the version in the passover "Current Status" line and note it in the session's dev log entry

## User Preferences
- Ignore .txt files in website-resources
- Undertale-style theme (can be changed later)
- IGCSE exam-style questions with hidden answers
