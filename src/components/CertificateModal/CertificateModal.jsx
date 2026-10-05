import { useEffect, useRef } from 'react';
import { X, FileText } from 'lucide-react';

/**
 * CertificateModal — accessible lightbox for viewing certificate images
 * in a larger format. Reuses the same modal patterns as ProductModal.
 *
 * @param {{ certificate: Object, onClose: Function }} props
 */
export default function CertificateModal({ certificate, onClose }) {
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
      aria-labelledby="cert-modal-title"
    >
      <div className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm" />

      <div className="modal-content relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm bg-white shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-charcoal-100 bg-charcoal-50 px-6 py-4">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-irfo-red-600" />
            <h3
              id="cert-modal-title"
              className="text-base font-bold text-charcoal-900 sm:text-lg"
            >
              {certificate.title}
            </h3>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-charcoal-600 transition-all duration-300 hover:bg-charcoal-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-irfo-red-400"
            aria-label="Close certificate preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Certificate image */}
        <div className="modal-body-scroll flex-1 overflow-y-auto bg-charcoal-100 p-4 sm:p-8">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="mx-auto max-h-full max-w-full object-contain shadow-lg"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-shrink-0 items-center justify-between border-t border-charcoal-100 bg-charcoal-50 px-6 py-4">
          <p className="text-xs text-charcoal-400">
            {certificate.description}
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
