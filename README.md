# Find Nuclei Viewer

Browser-based viewer for OME-ZARR (OME-NGFF) microscopy data with GPU-accelerated rendering.

**Pre-release** · [Launch Viewer](https://find-nuclei.github.io) · [Documentation](https://find-nuclei.github.io/docs/) · [Watch Demos](https://find-nuclei.github.io/demos.html) · [Embed in Your Site](https://find-nuclei.github.io/publications.html)

---

## Features

**Opening data**

- **Local files, straight from disk.** No upload and no server. Browse ZARR folders on your own machine and the data never leaves it.
- **Remote URLs.** Anything served over HTTPS with CORS and range requests: S3, R2, GCS, Azure Blob, your own nginx.

**Looking at it**

- **Multi-channel display** with per-channel colour, contrast, gamma and histograms.
- **Auto-contrast from the pixel data**, percentile based (2% to 98%), one click per channel or all at once.
- **Grayscale and inverted modes.** Inverted flips the backgroud and pixel intensity, which prints well and makes a coloured mask overlay far easier to read.
- **Z-projection**: maximum, mean and minimum, over a Z-range you choose.
- **GPU-accelerated tiled rendering** via deck.gl WebGL, comfortable on images past 100,000 pixels a side.
- **HCS plates.** Well picker grid, field view and plate overview for 96, 384 and 1536-well screens.

**Working with it**

- **Annotations.** Polygons, lines, points and distance measurements, with areas and lengths in real units. Auto-saved to browser storage, exportable as CSV or GeoJSON.
- **Segmentation labels.** Load them from inside the ZARR or attach them from a local folder or a URL. Opacity, colour modes, drag to reorder.
- **Analytics and phenotyping.** Attach a measurements table and colour objects by any column, as a continuous heatmap or one colour per category. Filter by value, and build named phenotype groups out of those filters.
- **Annotation templates.** Reusable bundles of colour, class label and keyboard shortcut, applied to everything you draw next.
- **Shareable deep links.** The URL tracks zoom, position, channels and Z-slice as you work, Google Maps style. Copy it to hand someone the exact view.

**Throughout**

- **Privacy first, zero install.** Everything happens in your browser. No account, and no data sent anywhere.

---

## Documentation

Full guides at **[find-nuclei.github.io/docs](https://find-nuclei.github.io/docs/)**.

| | |
|---|---|
| [Getting Started](https://find-nuclei.github.io/docs/getting-started.html) | Open your first image |
| [Local Files](https://find-nuclei.github.io/docs/guides/local-files.html) · [Remote URLs](https://find-nuclei.github.io/docs/guides/remote-urls.html) · [Authenticated Sources](https://find-nuclei.github.io/docs/guides/authenticated-sources.html) | Getting data in |
| [Channels](https://find-nuclei.github.io/docs/guides/channels.html) · [HCS Plates](https://find-nuclei.github.io/docs/guides/hcs-plates.html) | Display and navigation |
| [Labels](https://find-nuclei.github.io/docs/guides/labels.html) · [Analytics & Phenotyping](https://find-nuclei.github.io/docs/guides/analytics-phenotyping.html) · [Analytics Data Format](https://find-nuclei.github.io/docs/guides/analytics-format.html) | Segmentation and measurements |
| [Annotations](https://find-nuclei.github.io/docs/guides/annotations.html) · [Templates](https://find-nuclei.github.io/docs/guides/templates.html) | Drawing regions |
| [Sharing Views](https://find-nuclei.github.io/docs/guides/sharing.html) · [Embedding](https://find-nuclei.github.io/docs/guides/embedding.html) · [Data Server](https://find-nuclei.github.io/docs/guides/data-server.html) | Publishing and hosting |

---

## Live Examples

Click any link to open directly in the viewer:

| Example | Description |
|---------|-------------|
| [Nuclear segmentation, labels on](https://find-nuclei.github.io/?url=https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0062A/6001240.zarr&tab=labels&l=src0_0) | Image plus its segmentation mask, coloured per object |
| [Chicken Embryo MIP](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.5%2Fidr0066%2FExpD_chicken_embryo_MIP.ome.zarr&z=0&channels=0%3Aon%3AFFFFFF%3A0%3A90&zoom=-3.52&center=3255%2C4489) | v0.5 sharded, single channel |
| [Zebrafish Lateral Line](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0079A%2Fidr0079_images.zarr&z=71&channels=0%3Aon%3A00FF00%3A8%3A90%2C1%3Aon%3AFF0000%3A7%3A80&zoom=-0.57&center=792%2C394) | 3D multi-channel with labels |
| [HCS Plate 190129](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.5%2Fidr0090%2F190129.zarr&z=15&channels=0%3Aoff%3AFFFFFF%3A617%3A1676%2C1%3Aon%3A0000FF%3A403%3A441%2C2%3Aoff%3A00FF00%3A109%3A148%2C3%3Aon%3AFF0000%3A113%3A254%2C4%3Aon%3A00FF00%3A132%3A720&zoom=-1.38&center=1024%2C1022) | v0.5 multi-well plate, 5 channels |
| [HCS Plate 9512](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0072B%2F9512.zarr&z=0&channels=0%3Aon%3A00FF00%3A24%3A1835%2C1%3Aon%3A0000FF%3A6%3A843&zoom=-0.38&center=673%2C509) | v0.4 multi-well plate, 2 channels |
| [Large Image 9822152](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0083A%2F9822152.zarr&z=0&channels=0%3Aon%3Affffff%3A0%3A5193&zoom=-7.08&center=72192%2C46592) | 144K×93K pixels, multi-resolution |
| [RGB Image 9798462](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0073A%2F9798462.zarr&z=0&channels=0%3Aon%3AFF0000%3A91%3A246%2C1%3Aon%3A00FF00%3A85%3A246%2C2%3Aon%3A0000FF%3A101%3A246&zoom=-4.39&center=10558%2C8217) | 3-channel RGB, 21K×16K |

All datasets from the [Image Data Resource (IDR)](https://idr.openmicroscopy.org/), read straight from its public bucket. Nothing is copied or re-hosted.

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

- [Live Demo](https://find-nuclei.github.io/publications.html): see it in action with IDR datasets
- [Embedding Guide](https://find-nuclei.github.io/docs/guides/embedding.html): full attribute reference and examples

---

## Use Cases

- **Digital Pathology**: whole slide imaging (WSI) for H&E and IHC slides
- **Spatial Biology & Multiplexed Imaging**: multi-channel IF, CODEX, MERFISH, seqFISH
- **High-Content Screening**: automated 96/384/1536-well plate imaging
- **Confocal & Light-Sheet Microscopy**: Z-stacks and time-lapse live-cell imaging
- **Electron Microscopy**: serial-section TEM and volume EM for connectomics
- **Super-Resolution Microscopy**: STORM, PALM, SIM
- **Spatial Transcriptomics**: Visium, Slide-seq, MERSCOPE
- **Organoid & Spheroid Imaging**: 3D cell culture with Z-stack support
- **Live-Cell Imaging**: dynamic cellular processes over time
- **Tissue Clearing & 3D Imaging**: CLARITY, iDISCO

---

## Requirements

- **Format:** OME-ZARR (OME-NGFF) v0.4 and v0.5, including sharded stores, plus `bioformats2raw` layouts.
- **Any modern browser** for remote URLs, including Firefox and Safari.
- **Chrome or Edge** to open files and folders from disk. That path uses the File System Access API, which the other browsers do not implement yet.

---

## Privacy

All data is processed locally in your browser. No files are uploaded to any server.

---

## License

Copyright (c) 2026 Find Nuclei. All rights reserved.

For licensing inquiries: info@find-nuclei.com

---

## Contact

- **GitHub:** [Find-Nuclei/find-nuclei.github.io](https://github.com/Find-Nuclei/find-nuclei.github.io)
- **Issues:** [Report a bug](https://github.com/Find-Nuclei/find-nuclei.github.io/issues)
- **Email:** info@find-nuclei.com
