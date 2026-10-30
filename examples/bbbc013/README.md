# BBBC013 with analysis results

A 96-well plate of human U2OS cells expressing FKHR-GFP. The fusion protein
moves from the cytoplasm into the nucleus when the PI3K pathway is blocked.
Two inhibitors, Wortmannin (rows A to D) and LY294002 (rows E to H), run as
9-point dose series in columns 3 to 11. Two channels: DRAQ (DNA) and FKHR-GFP.

## Contents

- `BBBC013.zarr/`: the plate as OME-Zarr 0.5 (Zarr v3), converted from the
  original BMP images. `tables/` holds plate, well and field metadata as Parquet.
- `BBBC013.zarr.analytics/0b1e47a7-stardist-cellpose/`: one analysis run in the
  [Find Nuclei analytics format](https://find-nuclei.github.io/docs/guides/analytics-format.html).
  - `nuclei/`: 18,648 nuclei, segmented with StarDist (`2D_versatile_fluo`).
  - `cells/`: 15,331 cells, segmented with Cellpose (`cyto3`).
  - `cytoplasm/`: 15,272 cytoplasm regions, each cell minus its nucleus.
  - Each folder holds its masks (`labels/`), per-object measurements
    (`measurements.parquet`), well and plate summaries and histograms.

The masks and measurements are our output, made with the Find Nuclei Analysis
Tool. They are not part of the original collection. Cellpose is listed as a
research-only model in our licence review, so its masks are here as a viewing
example only.

## Source and licence

Images: [BBBC013v1](https://bbbc.broadinstitute.org/BBBC013), provided by Ilya
Ravkin, available from the Broad Bioimage Benchmark Collection. Licensed under
[CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Please cite:

> Ljosa V, Sokolnicki KL, Carpenter AE (2012). Annotated high-throughput
> microscopy image sets for validation. *Nature Methods* 9(7):637.
> [doi:10.1038/nmeth.2083](https://doi.org/10.1038/nmeth.2083)
