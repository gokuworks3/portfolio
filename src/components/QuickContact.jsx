import { useState } from 'react';
import { MessageCircle, X, Send, Clock } from 'lucide-react';

function QuickContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/gokuworks3@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          message: formData.message,
          _subject: `Quick message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', message: '' });
        setTimeout(() => {
          setStatus('idle');
          setIsOpen(false);
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expandable panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 animate-scaleIn rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900">Quick Message</p>
              <p className="flex items-center gap-1 text-xs text-slate-500">
                <Clock size={12} />
                Reply within 24 hours
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X size={18} />
            </button>
          </div>

          {status === 'success' ? (
            <div className="rounded-xl bg-emerald-50 p-4 text-center">
              <p className="font-semibold text-emerald-700">Message sent!</p>
              <p className="text-sm text-emerald-600">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                required
              />
              <textarea
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
                required
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:from-brand-500 hover:to-accent-500 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-center text-xs text-red-500">Failed to send. Please try again.</p>
              )}
            </form>
          )}
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen
            ? 'bg-slate-800 text-white'
            : 'bg-gradient-to-r from-brand-600 to-accent-600 text-white'
        }`}
        aria-label="Quick contact"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}

        {/* Pulsing indicator when closed */}
        {!isOpen && (
          <>
            <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-emerald-400" />
            <span className="absolute -right-0.5 -top-0.5 h-4 w-4 animate-ping rounded-full bg-emerald-400" />
          </>
        )}
      </button>
    </div>
  );
}

export default QuickContact;
