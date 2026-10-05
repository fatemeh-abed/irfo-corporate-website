import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import { companyInfo } from '@/data/companyInfo';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: '', email: '', company: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: MapPin, label: 'Address', value: companyInfo.address },
    { icon: Phone, label: 'Phone', value: companyInfo.phone },
    { icon: Mail, label: 'Email', value: companyInfo.email },
    {
      icon: Clock,
      label: 'Headquarters',
      value: `${companyInfo.headquarters} — Founded ${companyInfo.founded}`,
    },
  ];

  return (
    <section id="contact" className="bg-charcoal-50 py-20 lg:py-28">
      <div className="container-irfo">
        {/* Header */}
        <div
          ref={headerRef}
          className={`reveal ${headerVisible ? 'is-visible' : ''} mb-14 max-w-3xl`}
        >
          <p className="section-eyebrow">Contact Us</p>
          <h2 className="section-title">Get in touch with IRFO</h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal-600">
            The technical services of IRFO are at the client&apos;s disposal for
            any request connected with our wide range of industrial supply
            solutions. We can also comply with the client&apos;s specific
            requirements and with all relevant international specifications.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-sm border border-charcoal-200 bg-white p-5 transition-shadow duration-300 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-sm bg-irfo-red-600 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-charcoal-400">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium leading-relaxed text-charcoal-700">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <div className="mt-5 overflow-hidden rounded-sm border border-charcoal-200 bg-white">
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-charcoal-100 to-charcoal-200">
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-irfo-red-500" />
                  <p className="text-sm font-medium text-charcoal-500">
                    Sefakoy, Istanbul, Turkey
                  </p>
                  <p className="mt-1 text-xs text-charcoal-400">
                    Map to be updated
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className={`reveal ${formVisible ? 'is-visible' : ''} lg:col-span-3`}
          >
            <div className="rounded-sm border border-charcoal-200 bg-white p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-charcoal-900">
                Send us a message
              </h3>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-sm border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                  Thank you. Your message has been received — we will get back to
                  you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-700"
                    >
                      Full Name <span className="text-irfo-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-charcoal-300 bg-white px-4 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-irfo-red-500 focus:outline-none focus:ring-1 focus:ring-irfo-red-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-700"
                    >
                      Email <span className="text-irfo-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-charcoal-300 bg-white px-4 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-irfo-red-500 focus:outline-none focus:ring-1 focus:ring-irfo-red-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-charcoal-300 bg-white px-4 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-irfo-red-500 focus:outline-none focus:ring-1 focus:ring-irfo-red-500"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-sm font-semibold text-charcoal-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full rounded-sm border border-charcoal-300 bg-white px-4 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-irfo-red-500 focus:outline-none focus:ring-1 focus:ring-irfo-red-500"
                      placeholder="What is this about?"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-charcoal-700"
                  >
                    Message <span className="text-irfo-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-sm border border-charcoal-300 bg-white px-4 py-2.5 text-sm text-charcoal-800 transition-colors focus:border-irfo-red-500 focus:outline-none focus:ring-1 focus:ring-irfo-red-500"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-sm bg-irfo-red-600 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-irfo-red-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-irfo-red-400 focus-visible:ring-offset-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>

                <p className="text-xs text-charcoal-400">
                  This form is for frontend demonstration. Backend integration
                  for email delivery can be added as a future enhancement.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
