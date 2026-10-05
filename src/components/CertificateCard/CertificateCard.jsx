import { FileText, ZoomIn } from 'lucide-react';

/**
 * CertificateCard — displays a single certificate as a thumbnail card.
 * Clicking it opens the CertificateModal lightbox.
 *
 * @param {{ certificate: Object, onClick: Function }} props
 */
export default function CertificateCard({ certificate, onClick }) {
  return (
    <button
      onClick={() => onClick(certificate)}
      className="group flex flex-col overflow-hidden rounded-sm border border-charcoal-200 bg-white text-left transition-all duration-300 hover:border-irfo-red-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-irfo-red-400 focus-visible:ring-offset-2"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {/* Zoom icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <ZoomIn className="h-5 w-5 text-irfo-red-600" />
          </div>
        </div>
        {/* Document icon badge */}
        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-sm bg-irfo-red-600 text-white">
          <FileText className="h-4 w-4" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h4 className="mb-1 text-sm font-bold leading-snug text-charcoal-900 transition-colors duration-300 group-hover:text-irfo-red-600">
          {certificate.title}
        </h4>
        <p className="text-xs leading-relaxed text-charcoal-400">
          {certificate.description}
        </p>
      </div>
    </button>
  );
}
