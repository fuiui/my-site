# Learning HTML — Zhou Meitong

A learning website for the Web Technologies course.

## Current stage

Stage 10 (local preparation): the five-page site and its activities are complete as a local draft. The submission folder contains a cover, two exact-size homepage screenshots, two icons and draft platform text. Sharing metadata is prepared for the expected GitHub Pages address, but publishing and course-platform submission have NOT been performed. Personal content/code review and the VS Code AI-agent setup check remain outstanding.

## Open locally

Open this folder in VS Code. Install the Live Server extension, then right-click `index.html` and choose **Open with Live Server**.

Alternatively, run `python -m http.server 5500` in this folder and visit http://localhost:5500.

Use an HTTP server: double-clicking an HTML file opens a `file://` URL, where browsers prevent the shared fragments from loading. The page displays a reminder in that case. JavaScript must also be enabled.

## Files

- `index.html`: the content and semantic page structure.
- `images/cover-master.svg` and `images/og-image.png`: editable cover and 1200 × 630 sharing image.
- `submission/`: five platform images, draft descriptions and the remaining submission checklist.
- `machine.html`, `machine.css`, `machine.js`: the two activities; plain JavaScript, no libraries or backend. No player data is stored.
- `about.html`: introduction, learning goals, development approach and public project links.
- `nav.html` and `footer.html`: shared HTML fragments, not standalone pages. Edit each here once to update all pages.
- `nav.js`: loads both fragments, marks the current page and displays a message if loading fails.
- `project.html`: five ideas, audience descriptions and a proposed starting plan.
- `favicon-32.png`: 32 × 32 browser icon.
- `apple-touch-icon.png`: 180 × 180 phone icon with square corners.
- `images/icon-master.svg`: editable 512 × 512 vector master for both icons; lettering is drawn as paths, with no external font dependency.
- `quotes.html`: 20 quotations from The Analects and Dao De Jing, with source links to the Chinese Text Project. English renderings were prepared with AI assistance rather than copied from a published translation. The collection remains readable without JavaScript.
- `quotes.js`: reads the HTML collection and chooses a random quotation on page load and button activation. It excludes the current quotation from the next draw.
- `style.css`: colours, typography, layout and a small-screen media query.
- `images/first-page.svg`: an original illustration created for this project with AI assistance. No external image or font requests are required.

## Development note

This website was prepared with Codex assistance. It should be read, understood and personalised by the student; it is not described as independently handwritten work. Local work may be ahead of the public repository. Final publishing and submission are still required.
