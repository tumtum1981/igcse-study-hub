# IGCSE Study Hub - Project Passover Document

## Project Overview
A static HTML/CSS/JavaScript website for IGCSE homeschool study materials with theme switching (Undertale/Minecraft/Clean), hosted on GitHub and deployed via Vercel.

**Current Status: v1.22 - Tests for New Blocks**
55 content pages, 199 quick tests, 3 themes, search, formula reference, SVG diagrams, user authentication with progress tracking via Supabase, password reset, and answer explanations (Physics Block 3 pilot + all Block 4/SB2 tests).

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
│   ├── biology/                   # 17 topic pages (Block 1-4 + extra learning)
│   ├── chemistry/                 # 16 topic pages (Block 1-4)
│   ├── physics/                   # 14 topic pages (Block 1-4)
│   └── separate-biology/          # 7 topic pages (Block 1-2 + extra learning)
└── tests/
    ├── index.html                 # Tests hub page
    ├── biology/block-1/           # 23 tests + index
    ├── biology/block-2/           # 17 tests + index
    ├── biology/block-3/           # 18 tests + index
    ├── biology/block-4/           # 2 tests + index
    ├── chemistry/block-1/         # 19 tests + index
    ├── chemistry/block-2/         # 17 tests + index
    ├── chemistry/block-3/         # 20 tests + index
    ├── chemistry/block-4/         # 2 tests + index
    ├── physics/block-1/           # 21 tests + index
    ├── physics/block-2/           # 20 tests + index
    ├── physics/block-3/           # 11 tests + index
    ├── physics/block-4/           # 2 tests + index
    ├── separate-biology/block-1/  # 25 tests + index
    └── separate-biology/block-2/  # 2 tests + index
```

### Content Pages (51 total)

**Biology Block 1:** 01-cells, 02-specialised-cells, 03-magnification, 04-living-organisms, 05-prokaryotic-cells
**Biology Block 2:** 01-size-of-cells, 02-diffusion, 03-osmosis, 04-osmosis-practical, 05-active-transport, extra-learning
**Biology Block 3:** 01-biological-molecules, 02-digestive-system, 03-enzymes, 04-enzymes-continued, 05-balanced-diet
**Biology Block 4:** 01-photosynthesis
**Chemistry Block 1:** 01-atoms-elements-compounds, 02-states-of-matter, 03-atomic-structure, 04-electron-shells, 05-ions-isotopes
**Chemistry Block 2:** 01-state-changes, 02-ionic-bonding, 03-covalent-bonding, 04-metallic-bonding, 05-giant-covalent
**Chemistry Block 3:** 01-conservation-of-mass, 02-conservation-calculations, 03-representing-reactions, 04-balancing-equations, 05-ram-rfm
**Chemistry Block 4:** 01-exothermic-endothermic
**Physics Block 1:** 01-speed-distance-time, 02-distance-time-graphs, 03-velocity-time-graphs, 04-gravitational-force, 05-work-done
**Physics Block 2:** 01-density, 02-forces, 03-resultant-forces, 04-moments, 05-newtons-second-law
**Physics Block 3:** 01-energy-stores, 02-calculating-efficiency, 03-energy-resources, 04-energy-calculations
**Physics Block 4:** 01-particle-model
**Separate Biology Block 1:** 01-features-of-organisms, 02-species-binomial, 03-evolutionary-trees, 04-dichotomous-keys, 05-plant-classification, extra-learning
**Separate Biology Block 2:** 01-teeth

### Source-to-Page Mapping

Each content page's source file in `website-resources/`. Use this to verify content accuracy and trace fabrication.

**Biology Block 1:**
| Page | Source File |
|------|------------|
| 01-cells | `B1.1.1 cells for students 2027.pptx` |
| 02-specialised-cells | `B1.2.1 specialised cells 2027.pptx` |
| 03-magnification | `B1.3.1 Magnification 2027 (1).pptx` |
| 04-living-organisms | `B1.4.1 living organisms processes 2027.pptx` |
| 05-prokaryotic-cells | `B1.5.1 Prokaryotic _ bacterial cells 2027.pptx` |

**Biology Block 2:**
| Page | Source File |
|------|------------|
| 01-size-of-cells | `session 1 size of cells block 2.pptx` |
| 02-diffusion | `session 2 Diffusion block 2.pptx` (10_11_25) |
| 03-osmosis | *Source file not in folder* - content from session 3 |
| 04-osmosis-practical | `session 4 Analysing data osmosis practical block 2.pptx` |
| 05-active-transport | `session 5 Investigating factors that affect diffusion block 2.pptx` |
| extra-learning | Supplementary content preserved from page rewrites (Session 21) |

**Biology Block 3:**
| Page | Source File |
|------|------------|
| 01-biological-molecules | `session 1 Biological molecules block 3.pptx` |
| 02-digestive-system | `session 2 digestive system block 3.pptx` |
| 03-enzymes | `session 3 Enzymes introduction block 9.pptx` |
| 04-enzymes-continued | `session 4 Enzymes continued block 3.pptx` |
| 05-balanced-diet | `session 5 Balanced diet block 3.pdf` |

**Biology Block 4:**
| Page | Source File |
|------|------------|
| 01-photosynthesis | `session 1 Photosynthesis introduction block 4.pptx` |

**Chemistry Block 1:**
| Page | Source File |
|------|------------|
| 01-atoms-elements-compounds | `C1.1.1 atoms elements compounds 2027.pptx` |
| 02-states-of-matter | `C1.2.1 states of matter 2027.pptx` |
| 03-atomic-structure | `C1.3.1 atomic structure 2027.pptx` |
| 04-electron-shells | `C1.4.1 Electron shells 2027 students.pptx` |
| 05-ions-isotopes | `C1.5.1 ions and isotopes 2027.pptx` |

**Chemistry Block 2:**
| Page | Source File |
|------|------------|
| 01-state-changes | `session 1 (State changes block 2 students).pptx` |
| 02-ionic-bonding | `session 2 Forming positive and negative ions.pptx` + `session 3 Ionic bonding.pptx` |
| 03-covalent-bonding | `session 4 Covalent bonding block 2.pptx` |
| 04-metallic-bonding | `session 5 Bonding summary_ metallic bonding block 2.pptx` |
| 05-giant-covalent | `session 5 Bonding summary_ metallic bonding block 2.pptx` (second topic) |

**Chemistry Block 3:**
| Page | Source File |
|------|------------|
| 01-conservation-of-mass | `session 1 Conservation of mass block 3.pptx` |
| 02-conservation-calculations | `session 2 Conservation of mass block 3.pptx` |
| 03-representing-reactions | `session 3 Representing reactions block 3.pptx` |
| 04-balancing-equations | `session 4 Balancing symbol equations block 3.pptx` |
| 05-ram-rfm | `session 5 RAM and RFM block 3.pptx` |

**Chemistry Block 4:**
| Page | Source File |
|------|------------|
| 01-exothermic-endothermic | `session 1 Exothermic and endothermic reactions block 4.pptx` |

**Physics Block 1:**
| Page | Source File |
|------|------------|
| 01-speed-distance-time | `P1.1.1 speed_ distance_ time 2027.pptx` |
| 02-distance-time-graphs | `P1.2.1 Distance time graphs and velocity time graphs 2027.pptx` |
| 03-velocity-time-graphs | `P1.3.1 Velocity-time graphs and acceleration 2027.pptx` |
| 04-gravitational-force | `P1.4.1 gravitational force and weight 2027.pptx` |
| 05-work-done | `P1.5.1 Work Done 2027.pptx` |

**Physics Block 2:**
| Page | Source File |
|------|------------|
| 01-density | `session 1 Calculating density and volume block 2.pptx` |
| 02-forces | `session 2 balanced Forces block 2.pptx` |
| 03-resultant-forces | `session 3 Resultant Forces block 2.pptx` |
| 04-moments | `session 4 Moments block 2.pptx` |
| 05-newtons-second-law | `session 5 F=ma block 2.pptx` |

**Physics Block 3:**
| Page | Source File |
|------|------------|
| 01-energy-stores | `session 1 Energy stores students block 3.pptx` |
| 02-calculating-efficiency | `session 2 Calculating efficiency.pptx.pdf` |
| 03-energy-resources | `session 3 energy resources block 3.pptx` + `session 4 renewable energy block 3.pdf` |
| 04-energy-calculations | `session 5 energy summary block 3.pdf` |

**Physics Block 4:**
| Page | Source File |
|------|------------|
| 01-particle-model | `session 1 The Particle Model block 4.pptx` |

**Separate Biology Block 1:**
| Page | Source File |
|------|------------|
| 01-features-of-organisms | `separate session 1 features of organisms block 2.pptx` |
| 02-species-binomial | `separate session 2 Species and binomial names block 2.pptx` |
| 03-evolutionary-trees | `separate session 3 evolutionary tree and gene sequencing block 2.pptx` |
| 04-dichotomous-keys | `separate session 4 Dichotomous keys block 2.pptx` + `Whiteboard.fi 2025-11-27.pdf` |
| 05-plant-classification | `separate session 5 plant classification block 2.pptx` + `whiteboard IGCSE Biology plant classification.pdf` |
| extra-learning | Supplementary content preserved from page rewrites (Session 21) |

**Separate Biology Block 2:**
| Page | Source File |
|------|------------|
| 01-teeth | `separate session 1 Teeth block 4.pptx` |

### Quick Tests (199 total)

**Biology Block 1 (23):** cells-1/2/3, specialised-1/2/3, magnification-1/2/3, organisms-1/2/3, prokaryotic-1/2/3, exam-cells, exam-magnification, exam-specialised, summary-1/2/3/4/5
**Biology Block 2 (17):** size-1/2/3, diffusion-1/2/3, osmosis-1/2/3, osmosis-practical-1/2/3, summary-1/2/3/4/5
**Biology Block 3 (18):** molecules-1/2/3, digestion-1/2/3, enzymes-1/2/3, enzymes-contd-1/2/3, diet-1, summary-1/2/3/4/5
**Biology Block 4 (2):** photosynthesis-1/2
**Chemistry Block 1 (19):** atoms-1/2/3, states-1/2/3, atomic-structure-1/2/3, electron-shells-1/2/3, ions-isotopes-1/2, summary-1/2/3/4/5
**Chemistry Block 2 (17):** state-changes-1/2/3, ionic-1/2/3, covalent-1/2/3, metallic-1, giant-covalent-1/2, summary-1/2/3/4/5
**Chemistry Block 3 (20):** conservation-1/2/3, conservation-calc-1/2/3, representing-1/2/3, balancing-1/2/3, ram-rfm-1/2/3, summary-1/2/3/4/5
**Chemistry Block 4 (2):** exothermic-1/2
**Physics Block 1 (21):** speed-1/2/3, dt-graphs-1/2/3, vt-graphs-1/2/3, gravity-1/2/3, work-1, exam-speed, exam-dt-graphs, exam-vt-graphs, summary-1/2/3/4/5
**Physics Block 2 (20):** density-1/2/3, forces-1/2/3, resultant-1/2/3, moments-1/2/3, newtons-1/2/3, summary-1/2/3/4/5
**Physics Block 3 (11):** energy-stores-1/2, efficiency-1/2, energy-resources-1/2, energy-calculations-1/2, summary-1/2/3
**Physics Block 4 (2):** particle-model-1/2
**Separate Bio Block 1 (25):** features-1/2/3, species-1/2/3, evolution-1/2/3, keys-1/2/3, plant-1/2/3, exam-features, exam-species, exam-evolution, exam-keys, exam-plant, summary-1/2/3/4/5
**Separate Bio Block 2 (2):** teeth-1/2

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
- [x] Verification script for automated consistency checks (verify.js, runs as pre-commit hook)
- [ ] Print-friendly content pages
- [x] Test answer explanations (Physics Block 3 pilot complete; mandatory for all new tests)
- [ ] Question bank with randomisation
- [ ] Timed test mode

---

## Development Log

*Sessions 1-13 archived in `docs/changelog.md`*

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

### Session 20 (SVG Diagrams Expansion)
- Added inline SVG diagrams to 10 high-priority content pages (was 14, now 24 pages with diagrams)
- Chemistry (4 pages):
  - `block-1/02-states-of-matter.html` - Particle arrangement in solid, liquid, gas (3 boxes)
  - `block-2/01-state-changes.html` - State change cycle with particle models and labeled arrows
  - `block-2/04-metallic-bonding.html` - Sea of electrons model with cation grid
  - `block-2/05-giant-covalent.html` - Diamond vs graphite structure comparison
- Biology (3 pages):
  - `block-2/02-diffusion.html` - Particles moving through membrane (high to low concentration)
  - `block-2/03-osmosis.html` - Water molecules through semi-permeable membrane
  - `block-2/05-active-transport.html` - Carrier protein with ATP, 3-stage transport process
- Physics (3 pages):
  - `block-2/01-density.html` - Particle packing comparison (high vs low density)
  - `block-2/03-resultant-forces.html` - Balanced vs unbalanced forces side by side
  - `block-3/03-energy-resources.html` - Sankey diagram (energy transfer in light bulb)
- All diagrams follow existing pattern: `currentColor`, `diagram-label`, `aria-labelledby` accessibility
- No test or navigation changes; verify.js passes with no new issues

### Session 21 (Extra Learning Pages)
- Created 2 "Extra Learning" pages to preserve supplementary IGCSE content before main page rewrites
- `subjects/biology/block-2/extra-learning.html` (B2.EL):
  - Active transport definition, comparing transport methods table, examples table, how it works
  - Adaptations to increase surface area table (from size-of-cells page)
- `subjects/separate-biology/block-1/extra-learning.html` (SB1.EL):
  - Kingdom features detail table, features used for classification, why classification is important
  - Binomial system advantages (5 points), "King Philip Came Over For Good Soup" mnemonic
  - Phylogenetic tree definitions, reading evolutionary trees table, non-DNA evidence types
  - Invertebrate dichotomous key example, creating keys guidelines, features to use table
  - Conifers/gymnosperms section, mosses vs ferns comparison, flowering vs non-flowering table, vascular tissue detail
- Updated block indexes: biology/block-2 and separate-biology/block-1 now list extra learning pages
- Updated nav chains: 05-active-transport.html → extra-learning.html → index; 05-plant-classification.html → extra-learning.html → index
- Updated search index with 2 new entries
- Total content pages: 49 → 51

### Session 22 (Content Audit Fixes - Pages 5 & 3)
- **Biology Block 2 Page 5** (`05-active-transport.html`): REWRITTEN
  - Was: Active transport (wrong topic - entirely fabricated from IGCSE curriculum)
  - Now: "Investigating Factors that Affect Diffusion" (matches source Session 5 slides)
  - Content: jelly cube diffusion experiment, scientific variables (independent/dependent/control),
    scientific predictions, temperature and cube size experiments
  - Active transport content preserved in extra-learning.html (Session 21)
  - Block index updated: "Active Transport" → "Investigating Diffusion"
  - Test links updated to point to diffusion and summary tests (not active-transport tests)
- **Separate Biology Block 1 Page 3** (`03-evolutionary-trees.html`): REWRITTEN
  - Was: 4 fabricated evidence types (morphology, protein, fossil, embryo), missing gene sequencing practical
  - Now: Matches source Session 3 slides - evolutionary trees + gene sequencing
  - Added: Tortoise classification table, hominidae family example, DNA sequence comparison
    (whale/cow/hippo/tapir/zebra practical with full DNA tables and difference counts)
  - Removed fabricated evidence types (preserved in extra-learning.html)
  - Title updated to "Evolutionary Trees and Gene Sequencing"
- Search index updated for both pages
- Audit fix progress: #1 done, #2 done, #3 skipped, #4 pending, #5 done (earlier), #6 pending, #7 pending

### Session 23 (Content Audit Fixes - Pages 1, 4, 6, 7)
- **Separate Biology Block 1 Page 1** (`01-features-of-organisms.html`): REWRITTEN
  - Was: Only kingdoms table with extra details not in slides, missing vertebrate/invertebrate content
  - Now: Kingdoms table matching slide format, vertebrate classes table (5 classes with 4 features),
    invertebrate groups, arthropods table (4 classes), key definitions from slides
  - Quiz questions updated to cover vertebrate/invertebrate/arthropod content
- **Separate Biology Block 1 Page 4** (`04-dichotomous-keys.html`): REWRITTEN
  - Was: Fabricated invertebrate example key, added guidelines not in slides
  - Now: Penguin/bat/whale vertebrate classification key, armadillo/ostrich/dolphin/turtle
    key-building exercise, crab classification (crustacean/arthropod) from whiteboard PDF
- **Separate Biology Block 1 Page 2** (`02-species-binomial.html`): UPDATED
  - Added missing hybrid examples from slides: liger, tigon, zorse, geep (with parent species table)
  - Connected hybrid section to Panthera example for exam relevance
- **Chemistry Block 2 Page 1** (`01-state-changes.html`): UPDATED
  - Added diffusion section (kinetic theory explanation, factors affecting rate, examples)
  - Added melting/boiling points table from source slides (water, ethanol, bromine, oxygen, gallium)
  - Added 2 quiz questions (diffusion at higher temperatures, gallium state at 25°C)
  - Title updated to "State Changes and Diffusion"
  - Block index updated to match new title
- **Sep Bio example substitution review** (audit fix #7): All 5 pages reviewed
  - Pages 1, 3, 4 now rewritten from source slides - examples match
  - Page 2 updated with missing hybrid examples
  - Page 5 skipped per user request
- Search index updated for SB1.1.1, SB1.2.1, SB1.4.1, and C2.1.1
- Audit fix progress: #1 done, #2 done, #3 skipped, #4 done, #5 done, #6 done, #7 done
- **All content audit fixes complete.** Version bump: v1.18

### Session 24 (Workflow Overhaul & Test Balance Fix)
- **CLAUDE.md major update** - restructured workflow commands and added new ones:
  - `rewrite page from source` - new command for rewriting existing pages from source slides
  - `add explanations for block` - new command to backfill `data-explanation` on existing tests
  - `fix test balance` - new command to fix answer balance warnings
  - `refresh website block` now has 8 steps with flow summary (Steps 1-5 always, 6-8 conditional)
  - Added Content Page Standards section (SVG patterns, accessibility rules)
  - Added version bump convention and dev log archiving rules
  - Stale Data Checklist reframed as post-task verification; commands cross-reference it
  - Session start reminder condensed to single line
- **Source-to-page mapping table** added to passover.md - all 51 content pages mapped to their source PPTX/PDF files
- **verify.js Check 7** added - checks both CLAUDE.md copies are identical (repo vs parent directory)
- **Dev log archiving** - sessions 1-13 moved to `docs/changelog.md`, passover keeps last 10
- **Eliminated CLAUDE.md/passover duplication** - page/test counts removed from CLAUDE.md, passover is source of truth
- **Fixed answer balance on 21 test files** - all now exactly 5A/5B/5C/5D, verify.js reports ALL CHECKS PASSED (0 errors, 0 warnings)
- Formula updates marked as MANDATORY in refresh command
- Answer explanations marked as mandatory for all new tests in Test File Standards
- Version bump: v1.19

### Session 25 (Comprehensive Audit & Fixes)
- **Full website audit** covering structural integrity, formula completeness, practice question counts, test coverage, and CSS consistency
- **verify.js: ALL 7 CHECKS PASSED** (0 errors, 0 warnings) - confirmed before and after fixes
- **Fix A: Added SA:V Ratio formula** to `formulas.html` Biology section
  - SA:V Ratio = Surface Area / Volume, linked to `biology/block-2/01-size-of-cells.html`
- **Fix B: Standardized Physics Block 3 test-links CSS** (4 pages)
  - `01-energy-stores.html`, `02-calculating-efficiency.html`, `03-energy-resources.html`, `04-energy-calculations.html`
  - Added `test-links__title`, `test-links__list`, `test-links__item`, `test-links__link` classes
  - Added "All Block 3 Tests" link to each page
- **Audit findings documented** (not fixed this session):
  - 44 of 49 content pages have fewer than 5 practice questions (standard is 5) - backfill task for future
  - Source cross-reference not performed (do incrementally per subject in future sessions)
- Version bump: v1.20
- **Refresh website block: 4 new blocks added**
  - **Biology Block 4:** `01-photosynthesis.html` - Photosynthesis introduction (reactants/products, role of light, producers, uses of glucose/biomass)
  - **Chemistry Block 4:** `01-exothermic-endothermic.html` - Exothermic & endothermic reactions (definitions, examples, everyday uses, energy dissipation, calorimetry)
  - **Physics Block 4:** `01-particle-model.html` - The particle model (three states of matter, particle arrangement/movement/forces, shape, compression)
  - **Separate Biology Block 2:** `01-teeth.html` - Mechanical digestion & teeth (tooth types, structure, dental decay, prevention)
- All 4 pages have 5 IGCSE practice questions each, SVG diagrams (3 of 4 pages), and confidence ratings
- Updated: 4 subject index pages, homepage block counts (3→4 for Bio/Chem/Phys, 1→2 for Sep Bio)
- Search index: 51 → 55 entries
- Formula sheet: added photosynthesis word equation (Biology) and calorimetry temperature change (Chemistry)
- Source mapping table updated with all 4 new pages
- Total content pages: 51 → 55
- verify.js: ALL 7 CHECKS PASSED
- Version bump: v1.21

### Session 26 (Tests for New Block 4 / SB2 Pages)
- **Added 8 MCQ tests** (2 per block) for the 4 new content pages created in Session 25:
  - Biology Block 4: `photosynthesis-test-1.html`, `photosynthesis-test-2.html`
  - Chemistry Block 4: `exothermic-test-1.html`, `exothermic-test-2.html`
  - Physics Block 4: `particle-model-test-1.html`, `particle-model-test-2.html`
  - Separate Biology Block 2: `teeth-test-1.html`, `teeth-test-2.html`
- All 8 tests have `data-explanation` on every question (mandatory for new tests)
- **Created 4 block test indexes** (test-list style): `tests/biology/block-4/`, `tests/chemistry/block-4/`, `tests/physics/block-4/`, `tests/separate-biology/block-2/`
- **Updated tests hub** (`tests/index.html`) with 4 new cards (2 tests each)
- **Added test-links sections** to all 4 content pages (between confidence rating and nav)
- All tests balanced 5A/5B/5C/5D, nav chains verified
- Total tests: 191 → 199
- verify.js: ALL 7 CHECKS PASSED (0 errors, 0 warnings)
- Version bump: v1.22

---

*Last updated: March 2026 - Session 26*
