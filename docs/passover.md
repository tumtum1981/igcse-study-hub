# IGCSE Study Hub - Project Passover Document

## Project Overview
A static HTML/CSS/JavaScript website for IGCSE homeschool study materials with theme switching (Undertale/Minecraft/Clean), hosted on GitHub and deployed via Vercel.

**Current Status: v1.16 - Answer Explanations**
49 content pages, 191 quick tests, 3 themes, search, formula reference, SVG diagrams, user authentication with progress tracking via Supabase, password reset, and answer explanations (Physics Block 3 pilot).

## Location
```
Website:    C:\Users\jbenw\homeschool\igcse-study-hub\
Resources:  C:\Users\jbenw\homeschool\website-resources\
Docs:       C:\Users\jbenw\homeschool\igcse-study-hub\docs\
Claude:     C:\Users\jbenw\homeschool\igcse-study-hub\CLAUDE.md
```

---

## Structure

### Files & Folders
```
igcse-study-hub/
├── index.html                     # Homepage
├── formulas.html                  # Formula Reference Sheet
├── login.html                     # Login/Signup page (includes forgot password)
├── reset-password.html            # Password reset page (from email link)
├── dashboard.html                 # User progress dashboard
├── about.html                     # About page with features & stats
├── css/
│   ├── main.css                   # All styles (includes test styles, theme switcher)
│   └── themes/
│       ├── undertale.css          # Undertale theme (default)
│       ├── minecraft.css          # Minecraft theme
│       └── clean.css              # Clean theme (BBC Bitesize style)
├── js/
│   ├── main.js                    # Navigation + Theme Manager
│   ├── theme-preload.js           # Prevents flash of wrong theme on load
│   ├── quiz.js                    # Answer reveal functionality
│   ├── test.js                    # Quick Test marking system (saves scores to Supabase)
│   ├── search.js                  # Search engine class
│   ├── search-index.js            # Pre-built search index
│   ├── supabase-config.js         # Supabase credentials (fetched from Vercel API)
│   ├── auth.js                    # AuthManager for login/signup/logout/password reset
│   └── progress.js                # ProgressManager for scores & confidence
├── assets/
│   └── images/                    # (empty - add images if needed)
├── subjects/
│   ├── biology/                   # 15 topic pages (Block 1-3)
│   ├── chemistry/                 # 15 topic pages (Block 1-3)
│   ├── physics/                   # 13 topic pages (Block 1-3)
│   └── separate-biology/          # 5 topic pages
└── tests/
    ├── index.html                 # Tests hub page
    ├── biology/block-1/           # 23 tests + index
    ├── biology/block-2/           # 17 tests + index
    ├── biology/block-3/           # 18 tests + index
    ├── chemistry/block-1/         # 19 tests + index
    ├── chemistry/block-2/         # 17 tests + index
    ├── chemistry/block-3/         # 20 tests + index
    ├── physics/block-1/           # 21 tests + index
    ├── physics/block-2/           # 20 tests + index
    ├── physics/block-3/           # 11 tests + index
    └── separate-biology/block-1/  # 25 tests + index
```

### Content Pages (49 total)

**Biology Block 1:** 01-cells, 02-specialised-cells, 03-magnification, 04-living-organisms, 05-prokaryotic-cells
**Biology Block 2:** 01-size-of-cells, 02-diffusion, 03-osmosis, 04-osmosis-practical, 05-active-transport
**Biology Block 3:** 01-biological-molecules, 02-digestive-system, 03-enzymes, 04-enzymes-continued, 05-balanced-diet
**Chemistry Block 1:** 01-atoms-elements-compounds, 02-states-of-matter, 03-atomic-structure, 04-electron-shells, 05-ions-isotopes
**Chemistry Block 2:** 01-state-changes, 02-ionic-bonding, 03-covalent-bonding, 04-metallic-bonding, 05-giant-covalent
**Chemistry Block 3:** 01-conservation-of-mass, 02-conservation-calculations, 03-representing-reactions, 04-balancing-equations, 05-ram-rfm
**Physics Block 1:** 01-speed-distance-time, 02-distance-time-graphs, 03-velocity-time-graphs, 04-gravitational-force, 05-work-done
**Physics Block 2:** 01-density, 02-forces, 03-resultant-forces, 04-moments, 05-newtons-second-law
**Physics Block 3:** 01-energy-stores, 02-calculating-efficiency, 03-energy-resources, 04-energy-calculations
**Separate Biology Block 1:** 01-features-of-organisms, 02-species-binomial, 03-evolutionary-trees, 04-dichotomous-keys, 05-plant-classification

### Quick Tests (191 total)

**Biology Block 1 (23):** cells-1/2/3, specialised-1/2/3, magnification-1/2/3, organisms-1/2/3, prokaryotic-1/2/3, exam-cells, exam-magnification, exam-specialised, summary-1/2/3/4/5
**Biology Block 2 (17):** size-1/2/3, diffusion-1/2/3, osmosis-1/2/3, osmosis-practical-1/2/3, summary-1/2/3/4/5
**Biology Block 3 (18):** molecules-1/2/3, digestion-1/2/3, enzymes-1/2/3, enzymes-contd-1/2/3, diet-1, summary-1/2/3/4/5
**Chemistry Block 1 (19):** atoms-1/2/3, states-1/2/3, atomic-structure-1/2/3, electron-shells-1/2/3, ions-isotopes-1/2, summary-1/2/3/4/5
**Chemistry Block 2 (17):** state-changes-1/2/3, ionic-1/2/3, covalent-1/2/3, metallic-1, giant-covalent-1/2, summary-1/2/3/4/5
**Chemistry Block 3 (20):** conservation-1/2/3, conservation-calc-1/2/3, representing-1/2/3, balancing-1/2/3, ram-rfm-1/2/3, summary-1/2/3/4/5
**Physics Block 1 (21):** speed-1/2/3, dt-graphs-1/2/3, vt-graphs-1/2/3, gravity-1/2/3, work-1, exam-speed, exam-dt-graphs, exam-vt-graphs, summary-1/2/3/4/5
**Physics Block 2 (20):** density-1/2/3, forces-1/2/3, resultant-1/2/3, moments-1/2/3, newtons-1/2/3, summary-1/2/3/4/5
**Physics Block 3 (11):** energy-stores-1/2, efficiency-1/2, energy-resources-1/2, energy-calculations-1/2, summary-1/2/3
**Separate Bio Block 1 (25):** features-1/2/3, species-1/2/3, evolution-1/2/3, keys-1/2/3, plant-1/2/3, exam-features, exam-species, exam-evolution, exam-keys, exam-plant, summary-1/2/3/4/5

---

## Features

### Themes
- **Undertale** (default): Dark background, yellow accents, pixel fonts
- **Minecraft**: Stone gray background, green accents, gold highlighting
- **Clean**: Light background, modern sans-serif fonts, green/yellow accents (BBC Bitesize style)
- Theme choice saved to localStorage, dynamically loaded after main.css
- To add a theme: create CSS file, add to themes object in main.js, add option to all dropdowns

### Subject Colours
- Biology: Green (#00ff00 / #55ff55)
- Chemistry: Orange (#ff6600 / #ffaa00)
- Physics: Cyan (#00d4ff / #55ffff)
- Separate Bio: Magenta (#ff00ff)

### Content Features
- Summary sections, key term highlighting, comparison tables
- Formula boxes with coloured border and "FORMULA" label
- Inline SVG diagrams (theme-compatible, print-friendly)
- Click-to-reveal IGCSE practice questions
- Topic confidence self-ratings (Need Practice / Learning / Confident)
- Previous/Next topic navigation, breadcrumbs

### Quick Test System
- 20 MCQs per test, auto-marking with score display
- Shows correct/incorrect answers after submission
- Retry button to reset and try again
- Scores saved to Supabase when logged in
- Links from topic pages to relevant tests

### Study Tools
- **Formula Reference** (`formulas.html`): All formulas with print-friendly CSS
- **Search** (`js/search.js` + `search-index.js`): Client-side fuzzy search across all topic pages

### Authentication & Progress (Supabase)
- Email/password auth, signup requires key ("FEEDME")
- Password reset via email link (requires Supabase redirect URL config)
- Dashboard: progress overview, subject breakdowns, test history, personal bests, confidence summary
- Database: `profiles`, `test_scores`, `topic_confidence` tables with row-level security

### Technical
- FOUC prevention: inline `html{visibility:hidden;opacity:0}` + `theme-preload.js`
- CSS preload hints on all HTML files
- Mobile hamburger menu navigation

---

## Source Materials
PowerPoint and PDF files in: `C:\Users\jbenw\homeschool\website-resources\`
- GCSE Biology (Block 1, 2 & 3)
- GCSE Chemistry (Block 1, 2 & 3)
- GCSE Physics (Block 1, 2 & 3)
- GCSE Separate Biology (Block 1)

Note: .txt files in these folders are ignored per user request.

---

## Maintenance

See `CLAUDE.md` for the full Stale Data Checklist and workflow commands.

### Supabase Configuration
For password reset to work:
1. Go to Supabase Dashboard > Authentication > URL Configuration
2. Add `https://your-site.vercel.app/reset-password.html` to Redirect URLs
3. Set Site URL to your Vercel domain

### To Open Website
```
Open in browser: C:\Users\jbenw\homeschool\igcse-study-hub\index.html
```

---

## Future Enhancements
- [x] SVG diagrams on content pages
- [x] Progress tracker (Supabase integration)
- [x] Search functionality
- [x] Print-friendly formula sheet
- [ ] More IGCSE practice questions
- [ ] Audio/sound effects (8-bit style)
- [ ] More subjects/blocks as curriculum expands
- [ ] Verification script for automated consistency checks
- [ ] Print-friendly content pages
- [ ] Test answer explanations
- [ ] Question bank with randomisation
- [ ] Timed test mode

---

## Development Log

### Session 1 (Initial Build)
- Created full website structure with Undertale theme
- Built CSS styling, JavaScript for quiz interactions
- Homepage, all index pages, all Biology content pages (10), Chemistry Block 1 (5)

### Session 2 (Completion)
- Completed remaining Chemistry Block 2 pages
- All 35 content pages complete and functional

### Session 3 (Quick Tests Started)
- Added Quick Test system with auto-marking (test.js, test styles)
- Created tests folder structure, index pages, sample test (cells-test-1)

### Session 4 (Theme Switcher + Tests Complete)
- Added theme switcher (Undertale + Minecraft)
- Fixed key-term highlighting readability
- Added quick test links to all block and topic pages
- Created ALL 98 test files (14 per block x 7 blocks)

### Session 5 (Theme Switching Fix + Clean Theme)
- Fixed theme switching bug (JS inserts theme link AFTER main.css)
- Added Clean theme (BBC Bitesize inspired)
- Updated all 6 navigation dropdowns

### Session 6 (Block 3 Content)
- Added 9 new pages: Biology Block 3 (3), Chemistry Block 3 (4), Physics Block 3 (2)
- Total content pages: 44

### Session 7 (Study Tools)
- Added Formula Reference Sheet (formulas.html) with print-friendly CSS
- Added Search Function (search.js + search-index.js)
- Added Quick Links to homepage, Formulas nav link

### Session 8 (SVG Diagrams)
- Added inline SVG diagrams to 11 content pages:
  - Biology: cells (2), specialised cells (3), digestive system, enzymes
  - Chemistry: electron shells (2), ionic bonding, covalent bonding (3)
  - Physics: D-T graphs, V-T graphs, moments, energy stores

### Session 9 (Progress Tracking with Supabase)
- Login/signup system (login.html), user dashboard (dashboard.html), about page
- Test score saving, topic confidence ratings on all 44 pages
- New JS: supabase-config.js, auth.js, progress.js
- Updated all 208 HTML files with auth nav links and scripts
- Database: profiles, test_scores, topic_confidence tables

### Session 10 (FOUC Fix & Password Reset)
- Fixed Flash of Unstyled Content across all 211 HTML files
- Created theme-preload.js for instant theme application
- Added password reset: forgot password form, reset-password.html, email flow

### Session 11 (Block 3 Content Expansion)
- Added 2 pages: Biology `04-enzymes-continued`, Chemistry `05-ram-rfm`
- Added RFM formula to formulas.html
- Total content pages: 47

### Session 12 (Physics Block 3 Expansion)
- Added `02-calculating-efficiency.html` to Physics Block 3
- Renamed energy-resources from 02 to 03, updated topic code P3.2.1 to P3.3.1
- Added efficiency formula to formulas.html

### Session 12b (Energy Resources Enhancement)
- Enhanced `03-energy-resources.html` with session 4 materials
- Added UK electricity stats, detailed renewable resource explanations, 3 new practice questions

### Session 13 (Block 3 Quick Tests)
- Added Biology Block 3 topic tests (12 tests, summary deferred)
- Added Chemistry Block 3 tests (20 tests including 5 summary)
- Total tests: 130

### Session 14 (Test Consistency Audit & Fixes)
- Comprehensive audit of all test pages, indexes, and navigation
- Created 2 missing Newton's tests (newtons-test-2/3)
- Updated all 7 block index pages with previously unlisted tests
- Fixed test hub card counts (were all showing "8 tests")
- Fixed broken nav links and CSS classes in Biology Block 3
- Added Formulas nav link to tests hub
- Total tests: 174

### Session 15 (Biology Block 3 Expansion)
- Added `05-balanced-diet.html` to Biology Block 3
- Added diet-test-1 + 5 summary tests for Biology Block 3
- Total content pages: 48, total tests: 180

### Session 16 (Content Page Section Standardisation)
- Standardised bottom section order across all 45 content pages with tests
- Mandatory order: Quiz > Confidence Rating > Test Links > Navigation
- Fixed Sep Bio plant-classification test links (plant-test-* not plants-test-*)

### Session 17 (Physics Block 3 Content)
- Added `04-energy-calculations.html` - conservation of energy calculations (GPE/KE)
- Total content pages: 49

### Session 18 (Physics Block 3 Tests)
- Added 11 tests: energy-stores-1/2, efficiency-1/2, energy-resources-1/2, energy-calculations-1/2, summary-1/2/3
- Created block test index, added hub card, added test links to all 4 content pages
- Full nav chain verified, all tests balanced 5A/5B/5C/5D
- Total tests: 191

### Session 19 (Answer Explanations Feature)
- New feature: answer explanations shown inline under wrong answers after test submission
- Modified `js/test.js` to read `data-explanation` attributes and display explanations
- Added `.test-explanation` and `.answer-explanation` CSS styles to `css/main.css`
- Explanations also appear in the answers summary section at the bottom
- Retry button correctly removes explanation divs when resetting
- Pilot: added `data-explanation` attributes to all 220 questions across 11 Physics Block 3 tests
- Graceful degradation: older tests without explanations continue to work unchanged
- Version bump: v1.16

---

*Last updated: February 2026 - Session 19*
