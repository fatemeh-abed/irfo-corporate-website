/**
 * News data for IRFO.
 *
 * Each news item is rendered as a card in the News section.
 *
 * To add a news item: add an object to the array below.
 * NewsSection will render it automatically.
 *
 * IMPORTANT: Do not invent exact announcement dates. Use a clearly
 * marked editable placeholder when the actual date is not available.
 */
import { newsIAgri } from '@/assets/images';

export const newsItems = [
  {
    id: 'irfo-iagri-representation',
    title: 'IRFO Announces New Representation of IAgri Technologies, Canada',
    category: 'Partnership',
    date: '[Date to be updated]',
    summary:
      'IRFO is pleased to announce its new representation of IAgri Technologies, a Canadian technology company focused on intelligent agriculture and resource management solutions.',
    image: newsIAgri,
    readMoreUrl: 'https://iagri.ca/',
    readMoreLabel: 'Read More',
  },
];
