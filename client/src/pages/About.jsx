import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-arxDark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxCyan">
            About Arxolon Technologies
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-4">
            We help businesses look professional and grow online.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Based on Model Town Link Road, Lahore, we work with local and international businesses to build strong digital brands.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                alt="Arxolon Technologies Team Collaboration"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mt-2 mb-5">
              One trusted team for your website, design, videos, and social media.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Running a business is already hard work. You should not have to hire five different freelancers just to build a website, design a logo, edit promotional videos, and manage your social accounts.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              At Arxolon Technologies, we bring all five services together with clear communication, honest pricing, and modern visuals that your customers will trust immediately.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Easy, Jargon-Free Communication",
                "Mobile-Perfect Visual Quality",
                "Fast Turnaround & Revisions",
                "Direct WhatsApp Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 font-bold text-sm text-arxDark">
                  <CheckCircle2 className="w-5 h-5 text-arxBlue shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark font-bold text-sm shadow-md hover:opacity-95 transition"
            >
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-arxSurface border border-slate-200/80">
            <Zap className="w-8 h-8 text-arxBlue mb-4" />
            <h3 className="text-xl font-bold text-arxDark mb-2">Clean & Modern Visuals</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every website, poster, and video is crafted with sharp colors, clean spacing, and modern layouts.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-arxSurface border border-slate-200/80">
            <Users className="w-8 h-8 text-arxBlue mb-4" />
            <h3 className="text-xl font-bold text-arxDark mb-2">Customer-First Approach</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We explain everything clearly so you always know what is happening with your project.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-arxSurface border border-slate-200/80">
            <ShieldCheck className="w-8 h-8 text-arxBlue mb-4" />
            <h3 className="text-xl font-bold text-arxDark mb-2">Reliable Ongoing Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Even after your website or campaign launches, our team stays available whenever you need updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}