/**
 * Company information extracted from the original irfogroup.com website.
 *
 * All content here is real company data preserved from the original site.
 * Do NOT invent or fabricate company information.
 *
 * Update this file to change company details across the entire website.
 */
import { certImage1, certImage2, certImage3, certImage4 } from '@/assets/images';

export const companyInfo = {
  legalName: 'İRFO DİŞ TİC. LTD. ŞTI.',
  brandName: 'IRFO',
  tagline: 'Supply Chain Management',
  founded: 1997,
  investedCapital: '200,000 TRY',
  headquarters: 'Istanbul, Turkey',
  address:
    'Unit 8, Block D, No. 103, Halkali Ave., Kemal Pasha Area, Sefakoy — Istanbul, Turkey',
  phone: '+90 (212) 580 8334',
  email: 'info@irfogroup.com',

  about:
    'IRFO DIC TIC LTD STI is one of the successful companies in the field of supplying large-scale industrial projects, especially in oil and gas pipelines. During recent years, IRFO was awarded and performed several credit contracts. In this regard, IRFO attempts to offer a wide range of solutions in terms of technical and commercial issues to satisfy customer demands.',

  history:
    'İRFO DİŞ TİC. LTD. ŞTI., founded in 1997, having more than 15 years of solid experience in Water, Oil, Gas & Petrochemical industries. The company is located in Kamal Pasa Mah., Halkali Cad., No.: 103, Blok D, D. 8, Sefakoy — Istanbul, Turkey, with invested capital around 200,000 TRY.',

  expertise:
    'The technical services of IRFO are at the client\u2019s disposal for any request connected with a wide range of industrial supply needs. IRFO can also comply with the client\u2019s specific requirements and with all relevant international specifications.',

  whatWeDo:
    'According to the high requirement of pipe, fitting, plate and tube processing equipment for most industrial projects, IRFO evaluates the customer requirement and, by analyzing the situation, provides the supply and services in accordance with national and international standards.',

  /* Structured content for the redesigned About section */

  introBlocks: [
    'Founded in 1997, IRFO DIC TIC LTD STI brings more than 15 years of solid experience in Water, Oil, Gas & Petrochemical industries.',
    'The company is located in Istanbul, Turkey, with invested capital around 200,000 TRY. IRFO is one of the successful companies in the field of supplying large-scale industrial projects, especially in oil and gas pipelines.',
    'During recent years, IRFO was awarded and performed several credit contracts, offering a wide range of solutions in terms of technical and commercial issues to satisfy customer demands.',
  ],

  experience: [
    {
      icon: 'calendar',
      title: 'Company Experience',
      description:
        'More than 15 years of solid experience in Water, Oil, Gas & Petrochemical industries, with several credit contracts awarded and performed.',
    },
    {
      icon: 'package',
      title: 'Products & Services',
      description:
        'Supply of welding consumables, valves & fittings, anti-corrosion coatings, and pipe and plate — sourced from world-renowned brands to international standards.',
    },
    {
      icon: 'wrench',
      title: 'Technical Capabilities',
      description:
        'Technical services at the client\u2019s disposal for any request connected with a wide range of industrial supply needs, complying with specific requirements and international specifications.',
    },
    {
      icon: 'factory',
      title: 'Industry Focus',
      description:
        'Oil and gas pipelines, petrochemical, refineries, power plants, marine, chemical, industrial water treatment, and power generation industries.',
    },
  ],

  certificates: [
    {
      id: 'cert-1',
      title: 'Certificate — Agency Authorization',
      description: 'Agency letter / authorization certificate from the original IRFO website.',
      image: certImage1,
    },
    {
      id: 'cert-2',
      title: 'Certificate of Qualification',
      description: 'Qualification certificate from the original IRFO website.',
      image: certImage2,
    },
    {
      id: 'cert-3',
      title: 'Certificate — Authorization',
      description: 'Authorization document from the original IRFO website.',
      image: certImage3,
    },
    {
      id: 'cert-4',
      title: 'Certificate — Partnership',
      description: 'Partnership / representation document from the original IRFO website.',
      image: certImage4,
    },
  ],

  trustPoints: [
    {
      title: 'Established 1997',
      description: 'More than 15 years of solid industrial experience.',
    },
    {
      title: 'International Standards',
      description: 'Products and services in accordance with national and international specifications.',
    },
    {
      title: 'Trusted Partners',
      description: 'Representing Canusa-CPS (ShawCor Ltd.), ESAB, and ASKA.',
    },
    {
      title: 'Credit Contracts',
      description: 'Awarded and performed several credit contracts in large-scale industrial projects.',
    },
  ],

  transitionStatement:
    'IRFO combines its established industrial experience with new technology-driven agricultural and resource-management solutions.',

  partners: [
    {
      name: 'Canusa-CPS (ShawCor Ltd.)',
      description:
        'Committed to the pipeline industry. Canusa-CPS is a division of ShawCor Ltd.',
    },
    {
      name: 'ESAB',
      description:
        'ESAB is a world leader in the production of welding and cutting equipment.',
    },
    {
      name: 'ASKA',
      description:
        'Specializing in the manufacturing of covered electrodes.',
    },
  ],

  capabilities: [
    {
      title: 'Anti-Corrosion Coatings',
      description:
        'Hot, cold and liquid anti-corrosion coating systems for protection of field weld joints, piping components, valves, and repair refurbishment.',
    },
    {
      title: 'Welding Consumables',
      description:
        'Welding equipment for oil and gas pipelines, petrochemical, refineries and power plants from the best and most famous brands worldwide.',
    },
    {
      title: 'Valves & Fittings',
      description:
        'Industrial valves supplied to national and international standards for oil, gas, petrochemical, marine and power generation industries.',
    },
    {
      title: 'Pipe and Plate',
      description:
        'Supply of pipe, plate and tube processing equipment in accordance with national and international standards for industrial projects.',
    },
  ],
};
