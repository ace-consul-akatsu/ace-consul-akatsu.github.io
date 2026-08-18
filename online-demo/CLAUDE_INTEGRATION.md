# CLAUDE_INTEGRATION — AZRAS Online Demo

## Purpose
Integrate this folder into the existing `ace-consul-akatsu.github.io` site without changing the calculation/data semantics. The demo is a static, read-only viewer.

## Placement
Recommended: copy the entire folder to repository root as `/online-demo/`. Add an “Online Demo” navigation/button on the existing Japanese and English pages that links to `/online-demo/`.

## Full-version download
`index.html` currently points the Full Version button to `../downloads/AZRAS_System_v1.0.0.zip`. Change only this URL if the final ZIP is hosted elsewhere. Do not alter viewer data logic for this.

## Non-negotiable data contracts
1. Core Project JSON schema is `3.0`.
2. Method IDs MUST remain: `azras`, `wood_frame`, `rc_frame`.
3. Source of truth: `contracts/COMPARE_INTERFACE_CONTRACT.json` and `data/construction_methods.json`.
4. This viewer MUST remain read-only; no write-back to project JSON.
5. Do not label detailed Module 4/5/6 metrics as city-specific 7-city results. Regional derivative JSON contains Module 10 snapshots but not saved Module 4/5/6. The desktop Compare itself separates regional comparison from base-project detailed comparisons.

## Styling
The demo already uses AZRAS purple `#783278`, responsive layout, and JP/EN toggle. You may adapt typography/header/footer to the existing site, but preserve IDs/classes used by `js/app.js` or update JS consistently.

## GitHub Pages
No server-side component is required. All paths are relative and the viewer uses static `fetch()` requests. Keep the directory structure intact.

## Data size / publication
Only the 21 regional sample JSON files and 3 base sample JSON files needed by this viewer are included. `.bak`, CSV exports, internal executable/build files, and unrelated datasets are excluded.

## Acceptance checks after integration
- `/online-demo/` opens without console 404 errors.
- Sapporo, Berlin, Dubai, Los Angeles, Oslo, Sydney, Bangkok all load.
- All three methods display for every city.
- Grid CO2 factor audit says OK for each city when source values agree.
- Detail tab shows Module 4/5/6 results from the three base Project JSON files.
- Language toggle works.
- Full Version button downloads/opens the intended ZIP URL.
