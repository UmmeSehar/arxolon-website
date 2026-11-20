import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const cases = [
    {
      client: 'FinBridge Capital',
      service: 'Full-Stack Web Development + Technical SEO',
      result: '+315% Organic Traffic & 99 PageSpeed',
      summary: 'Engineered a custom React financial portal with structured schema markup, reducing bounce rate by 48% and ranking 30+ commercial keywords in Top 3.'
    },
    {
      client: 'NexaLogistics UAE',
      service: 'Authority Backlinks + Local SEO',
      result: 'DR 18 to DR 54 in 4 Months',
      summary: 'Executed a targeted editorial backlink campaign across supply-chain and MENA business publications, generating 140+ monthly B2B freight inquiries.'
    },
    {
      client: 'CloudCart Commerce',
      service: 'Performance Digital Marketing & CRO',
      result: '4.8x Return on Ad Spend (ROAS)',
      summary: 'Restructured Google Shopping feeds, Meta retargeting funnels, and checkout UX to scale monthly revenue by 220%.'
    }
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">Case Studies</span>
          <h1 className="text-4xl font-extrabold text-arxNavy mt-2">Proven Results Across Industries</h1>
          <p className="mt-3 text-slate-600">Explore how Arxolon Technologies combines clean engineering with aggressive SEO and marketing.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col justify-between hover:border-arxCyan transition">
              <div>
                <span className="text-xs font-bold text-arxBlue uppercase tracking-wider">{item.service}</span>
                <h3 className="text-2xl font-bold text-arxNavy mt-2">{item.client}</h3>
                <div className="my-4 bg-arxNavy text-arxCyan text-xs font-extrabold px-4 py-2.5 rounded-lg inline-block">
                  {item.result}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.summary}</p>
              </div>
              <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-arxNavy hover:text-arxBlue">
                Replicate These Results <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}