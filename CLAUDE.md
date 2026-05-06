# Paris-Roubaix 2027 trip page

Static one-page travel plan for the April 2027 Paris-Roubaix trip:
- `index.html` — the page (Danish only)
- `schedule.json` — the day-by-day itinerary, fetched at runtime

## Updated timestamp

The hero contains an `<span class="updated-stamp">` reading
`Opdateret <D>. <måned> kl. HH:MM`. **Every time you change `index.html`
or `schedule.json`, refresh this stamp** to the current date/time
(Danish month name, lowercase; 24-hour clock). Use `date '+%-d %H:%M'`
plus the Danish month name.
