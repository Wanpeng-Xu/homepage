# Academic homepage

A responsive, single-page academic homepage. No install or build step.

## Files

| File | Role |
| --- | --- |
| `content.js` | **All content** — name, links, bio, education, research themes, publications, courses, talks, awards. This is the only file you normally edit. |
| `index.html` | Page skeleton (profile block and section containers). Edit only to add or reorder sections. |
| `site.js` | Renders `content.js` into the skeleton. Sections with no content are removed automatically. |
| `styles.css` | Design tokens, layout, responsive rules. |
| `assets/` | Portrait (`portrait.jpg`) and CV (`cv.pdf`). Set their paths in `content.js`. |
| `_old/` | The previous version of the site, kept for reference. Delete when no longer needed. |

## Update content

- Publications: add an object to `publications` with an `id`, `year`, `title`, `authors` (array), `venue`, and `links` (label → URL). Your own name is bolded automatically.
- Research themes: reference publications by `id` in `papers`; their `short` venue tags (e.g. "EACL '26") are shown as links under the theme.
- Courses are grouped by `term`, talks are sorted by `date`, awards by `year`.
- Leave any value empty to hide it. Only `http(s)://` and `mailto:` links are rendered.

## Preview locally

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173.

## Publish on GitHub Pages

Push the contents of this directory to the root of a GitHub Pages repository and enable Pages from that branch. `.nojekyll` makes GitHub serve the files as-is. Add a `CNAME` file to use a custom domain.
