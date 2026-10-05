# Image Assets

All website images are centralized in `index.js` in this folder.

## Current state

The current images are **professional stock photos** from [Pexels](https://www.pexels.com) used as temporary placeholders for the IRFO website redesign.

## How to replace with real IRFO images

### Step 1 — Add image files

Place your real image files in the appropriate subfolder:

```
src/assets/images/
├── hero/        ← Hero slider images
├── products/    ← Product card/modal images
├── about/       ← About section images
└── general/     ← Other site images (logo, icons, etc.)
```

### Step 2 — Import in index.js

Open `index.js` and replace the Pexels URL with a local import:

```js
// Before (placeholder):
export const heroIndustrial = 'https://images.pexels.com/photos/...';

// After (real image):
import heroIndustrial from './hero/hero-industrial.jpg';
export { heroIndustrial };
```

### Step 3 — That's it

Vite automatically handles bundling, optimization, and cache-busting hashes. No other code changes needed.

## Naming convention

Use descriptive, meaningful filenames:

- `hero-refinery.jpg` — not `image1.jpg`
- `product-welding.jpg` — not `img_123.jpg`
- `about-company.jpg` — not `photo.png`
