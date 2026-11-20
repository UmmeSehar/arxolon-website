import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Search, Link2, Megaphone, CheckCircle2, ArrowRight,
  ChevronDown, Star, Cpu, TrendingUp
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      icon: <Code2 className="w-7 h-7 text-arxBlue" />,
      title: 'Custom Web Development',
      desc: 'Scalable React, Next.js, and Node.js web applications built with sub-second speed and clean SEO structure.',
      bullets: ['Custom Corporate & SaaS Sites', 'E-Commerce & Payment Gateways', '98+ Google PageSpeed Score']
    },
    {
      icon: <Search className="w-7 h-7 text-arxBlue" />,
      title: 'Technical & On-Page SEO',
      desc: 'Complete crawl optimization, schema markup, and high-intent keyword targeting to dominate Page 1 rankings.',
      bullets: ['Core Web Vitals Optimization', 'Competitor Keyword Gap Audit', 'Local & International SEO']
    },
    {
      icon: <Link2 className="w-7 h-7 text-arxBlue" />,
      title: 'Authority Backlink Building',
      desc: 'White-hat editorial outreach and high-DR niche placements that compound your domain authority safely.',
      bullets: ['DR 50–80+ Guest Placements', 'Contextual Niche Link Insertions', '100% Google-Safe White-Hat']
    },
    {
      icon: <Megaphone className="w-7 h-7 text-arxBlue" />,
      title: 'Performance Digital Marketing',
      desc: 'Data-backed Google Ads, Meta lead funnels, and conversion rate optimization built for measurable ROI.',
      bullets: ['Google Search & Shopping Ads', 'Meta Lead Generation Funnels', 'Conversion Tracking & Analytics']
    }
  ];

  const faqs = [
    {
      q: 'How fast can Arxolon Technologies build and launch a custom website?',
      a: 'Standard corporate and agency websites are engineered, tested, and deployed within 7 to 14 business days with full on-page SEO configured.'
    },
    {
      q: 'How do your backlink campaigns improve Google rankings?',
      a: 'We acquire genuine, contextual do-follow backlinks from high-traffic, authoritative domains in your niche—boosting Domain Rating (DR) and organic keyword positions.'
    },
    {
      q: 'Do you provide monthly reporting for SEO and Digital Marketing?',
      a: 'Yes. Every client receives live dashboard access plus detailed monthly reports covering keyword movements, backlinks built, traffic growth, and ad ROAS.'
    },
    {
      q: 'Can you redesign our existing website without losing current SEO rankings?',
      a: 'Absolutely. We execute a strict 301-redirect map, preserve URL equity, and upgrade technical schema so your rankings climb post-launch.'
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-arxDark via-arxNavy to-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/30 text-arxCyan text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-6">
              <Cpu className="w-4 h-4" /> Next-Gen Web, SEO & Growth Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Architecting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-arxCyan to-blue-400">Authority & Scale</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              Arxolon Technologies builds ultra-fast web platforms, executes data-driven SEO, secures high-authority backlinks, and runs ROI-focused marketing campaigns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark hover:opacity-95 px-7 py-3.5 rounded-lg font-extrabold flex items-center gap-2 transition shadow-lg shadow-cyan-500/20"
              >
                Get Free Growth Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-7 py-3.5 rounded-lg font-bold transition"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Interactive Metrics Dashboard Card */}
          <div className="bg-arxNavy/90 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-6">
              <div>
                <p className="text-xs text-arxCyan uppercase font-bold tracking-wider">Arxolon Growth Engine</p>
                <h3 className="text-xl font-bold text-white">Verified Client Impact</h3>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +340% Organic ROI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-arxDark p-4 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400">Core Web Vitals</p>
                <p className="text-3xl font-extrabold text-white mt-1">99<span className="text-arxCyan text-lg">/100</span></p>
              </div>
              <div className="bg-arxDark p-4 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400">DR 60+ Backlinks</p>
                <p className="text-3xl font-extrabold text-white mt-1">6,200<span className="text-arxCyan text-lg">+</span></p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-arxCyan" /> Custom Full-Stack React & Node Architecture</div>
              <div className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-arxCyan" /> White-Hat Editorial Link Outreach</div>
              <div className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-arxCyan" /> High-Intent Search & Social Ad Funnels</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxNavy mt-2">Full-Stack Digital Capabilities</h2>
            <p className="mt-3 text-slate-600">Integrated engineering and search marketing solutions built to scale revenue.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-arxCyan hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-5">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-arxNavy mb-2">{srv.title}</h3>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">{srv.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {srv.bullets.map((pt, i) => (
                      <li key={i} className="text-xs font-bold text-arxNavy flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-arxCyan"></span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/services" className="text-sm font-bold text-arxBlue hover:text-arxNavy inline-flex items-center gap-1">
                  Explore Package <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH & SEO STACK */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Powered By Industry-Leading Engineering & SEO Platforms</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-arxNavy font-extrabold text-base sm:text-lg">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>Tailwind CSS</span>
            <span>Ahrefs Enterprise</span>
            <span>SEMrush</span>
            <span>Google Ads & Analytics 4</span>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-arxNavy text-center mb-12">Trusted by Ambitious Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Tariq Mahmood',
                role: 'CEO, FinBridge Capital',
                text: 'Arxolon Technologies rebuilt our entire web platform and took us from Page 4 to Top 3 on Google within 90 days.'
              },
              {
                name: 'Sarah Jenkins',
                role: 'Marketing Director, CloudCart UK',
                text: 'Their DR 65+ backlink outreach and technical SEO audit doubled our organic traffic without spending extra on ads.'
              },
              {
                name: 'Usman Khalid',
                role: 'Founder, NexaLogistics UAE',
                text: 'Clean code, fast communication, and real ROI. Their Google Ads and landing page funnel cut our lead cost by 42%.'
              }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-sm text-slate-600 italic leading-relaxed mb-5">"{rev.text}"</p>
                <div>
                  <p className="font-bold text-arxNavy text-sm">{rev.name}</p>
                  <p className="text-xs text-arxBlue font-semibold">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-arxNavy text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-arxNavy bg-slate-50 hover:bg-cyan-50/40"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-arxBlue transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}