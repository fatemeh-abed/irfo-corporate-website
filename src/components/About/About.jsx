import { useState } from 'react';
import {
  Calendar,
  Package,
  Wrench,
  Factory,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  FileText,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import { companyInfo } from '@/data/companyInfo';
import {
  aboutCompany,
  aboutEngineering,
  aboutPipeline,
} from '@/assets/images';
import CertificateCard from '@/components/CertificateCard';
import CertificateModal from '@/components/CertificateModal';

const EXPERIENCE_ICONS = {
  calendar: Calendar,
  package: Package,
  wrench: Wrench,
  factory: Factory,
};

export default function About() {
  const [selectedCert, setSelectedCert] = useState(null);

  const { ref: introRef, isVisible: introVisible } = useScrollReveal();
  const { ref: visualRef, isVisible: visualVisible } = useScrollReveal();
  const { ref: expRef, isVisible: expVisible } = useScrollReveal();
  const { ref: certRef, isVisible: certVisible } = useScrollReveal();
  const { ref: trustRef, isVisible: trustVisible } = useScrollReveal();
  const { ref: transRef, isVisible: transVisible } = useScrollReveal();

  return (
    <section id="about" className="bg-charcoal-50 py-20 lg:py-28">
      <div className="container-irfo">
        {/* ==================== 1. Company Introduction ==================== */}
        <div
          ref={introRef}
          className={`reveal ${introVisible ? 'is-visible' : ''} mb-20 max-w-4xl`}
        >
          <p className="section-eyebrow">About IRFO</p>
          <h2 className="section-title">
            An established industrial supply chain partner
          </h2>
          <div className="mt-8 space-y-5">
            {companyInfo.introBlocks.map((block, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-charcoal-600 sm:text-lg"
              >
                {block}
              </p>
            ))}
          </div>
        </div>

        {/* ==================== 2. Visual Story ==================== */}
        <div
          ref={visualRef}
          className={`reveal ${visualVisible ? 'is-visible' : ''} mb-24`}
        >
          <div className="grid grid-cols-12 gap-4 sm:gap-6">
            {/* Large main image */}
            <div className="col-span-12 lg:col-span-8">
              <div className="group relative h-full min-h-[300px] overflow-hidden rounded-sm">
                <img
                  src={aboutCompany}
                  alt="Aerial view of a large industrial oil refinery with storage tanks and pipelines"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 to-transparent" />
                {/* Founded badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-sm bg-white/95 px-5 py-3 shadow-lg backdrop-blur-sm">
                  <Calendar className="h-5 w-5 text-irfo-red-600" />
                  <div>
                    <span className="block text-2xl font-bold leading-none text-charcoal-900">
                      {companyInfo.founded}
                    </span>
                    <span className="text-[0.625rem] font-medium uppercase tracking-wider text-charcoal-500">
                      Year Founded
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Two smaller stacked images */}
            <div className="col-span-12 flex flex-col gap-4 sm:gap-6 lg:col-span-4">
              <div className="group relative flex-1 overflow-hidden rounded-sm">
                <img
                  src={aboutPipeline}
                  alt="Industrial refinery with pipelines and steel structures"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
              </div>
              <div className="group relative flex-1 overflow-hidden rounded-sm">
                <img
                  src={aboutEngineering}
                  alt="Engineering professionals reviewing plans in an industrial setting"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 3. Experience & Capabilities ==================== */}
        <div
          ref={expRef}
          className={`reveal ${expVisible ? 'is-visible' : ''} mb-24`}
        >
          <div className="mb-10 max-w-2xl">
            <p className="section-eyebrow">Experience &amp; Capabilities</p>
            <h3 className="text-2xl font-bold leading-tight text-charcoal-900 sm:text-3xl">
              Real expertise across industrial supply and services
            </h3>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyInfo.experience.map((item, index) => {
              const Icon = EXPERIENCE_ICONS[item.icon] || Wrench;
              return (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${index + 1} ${expVisible ? 'is-visible' : ''} group relative flex flex-col rounded-sm border border-charcoal-200 bg-white p-6 transition-all duration-300 hover:border-irfo-red-300 hover:shadow-lg`}
                >
                  {/* Top accent bar */}
                  <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-irfo-red-600 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-irfo-red-50 text-irfo-red-600 transition-colors duration-300 group-hover:bg-irfo-red-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 text-sm font-bold leading-snug text-charcoal-900">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-charcoal-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== 4. Certificates & Qualifications ==================== */}
        <div
          ref={certRef}
          className={`reveal ${certVisible ? 'is-visible' : ''} mb-24`}
        >
          <div className="mb-10 flex items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Certificates &amp; Qualifications</p>
              <h3 className="text-2xl font-bold leading-tight text-charcoal-900 sm:text-3xl">
                Documented credentials and authorizations
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-500">
                Agency letters and certificates from IRFO&apos;s industry
                partners and principals. Click any certificate to view a larger
                preview.
              </p>
            </div>
            <div className="hidden flex-shrink-0 items-center gap-2 rounded-sm bg-irfo-yellow-50 px-4 py-2.5 sm:flex">
              <FileText className="h-4 w-4 text-irfo-yellow-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-irfo-yellow-700">
                {companyInfo.certificates.length} Documents
              </span>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyInfo.certificates.map((cert, index) => (
              <div
                key={cert.id}
                className={`reveal reveal-delay-${index + 1} ${certVisible ? 'is-visible' : ''}`}
              >
                <CertificateCard
                  certificate={cert}
                  onClick={setSelectedCert}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ==================== 5. Trust / Credibility Area ==================== */}
        <div
          ref={trustRef}
          className={`reveal ${trustVisible ? 'is-visible' : ''} mb-24`}
        >
          <div className="overflow-hidden rounded-sm bg-charcoal-900">
            <div className="grid gap-0 lg:grid-cols-12">
              {/* Left: heading */}
              <div className="border-b border-charcoal-800 p-8 lg:col-span-4 lg:border-b-0 lg:border-r">
                <div className="mb-4 flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-irfo-red-500" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-irfo-red-400">
                    Why Trust IRFO
                  </p>
                </div>
                <h3 className="text-2xl font-bold leading-tight text-white">
                  A credible partner with documented experience
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-400">
                  IRFO&apos;s reputation is built on real contracts,
                  international partnerships, and compliance with industry
                  standards.
                </p>
              </div>

              {/* Right: trust points grid */}
              <div className="p-8 lg:col-span-8">
                <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {companyInfo.trustPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`reveal reveal-delay-${index + 1} ${trustVisible ? 'is-visible' : ''} flex items-start gap-4 border-b border-charcoal-800 pb-6 last:border-b-0 sm:last:border-b-0`}
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-irfo-red-600/20">
                        <CheckCircle2 className="h-5 w-5 text-irfo-red-400" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-bold text-white">
                          {point.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-charcoal-400">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Partner brands strip */}
                <div className="mt-8 border-t border-charcoal-800 pt-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-charcoal-500">
                    Authorized Representatives
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {companyInfo.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex items-center gap-2.5 rounded-sm border border-charcoal-800 bg-charcoal-950/50 px-4 py-2.5"
                      >
                        <Award className="h-4 w-4 flex-shrink-0 text-irfo-yellow-400" />
                        <span className="text-sm font-semibold text-charcoal-200">
                          {partner.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== 6. Transition to New Direction ==================== */}
        <div
          ref={transRef}
          className={`reveal ${transVisible ? 'is-visible' : ''}`}
        >
          <div className="relative overflow-hidden rounded-sm border border-charcoal-200 bg-white p-8 sm:p-10 lg:p-12">
            {/* Yellow accent bar */}
            <div className="absolute left-0 top-0 h-full w-1.5 bg-irfo-yellow-400" />
            <div className="max-w-4xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-irfo-yellow-600">
                Looking Forward
              </p>
              <h3 className="text-xl font-bold leading-snug text-charcoal-900 sm:text-2xl">
                {companyInfo.transitionStatement}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-500">
                Building on its foundation in industrial supply, IRFO now
                extends its expertise into intelligent agriculture and
                resource-management solutions — combining proven experience
                with new technology-driven capabilities.
              </p>
              <a
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('solutions')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-irfo-red-600 transition-colors hover:text-irfo-red-700"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate lightbox modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}
