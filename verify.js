/**
 * IGCSE Study Hub - Verification Script
 * Run with: node verify.js
 *
 * Checks:
 * 1. Test file counts match hub card counts
 * 2. Every test has exactly 20 questions with balanced answers (5A/5B/5C/5D)
 * 3. Navigation chain integrity (every next has matching prev)
 * 4. Block test indexes list every test file in their directory
 * 5. Search index has entries for every content page
 * 6. CSS nav classes are correct (topic-nav-link not topic-nav__link)
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
let errors = 0;
let warnings = 0;

function error(msg) {
    console.log(`  ERROR: ${msg}`);
    errors++;
}

function warn(msg) {
    console.log(`  WARN:  ${msg}`);
    warnings++;
}

function ok(msg) {
    console.log(`  OK:    ${msg}`);
}

function getHtmlFiles(dir) {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
        .filter(f => f.endsWith('.html') && f !== 'index.html')
        .sort();
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

// ============================================================
// CHECK 1: Test file counts vs hub card counts
// ============================================================
console.log('\n=== CHECK 1: Test Hub Card Counts ===');

const hubPath = path.join(ROOT, 'tests', 'index.html');
const hubHtml = readFile(hubPath);

// Parse cards: extract href and meta count
const cardRegex = /<a\s+href="([^"]+)"\s+class="test-card">[\s\S]*?<span class="test-card__meta">(\d+) tests available<\/span>/g;
let match;
const hubCards = [];
while ((match = cardRegex.exec(hubHtml)) !== null) {
    hubCards.push({ href: match[1], count: parseInt(match[2]) });
}

// Find all test block directories
const subjects = ['biology', 'chemistry', 'physics', 'separate-biology'];
const testBlockDirs = [];
for (const subject of subjects) {
    const subjectTestDir = path.join(ROOT, 'tests', subject);
    if (!fs.existsSync(subjectTestDir)) continue;
    for (const block of fs.readdirSync(subjectTestDir)) {
        const blockDir = path.join(subjectTestDir, block);
        if (fs.statSync(blockDir).isDirectory()) {
            testBlockDirs.push({ subject, block, dir: blockDir, rel: `${subject}/${block}/index.html` });
        }
    }
}

// Check each hub card matches actual file count
for (const card of hubCards) {
    const cardDir = path.join(ROOT, 'tests', path.dirname(card.href));
    const files = getHtmlFiles(cardDir);
    if (files.length === card.count) {
        ok(`${path.dirname(card.href)}: ${card.count} tests (matches)`);
    } else {
        error(`${path.dirname(card.href)}: hub says ${card.count}, disk has ${files.length}`);
    }
}

// Check for test directories without a hub card
for (const dir of testBlockDirs) {
    const hasCard = hubCards.some(c => c.href === dir.rel);
    if (!hasCard) {
        error(`${dir.subject}/${dir.block} has tests but no hub card`);
    }
}

// ============================================================
// CHECK 2: Question count and answer balance per test
// ============================================================
console.log('\n=== CHECK 2: Question Count & Answer Balance ===');

// Exam-style tests (exam-*.html) use written answers, not MCQ - skip them
function isExamStyle(filename) {
    return filename.startsWith('exam-');
}

let mcqChecked = 0;
let examSkipped = 0;

for (const dir of testBlockDirs) {
    const files = getHtmlFiles(dir.dir);
    for (const file of files) {
        const shortPath = `${dir.subject}/${dir.block}/${file}`;

        if (isExamStyle(file)) {
            examSkipped++;
            continue;
        }

        const filePath = path.join(dir.dir, file);
        const html = readFile(filePath);
        mcqChecked++;

        // Count data-correct attributes
        const answers = [];
        const correctRegex = /data-correct="([ABCD])"/g;
        let m;
        while ((m = correctRegex.exec(html)) !== null) {
            answers.push(m[1]);
        }

        if (answers.length !== 20) {
            error(`${shortPath}: has ${answers.length} questions (expected 20)`);
        }

        // Check balance
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        for (const a of answers) counts[a]++;

        if (counts.A !== 5 || counts.B !== 5 || counts.C !== 5 || counts.D !== 5) {
            warn(`${shortPath}: answer balance ${counts.A}A/${counts.B}B/${counts.C}C/${counts.D}D (expected 5/5/5/5)`);
        }
    }
}
ok(`Checked ${mcqChecked} MCQ tests, skipped ${examSkipped} exam-style tests`);

// ============================================================
// CHECK 3: Navigation chain integrity
// ============================================================
console.log('\n=== CHECK 3: Navigation Chain Integrity ===');

for (const dir of testBlockDirs) {
    const files = getHtmlFiles(dir.dir);
    const shortDir = `${dir.subject}/${dir.block}`;
    let chainErrors = 0;

    for (const file of files) {
        const filePath = path.join(dir.dir, file);
        const html = readFile(filePath);

        // Extract prev and next links
        const prevMatch = html.match(/topic-nav-link--prev[^>]*href="([^"]+)"/);
        const nextMatch = html.match(/topic-nav-link--next[^>]*href="([^"]+)"/);
        // Also try href before class
        const prevMatch2 = html.match(/href="([^"]+)"[^>]*class="[^"]*topic-nav-link--prev/);
        const nextMatch2 = html.match(/href="([^"]+)"[^>]*class="[^"]*topic-nav-link--next/);

        const prev = (prevMatch2 && prevMatch2[1]) || (prevMatch && prevMatch[1]) || null;
        const next = (nextMatch2 && nextMatch2[1]) || (nextMatch && nextMatch[1]) || null;

        if (!prev) {
            error(`${shortDir}/${file}: missing prev link`);
            chainErrors++;
        }
        if (!next) {
            error(`${shortDir}/${file}: missing next link`);
            chainErrors++;
        }

        // If this file has a "next" that isn't index.html, verify that file's "prev" points back
        if (next && next !== 'index.html') {
            const nextPath = path.join(dir.dir, next);
            if (fs.existsSync(nextPath)) {
                const nextHtml = readFile(nextPath);
                const nextPrev2 = nextHtml.match(/href="([^"]+)"[^>]*class="[^"]*topic-nav-link--prev/);
                const nextPrev = nextPrev2 && nextPrev2[1];
                if (nextPrev !== file) {
                    error(`${shortDir}/${file} → next=${next}, but ${next} → prev=${nextPrev} (expected ${file})`);
                    chainErrors++;
                }
            } else {
                error(`${shortDir}/${file}: next link "${next}" does not exist`);
                chainErrors++;
            }
        }
    }

    if (chainErrors === 0) {
        ok(`${shortDir}: nav chain OK (${files.length} tests)`);
    }
}

// ============================================================
// CHECK 4: Block indexes list all test files
// ============================================================
console.log('\n=== CHECK 4: Block Index Completeness ===');

for (const dir of testBlockDirs) {
    const indexPath = path.join(dir.dir, 'index.html');
    const shortDir = `${dir.subject}/${dir.block}`;

    if (!fs.existsSync(indexPath)) {
        error(`${shortDir}: missing index.html`);
        continue;
    }

    const indexHtml = readFile(indexPath);
    const files = getHtmlFiles(dir.dir);

    // Find all href links in the index
    const hrefRegex = /href="([^"]+\.html)"/g;
    const linkedFiles = new Set();
    let m;
    while ((m = hrefRegex.exec(indexHtml)) !== null) {
        const href = m[1];
        // Only count local file links (not ../../../ etc)
        if (!href.includes('/')) {
            linkedFiles.add(href);
        }
    }

    let missing = 0;
    for (const file of files) {
        if (!linkedFiles.has(file)) {
            error(`${shortDir}/index.html: missing link to ${file}`);
            missing++;
        }
    }
    if (missing === 0) {
        ok(`${shortDir}/index.html: lists all ${files.length} tests`);
    }
}

// ============================================================
// CHECK 5: Search index coverage
// ============================================================
console.log('\n=== CHECK 5: Search Index Coverage ===');

const searchIndexPath = path.join(ROOT, 'js', 'search-index.js');
const searchIndexContent = readFile(searchIndexPath);

// Extract all URLs from search index
const urlRegex = /url:\s*"([^"]+)"/g;
const indexedUrls = new Set();
while ((match = urlRegex.exec(searchIndexContent)) !== null) {
    indexedUrls.add(match[1]);
}

// Find all content pages
for (const subject of subjects) {
    const subjectDir = path.join(ROOT, 'subjects', subject);
    if (!fs.existsSync(subjectDir)) continue;
    for (const block of fs.readdirSync(subjectDir)) {
        const blockDir = path.join(subjectDir, block);
        if (!fs.statSync(blockDir).isDirectory()) continue;
        const pages = fs.readdirSync(blockDir)
            .filter(f => f.endsWith('.html') && f !== 'index.html');

        for (const page of pages) {
            const relUrl = `subjects/${subject}/${block}/${page}`;
            if (!indexedUrls.has(relUrl)) {
                error(`Search index missing: ${relUrl}`);
            }
        }
    }
}

ok(`Search index has ${indexedUrls.size} entries`);

// ============================================================
// CHECK 6: CSS class correctness
// ============================================================
console.log('\n=== CHECK 6: CSS Nav Classes ===');

// Check all test files for incorrect CSS classes
const badClassPatterns = [
    { pattern: /topic-nav__link/g, msg: 'uses topic-nav__link (should be topic-nav-link)' },
    { pattern: /topic-nav__prev/g, msg: 'uses topic-nav__prev (should be topic-nav-link--prev)' },
    { pattern: /topic-nav__next/g, msg: 'uses topic-nav__next (should be topic-nav-link--next)' },
];

let cssChecked = 0;
for (const dir of testBlockDirs) {
    const files = getHtmlFiles(dir.dir);
    for (const file of files) {
        const filePath = path.join(dir.dir, file);
        const html = readFile(filePath);
        const shortPath = `${dir.subject}/${dir.block}/${file}`;
        cssChecked++;

        for (const { pattern, msg } of badClassPatterns) {
            pattern.lastIndex = 0;
            if (pattern.test(html)) {
                error(`${shortPath}: ${msg}`);
            }
        }
    }
}
ok(`Checked ${cssChecked} test files for CSS classes`);

// ============================================================
// SUMMARY
// ============================================================
console.log('\n' + '='.repeat(50));
if (errors === 0 && warnings === 0) {
    console.log(`ALL CHECKS PASSED`);
} else {
    if (errors > 0) console.log(`${errors} ERROR(S) found`);
    if (warnings > 0) console.log(`${warnings} WARNING(S) found`);
}
console.log('='.repeat(50) + '\n');

process.exit(errors > 0 ? 1 : 0);
