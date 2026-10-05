import { companyInfo } from '@/data/companyInfo';
import { siteConfig } from '@/data/siteConfig';
import { products } from '@/data/products';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-charcoal-800 bg-charcoal-950 text-charcoal-300">
      {/* Main footer */}
      <div className="container-irfo py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-irfo-red-600 text-lg font-black text-white">
                {siteConfig.brandInitials}
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">
                  {siteConfig.brandName}
                </span>
                <span className="text-[0.625rem] font-medium uppercase tracking-[0.15em] text-charcoal-400">
                  {siteConfig.brandSubtitle}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-charcoal-400">
              {companyInfo.legalName} — {companyInfo.tagline}. Serving Water, Oil,
              Gas &amp; Petrochemical industries since {companyInfo.founded}.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navigation.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-sm text-charcoal-400 transition-colors hover:text-irfo-red-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Products
            </h4>
            <ul className="space-y-2.5">
              {products.map((item) => (
                <li key={item.id}>
                  <a
                    href="#products"
                    onClick={(e) => handleNavClick(e, 'products')}
                    className="text-sm text-charcoal-400 transition-colors hover:text-irfo-red-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-charcoal-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-irfo-red-500" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-charcoal-400">
                <Phone className="h-4 w-4 flex-shrink-0 text-irfo-red-500" />
                <a
                  href={`tel:${companyInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="transition-colors hover:text-irfo-red-400"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-charcoal-400">
                <Mail className="h-4 w-4 flex-shrink-0 text-irfo-red-500" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="transition-colors hover:text-irfo-red-400"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-irfo flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} {companyInfo.legalName}. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-charcoal-400 transition-colors hover:text-irfo-red-400"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
