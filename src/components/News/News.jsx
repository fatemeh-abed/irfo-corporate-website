import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import { newsItems } from '@/data/news';

export default function News() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="news" className="bg-white py-20 lg:py-28">
      <div className="container-irfo">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? 'is-visible' : ''} mb-14 max-w-3xl`}
        >
          <p className="section-eyebrow">News</p>
          <h2 className="section-title">Latest company updates</h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
            Stay informed about the latest developments, partnerships, and
            announcements from IRFO.
          </p>
        </div>

        {/* News cards */}
        <div
          ref={cardsRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={`reveal reveal-delay-${index + 1} ${cardsVisible ? 'is-visible' : ''} group flex flex-col overflow-hidden rounded-sm border border-charcoal-200 bg-white transition-all duration-300 hover:shadow-xl hover:border-charcoal-300`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Category badge */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-sm bg-irfo-red-600 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
                  <Tag className="h-3 w-3" />
                  {item.category}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Date */}
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-charcoal-400">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-base font-bold leading-snug text-charcoal-900 transition-colors duration-300 group-hover:text-irfo-red-600">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal-500">
                  {item.summary}
                </p>

                {/* Read more */}
                {item.readMoreUrl ? (
                  <a
                    href={item.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-irfo-red-600 transition-colors hover:text-irfo-red-700"
                  >
                    {item.readMoreLabel || 'Read More'}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-irfo-red-600 transition-colors hover:text-irfo-red-700"
                  >
                    {item.readMoreLabel || 'Read More'}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
