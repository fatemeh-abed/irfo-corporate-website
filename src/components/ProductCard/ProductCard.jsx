import { Eye } from 'lucide-react';

/**
 * ProductCard — displays a single product in a card layout.
 *
 * @param {{ product: Object, onViewDetails: Function }} props
 */
export default function ProductCard({ product, onViewDetails }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-charcoal-200 bg-white transition-all duration-300 hover:shadow-xl hover:border-charcoal-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Category badge */}
        <div className="absolute left-3 top-3 rounded-sm bg-irfo-red-600 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
          Product
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-lg font-bold text-charcoal-900">
          {product.name}
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-charcoal-500">
          {product.shortDescription}
        </p>
        <button
          onClick={() => onViewDetails(product)}
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-irfo-red-600 px-5 py-2.5 text-sm font-semibold text-irfo-red-600 transition-all duration-300 hover:bg-irfo-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-irfo-red-400 focus-visible:ring-offset-2"
        >
          <Eye className="h-4 w-4" />
          View Details
        </button>
      </div>
    </div>
  );
}
