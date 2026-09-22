# Project instructions

Keep the light design: white page, deep navy text, teal/aurora accents, warm ochre
only for prices. Dark islands (final CTA, footer, the large photo card) carry the
`on-dark` class, which re-maps the same custom properties — never fork a component
for the dark variant. Make surgical changes. Prefer simple static HTML, CSS and
JavaScript; do not add a framework unless requested.

- Main content and page composition: dist/app.js.
- Shared styles and responsive behavior: dist/style.css. Design tokens live in
  `:root` at the top, with the dark overrides in `.on-dark` right below — change
  those before writing new rules.
- Hero: photo occupies the right 44%, the left stays clean white for the headline,
  and `.hero__specband` is a full-width white strip pinned to the bottom. Keep the
  headline inside the white column.
- Typography: Unbounded (headings), Onest (body/UI), JetBrains Mono (labels,
  section indices, tables). All loaded from Google Fonts in the page shells.
- Icons: one set in dist/app.js. Interface marks come from Lucide (ISC);
  production and industry marks are drawn for this project on the same 24×24
  grid. Keep stroke-width 1.6 and round caps. Check a new icon at 23px before
  keeping it — several read wrong at that size.
- Atlas photos: every atlas cell is square (1536×1024, 3×2). A `.photo` box
  taller than it is wide will show neighbouring cells; give it `--z` headroom or
  keep the box landscape.
- Routes: dist/*/index.html. Keep all eight shells aligned when changing the shell.
- Assets are local in dist/assets. Use original brand SVG files; do not redraw
  real brand marks (this does not apply to the project's own "Северный Свет"
  mark, which is inline SVG in `brandMark`).
- Generated portfolio visuals are illustrative, not real photographs of completed work.
- Forms open a prepared email; do not claim server delivery.
- Start with npm run dev, validate with npm run check.
- Deployment config for Vercel is in vercel.json; do not publish unless asked.
- KISS, DRY, YAGNI. Match existing style. Ask one question if a material requirement is ambiguous.
