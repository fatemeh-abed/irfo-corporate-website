/**
 * Product data for IRFO.
 *
 * All product information is extracted from the original irfogroup.com website.
 * Do NOT invent product specifications or descriptions.
 *
 * HOW TO REPLACE PRODUCT IMAGES:
 *   1. Drop your real image into src/assets/images/products/
 *   2. Import it in src/assets/images/index.js
 *   3. Replace the image value below with the imported variable
 *
 * To add a new product: copy an object in the array, give it a unique id,
 * and fill in the fields. ProductCard and ProductModal will render it automatically.
 */
import {
  productWelding,
  productValves,
  productCoatings,
  productPipePlate,
} from '@/assets/images';

export const products = [
  {
    id: 'welding-consumables',
    name: 'Welding Consumables',
    shortDescription:
      'Welding electrodes, flux cored wires, and TIG/MIG wires for oil and gas pipelines, petrochemical, refineries and power plants.',
    image: productWelding,
    longDescription:
      'In order to achieve customer satisfaction, IRFO supplies the consumable items required in projects such as welding equipment for oil and gas pipelines, petrochemical, refineries and power plants from the best and most famous brands all over the world.',
    specifications: [
      {
        category: 'Manual Metal Arc Welding (MMAW)',
        items: [
          'Welding electrodes for soft, low alloy and cellulosic steels',
          'Cast iron electrodes',
          'Aluminum based electrodes',
          'Nickel based electrodes',
          'Stainless steel electrodes',
        ],
      },
      {
        category: 'Flux Cored Arc Welding (FCAW)',
        items: [
          'Flux cored arc welding of stainless steels',
          'Flux cored branches of stainless steels',
          'Flux cored arc welding of soft metals, low temperature and heat resistance steels',
        ],
      },
      {
        category: 'MIG/MAG Welding Wires & TIG branches (GTAW, GMAW)',
        items: [
          'Welding wires and branches of carbon steels and low alloy steels',
          'Stainless steel welding wires and branches',
          'Copper base alloy welding wire and branches',
          'Titanium base alloy welding wire and branches',
          'Aluminum base alloy welding wire and branches',
          'Nickel base alloy welding wire and branches',
          'Heat resistant alloy welding wire and branches',
        ],
      },
    ],
  },
  {
    id: 'valves-fittings',
    name: 'Valves & Fittings',
    shortDescription:
      'Industrial valves supplied to national and international standards for oil, gas, petrochemical, marine and power generation industries.',
    image: productValves,
    longDescription:
      'IRFO, by using technical knowledge as a reliable supplier in the field of oil and gas industrial projects, petrochemical, chemical and marine industries, power generation units, industrial water treatment and industrial valves in pipelines, provides great services to employers and customers. Supply of industrial valves according to national and international standards includes the following types:',
    specifications: [
      {
        category: 'Valve Types',
        items: [
          'Gate, Globe, Ball, Plug and Needle Valve',
          'Butterfly and Diaphragm Valve',
          'Slide and Check Valve',
          'Multi-way and Block and Bleed Valve',
          'Pressure Safety Valve',
          'Pressure Relief Valve',
          'Control Valve',
          'Line Break Valve',
          'Shut-down Valve',
          'Motor Operated Valve',
          'Hot Tap Valve',
          'By-pass Valve',
        ],
      },
    ],
  },
  {
    id: 'anti-corrosion-coatings',
    name: 'Anti-Corrosion Coatings',
    shortDescription:
      'Hot, cold and liquid anti-corrosion coating systems for protection of field weld joints, piping components, valves, repair and refurbishment.',
    image: productCoatings,
    longDescription:
      'For protection of field weld joints, piping components, valves, repair and refurbishment. Corrosion is the destructive phenomenon that wastes materials, energy and capital. One practical method to avoiding or reducing corrosion is using the right coating systems for oil, gas, petro-chemical and water pipelines, weld joint areas, valves, fittings as well as for repair and coating refurbishment in industries. According to the media temperature, main coating of pipelines and the location of projects (onshore / offshore), the most suitable system can be selected. Options include CANUSA GTS PP.',
    specifications: [
      {
        category: 'Coating Systems',
        items: [
          'Hot applied anti-corrosion coatings',
          'Cold applied anti-corrosion coatings',
          'Liquid anti-corrosion coatings',
          'CANUSA GTS PP',
        ],
      },
      {
        category: 'Applications',
        items: [
          'Field weld joint protection',
          'Piping component protection',
          'Valve protection',
          'Repair and refurbishment',
          'Onshore and offshore projects',
        ],
      },
    ],
  },
  {
    id: 'pipe-and-plate',
    name: 'Pipe and Plate',
    shortDescription:
      'Supply of pipe, plate and tube processing equipment in accordance with national and international standards for industrial projects.',
    image: productPipePlate,
    longDescription:
      'According to the high requirement of pipe, fitting, plate and tube processing equipment for most industrial projects, IRFO has the ability to provide the above items in accordance with national and international standards. IRFO evaluates the customer requirement and, by analyzing the situation, provides the supply and services. The combination allows sleeve recovery and bonding to polypropylene mainline coatings. Lower preheats are required versus other systems and superior bonding is achieved without damaging the coating during installation.',
    specifications: [
      {
        category: 'Supply Capabilities',
        items: [
          'Pipe supply to national and international standards',
          'Plate supply to national and international standards',
          'Tube processing equipment',
          'Fitting supply',
        ],
      },
      {
        category: 'Services',
        items: [
          'Customer requirement evaluation',
          'Situation analysis',
          'Supply and service provision',
          'Sleeve recovery and bonding to polypropylene mainline coatings',
        ],
      },
    ],
  },
];
