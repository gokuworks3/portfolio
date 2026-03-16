import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';

const initialFormState = {
  name: '',
  email: '',
  message: ''
};

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
    setFormData(initialFormState);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section-spacing section-container scroll-mt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Your Next Website"
        description="Have a project in mind? Reach out and let's discuss how your business can stand out online."
        centered
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-reveal="left" className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-7">
          <a
            href="mailto:gokuworks3@gmail.com"
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-300"
          >
            <span className="rounded-lg border border-brand-200 bg-brand-100 p-2 text-brand-700">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Email</p>
              <p className="text-sm font-semibold text-slate-900">gokuworks3@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+919342272925"
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-300"
          >
            <span className="rounded-lg border border-brand-200 bg-brand-100 p-2 text-brand-700">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Phone</p>
              <p className="text-sm font-semibold text-slate-900">9342272925</p>
            </div>
          </a>

          <a
            href="https://wa.me/919342272925"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-emerald-300"
          >
            <span className="rounded-lg border border-emerald-200 bg-emerald-100 p-2 text-emerald-700">
              <MessageCircle size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">WhatsApp</p>
              <p className="text-sm font-semibold text-slate-900">Chat on WhatsApp</p>
            </div>
          </a>
        </div>

        <form
          data-reveal="right"
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-card sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500"
                placeholder="Your name"
              />
            </label>

            <label className="sm:col-span-1">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500"
                placeholder="your@email.com"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-500"
                placeholder="Tell me about your project"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button type="submit" className="btn-accent rounded-lg px-5 py-3">
              Send Message
            </button>

            {isSubmitted ? (
              <p className="text-sm font-semibold text-emerald-700">Thanks! Your message has been sent.</p>
            ) : (
              <p className="text-sm text-slate-500">I usually reply within 24 hours.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
