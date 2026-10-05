import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';

/**
 * ProductModal — accessible modal dialog for displaying full product details.
 *
 * Features:
 *   - Open/close animations
 *   - Escape key to close
 *   - Click outside to close
 *   - Focus management (focuses close button on open)
 *   - Body scroll lock while open
 *   - Responsive layout
 *
 * @param {{ product: Object, onClose: Function }} props
 */
export default function ProductModal({ product, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtnRef.current?.focus(), 100);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="modal-overlay fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm" />

      <div className="modal-content relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm bg-white shadow-2xl">
        {/* Header with image */}
        <div className="relative h-56 flex-shrink-0 overflow-hidden sm:h-64">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="mb-2 inline-block rounded-sm bg-irfo-red-600 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-wider text-white">
              Product
            </span>
            <h3
              id="modal-title"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              {product.name}
            </h3>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="modal-body-scroll flex-1 overflow-y-auto p-6 sm:p-8">
          <p className="mb-6 text-base leading-relaxed text-charcoal-600">
            {product.longDescription}
          </p>

          {/* Specifications */}
          {product.specifications?.length > 0 && (
            <div>
              <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-irfo-red-600">
                Specifications
              </h4>
              <div className="space-y-6">
                {product.specifications.map((spec) => (
                  <div
                    key={spec.category}
                    className="border-l-2 border-irfo-yellow-400 pl-5"
                  >
                    <h5 className="mb-3 text-base font-bold text-charcoal-800">
                      {spec.category}
                    </h5>
                    <ul className="space-y-2">
                      {spec.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-charcoal-600"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-irfo-red-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-shrink-0 items-center justify-between border-t border-charcoal-100 bg-charcoal-50 px-6 py-4 sm:px-8">
          <p className="text-xs text-charcoal-400">
            Contact IRFO for detailed specifications and quotes.
          </p>
          <button
            onClick={onClose}
            className="rounded-sm bg-charcoal-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-charcoal-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal-400 focus-visible:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
