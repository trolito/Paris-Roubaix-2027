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

## Poll ("Hvem er med?") — CLOSED / read-only

The bottom of the page hosts a poll where each of the 8 named guys
could pick `in` / `undecided` / `out`. **It is now closed / read-only,
kept for reference only.** The page still reads the last recorded
state from a **public jsonbin.io bin** (anonymous `GET /v3/b/<id>/latest`
with `X-Bin-Meta: false`) and displays each guy's final status, but the
vote buttons, the write path (`PUT /v3/b/<id>`), and the "Update Bin"
access key (`POLL_KEY`) have all been removed — nothing on the page can
change the stored result any more. To reactivate, restore the write
path and a `POLL_KEY` from git history.

Earlier versions used jsonblob.com with the bin ID in the URL hash;
that was abandoned because jsonblob host-allowlists requests and
returned `403 host_not_allowed` to `trolito.github.io`.

Names, states, and bin config live as `POLL_NAMES`, `POLL_STATES`,
`POLL_BIN_ID`, and `POLL_BIN_URL` near the bottom of the inline
`<script>` in `index.html`.
