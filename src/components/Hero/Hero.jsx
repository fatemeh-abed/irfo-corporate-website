import { ArrowRight } from 'lucide-react';
import ImageSlider from '@/components/ImageSlider';
import { heroSlides } from '@/data/heroSlides';
import { companyInfo } from '@/data/companyInfo';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full">
      <ImageSlider slides={heroSlides} />

      {/* Hero CTAs */}
      <div className="absolute bottom-24 left-0 right-0 z-10">
        <div className="container-irfo">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo('products')}
              className="inline-flex items-center gap-2 rounded-sm bg-irfo-red-600 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-irfo-red-700 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-irfo-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              View Products
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="inline-flex items-center gap-2 rounded-sm border border-white/40 bg-transparent px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              About IRFO
            </button>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-charcoal-950/80 backdrop-blur-sm">
        <div className="container-irfo flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
          <div className="flex items-center gap-8 text-white/70">
            <span className="text-xs font-medium uppercase tracking-wider">
              Founded {companyInfo.founded}
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span className="hidden text-xs font-medium uppercase tracking-wider sm:inline">
              {companyInfo.headquarters}
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:block" />
            <span className="hidden text-xs font-medium uppercase tracking-wider sm:inline">
              Oil, Gas &amp; Petrochemical
            </span>
          </div>
          <span className="text-xs font-medium uppercase tracking-wider text-irfo-yellow-400">
            {companyInfo.legalName}
          </span>
        </div>
      </div>
    </section>
  );
}
