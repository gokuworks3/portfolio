import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PROFILE } from '../data/siteContent';

const initialFormState = {
  name: '',
  email: '',
  plan: '',
  message: ''
};

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${PROFILE.email}`;

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: 'idle',
    message: PROFILE.responseTime
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({
      type: 'idle',
      message: 'Sending your message...'
    });

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          plan: formData.plan || 'Not selected',
          message: formData.message,
          _subject: `New portfolio enquiry from ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || 'Failed to send message.');
      }

      setFormData(initialFormState);
      setSubmitStatus({
        type: 'success',
        message: 'Thanks! Your message has been sent.'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: `Could not send right now. Please email directly at ${PROFILE.email}.`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing section-container scroll-mt-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let&apos;s Build Your Next Website"
        description="Tell me your business goal and budget option. I will guide you and reply quickly with a clear plan."
        centered
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div data-reveal="left" className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-7">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex min-h-11 items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
          >
            <span className="rounded-lg border border-brand-200 bg-brand-100 p-2 text-brand-700">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Email</p>
              <p className="text-sm font-semibold text-slate-900">{PROFILE.email}</p>
            </div>
          </a>

          <a
            href={`tel:${PROFILE.phoneHref}`}
            className="flex min-h-11 items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2"
          >
            <span className="rounded-lg border border-brand-200 bg-brand-100 p-2 text-brand-700">
              <Phone size={18} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-slate-500">Phone</p>
              <p className="text-sm font-semibold text-slate-900">{PROFILE.phoneDisplay}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${PROFILE.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-11 items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
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
                className="form-control"
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
                className="form-control"
                placeholder="your@email.com"
              />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">What do you need?</span>
              <select
                name="plan"
                value={formData.plan}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="">Choose an option</option>
                <option value="New website">New website</option>
                <option value="Website redesign">Website redesign</option>
                <option value="Landing page">Landing page</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="sm:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="form-control min-h-36 resize-none py-3"
                placeholder="Tell me about your project"
              />
            </label>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button type="submit" disabled={isSubmitting} className="btn-accent rounded-lg px-5 py-3 disabled:cursor-not-allowed disabled:opacity-60">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <a
              href={`https://wa.me/${PROFILE.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost rounded-lg border-emerald-300 bg-emerald-50 px-5 py-3 text-emerald-700 hover:border-emerald-400 hover:text-emerald-800"
            >
              WhatsApp Now
            </a>

            <p
              className={`text-sm ${
                submitStatus.type === 'success'
                  ? 'font-semibold text-emerald-700'
                  : submitStatus.type === 'error'
                    ? 'font-semibold text-rose-700'
                    : 'text-slate-500'
              }`}
            >
              {submitStatus.message}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
