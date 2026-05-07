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

## Poll ("Hvem er med?")

The bottom of the page hosts a shared poll where each of the 8 named
guys can pick `in` / `undecided` / `out`. The state is stored in a
single JSON blob on **jsonblob.com** (no auth, no API key) and the
blob ID is kept in the URL hash (`#poll=<id>`) plus `localStorage`
(`paris-roubaix-2027:poll-blob-id`) — the URL hash is the source of
truth so the link can be shared.

If neither the URL hash nor `localStorage` has an ID, the page
silently `POST`s a fresh blob and pins the new ID into the URL +
`localStorage`. The first visitor effectively bootstraps the poll;
everyone else should open the URL **with** the `#poll=…` hash so they
land on the same blob (otherwise they'd create an orphan).

Names, states, and the API base are defined as `POLL_NAMES`,
`POLL_STATES`, and `POLL_API` near the bottom of the inline `<script>`
in `index.html`.
