import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useActiveSection } from '@/hooks/useIntersectionObserver';
import { siteConfig } from '@/data/siteConfig';

const { navigation, ctaLabel } = siteConfig;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(navigation.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const headerClass = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-charcoal-100'
    : 'bg-transparent';

  const linkBaseClass =
    'relative text-sm font-semibold tracking-wide transition-colors duration-300 py-2';
  const linkColorClass = scrolled
    ? 'text-charcoal-700 hover:text-irfo-red-600'
    : 'text-white/90 hover:text-white';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${headerClass}`}
      >
        <nav className="container-irfo flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-irfo-red-500"
            aria-label="IRFO home"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-sm text-lg font-black tracking-tighter transition-all duration-500 ${
                scrolled
                  ? 'bg-irfo-red-600 text-white'
                  : 'bg-white text-irfo-red-600'
              }`}
            >
              {siteConfig.brandInitials}
            </span>
            <span
              className={`flex flex-col leading-none ${scrolled ? 'text-charcoal-900' : 'text-white'}`}
            >
              <span className="text-lg font-bold tracking-tight">
                {siteConfig.brandName}
              </span>
              <span
                className={`text-[0.625rem] font-medium uppercase tracking-[0.15em] ${scrolled ? 'text-charcoal-500' : 'text-white/70'}`}
              >
                {siteConfig.brandSubtitle}
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`${linkBaseClass} ${linkColorClass} group`}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 bg-irfo-red-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`hidden rounded-sm px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex ${
                scrolled
                  ? 'bg-irfo-red-600 text-white hover:bg-irfo-red-700'
                  : 'border border-white/30 bg-white/15 text-white backdrop-blur-sm hover:bg-white/25'
              }`}
            >
              {ctaLabel}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-sm transition-colors md:hidden ${
                scrolled
                  ? 'text-charcoal-800 hover:bg-charcoal-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-charcoal-950/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="mobile-menu-enter absolute right-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-charcoal-100 px-5 py-4">
              <span className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-irfo-red-600 text-sm font-black text-white">
                  {siteConfig.brandInitials}
                </span>
                <span className="text-base font-bold text-charcoal-900">
                  {siteConfig.brandName}
                </span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-sm text-charcoal-600 hover:bg-charcoal-100"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="flex flex-col py-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`flex items-center justify-between px-5 py-3.5 text-base font-semibold transition-colors ${
                        isActive
                          ? 'border-l-4 border-irfo-red-600 bg-irfo-red-50 text-irfo-red-700'
                          : 'border-l-4 border-transparent text-charcoal-700 hover:bg-charcoal-50 hover:text-irfo-red-600'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 -rotate-90 opacity-40" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-2 px-5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="flex w-full items-center justify-center rounded-sm bg-irfo-red-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-irfo-red-700"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
