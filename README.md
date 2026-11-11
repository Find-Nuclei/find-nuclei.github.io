# Find Nuclei Viewer

Open the files your instruments write, in your browser: microscopy images, HCS plates and whole-slide images. Built on OME-Zarr (OME-NGFF), with GPU-accelerated rendering. Nothing to convert, nothing to upload.

**Pre-release** · [Launch Viewer](https://find-nuclei.github.io) · [Documentation](https://find-nuclei.github.io/docs/) · [Watch Demos](https://find-nuclei.github.io/demos.html) · [Embed in Your Site](https://find-nuclei.github.io/publications.html)

---

## Supported Formats

| Format | Kind | What you open | Views | [Zip without compression](https://find-nuclei.github.io/docs/guides/local-files.html#zip-without-compression) |
|---|---|---|---|---|
| [OME-Zarr](https://find-nuclei.github.io/docs/guides/ome-zarr.html) | Microscopy | A folder, or its address | Images in 2D and 3D. Plates in Plate, Well and Field view | Yes, as one `.ozx` or `.zip` file |
| [OME-TIFF](https://find-nuclei.github.io/docs/guides/ome-tiff.html) | Microscopy | One file | Images in 2D and 3D, with Z and T | Not needed |
| [Zeiss CZI](https://find-nuclei.github.io/docs/guides/zeiss-czi.html) | Microscopy | One file, or a folder of one file per field | Images in 2D and 3D. Plates in Field view | Yes, one CZI per field |
| [Opera Phenix / Harmony](https://find-nuclei.github.io/docs/guides/opera-phenix-plates.html) | Plates | The measurement folder | Field view | Yes, compressed or not |
| [Yokogawa CellVoyager](https://find-nuclei.github.io/docs/guides/yokogawa-plates.html) | Plates | The measurement folder | Field view | Yes, compressed or not |
| [Aperio SVS](https://find-nuclei.github.io/docs/guides/aperio-svs.html) | Pathology | One file | Slide in 2D | Not needed |
| [Hamamatsu NDPI](https://find-nuclei.github.io/docs/guides/hamamatsu-ndpi.html) | Pathology | One file, also over 4 GB | Slide in 2D | Not needed |
| [Leica SCN](https://find-nuclei.github.io/docs/guides/leica-scn.html) | Pathology | One file, every region | Slide in 2D | Not needed |
| [Philips TIFF](https://find-nuclei.github.io/docs/guides/philips-tiff.html) | Pathology | One file | Slide in 2D | Not needed |
| [Akoya QPTIFF](https://find-nuclei.github.io/docs/guides/akoya-qptiff.html) | Pathology | One file, or an inForm `.tif` export | Slide in 2D, brightfield or multiplex | Not needed |
| [3DHISTECH MRXS](https://find-nuclei.github.io/docs/guides/mrxs.html) | Pathology | The `.mrxs` file with its folder | Slide in 2D | Yes |
| [DICOM WSI](https://find-nuclei.github.io/docs/guides/dicom-wsi.html) | Pathology | A folder of `.dcm` files | Slide in 2D | Yes |

Each opens from your disk or by its address. Details and limits: [Supported Formats](https://find-nuclei.github.io/docs/guides/supported-formats.html).

---

## Features

**Opening data**

- **Local files, straight from disk.** No upload and no server. Drop a file, or pick it under **Open Image**. One file opens in any browser: a `.czi`, an OME-TIFF, a slide (`.svs`, `.ndpi`, `.scn`, Philips `.tiff`, `.qptiff`), or a zip of a dataset, a plate or a folder slide. Folders open in Chrome and Edge. Drop one that holds several images, of any mix of formats, and pick from the list. The data never leaves your machine. Guide: [Local Files](https://find-nuclei.github.io/docs/guides/local-files.html).
- **Remote URLs.** Anything served over HTTPS with CORS and range requests: S3, R2, GCS, Azure Blob, your own nginx. Only the parts on screen are read. Guide: [Remote URLs](https://find-nuclei.github.io/docs/guides/remote-urls.html).
- **Private storage.** A presigned link or a Bearer token opens files from your own bucket or server, read straight by your browser. Guide: [Private Images and Slides](https://find-nuclei.github.io/docs/guides/authenticated-sources.html).
- **`s3://` and `gs://` addresses.** Paste `s3://bucket/path` or `gs://bucket/path` of a public bucket and the image or plate opens, as from its https address.
- **Opera Phenix and Yokogawa CellVoyager plates.** Open an Opera Phenix plate exported by Harmony (V5 `Index.idx.xml` or V6 `Index.xml`), or a Yokogawa CellVoyager CV8000 or CV7000 measurement folder, straight from its TIFFs, by URL, `s3://`, a local folder, or a zip of the folder in any browser. Nothing is converted. Guides: [Opera Phenix Plates](https://find-nuclei.github.io/docs/guides/opera-phenix-plates.html), [Yokogawa CellVoyager Plates](https://find-nuclei.github.io/docs/guides/yokogawa-plates.html).
- **Zeiss CZI files.** Open a `.czi` from ZEN as it is, by URL, `s3://` or from your disk: Z-stacks, time series, scenes, mosaics, stored pyramids and Celldiscoverer 7 plates. Plates saved as one file per field open from a folder or a zip made without compression. Guide: [Zeiss CZI files](https://find-nuclei.github.io/docs/guides/zeiss-czi.html).
- **Whole-slide images.** One free viewer for SVS, NDPI, SCN, MRXS, QPTIFF and DICOM WSI. Aperio, Hamamatsu, Leica, Philips, 3DHISTECH, Akoya and DICOM slides open as the scanner saved them, with label and macro pictures. Multiplex fluorescence opens with every channel named and coloured. See the table above.
- **OME-TIFF.** Every channel, Z and time, and 3D for a Z-stack. Guide: [OME-TIFF](https://find-nuclei.github.io/docs/guides/ome-tiff.html).

**Looking at it**

- **Multi-channel display** with per-channel colour, contrast, gamma and histograms.
- **Auto-contrast from the pixel data**, percentile based (2% to 98%), one click per channel or all at once.
- **Grayscale and inverted modes.** Inverted flips the background and pixel intensity, which prints well and makes a coloured mask overlay far easier to read.
- **Z-projection**: maximum, mean and minimum, over a Z-range you choose.
- **3D.** Turn a z-stack around as a volume, one click from the flat view. Two looks: MIP for bright, sparse signal, Composite for solid shapes. Side views (XY, XZ and YZ) sit next to it, linked by one crosshair. Your channels and annotations come along, and plate fields open in 3D too. Desktop browsers with WebGPU. Guide: [3D Rendering](https://find-nuclei.github.io/docs/guides/3d-rendering.html).
- **Anatomical orientation.** When an image records it (OME-NGFF RFC-4), 3D labels the axes superior and inferior, left and right, anterior and posterior, and shows the planes the radiological way.
- **GPU-accelerated tiled rendering** via deck.gl WebGL, comfortable on images past 100,000 pixels a side.
- **HCS plates.** Well picker grid, field view and plate overview for 96, 384 and 1536-well screens.

**Working with it**

- **Annotations.** Polygons, lines, points and distance measurements, with areas and lengths in real units. Auto-saved to browser storage, exportable as CSV, GeoJSON or OME-XML. Import GeoJSON, OME-XML, Aperio XML, ASAP XML and NDP.view files, and send a link that opens a slide with its annotations. Guide: [Exchanging Annotations](https://find-nuclei.github.io/docs/guides/annotation-exchange.html).
- **Segmentation labels.** Load them from inside the ZARR or attach them from a local folder or a URL. Opacity, colour modes, drag to reorder.
- **Analytics and phenotyping.** Attach a measurements table and colour objects by any column, as a continuous heatmap or one colour per category. Filter by value, and build named phenotype groups out of those filters. See it on [a plate with results](https://find-nuclei.github.io/?url=https%3A%2F%2Ffind-nuclei.github.io%2Fexamples%2Fbbbc013%2FBBBC013.zarr&analyticsUrl=https%3A%2F%2Ffind-nuclei.github.io%2Fexamples%2Fbbbc013%2FBBBC013.zarr.analytics%2F0b1e47a7-stardist-cellpose%2F&tab=labels&c=0%3Aon%3A808080%3A3%3A134%3A1.00%2C1%3Aon%3AFFFFFF%3A1%3A100%3A1.00&v=plate&w=A%2F1&f=0&zm=0.77&xy=4446%2C2322&cm=C&inv=t&bg=%23ffffff&l=ext%3Acells%2Cext%3Anuclei&lv=cells%3Acategory%3Aphenotype_class&ls=cells%3A0.5%3Afc%2Cnuclei%3A1%3Afc%3A808080).
- **Annotation templates.** Reusable bundles of colour, class label and keyboard shortcut, applied to everything you draw next.
- **Shareable deep links.** The URL tracks zoom, position, channels and Z-slice as you work, Google Maps style. With analysis results, it also keeps which masks are shown and how they are coloured. Copy it to hand someone the exact view.

**Throughout**

- **Privacy first, zero install.** Everything happens in your browser. No account, and no data sent anywhere.

---

## Documentation

Full guides at **[find-nuclei.github.io/docs](https://find-nuclei.github.io/docs/)**.

| | |
|---|---|
| [Getting Started](https://find-nuclei.github.io/docs/getting-started.html) | Open your first image |
| [Supported Formats](https://find-nuclei.github.io/docs/guides/supported-formats.html) · [Pixel Size and Magnification](https://find-nuclei.github.io/docs/guides/calibration.html) | Every format, and how it opens |
| [Local Files](https://find-nuclei.github.io/docs/guides/local-files.html) · [Remote URLs](https://find-nuclei.github.io/docs/guides/remote-urls.html) · [Private Images and Slides](https://find-nuclei.github.io/docs/guides/authenticated-sources.html) · [Data Server](https://find-nuclei.github.io/docs/guides/data-server.html) | Where your data lives |
| [OME-Zarr](https://find-nuclei.github.io/docs/guides/ome-zarr.html) · [OME-TIFF](https://find-nuclei.github.io/docs/guides/ome-tiff.html) · [Zeiss CZI](https://find-nuclei.github.io/docs/guides/zeiss-czi.html) | Microscopy formats |
| [OME-Zarr Plates](https://find-nuclei.github.io/docs/guides/hcs-plates.html) · [Opera Phenix](https://find-nuclei.github.io/docs/guides/opera-phenix-plates.html) · [Yokogawa CellVoyager](https://find-nuclei.github.io/docs/guides/yokogawa-plates.html) | High-content screening plates |
| [Aperio SVS](https://find-nuclei.github.io/docs/guides/aperio-svs.html) · [Hamamatsu NDPI](https://find-nuclei.github.io/docs/guides/hamamatsu-ndpi.html) · [Leica SCN](https://find-nuclei.github.io/docs/guides/leica-scn.html) · [Philips TIFF](https://find-nuclei.github.io/docs/guides/philips-tiff.html) · [Akoya QPTIFF](https://find-nuclei.github.io/docs/guides/akoya-qptiff.html) · [3DHISTECH MRXS](https://find-nuclei.github.io/docs/guides/mrxs.html) · [DICOM WSI](https://find-nuclei.github.io/docs/guides/dicom-wsi.html) | Digital pathology slides |
| [Channels](https://find-nuclei.github.io/docs/guides/channels.html) · [Z-Projection](https://find-nuclei.github.io/docs/guides/z-projection.html) | Display |
| [3D Rendering](https://find-nuclei.github.io/docs/guides/3d-rendering.html) · [3D Region](https://find-nuclei.github.io/docs/guides/region.html) | 3D |
| [Labels](https://find-nuclei.github.io/docs/guides/labels.html) · [Analytics & Phenotyping](https://find-nuclei.github.io/docs/guides/analytics-phenotyping.html) · [Analytics Data Format](https://find-nuclei.github.io/docs/guides/analytics-format.html) | Segmentation and measurements |
| [Annotations](https://find-nuclei.github.io/docs/guides/annotations.html) · [Templates](https://find-nuclei.github.io/docs/guides/templates.html) · [Exchanging Annotations](https://find-nuclei.github.io/docs/guides/annotation-exchange.html) | Drawing regions, and QuPath, Visiopharm and Xenium files |
| [Sharing Views](https://find-nuclei.github.io/docs/guides/sharing.html) · [Embedding](https://find-nuclei.github.io/docs/guides/embedding.html) | Publishing |

---

## Live Examples

Click any link to open directly in the viewer:

| Example | Description |
|---------|-------------|
| [Plate with analysis results](https://find-nuclei.github.io/?url=https%3A%2F%2Ffind-nuclei.github.io%2Fexamples%2Fbbbc013%2FBBBC013.zarr&analyticsUrl=https%3A%2F%2Ffind-nuclei.github.io%2Fexamples%2Fbbbc013%2FBBBC013.zarr.analytics%2F0b1e47a7-stardist-cellpose%2F&tab=labels&c=0%3Aon%3A808080%3A3%3A134%3A1.00%2C1%3Aon%3AFFFFFF%3A1%3A100%3A1.00&v=plate&w=A%2F1&f=0&zm=0.77&xy=4446%2C2322&cm=C&inv=t&bg=%23ffffff&l=ext%3Acells%2Cext%3Anuclei&lv=cells%3Acategory%3Aphenotype_class&ls=cells%3A0.5%3Afc%2Cnuclei%3A1%3Afc%3A808080) | BBBC013, 96 wells: cells coloured by phenotype, nuclei on top, a measurement table behind every mask. [Guide](https://find-nuclei.github.io/docs/guides/example-plate-results.html) |
| [Zebrafish lateral line in 3D](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0079A%2Fidr0079_images.zarr&c=0%3Aon%3A00FF00%3A5%3A200%3A1.00%2C1%3Aon%3AFF0000%3A10%3A160%3A1.00&mode=3d&rm=composite&cam=25%2C-20%2C1.7) | 3D, membranes and nuclei, with side views. [Guide](https://find-nuclei.github.io/docs/guides/3d-rendering.html) |
| [Neurons in marmoset visual cortex, in 3D](https://find-nuclei.github.io/?url=https%3A%2F%2Fome-zarr-scivis.s3.us-east-1.amazonaws.com%2Fv0.5%2F96x2%2Fmarmoset_neurons.ome.zarr&c=0%3Aon%3A00FF00%3A10%3A140%3A1.00&mode=3d&rm=mip&cam=20%2C-25%2C1.4) | 3D, maximum intensity projection of GFP neurons |
| [Cerebral aneurysm, in 3D](https://find-nuclei.github.io/?url=https%3A%2F%2Fome-zarr-scivis.s3.us-east-1.amazonaws.com%2Fv0.5%2F96x2%2Faneurism.ome.zarr&mode=3d&rm=composite&cam=30%2C-20%2C1.7) | 3D, rotational angiography in Composite |
| [Nuclear segmentation, labels on](https://find-nuclei.github.io/?url=https://uk1s3.embassy.ebi.ac.uk/idr/zarr/v0.4/idr0062A/6001240.zarr&tab=labels&l=src0_0) | Image plus its segmentation mask, coloured per object |
| [Chicken Embryo MIP](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.5%2Fidr0066%2FExpD_chicken_embryo_MIP.ome.zarr&z=0&channels=0%3Aon%3AFFFFFF%3A0%3A90&zoom=-3.52&center=3255%2C4489) | v0.5 sharded, single channel |
| [Zebrafish Lateral Line](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0079A%2Fidr0079_images.zarr&z=71&channels=0%3Aon%3A00FF00%3A8%3A90%2C1%3Aon%3AFF0000%3A7%3A80&zoom=-0.57&center=792%2C394) | 3D multi-channel with labels |
| [HCS Plate 190129](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.5%2Fidr0090%2F190129.zarr&z=15&channels=0%3Aoff%3AFFFFFF%3A617%3A1676%2C1%3Aon%3A0000FF%3A403%3A441%2C2%3Aoff%3A00FF00%3A109%3A148%2C3%3Aon%3AFF0000%3A113%3A254%2C4%3Aon%3A00FF00%3A132%3A720&zoom=-1.38&center=1024%2C1022) | v0.5 multi-well plate, 5 channels |
| [HCS Plate 9512](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0072B%2F9512.zarr&z=0&channels=0%3Aon%3A00FF00%3A24%3A1835%2C1%3Aon%3A0000FF%3A6%3A843&zoom=-0.38&center=673%2C509) | v0.4 multi-well plate, 2 channels |
| [Large Image 9822152](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0083A%2F9822152.zarr&z=0&channels=0%3Aon%3Affffff%3A0%3A5193&zoom=-7.08&center=72192%2C46592) | 144K×93K pixels, multi-resolution |
| [RGB Image 9798462](https://find-nuclei.github.io/?url=https%3A%2F%2Fuk1s3.embassy.ebi.ac.uk%2Fidr%2Fzarr%2Fv0.4%2Fidr0073A%2F9798462.zarr&z=0&channels=0%3Aon%3AFF0000%3A91%3A246%2C1%3Aon%3A00FF00%3A85%3A246%2C2%3Aon%3A0000FF%3A101%3A246&zoom=-4.39&center=10558%2C8217) | 3-channel RGB, 21K×16K |

BBBC013 is hosted here, in [`examples/`](examples/), with our segmentation and measurements. Images from the [Broad Bioimage Benchmark Collection](https://bbbc.broadinstitute.org/BBBC013) (CC BY 3.0, Ilya Ravkin; Ljosa et al., *Nature Methods* 2012).

The marmoset neurons and the aneurysm come from [OME-Zarr Open SciVis Datasets](https://github.com/InsightSoftwareConsortium/OMEZarrOpenSciVisDatasets) (McCormick 2025, [doi:10.5281/zenodo.17495294](https://doi.org/10.5281/zenodo.17495294), CC BY 4.0), courtesy of Frederick Federer (Moran Eye Institute, University of Utah) and of volvis.org and Philips Research, Hamburg.

The other datasets come from the [Image Data Resource (IDR)](https://idr.openmicroscopy.org/), read straight from its public bucket. Nothing is copied or re-hosted.

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

No iframe, no build step, no framework required. Works in any CMS (WordPress, Drupal, Ghost, PubPub) and inside a shadow root.

In a MyST article (Curvenote journals such as *Elemental Microscopy*), use the widget module. Every key is an attribute of the viewer:

```markdown
:::{any:bundle} https://find-nuclei.github.io/embed/v1/widget.mjs
{
  "url": "https://nyu1.osn.mghpcc.org/barkley-replication/nuclei_mosaic.zarr",
  "channels": "0:on:FFFFFF:0:240",
  "x": 2115, "y": 1688, "zoom": -1.9,
  "height": "500"
}
:::
```

- [Live Demo](https://find-nuclei.github.io/publications.html): see it in action with IDR datasets and a 1M-nuclei mosaic
- [MyST and Shadow DOM](https://find-nuclei.github.io/publications/myst-embed.html): the widget, the element in a shadow root, and the iframe fallback, side by side
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

- **Format:** OME-ZARR (OME-NGFF) v0.3, v0.4, v0.5 and v0.6 (the current spec), including sharded stores, plus `bioformats2raw` layouts. Every other format in the [table above](#supported-formats) opens without conversion.
- **Any modern browser** for remote URLs, including Firefox and Safari.
- **Any modern browser** for a dataset zipped into a single `.ozx` or `.zip` file, opened in place with nothing unpacked.
- **Chrome or Edge** to open a dataset *folder* from disk.
- **3D:** a desktop browser with WebGPU, and an image with more than one Z plane. It opens from a URL, a local folder (Chrome and Edge), an `.ozx` or `.zip` file, or a token-protected store.

---

## Privacy

All data is processed locally in your browser. No files are uploaded to any server.

---

## Citation

If you use the viewer in a publication, cite it as:

> Find Nuclei (2026). Find Nuclei Viewer, release 2026-11-08. https://find-nuclei.github.io

The machine-readable form is [CITATION.cff](CITATION.cff); GitHub's "Cite this repository" button reads it.

---

## License

Copyright (c) 2026 Find Nuclei. All rights reserved.

The Find Nuclei Viewer is free to use under the [Terms of Use](https://find-nuclei.github.io/terms.html). It is proprietary software: its source code is not public, and the built files here may not be copied, modified, or redistributed except as the Terms of Use allow.

The JSON Schemas in [`schemas/`](schemas/) are licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), so anyone can read, validate, and write files in these formats. See [`schemas/LICENSE`](schemas/LICENSE).

For licensing inquiries: info@find-nuclei.com

---

## Contact

- **GitHub:** [Find-Nuclei/find-nuclei.github.io](https://github.com/Find-Nuclei/find-nuclei.github.io)
- **Issues:** [Report a bug](https://github.com/Find-Nuclei/find-nuclei.github.io/issues)
- **Email:** info@find-nuclei.com
