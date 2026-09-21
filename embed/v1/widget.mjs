// Find Nuclei viewer as an anywidget / MyST `any:bundle` module.
//
// Usage in MyST (Elemental Microscopy and other Curvenote sites):
//
//   :::{any:bundle} https://find-nuclei.github.io/embed/v1/widget.mjs
//   { "url": "https://.../image.zarr", "channels": "0:on:FFFFFF:0:240", "height": "500" }
//   :::
//
// Every key is passed to <find-nuclei-viewer> as an attribute, so the
// attribute reference in the embedding guide applies unchanged:
// https://find-nuclei.github.io/docs/guides/embedding.html
//
// The element works inside anywidget's shadow root since release
// 2026-09-19, so no iframe is needed. The bundle is loaded from
// find-nuclei.github.io; nothing is bundled here, so this file always
// runs the current /embed/v1/ release.

const VIEWER_SCRIPT = 'https://find-nuclei.github.io/embed/v1/viewer.js';

const ATTRS = [
  'url', 'image', 'z', 't', 'channels', 'labels',
  'x', 'y', 'zoom', 'width', 'height',
  'controls', 'theme', 'background', 'grayscale', 'invert', 'token',
  'autoplay', 'fps',
];

let loading = null;

/** Load the embed bundle once per page; later widgets reuse the promise. */
function loadViewer() {
  if (customElements.get('find-nuclei-viewer')) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = VIEWER_SCRIPT;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Find Nuclei: could not load ' + VIEWER_SCRIPT));
    document.head.appendChild(s);
  });
  return loading;
}

export default {
  async render({ model, el }) {
    await loadViewer();

    const viewer = document.createElement('find-nuclei-viewer');
    for (const key of ATTRS) {
      const value = model.get(key);
      if (value === undefined || value === null || value === false) continue;
      viewer.setAttribute(key, value === true ? '' : String(value));
    }
    if (!viewer.hasAttribute('width')) viewer.setAttribute('width', '100%');
    if (!viewer.hasAttribute('height')) viewer.setAttribute('height', '500');
    el.appendChild(viewer);

    // Reason: attribute changes are reactive on the element, so a model
    // update from the host (e.g. a Jupyter kernel) flows straight through.
    const onChange = () => {
      for (const key of ATTRS) {
        const value = model.get(key);
        if (value === undefined || value === null || value === false) viewer.removeAttribute(key);
        else viewer.setAttribute(key, value === true ? '' : String(value));
      }
    };
    for (const key of ATTRS) model.on?.(`change:${key}`, onChange);

    return () => {
      viewer.remove();
    };
  },
};
