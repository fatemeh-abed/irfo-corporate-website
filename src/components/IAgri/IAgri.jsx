import { ExternalLink, MapPin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import { iagriPartnership } from '@/assets/images';

const IAGRI_URL = 'https://iagri.ca/';
const IAGRI_TAGLINE = 'Intelligent Agriculture & Resource Management Solutions';
const IAGRI_COUNTRY = 'Canada';
const IAGRI_EYEBROW = 'Our Technology Partner';

const IAGRI_DESCRIPTION =
  'IRFO has established a new representation and partnership with IAgri Technologies, a Canadian technology company specializing in intelligent agriculture and resource management. This collaboration expands IRFO\u2019s capabilities beyond its traditional industrial supply chain, bringing technology-driven agricultural and resource management solutions to its customers.';

export default function IAgri() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section id="iagri" className="bg-charcoal-50 py-20 lg:py-28">
      <div className="container-irfo">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <div
            ref={imageRef}
            className={`reveal ${imageVisible ? 'is-visible' : ''} relative order-2 lg:order-1`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={iagriPartnership}
                alt="Drone flying over a green farm field, representing smart agriculture technology"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent frame */}
            <div className="absolute -bottom-4 -left-4 -z-0 h-full w-full rounded-sm border-2 border-irfo-yellow-400/40" />
            {/* Floating country badge */}
            <div className="absolute -top-4 right-6 z-10 flex items-center gap-2 rounded-sm bg-charcoal-900 px-5 py-3 shadow-lg">
              <MapPin className="h-4 w-4 text-irfo-yellow-400" />
              <span className="text-sm font-bold tracking-wide text-white">
                {IAGRI_COUNTRY}
              </span>
            </div>
          </div>

          {/* Content side */}
          <div
            ref={contentRef}
            className={`reveal ${contentVisible ? 'is-visible' : ''} order-1 lg:order-2`}
          >
            <p className="section-eyebrow">{IAGRI_EYEBROW}</p>

            {/* IAgri text logo treatment */}
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="text-4xl font-bold leading-tight text-charcoal-900 sm:text-5xl">
                IAgri
              </h2>
              <span className="text-lg font-semibold text-irfo-red-600">
                Technologies
              </span>
            </div>

            <p className="mb-6 text-lg font-medium leading-relaxed text-charcoal-700">
              {IAGRI_TAGLINE}
            </p>

            <p className="mb-8 text-base leading-relaxed text-charcoal-600">
              {IAGRI_DESCRIPTION}
            </p>

            <a
              href={IAGRI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-irfo-red-600 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-irfo-red-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-irfo-red-400 focus-visible:ring-offset-2"
            >
              Visit IAgri Technologies
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
