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
guys can pick `in` / `undecided` / `out`. The state is stored as a
single record in a **public jsonbin.io bin** — the bin ID and an
"Update Bin"-only access key are hard-coded as `POLL_BIN_ID` and
`POLL_KEY` near the bottom of the inline `<script>` in `index.html`.
Reads are anonymous (public bin, `GET /v3/b/<id>/latest` with
`X-Bin-Meta: false`); writes send `X-Access-Key: <POLL_KEY>` on
`PUT /v3/b/<id>`. The key is intentionally write-only-on-this-bin,
so a leak just lets someone overwrite the votes — `git restore` from
history fixes that.

Earlier versions used jsonblob.com with the bin ID in the URL hash;
that was abandoned because jsonblob host-allowlists requests and
returned `403 host_not_allowed` to `trolito.github.io`.

Names, states, and bin config live as `POLL_NAMES`, `POLL_STATES`,
`POLL_BIN_ID`, `POLL_KEY`, and `POLL_BIN_URL` near the bottom of the
inline `<script>` in `index.html`.
