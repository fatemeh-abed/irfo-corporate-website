import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import { companyInfo } from '@/data/companyInfo';
import { aboutCompany } from '@/assets/images';
import { Layers, ShieldCheck, Globe, Award } from 'lucide-react';

const CAPABILITY_ICONS = [ShieldCheck, Layers, Globe, Award];

export default function About() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="about" className="bg-charcoal-50 py-20 lg:py-28">
      <div className="container-irfo">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? 'is-visible' : ''} mb-14 max-w-3xl`}
        >
          <p className="section-eyebrow">About IRFO</p>
          <h2 className="section-title">
            A trusted industrial supply chain partner since {companyInfo.founded}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
            {companyInfo.history}
          </p>
          <p className="mt-4 text-base leading-relaxed text-charcoal-500">
            {companyInfo.about}
          </p>
        </div>

        {/* Two-column: image + text */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            ref={imgRef}
            className={`reveal ${imgVisible ? 'is-visible' : ''} relative`}
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={aboutCompany}
                alt="Aerial view of a large industrial oil refinery with storage tanks and pipelines"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent frame */}
            <div className="absolute -bottom-4 -right-4 -z-0 h-full w-full rounded-sm border-2 border-irfo-red-600/30" />
            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-6 z-10 rounded-sm bg-white px-6 py-4 shadow-lg">
              <span className="block text-3xl font-bold text-irfo-red-600">
                {companyInfo.founded}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-charcoal-500">
                Year Founded
              </span>
            </div>
          </div>

          <div className={imgVisible ? 'is-visible' : ''}>
            <h3 className="mb-4 text-xl font-bold text-charcoal-900">
              What We Do
            </h3>
            <p className="mb-6 text-base leading-relaxed text-charcoal-600">
              {companyInfo.whatWeDo}
            </p>
            <p className="mb-8 text-base leading-relaxed text-charcoal-600">
              {companyInfo.expertise}
            </p>

            {/* Capabilities grid */}
            <div ref={cardsRef} className="grid gap-4 sm:grid-cols-2">
              {companyInfo.capabilities.map((cap, index) => {
                const Icon = CAPABILITY_ICONS[index];
                return (
                  <div
                    key={cap.title}
                    className={`reveal reveal-delay-${index + 1} ${cardsVisible ? 'is-visible' : ''} group rounded-sm border border-charcoal-200 bg-white p-5 transition-all duration-300 hover:border-irfo-red-300 hover:shadow-md`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-sm bg-irfo-red-50 text-irfo-red-600 transition-colors duration-300 group-hover:bg-irfo-red-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mb-1.5 text-sm font-bold text-charcoal-900">
                      {cap.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-charcoal-500">
                      {cap.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
