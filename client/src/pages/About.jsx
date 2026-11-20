import React from 'react';
import { Shield, Target, Zap, Layers } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">About Arxolon Technologies</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-arxNavy mt-2">
            Where Software Engineering Meets Search Dominance
          </h1>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Arxolon Technologies was built to solve a critical gap in the digital agency space: developers often build websites without understanding search engine algorithms, while marketers run campaigns on slow, poorly structured websites. We unite full-stack web engineering, technical SEO, authority backlinking, and paid acquisition under one roof.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Zap className="w-8 h-8 text-arxBlue mb-3" />
              <h3 className="font-bold text-arxNavy">Performance-First Code</h3>
              <p className="text-sm text-slate-600 mt-1">Every platform is engineered with clean React/Node architecture for instant load times.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Shield className="w-8 h-8 text-arxBlue mb-3" />
              <h3 className="font-bold text-arxNavy">100% White-Hat Authority</h3>
              <p className="text-sm text-slate-600 mt-1">Strict editorial outreach and Google-compliant SEO that protects your domain long-term.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Layers className="w-8 h-8 text-arxBlue mb-3" />
              <h3 className="font-bold text-arxNavy">Full-Funnel Execution</h3>
              <p className="text-sm text-slate-600 mt-1">From initial wireframe and backend API to Page 1 rankings and lead conversion.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Target className="w-8 h-8 text-arxBlue mb-3" />
              <h3 className="font-bold text-arxNavy">Transparent Metrics</h3>
              <p className="text-sm text-slate-600 mt-1">Real-time reporting on traffic, backlink DR, keyword positions, and campaign ROAS.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}