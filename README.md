# hng-stage-0-task

## Simple profile card static site.

## Files
- [index.html](index.html) — main page
- [about.html](about.html) — about page
- [contact.html](contact.html) — contact form page
- [index.css](index.css) — styles
- [index.js](index.js) — script that updates the time shown
- [contact.js](contact.js) — contact form handling (validates inputs, shows inline errors, sets a timestamp, and sends the form via EmailJS)
- amob.jpeg — avatar image used on the page

## Preview locally

1. Open directly
   - Download or clone the repo.
   - Double-click [index.html](index.html) or open it in your browser.

## What the script does
- index.js reads the DOM element with id="time" and appends the current milliseconds timestamp using the timeElement variable and the computed timeMilliseconds value.
- contact.js validates the contact form, displays inline error/success messages, adds a formatted timestamp, and submits via EmailJS.

## Notes
- No build step required.
- Ensure the image amob.jpeg (referenced in index.html) is present in the project root to display the avatar.
