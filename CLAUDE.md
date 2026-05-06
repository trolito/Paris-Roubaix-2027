# Paris-Roubaix 2027 trip page

Static one-page travel plan for the April 2027 Paris-Roubaix trip:
- `index.html` — the page (Danish only)
- `schedule.json` — the day-by-day itinerary, fetched at runtime

## Updated timestamp

The hero contains an `<span class="updated-stamp">` that the page
populates **at runtime** from the GitHub API — it pulls the timestamp
of the latest commit on `trolito/paris-roubaix-2027` and renders it as
`Opdateret <D>. <måned> kl. HH:MM` in Europe/Copenhagen wall-clock
time. So the stamp updates automatically after any push (Claude or
manual edits via github.com).

The hard-coded text inside the `<span>` is a **fallback** shown only
when the GitHub API is unreachable or rate-limited (60 req/h per IP
unauthenticated). When you change `index.html` or `schedule.json`,
refresh that fallback text too with
`TZ='Europe/Copenhagen' date '+%-d %H:%M'` plus the Danish month name.
