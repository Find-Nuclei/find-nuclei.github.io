# Find Nuclei Viewer

Browser-based viewer for OME-ZARR (OME-NGFF) microscopy data with GPU-accelerated rendering.

**Pre-release** — [Launch Viewer](https://find-nuclei.github.io) · [Watch Demos](https://find-nuclei.github.io/demos.html) · [Embed in Your Site](https://find-nuclei.github.io/publications.html)

---

## Features

- **Open local files directly from disk** — no upload, no server. Browse ZARR folders from your computer. All data stays on your machine.
- **Shape annotations with local persistence** — draw polygons, lines, points, and distance measurements. Auto-saved to browser storage. Export as CSV spreadsheet or GeoJSON.
- **Segmentation label overlays** — load labels from the ZARR or link from your local or network drive. Adjustable opacity, color modes, drag-to-reorder rendering.
- **Shareable deep links** — URL tracks zoom, position, channels, Z-slice in real-time (Google Maps-style). Copy the browser URL to share an exact view.
- **Multi-channel visualization** — custom colors, intensity ranges, per-channel histograms.
- **Auto-contrast from pixel data** — one-click percentile-based (2%–98%) intensity optimization per channel.
- **Z-projection** — max, mean, and min intensity projections with configurable Z-range.
- **HCS plate navigation** — well picker grid, field view, plate overview for high-content screening datasets.
- **GPU-accelerated multi-resolution rendering** — handles 100K+ pixel images with tiled loading via deck.gl WebGL.
- **Privacy-first, zero-install** — all processing in your browser. No data leaves your machine. No account required.

---

## Live Examples

Click any link to open directly in the viewer:

| Example | Description |
|---------|-------------|
| [Chicken Embryo MIP](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.5%2Fidr0066%2FExpD_chicken_embryo_MIP.ome.zarr&z=0&channels=0%3Aon%3AFFFFFF%3A0%3A90&zoom=-3.52&center=3255%2C4489) | v0.5 sharded, single channel |
| [Zebrafish Lateral Line](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0079A%2Fidr0079_images.zarr&z=71&channels=0%3Aon%3A00FF00%3A8%3A90%2C1%3Aon%3AFF0000%3A7%3A80&zoom=-0.57&center=792%2C394) | 3D multi-channel with labels |
| [HCS Plate 190129](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.5%2Fidr0090%2F190129.zarr&z=15&channels=0%3Aoff%3AFFFFFF%3A617%3A1676%2C1%3Aon%3A0000FF%3A403%3A441%2C2%3Aoff%3A00FF00%3A109%3A148%2C3%3Aon%3AFF0000%3A113%3A254%2C4%3Aon%3A00FF00%3A132%3A720&zoom=-1.38&center=1024%2C1022) | v0.5 multi-well plate, 5 channels |
| [HCS Plate 9512](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0072B%2F9512.zarr&z=0&channels=0%3Aon%3A00FF00%3A24%3A1835%2C1%3Aon%3A0000FF%3A6%3A843&zoom=-0.38&center=673%2C509) | v0.4 multi-well plate, 2 channels |
| [Large Image 9822152](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0083A%2F9822152.zarr&z=0&channels=0%3Aon%3Affffff%3A0%3A5193&zoom=-7.08&center=72192%2C46592) | 144K×93K pixels, multi-resolution |
| [RGB Image 9798462](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0073A%2F9798462.zarr&z=0&channels=0%3Aon%3AFF0000%3A91%3A246%2C1%3Aon%3A00FF00%3A85%3A246%2C2%3Aon%3A0000FF%3A101%3A246&zoom=-4.39&center=10558%2C8217) | 3-channel RGB, 21K×16K |

All datasets from the [Image Data Resource (IDR)](https://idr.openmicroscopy.org/).

---

## Embeddable Viewer for Publications

Embed an interactive OME-ZARR viewer in any web page with two lines of HTML:

```html
<script src="https://find-nuclei.github.io/embed/v1/viewer.js"></script>

<find-nuclei-viewer
  url="https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0062A/6001240.zarr"
  labels="on"
  width="100%"
  height="500"
></find-nuclei-viewer>
```

No iframe, no build step, no framework required. Works in any CMS (WordPress, Drupal, Ghost, PubPub). Full style isolation via Shadow DOM.

- [Live Demo](https://find-nuclei.github.io/publications.html) — see it in action with IDR datasets
- [Embedding Guide](https://find-nuclei.github.io/docs/guides/embedding.html) — full attribute reference and examples

---

## Use Cases

- **Digital Pathology** — whole slide imaging (WSI) for H&E and IHC slides
- **Spatial Biology & Multiplexed Imaging** — multi-channel IF, CODEX, MERFISH, seqFISH
- **High-Content Screening** — automated 96/384/1536-well plate imaging
- **Confocal & Light-Sheet Microscopy** — Z-stacks and time-lapse live-cell imaging
- **Electron Microscopy** — serial-section TEM and volume EM for connectomics
- **Super-Resolution Microscopy** — STORM, PALM, SIM
- **Spatial Transcriptomics** — Visium, Slide-seq, MERSCOPE
- **Organoid & Spheroid Imaging** — 3D cell culture with Z-stack support
- **Live-Cell Imaging** — dynamic cellular processes over time
- **Tissue Clearing & 3D Imaging** — CLARITY, iDISCO

---

## Requirements

- **Browser:** Chrome or Edge (full support with local file access). Firefox for remote URLs only.
- **Format:** OME-ZARR (OME-NGFF) v0.4 and v0.5, including sharded stores

---

## Privacy

All data is processed locally in your browser. No files are uploaded to any server.

---

## License

Copyright (c) 2025 Find Nuclei. All rights reserved.

For licensing inquiries: info@find-nuclei.com

---

## Contact

- **GitHub:** [Find-Nuclei/find-nuclei.github.io](https://github.com/Find-Nuclei/find-nuclei.github.io)
- **Issues:** [Report a bug](https://github.com/Find-Nuclei/find-nuclei.github.io/issues)
- **Email:** info@find-nuclei.com
