import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Code, Search, Link2, TrendingUp } from 'lucide-react';

export default function Services() {
  const packages = [
    {
      icon: <Code className="w-8 h-8 text-arxCyan" />,
      title: 'Full-Stack Web Development',
      tag: 'Custom Engineering',
      desc: 'High-speed, mobile-first websites and web applications built with modern React, Next.js, and Node.js stacks.',
      features: [
        'Custom UI/UX Tailored to Brand Identity',
        'REST APIs, Admin Panels & Database Setup',
        'Technical SEO & Schema Markup Built-In',
        'SSL, Cloud Hosting & 98+ Speed Optimization'
      ]
    },
    {
      icon: <Search className="w-8 h-8 text-arxCyan" />,
      title: 'Search Engine Optimization (SEO)',
      tag: 'Organic Growth',
      desc: 'Comprehensive technical, on-page, and local SEO campaigns engineered to rank your high-value commercial keywords.',
      features: [
        '100-Point Technical Site & Crawl Audit',
        'High-Intent Keyword Research & Content Plan',
        'Meta Tags, Internal Linking & Core Web Vitals',
        'Monthly Google Search Console & Ranking Reports'
      ]
    },
    {
      icon: <Link2 className="w-8 h-8 text-arxCyan" />,
      title: 'High-Authority Backlink Outreach',
      tag: 'Domain Authority',
      desc: 'Manual white-hat outreach securing contextual do-follow backlinks from high-DR, real-traffic industry publications.',
      features: [
        'DR 50+ to DR 80+ Niche Guest Posts',
        'Contextual Editorial Link Insertions',
        'Competitor Backlink Gap Replication',
        'Zero PBNs — 100% Permanent White-Hat Links'
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-arxCyan" />,
      title: 'Performance Digital Marketing',
      tag: 'Paid Acquisition',
      desc: 'Precision Google Ads, Meta Ads, and conversion optimization funnels designed to scale qualified B2B and B2C leads.',
      features: [
        'Google Search, Display & Retargeting Ads',
        'Facebook & Instagram Lead Generation Campaigns',
        'High-Converting Landing Page A/B Testing',
        'Full Pixel, GTM & ROAS Conversion Tracking'
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">Arxolon Capabilities</span>
          <h1 className="text-4xl font-extrabold text-arxNavy mt-2">Services Built for Measurable ROI</h1>
          <p className="mt-4 text-slate-600">
            Whether you need a custom web platform from scratch or aggressive search engine rankings, we deliver end-to-end execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-arxCyan transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-arxNavy flex items-center justify-center">
                    {pkg.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider bg-cyan-50 text-arxBlue px-3 py-1 rounded-full border border-cyan-200">
                    {pkg.tag}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-arxNavy">{pkg.title}</h2>
                <p className="text-sm text-slate-600 mt-2 mb-6 leading-relaxed">{pkg.desc}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <Check className="w-5 h-5 text-arxBlue shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className="block w-full text-center bg-arxNavy hover:bg-arxBlue text-white font-bold py-3.5 rounded-lg transition"
              >
                Request Proposal for {pkg.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}