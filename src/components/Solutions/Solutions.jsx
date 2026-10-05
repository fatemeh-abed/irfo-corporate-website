import { Droplets, Satellite, BrainCircuit, Sprout, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import { solutions, solutionsIntro } from '@/data/solutions';

const SOLUTION_ICONS = [Droplets, Satellite, BrainCircuit, Sprout];

export default function Solutions() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="solutions" className="bg-white py-20 lg:py-28">
      <div className="container-irfo">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? 'is-visible' : ''} mb-14 max-w-3xl`}
        >
          <p className="section-eyebrow">{solutionsIntro.eyebrow}</p>
          <h2 className="section-title">{solutionsIntro.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
            {solutionsIntro.description}
          </p>
        </div>

        {/* Solutions grid */}
        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {solutions.map((solution, index) => {
            const Icon = SOLUTION_ICONS[index] || Sprout;
            return (
              <div
                key={solution.id}
                className={`reveal reveal-delay-${index + 1} ${gridVisible ? 'is-visible' : ''} group relative flex flex-col overflow-hidden rounded-sm border border-charcoal-200 bg-white transition-all duration-300 hover:border-irfo-red-300 hover:shadow-xl`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-100">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-irfo-red-50 text-irfo-red-600 transition-colors duration-300 group-hover:bg-irfo-red-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-bold leading-snug text-charcoal-900">
                    {solution.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-charcoal-500">
                    {solution.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-full origin-left scale-x-0 bg-irfo-red-600 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
