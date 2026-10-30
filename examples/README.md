# Examples

Public datasets we host next to the viewer, with our own analysis results.
Each one opens from the viewer's Example Gallery.

One folder per example. Inside it, the OME-Zarr store and, beside it, its
`.analytics/` folder with one analysis run. The run's manifests point at the
store with relative paths, so the two must stay siblings.

| Folder | Dataset | Results | Licence |
|---|---|---|---|
| [`bbbc013/`](bbbc013/) | BBBC013, 96-well plate, U2OS FKHR-GFP translocation | Nuclei, cells, cytoplasm, measurements | CC BY 3.0 |

Open in the viewer:
https://find-nuclei.github.io/?url=https://find-nuclei.github.io/examples/bbbc013/BBBC013.zarr&analyticsUrl=https://find-nuclei.github.io/examples/bbbc013/BBBC013.zarr.analytics/0b1e47a7-stardist-cellpose/&tab=labels

Guide: https://find-nuclei.github.io/docs/guides/example-plate-results.html
