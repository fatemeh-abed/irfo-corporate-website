/**
 * Centralized image assets for the IRFO website.
 *
 * ============================================================================
 *  HOW TO REPLACE SAMPLE IMAGES WITH REAL IRFO IMAGES
 * ============================================================================
 *
 *  The current images are professional stock photos from Pexels used as
 *  temporary placeholders. To replace them with the company's real images:
 *
 *  1. Place your image files in the appropriate subfolder:
 *       src/assets/images/hero/      → hero slider images
 *       src/assets/images/products/  → product card images
 *       src/assets/images/about/     → about section images
 *       src/assets/images/general/   → other site images
 *
 *  2. Import each image in this file using a relative import:
 *       import heroIndustrial from './hero/hero-industrial.jpg';
 *
 *  3. Export it and reference the variable in your data files
 *     (src/data/products.js, src/data/heroSlides.js, etc.)
 *
 *  Vite will handle bundling, optimization, and hashing automatically.
 *
 *  Example for local images:
 *    import heroIndustrial from './hero/hero-industrial.jpg';
 *    import productWelding from './products/product-welding.jpg';
 *
 *  Until real images are added, external Pexels URLs are used below.
 * ============================================================================
 */

// --- Hero images ---
export const heroIndustrial =
  'https://images.pexels.com/photos/15970032/pexels-photo-15970032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const heroPipePlate =
  'https://images.pexels.com/photos/38601483/pexels-photo-38601483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const heroWelding =
  'https://images.pexels.com/photos/37517098/pexels-photo-37517098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

// --- Product images ---
export const productWelding =
  'https://images.pexels.com/photos/37517098/pexels-photo-37517098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const productValves =
  'https://images.pexels.com/photos/17728787/pexels-photo-17728787.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const productCoatings =
  'https://images.pexels.com/photos/36215204/pexels-photo-36215204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const productPipePlate =
  'https://images.pexels.com/photos/36397989/pexels-photo-36397989.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

// --- About section images ---
// Main visual story images (stock placeholders — replace with real IRFO photos)
export const aboutCompany =
  'https://images.pexels.com/photos/6767962/pexels-photo-6767962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutEngineering =
  'https://images.pexels.com/photos/6285158/pexels-photo-6285158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutPipeline =
  'https://images.pexels.com/photos/5884386/pexels-photo-5884386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const aboutRefinery =
  'https://images.pexels.com/photos/38601483/pexels-photo-38601483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

// Certificate images from the original irfogroup.com (via Wayback Machine)
// These are the real certificate/authorization document images from the old website.
// To replace: download these or add real certificate scans to src/assets/images/about/
// and update the URLs in src/data/companyInfo.js → certificates array
export const certImage1 =
  'https://web.archive.org/web/20250712082637im_/http://irfogroup.com/img/cr11-.jpg';
export const certImage2 =
  'https://web.archive.org/web/20250712082637im_/http://irfogroup.com/img/crtif.jpg';
export const certImage3 =
  'https://web.archive.org/web/20250712082637im_/http://irfogroup.com/img/cr33.jpg';
export const certImage4 =
  'https://web.archive.org/web/20250712082637im_/http://irfogroup.com/img/cr44.jpg';

// --- Solutions section images ---
export const solutionWaterManagement =
  'https://images.pexels.com/photos/34031015/pexels-photo-34031015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const solutionSatellite =
  'https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const solutionAI =
  'https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
export const solutionResourceManagement =
  'https://images.pexels.com/photos/1571137/pexels-photo-1571137.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

// --- IAgri section image ---
export const iagriPartnership =
  'https://images.pexels.com/photos/34182311/pexels-photo-34182311.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

// --- News section images ---
export const newsIAgri =
  'https://images.pexels.com/photos/2673552/pexels-photo-2673552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
