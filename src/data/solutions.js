/**
 * Solutions data for IRFO.
 *
 * Each solution represents an area where IRFO helps address agricultural
 * and resource management challenges through technology-driven approaches.
 *
 * To add a new solution: add an object to the array below.
 * SolutionsSection will render it automatically.
 *
 * Do NOT invent specific technical claims, statistics, prices, or
 * performance guarantees.
 */
import {
  solutionWaterManagement,
  solutionSatellite,
  solutionAI,
  solutionResourceManagement,
} from '@/assets/images';

export const solutions = [
  {
    id: 'smart-water-management',
    title: 'Smart Water Management',
    description:
      'Technology-driven approaches to optimize water usage, improve irrigation efficiency, and support sustainable resource management across agricultural operations.',
    image: solutionWaterManagement,
  },
  {
    id: 'satellite-spatial-analysis',
    title: 'Satellite & Spatial Analysis',
    description:
      'Leveraging satellite imagery and spatial data to monitor crop health, assess field conditions, and support informed decision-making at scale.',
    image: solutionSatellite,
  },
  {
    id: 'ai-agricultural-optimization',
    title: 'AI-Powered Agricultural Optimization',
    description:
      'Applying artificial intelligence and data analytics to enhance crop management, predict outcomes, and improve overall agricultural productivity.',
    image: solutionAI,
  },
  {
    id: 'agricultural-resource-management',
    title: 'Agricultural Resource Management',
    description:
      'Integrated solutions for managing land, water, and inputs efficiently — helping customers make better decisions and address agricultural challenges.',
    image: solutionResourceManagement,
  },
];

export const solutionsIntro = {
  eyebrow: 'Solutions',
  title: 'Smart solutions for modern agriculture and resource management',
  description:
    'IRFO aims to provide technology-driven solutions that help customers improve resource management, make better decisions, and address agricultural challenges. Our approach combines industrial expertise with innovative technology to deliver practical, scalable outcomes.',
};
