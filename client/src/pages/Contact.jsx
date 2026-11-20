import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'Full-Stack Web Development',
    budget: '$1,500 - $3,000',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', text: data.message });
        setForm({
          name: '',
          email: '',
          phone: '',
          website: '',
          service: 'Full-Stack Web Development',
          budget: '$1,500 - $3,000',
          message: ''
        });
      } else {
        setStatus({ type: 'error', text: data.message || 'Submission failed.' });
      }
    } catch (err) {
      setStatus({ type: 'error', text: 'Cannot connect to backend server. Ensure node server/index.js is running.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-lg">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">Start Your Project</span>
          <h1 className="text-3xl font-extrabold text-arxNavy mt-1">Request a Free Proposal & SEO Audit</h1>
          <p className="text-slate-600 mt-2 mb-8">Share your goals below and an Arxolon strategist will prepare a tailored roadmap.</p>

          {status.text && (
            <div className={`p-4 rounded-xl mb-6 flex items-center gap-3 text-sm font-bold ${
              status.type === 'success'
                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {status.type === 'success' ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              {status.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-arxNavy mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ahmed Khan"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-arxBlue focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-arxNavy mb-1.5">Business Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ahmed@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-arxBlue focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-arxNavy mb-1.5">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+92 300 0000000"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-arxBlue focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-arxNavy mb-1.5">Website URL (Optional)</label>
                <input
                  type="text"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-arxBlue focus:outline-none"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase text-arxNavy mb-1.5">Service Needed *</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-arxBlue focus:outline-none bg-white"
                >
                  <option>Full-Stack Web Development</option>
                  <option>Technical & On-Page SEO</option>
                  <option>Authority Backlink Building</option>
                  <option>Performance Digital Marketing</option>
                  <option>Complete Growth Bundle</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-arxNavy mb-1.5">Estimated Budget</label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-arxBlue focus:outline-none bg-white"
                >
                  <option>$500 - $1,500</option>
                  <option>$1,500 - $3,000</option>
                  <option>$3,000 - $7,500</option>
                  <option>$7,500+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-arxNavy mb-1.5">Project Scope & Goals</label>
              <textarea
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your target market, keywords, or web features..."
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-arxBlue focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-arxNavy to-arxBlue hover:opacity-95 text-white font-bold py-3.5 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
            >
              {loading ? 'Sending Inquiry...' : 'Submit Inquiry'} <Send className="w-4 h-4 text-arxCyan" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}