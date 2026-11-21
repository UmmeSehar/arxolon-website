import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus, Sparkles, CheckCircle2, Star } from "lucide-react";

const FALLBACK_MEDIA =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";

export default function Home() {
  const [heroZoomed, setHeroZoomed] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleImgError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MEDIA) {
      e.currentTarget.src = FALLBACK_MEDIA;
    }
  };

  const services = [
    {
      title: "Website Development",
      desc: "Fast, reliable business websites and web applications built for smooth performance across devices.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Social Media Marketing",
      desc: "Targeted campaigns on social platforms to reach real audiences, inquiries, and brand growth.",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mobile App Development",
      desc: "Clean, user-friendly mobile applications crafted for everyday customer convenience.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Graphic Designing",
      desc: "Clear, modern social posts, banners, flyers, and visual creatives tailored to your brand.",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Website Designing",
      desc: "Structured, attractive page layouts and clear visual hierarchy that visitors easily understand.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Social Media Account Management",
      desc: "Consistent posting, profile care, and multi-account handling across Instagram, Facebook, and TikTok.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Video Editing",
      desc: "Engaging short-form reels, promos, and clean video edits with smooth pacing and sound.",
      img: "https://images.unsplash.com/photo-1574717024653-61fd3113ff6d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "E-Commerce Fashion & Retail Store",
      desc: "Online storefronts for fashion and retail brands with clean product displays and easy shopping flow.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Logos & Brand Identity",
      desc: "Distinctive logos, color palettes, and cohesive visual identity elements for lasting recognition.",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const steps = [
    { num: "01", title: "Share Requirements", desc: "Tell us what you need in simple words." },
    { num: "02", title: "Plan & Structure", desc: "We map out the right layout and workflow." },
    { num: "03", title: "Design & Build", desc: "Our team creates your visuals, pages, and assets." },
    { num: "04", title: "Review & Refine", desc: "We polish details based on your feedback." },
    { num: "05", title: "Launch & Support", desc: "Go live smoothly with ongoing assistance." },
  ];

  const faqs = [
    {
      q: "How do we get started with a project?",
      a: "Visit the Contact page, select your service, and share your details so our team can respond.",
    },
    {
      q: "Do I need technical knowledge to work with your team?",
      a: "No technical knowledge is needed. We explain steps in simple, clear words and handle the work for you.",
    },
    {
      q: "Are all pages mobile-friendly?",
      a: "Yes, the layout adapts to mobile screens, tablets, and desktops.",
    },
    {
      q: "Can you manage multiple social media accounts together?",
      a: "Yes, our Social Media Account Management service handles regular posting and account upkeep across platforms.",
    },
    {
      q: "Do you edit short videos, reels, and promotional clips?",
      a: "Yes, our Video Editing service covers clean cuts, sound balance, captions, and social-ready formats.",
    },
    {
      q: "Can you build online stores for fashion and retail brands?",
      a: "Yes, we build E-Commerce Fashion & Retail Store layouts designed for product displays and smooth browsing.",
    },
    {
      q: "Can we request changes before final delivery?",
      a: "Yes, we review and refine details so the final result matches your expectations.",
    },
    {
      q: "Can we discuss additional project details directly with the team?",
      a: "Yes, once you connect with our team, you can discuss your specific goals and additional project details directly.",
    },
    {
      q: "How do we contact you directly for quick questions?",
      a: "You can use the Contact page form, email info.arxolontech@gmail.com, or chat on WhatsApp.",
    },
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-br from-[#051836] via-[#09295B] to-[#0E3A7A] text-white pt-28 pb-20 lg:pt-36 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/15 border border-sky-300/30 text-sky-200 text-xs sm:text-sm font-bold mb-5">
              <Sparkles className="w-4 h-4 text-sky-300" /> Arxolon Technologies
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight">
              Creative Digital & Tech Agency That{" "}
              <span className="text-sky-300">Grows Your Business.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-blue-100 leading-relaxed max-w-2xl">
              We build modern websites and mobile apps, design standout logos, edit engaging videos, and manage your social media—all in simple, stress-free steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-7 py-3.5 rounded-full bg-sky-400 hover:bg-sky-300 text-[#051836] font-extrabold text-sm sm:text-base transition"
              >
                Explore Services
              </Link>
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full border border-sky-200/50 text-white hover:bg-white/10 font-bold text-sm sm:text-base transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-visible border border-sky-300/25 shadow-2xl bg-[#07214A] p-2">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
                alt="Digital Workspace"
                onError={handleImgError}
                onClick={() => setHeroZoomed(!heroZoomed)}
                className={`w-full h-72 sm:h-80 object-cover rounded-2xl hero-motion-img ${
                  heroZoomed ? "is-zoomed shadow-2xl" : ""
                }`}
              />
              <p className="text-[11px] text-sky-200/80 text-center mt-2">
                Click image to {heroZoomed ? "reset zoom" : "zoom"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 9 SERVICES WITH MOVED IMAGES */}
      <section className="py-20 bg-gradient-to-b from-[#082A5E] via-[#0B3D82] to-[#124FA3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-300">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              9 Core Services
            </h2>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">
              Simple, practical solutions designed for easy understanding and steady business growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#07214A] border border-sky-300/25 rounded-2xl overflow-hidden shadow-lg hover:border-sky-300 transition flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      onError={handleImgError}
                      className="w-full h-48 object-cover live-motion-img"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-white mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-extrabold text-sky-300 hover:text-white"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HIGHLIGHTS */}
      <section className="py-16 bg-gradient-to-r from-[#DCEEFF] via-[#EAF4FF] to-[#DCEEFF] text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-[#0B5ED7] mb-3" />
            <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">Easy for Everyone</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Clear communication without confusing technical terms so any business owner can follow along easily.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-[#0B5ED7] mb-3" />
            <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">All-in-One Creative & Tech</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              From websites and mobile apps to graphics, video edits, stores, and social management in one place.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-[#0B5ED7] mb-3" />
            <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">Direct Team Discussion</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Connect with our team to share your exact goals and discuss additional advantages for your project.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 5 STEPS SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-10">
            How We Work in 5 Steps
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-white/10 border border-sky-300/20 rounded-2xl p-6"
              >
                <span className="text-xl font-extrabold text-sky-300 block mb-2">
                  {st.num}
                </span>
                <h3 className="font-bold text-base text-white mb-1.5">{st.title}</h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT FEEDBACK SECTION */}
      <section className="py-16 bg-[#082A5E] text-white border-t border-sky-300/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">Client Feedback</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Tariq Mahmood",
                role: "Business Owner",
                quote: "Simple process, clear updates, and a website that looks clean on both desktop and mobile.",
              },
              {
                name: "Sana Tariq",
                role: "Retail Store Founder",
                quote: "Great help with product visuals, social media handling, and timely delivery.",
              },
              {
                name: "Usman Khalid",
                role: "Service Provider",
                quote: "Easy to talk to the team and discuss project needs without complicated jargon.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#051836] border border-sky-300/20 rounded-2xl p-6">
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-blue-100 leading-relaxed mb-4">"{item.quote}"</p>
                <p className="font-bold text-white text-sm">{item.name}</p>
                <p className="text-xs text-sky-300">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMMON QUESTIONS (9 Questions) */}
      <section className="py-16 bg-gradient-to-b from-[#DCEEFF] to-[#CFE6FF] text-[#051836]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-6">
            Common Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-blue-200 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 font-bold text-sm sm:text-base text-[#051836]"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-sm text-slate-700 leading-relaxed">
                    {item.a}
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