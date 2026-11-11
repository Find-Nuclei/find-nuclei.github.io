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
https://find-nuclei.github.io/?url=https%3A%2F%2Ffind-nuclei.github.io%2Fexamples%2Fbbbc013%2FBBBC013.zarr&analyticsUrl=https%3A%2F%2Ffind-nuclei.github.io%2Fexamples%2Fbbbc013%2FBBBC013.zarr.analytics%2F0b1e47a7-stardist-cellpose%2F&tab=labels&c=0%3Aon%3A808080%3A3%3A134%3A1.00%2C1%3Aon%3AFFFFFF%3A1%3A100%3A1.00&v=plate&w=A%2F1&f=0&zm=0.77&xy=4446%2C2322&cm=C&inv=t&bg=%23ffffff&l=ext%3Acells%2Cext%3Anuclei&lv=cells%3Acategory%3Aphenotype_class&ls=cells%3A0.5%3Afc%2Cnuclei%3A1%3Afc%3A808080

Guide: https://find-nuclei.github.io/docs/guides/example-plate-results.html
