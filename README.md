# IRFO Corporate Website

A modern, responsive single-page website for **IRFO** — an industrial supply chain management company serving the Water, Oil, Gas & Petrochemical industries since 1997.

Built with **React + Vite + Tailwind CSS** in JavaScript (ES6+). No TypeScript.

---

## Quick Start

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
├── assets/
│   └── images/
│       ├── index.js          ← All image references (centralized)
│       └── README.md         ← How to replace sample images
│
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── index.js
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── index.js
│   ├── ImageSlider/
│   │   ├── ImageSlider.jsx
│   │   └── index.js
│   ├── About/
│   │   ├── About.jsx
│   │   └── index.js
│   ├── Products/
│   │   ├── Products.jsx
│   │   └── index.js
│   ├── ProductCard/
│   │   ├── ProductCard.jsx
│   │   └── index.js
│   ├── ProductModal/
│   │   ├── ProductModal.jsx
│   │   └── index.js
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── index.js
│   └── Footer/
│       ├── Footer.jsx
│       └── index.js
│
├── data/
│   ├── siteConfig.js         ← Brand name, nav labels, CTA text
│   ├── companyInfo.js        ← Company details, history, capabilities
│   ├── products.js           ← All 4 products with specs
│   └── heroSlides.js         ← Hero carousel slide data
│
├── hooks/
│   └── useIntersectionObserver.js  ← Scroll reveal + active section hooks
│
├── styles/
│   ├── variables.css         ← CSS custom properties (brand colors)
│   ├── global.css            ← Tailwind directives + base + component classes
│   ├── animations.css        ← Keyframes, reveal, modal, menu animations
│   ├── responsive.css        ← Mobile-specific overrides
│   └── index.css             ← Entry point (imports all above)
│
├── App.jsx                   ← Root component
└── main.jsx                  ← App entry point
```

---

## Customization Guide

### Change company name / navigation labels

Edit `src/data/siteConfig.js`:

```js
export const siteConfig = {
  brandName: 'IRFO',
  brandInitials: 'IR',
  navigation: [
    { id: 'home', label: 'Home' },
    // ...
  ],
};
```

### Change brand colors

**Option A — CSS variables:** Edit `src/styles/variables.css` and update the `--color-primary-*` and `--color-secondary-*` values.

**Option B — Tailwind config:** Edit `tailwind.config.js` and update the `irfo-red` and `irfo-yellow` color ramps.

Both locations should stay in sync.

### Change company information

Edit `src/data/companyInfo.js` — all company details (address, phone, email, history, capabilities) are centralized here.

### Add / remove / edit products

Edit `src/data/products.js`. Each product is an object in the `products` array:

```js
{
  id: 'unique-id',
  name: 'Product Name',
  shortDescription: 'One-line description for the card',
  image: productImage,          // imported from assets/images
  longDescription: 'Full description for the modal',
  specifications: [
    {
      category: 'Category Name',
      items: ['Item 1', 'Item 2'],
    },
  ],
}
```

ProductCard and ProductModal receive product data via props — no hard-coding.

### Replace sample images

See `src/assets/images/README.md` for detailed instructions.

**Summary:** Place real images in `src/assets/images/{hero,products,about}/`, import them in `src/assets/images/index.js`, and reference the exported variables in your data files.

### Change hero slides

Edit `src/data/heroSlides.js` — add, remove, or modify slide objects (image, eyebrow, title, subtitle).

---

## Features

- Smooth scrolling navigation
- Sticky navbar with scroll-aware styling (transparent → solid)
- Active section detection via Intersection Observer
- Mobile slide-in menu with animation
- Hero image slider with auto-play, controls, and indicators
- Product cards with modal detail view
  - Escape key to close
  - Click outside to close
  - Focus management
  - Body scroll lock
- Scroll-triggered reveal animations (Intersection Observer)
- Lazy loading for non-critical images
- Fully responsive (mobile, tablet, desktop)
- `prefers-reduced-motion` support
- Semantic HTML and accessible components
- SEO meta tags and descriptive page title

---

## Tech Stack

| Tool          | Purpose              |
| ------------- | -------------------- |
| React 18      | UI framework         |
| Vite 5        | Build tool / dev server |
| Tailwind CSS  | Utility-first styling |
| Lucide React  | Icons                |

No other external libraries. No TypeScript.
