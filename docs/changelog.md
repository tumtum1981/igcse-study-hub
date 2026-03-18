# IGCSE Study Hub - Development Changelog (Archived Sessions)

Sessions archived from `passover.md`. See passover for recent sessions.

---

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
