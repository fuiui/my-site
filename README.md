# Learning HTML — Zhou Meitong

A learning website for the Web Technologies course.

## Current stage

Stage 5: all three pages load one shared navigation and footer through JavaScript. The navigation highlights the current page automatically. The project ideas remain drafts for personal review. This is an intermediate milestone, not the completed course assignment: the quote collection still needs expansion from five to at least 15 quotations (the classroom exercise targets 20).

## Open locally

Open this folder in VS Code. Install the Live Server extension, then right-click `index.html` and choose **Open with Live Server**.

Alternatively, run `python -m http.server 5500` in this folder and visit http://localhost:5500.

Use an HTTP server: double-clicking an HTML file opens a `file://` URL, where browsers prevent the shared fragments from loading. The page displays a reminder in that case. JavaScript must also be enabled.

## Files

- `index.html`: the content and semantic page structure.
- `nav.html` and `footer.html`: shared HTML fragments, not standalone pages. Edit each here once to update all pages.
- `nav.js`: loads both fragments, marks the current page and displays a message if loading fails.
- `project.html`: five ideas, audience descriptions and a proposed starting plan.
- `favicon-32.png`: 32 × 32 browser icon.
- `apple-touch-icon.png`: 180 × 180 phone icon with square corners.
- `images/icon-master.svg`: editable 512 × 512 vector master for both icons; lettering is drawn as paths, with no external font dependency.
- `quotes.html`: five quotations from The Analects and Dao De Jing, with source links to the Chinese Text Project. English renderings were prepared with AI assistance rather than copied from a published translation.
- `style.css`: colours, typography, layout and a small-screen media query.
- `images/first-page.svg`: an original illustration created for this project with AI assistance. No external image or font requests are required.

## Development note

This website was prepared with Codex assistance. It should be read, understood and personalised by the student; it is not described as independently handwritten work. Future stages will add the About page, expand the quote collection and add random-quote display and interactive exercises.
