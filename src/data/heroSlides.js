/**
 * Hero slider data.
 *
 * Each slide appears in the homepage hero carousel.
 * Content is based on the original irfogroup.com banners.
 *
 * HOW TO REPLACE HERO IMAGES:
 *   1. Drop your real image into src/assets/images/hero/
 *   2. Import it in src/assets/images/index.js
 *   3. Replace the image value below with the imported variable
 */
import {
  heroIndustrial,
  heroPipePlate,
  heroWelding,
} from '@/assets/images';

export const heroSlides = [
  {
    image: heroIndustrial,
    alt: 'Large oil refinery plant with intricate pipelines',
    eyebrow: 'Supply Chain Management',
    title:
      'More than 15 years of solid experience in Water, Oil, Gas & Petrochemical',
    subtitle:
      'IRFO DIC TIC LTD STI — supplying large-scale industrial projects with technical and commercial solutions worldwide.',
  },
  {
    image: heroPipePlate,
    alt: 'Industrial refinery complex with tall chimneys',
    eyebrow: 'Pipe & Plate Supply',
    title:
      'The ability to provide Pipe and Plate in accordance with national and international standards',
    subtitle:
      'Evaluating customer requirements and delivering supply solutions for major industrial projects.',
  },
  {
    image: heroWelding,
    alt: 'Industrial welding with sparks in an industrial setting',
    eyebrow: 'Welding Consumables',
    title:
      'Welding equipment from the best and most famous brands worldwide',
    subtitle:
      'Serving oil and gas pipelines, petrochemical, refineries and power plants.',
  },
];
