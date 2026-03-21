import { useEffect, useState } from 'react';
import { MessageCircle, X, Send, Clock } from 'lucide-react';
import { PROFILE } from '../data/siteContent';

function QuickContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setStatus('sending');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PROFILE.email}`, {
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
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-end sm:bottom-6 sm:left-auto sm:right-6">
      {/* Expandable panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2rem)] max-w-sm animate-scaleIn rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:w-96">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900">Quick Message</p>
              <p className="flex items-center gap-1 text-xs text-slate-500">
                <Clock size={12} />
                {PROFILE.responseTime}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="tap-target flex h-11 w-11 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            >
              <X size={18} />
            </button>
          </div>

          {status === 'success' ? (
            <div className="rounded-xl bg-emerald-50 p-4 text-center">
              <p className="font-semibold text-emerald-700">Message sent!</p>
              <p className="text-sm text-emerald-600">{PROFILE.name} will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-control"
                required
              />
              <textarea
                placeholder="How can I help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="form-control min-h-28 resize-none py-3"
                required
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-accent flex w-full"
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
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${
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
