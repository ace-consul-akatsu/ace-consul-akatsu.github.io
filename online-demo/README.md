# AZRAS Online Demo v1.0

Read-only web viewer built from AZRAS Compare v1.1.37 rules and Core Project JSON Schema 3.0 sample files.

## Run locally
Because the viewer uses `fetch()`, open it through a local HTTP server, not `file://`. Example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/online-demo/` (or run the command inside this folder and open `/`).

## Scope
- Regional (7-city): annual energy, annual operational CO2, electricity CO2 factor from `regional_analysis.module10_snapshot`.
- Detailed: lifecycle CO2, construction cost, nominal/simple payback, and discounted cumulative cashflow from the base Project JSON that contains saved Module 4/5/6 results.
- No recalculation of building physics, 8760-hour analysis, LCA, or business analysis in the browser.
- No write-back to source JSON.

## Method IDs
Do not rename: `azras`, `wood_frame`, `rc_frame`. See `data/construction_methods.json`.
