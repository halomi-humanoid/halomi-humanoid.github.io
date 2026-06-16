# Current Project History

## 2026-05-22

- User request: Normalize the other `demoTasks` setup objects to match the simplified setup shape and remove unnecessary setup elements.
- Files changed: `script.js`
- What changed: Removed per-setup `category` and `title` fields from the remaining demo setups, set placeholder poster text to empty, and updated demo rendering so it no longer depends on those removed fields.
- Open questions: Real demo media URLs and final demo descriptions can be filled in later.

## 2026-05-22

- User request: Remove the redundant setup `description` display and keep only the poster text area for setup-level explanatory text.
- Files changed: `script.js`, `styles.css`
- What changed: Removed `description` from demo setup objects, removed the tag-below description node from demo rendering, and made posters render only `posterText` below `posterTitle`.
- Open questions: Empty `posterText` values intentionally render as blank until real copy is added.

## 2026-05-22

- User request: Make the task summary text change for different setups within the same task.
- Files changed: `script.js`
- What changed: Moved demo summary copy from each task object into individual setup objects and changed demo rendering to display `setup.summary`.
- Open questions: Current setup summaries are placeholder copy and can be replaced with final experiment descriptions.

## 2026-05-22

- User request: Make the demo title follow the selected setup because one skill category can contain different displayed tasks.
- Files changed: `script.js`
- What changed: Moved demo display titles from task objects into individual setup objects and changed demo rendering to display `setup.title` with the task label as fallback.
- Open questions: Current setup titles are placeholder labels and can be replaced with final demo names.

## 2026-05-22

- User request: Remove the entire Key Takeaways module.
- Files changed: `index.html`, `script.js`, `styles.css`
- What changed: Removed the Method section's Key Takeaways panel, deleted the `contributions` data and render loop, and cleaned up the old split-panel styles.
- Open questions: None.

## 2026-05-22

- User request: Add a BibTeX citation module below Acknowledgement, inspired by HoMMI's final Citation section.
- Files changed: `index.html`, `script.js`, `styles.css`
- What changed: Added a Citation navigation link, a final Citation section with a BibTeX code block, centralized the BibTeX entry in `siteData.citation`, and styled the block for readable academic-page presentation.
- Open questions: Replace the placeholder `journal={Preprint}` entry once the final venue or arXiv identifier is available.

## 2026-05-22

- User request: Remove the repetitive green eyebrow labels above each module title.
- Files changed: `index.html`
- What changed: Removed the static section-level eyebrow labels above Abstract, Demos, Method, Acknowledgement, and Citation while keeping the hero acronym intact.
- Open questions: None.

## 2026-06-02

- User request: Move the demo tag badges from the right side of the media area to below the media.
- Files changed: `script.js`, `styles.css`
- What changed: Moved `demo-browser-tags` into the media visual block, wrapped the media frame and play button in `demo-media-shell`, and changed the demo stage layout from two columns to a centered single-column media layout with tags underneath.
- Open questions: None.

## 2026-06-02

- User request: Link the top HIROL Lab brand text to the lab website.
- Files changed: `index.html`
- What changed: Updated the topbar brand link to point to `https://hirol.sjtu.edu.cn/index.html` and open in a new tab.
- Open questions: None.

## 2026-06-02

- User request: Add a dagger mark for corresponding author and split institution affiliations from contribution/corresponding-author notes.
- Files changed: `script.js`, `styles.css`
- What changed: Marked Wenzhao Lian with `†`, added a `† Corresponding author` note, typed affiliation entries as institutions or notes, and rendered them as two centered rows.
- Open questions: Confirm whether Wenzhao Lian is the only corresponding author.

## 2026-06-02

- User request: Make the demo task tab bar larger because it felt too small.
- Files changed: `styles.css`
- What changed: Increased demo task tab padding, font size, weight, spacing, and bottom margin.
- Open questions: None.

## 2026-06-02

- User request: Update the Citation BibTeX authors.
- Files changed: `script.js`
- What changed: Synchronized the BibTeX `author` field with the current hero author list, adding Chenxi Liu and Maolin Zheng.
- Open questions: None.

## 2026-06-02

- User request: Enlarge the actual top navigation bar after clarifying that the earlier tab-bar change targeted the wrong element.
- Files changed: `styles.css`
- What changed: Increased desktop topbar padding, brand font size/weight, navigation font size, and navigation link spacing.
- Open questions: None.

## 2026-06-02

- User request: Add a Global Tracking Whole-Body Controller section before Loco-Manipulation Skills with a horizontal video carousel and left/right controls.
- Files changed: `index.html`, `script.js`, `styles.css`
- What changed: Added a Tracking nav anchor and section, created `siteData.trackingVideos` with six placeholder video cards, implemented carousel rendering and scroll buttons, and styled the carousel to show three cards on desktop, two on medium screens, and one on mobile.
- Open questions: Replace placeholder tracking video entries with real `videoUrl` or `embedUrl` values when assets are ready.

## 2026-06-02

- User request: Remove the small tags under each Global Tracking video card.
- Files changed: `script.js`, `styles.css`
- What changed: Removed tracking-card tag data, tag DOM rendering, and tracking-specific tag styling while keeping the Loco-Manipulation demo tags unchanged.
- Open questions: None.

## 2026-06-02

- User request: Remove unnecessary `posterTitle` and `posterText` fields from Global Tracking videos because real videos will cover the poster area.
- Files changed: `script.js`
- What changed: Removed `posterTitle` and `posterText` from each `trackingVideos` entry while leaving featured/demo poster copy untouched.
- Open questions: None.

## 2026-06-02

- User request: Move Method Overview before the Global Tracking Whole-Body Controller section.
- Files changed: `index.html`
- What changed: Reordered the page so Method appears after Abstract and before Tracking, and updated the top navigation order to match.
- Open questions: None.

## 2026-06-02

- User request: Comment out the Acknowledgement section instead of deleting it because it may be needed later.
- Files changed: `index.html`, `script.js`
- What changed: Commented out the Acknowledgement nav link, footer markup, contact data, `renderContact` function, and `renderContact()` initialization call while keeping the code available for restoration.
- Open questions: None.

## 2026-06-04

- User request: Remove the Highlights column from Abstract and make demo videos preserve poster title/text below the media.
- Files changed: `index.html`, `script.js`, `styles.css`
- What changed: Removed the Abstract section Highlights card and `coreMessages` rendering, changed demo media rendering to a two-part frame with a 70% media region and 30% caption region, and kept `posterTitle`/`posterText` visible even when a real video or embed is loaded.
- Open questions: None.

## 2026-06-04

- User request: Make the single Abstract section easier to read after removing Highlights.
- Files changed: `styles.css`
- What changed: Widened the Abstract container and rendered the abstract body in two text columns on desktop, falling back to one column on narrower screens.
- Open questions: None.

## 2026-06-04

- User request: Do not split Abstract into two columns; keep it as one large readable column.
- Files changed: `styles.css`
- What changed: Removed the two-column Abstract layout and changed it to a centered single text column with controlled line length.
- Open questions: None.

## 2026-06-04

- User request: Prepare Abstract text so selected phrases can be bolded/darkened, and provide an example.
- Files changed: `script.js`, `styles.css`
- What changed: Changed Abstract rendering to `innerHTML`, added `.text-strong`, and marked two `HoLMaN` mentions as example emphasized phrases.
- Open questions: Only use this HTML-emphasis pattern for trusted static copy in `script.js`.

## 2026-06-04

- User request: Make the four Loco-Manipulation Skills task tabs lay out symmetrically as two rows and two columns.
- Files changed: `styles.css`
- What changed: Changed `.demo-task-tabs` from wrapping flex layout to a centered two-column grid with equal-width buttons, falling back to one column on mobile.
- Open questions: None.

## 2026-06-04

- User request: Make all four Loco-Manipulation task tab boxes the same size.
- Files changed: `styles.css`
- What changed: Changed the tab grid columns to equal fractions and made each tab a centered grid item with a shared minimum height, centered text, and consistent line height.
- Open questions: None.

## 2026-06-04

- User request: Change the demo video/text split from 70/30 to 80/20 and remove the unnecessary Watch Demo button.
- Files changed: `script.js`, `styles.css`
- What changed: Updated demo frame rows to an 8:2 media/caption split and removed `demo-play` button creation, styling, and Watch Demo/Add Media URL text.
- Open questions: None.

## 2026-06-04

- User request: Leave an interface for adding images or videos to Method Overview steps 1 and 2.
- Files changed: `index.html`, `script.js`, `styles.css`
- What changed: Added optional `imageUrl`, `videoUrl`, `embedUrl`, and `mediaAlt` fields to the first two method steps, added method media rendering for images/videos/embeds, and styled media-enabled method steps with responsive layout.
- Open questions: Fill the media fields once final figures or videos are ready.

## 2026-06-05

- User request: Change Method Overview subsections with media from left-right layout to vertical layout.
- Files changed: `styles.css`
- What changed: Updated `.method-step.has-media` so the step number, text, and media stack vertically, with the media centered below the copy.
- Open questions: None.

## 2026-06-05

- User request: Make the Human Data Collection method video autoplay and loop inline instead of requiring a click.
- Files changed: `script.js`
- What changed: Updated method-step local video rendering to use `autoplay`, `loop`, `muted`, and `playsInline`, and removed manual controls.
- Open questions: None.

## 2026-06-05

- User request: Make the Research Summary media block compatible with both images and videos.
- Files changed: `script.js`, `styles.css`
- What changed: Added `imageUrl` and `imageAlt` to `siteData.featured`, added image rendering after embed/video checks, and styled `.video-frame img` to fill the media frame without cropping.
- Open questions: None.

## 2026-06-05

- User request: Fix the green-looking top/bottom bands around the Method Overview step 02 image.
- Files changed: `script.js`, `styles.css`
- What changed: Added media-type classes for method embeds/videos/images, and made method images render at their natural aspect ratio with transparent background instead of forcing the 16:9 media container.
- Open questions: None.

## 2026-06-04

- User request: Reduce the text-area share in Global Tracking video cards because short descriptions made the card feel empty.
- Files changed: `styles.css`
- What changed: Changed tracking cards to a 3:1 media/body grid, reduced text padding and font sizes, and set tracking videos to contain within a black media area.
- Open questions: None.

## 2026-06-04

- User request: Make Global Tracking videos fill the media frame instead of showing black borders.
- Files changed: `styles.css`
- What changed: Changed tracking video `object-fit` from `contain` to `cover`.
- Open questions: None.

## 2026-06-09

- User request: Add a Results and Analysis section below Demos with three quantitative result figures in one row and bullet-point key findings.
- Files changed: `index.html`, `script.js`, `styles.css`
- What changed: Added a Results nav item and section after Demos, centralized placeholder result figure/caption/finding content in `siteData.results`, rendered three result figure cards plus a Key Findings bullet list, and styled the figures as a desktop three-column row with mobile stacking.
- Open questions: Replace the placeholder result figure paths, captions, and findings once final experiment plots are ready.

## 2026-06-09

- User request: Increase the Results and Analysis Key Findings heading and bullet-point font sizes.
- Files changed: `styles.css`
- What changed: Enlarged the Key Findings heading and added a Results-only bullet-list override with larger text, wider spacing, and readable line height.
- Open questions: None.

## 2026-06-09

- User request: Remove Results figure titles, use captions directly, and make the three-figure row slightly smaller.
- Files changed: `script.js`, `styles.css`
- What changed: Stopped rendering per-figure titles in `renderResults()`, centered captions directly below each image, and narrowed the Results figure grid to a 960px maximum width while keeping three columns on desktop.
- Open questions: None.

## 2026-06-09

- User request: Center each Results figure caption under its image and make the caption text heavier.
- Files changed: `styles.css`
- What changed: Updated Results figure captions to use main text color, centered alignment, and heavier font weight.
- Open questions: None.

## 2026-06-09

- User request: Make Results figure captions slightly smaller so each caption is more likely to fit on one line.
- Files changed: `styles.css`
- What changed: Reduced Results figure caption font size while preserving centered alignment and heavier weight.
- Open questions: None.

## 2026-06-09

- User request: Reduce Results figure captions further because the third caption still wrapped to two lines.
- Files changed: `styles.css`
- What changed: Reduced Results figure caption font size again, prevented wrapping on desktop, and restored normal wrapping on mobile to avoid overflow.
- Open questions: None.

## 2026-06-09

- User request: Explain why Key Findings bullets did not support `<strong class="text-strong">...</strong>` emphasis and enable that behavior.
- Files changed: `script.js`
- What changed: Changed Results Key Findings rendering from `textContent` to `innerHTML`, matching the Abstract text pattern so trusted static emphasis markup works.
- Open questions: Only use this HTML-emphasis pattern for trusted static copy in `script.js`.

## 2026-06-09

- User request: Fix a Results Key Findings string that broke rendering when adding bold text.
- Files changed: `script.js`
- What changed: Corrected the emphasized finding to use single quotes around the JavaScript string and a valid `<strong class="text-strong">...</strong>` tag, then removed numeric-only placeholder findings.
- Open questions: Add the remaining final Key Findings as full sentences when ready.

## 2026-06-09

- User request: Make the Results Key Findings bullet-point text smaller because it looked too large.
- Files changed: `styles.css`
- What changed: Reduced Results-only bullet-list font size from `1.15rem` to `1rem` and tightened line height slightly.
- Open questions: None.

## 2026-06-09

- User request: Reduce the Results Key Findings bullet-point text one more size.
- Files changed: `styles.css`
- What changed: Reduced Results-only bullet-list font size from `1rem` to `0.92rem` and slightly tightened line height.
- Open questions: None.

## 2026-06-09

- User request: Revert the Results Key Findings bullet-point text size to the previous version because `0.92rem` was too small.
- Files changed: `styles.css`
- What changed: Restored Results-only bullet-list font size to `1rem` and line height to `1.68`.
- Open questions: None.

## 2026-06-09

- User request: Make the Results Key Findings bullet-point text slightly larger than the restored size.
- Files changed: `styles.css`
- What changed: Increased Results-only bullet-list font size from `1rem` to `1.05rem` and adjusted line height to `1.7`.
- Open questions: None.

## 2026-06-09

- User request: Add an optional video interface under each Results Key Findings bullet point so evidence videos can be shown only when provided.
- Files changed: `script.js`, `styles.css`
- What changed: Converted Key Findings entries to support object data with `text`, `videoUrl`, `embedUrl`, and optional `videoPoster`; updated rendering to append a 16:9 video/embed below a finding only when a video URL is present; added Results-only media styling.
- Open questions: Fill `videoUrl` or `embedUrl` for any finding that should display evidence media.
