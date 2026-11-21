import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus, Sparkles } from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const services = [
    {
      title: "Website Development",
      desc: "Fast, reliable business websites and web applications built for smooth performance across devices.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Social Media Marketing",
      desc: "Targeted campaigns on social platforms to reach real audiences, inquiries, and brand growth.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
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
      img: "https://images.unsplash.com/photo-1574717024653-61fd2323656d?auto=format&fit=crop&w=900&q=80",
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
      q: "Are all pages mobile-friendly?",
      a: "Yes, the layout adapts to mobile screens, tablets, and desktops.",
    },
    {
      q: "Can we discuss additional project details directly with the team?",
      a: "Yes, once you connect with our team, you can discuss your specific goals and project details directly.",
    },
  ];

  return (
    <div>
      {/* 1. HERO SECTION (Dark Navy Matching Header & Footer) */}
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
            <div className="rounded-3xl overflow-hidden border border-sky-300/25 shadow-2xl bg-[#07214A]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
                alt="Digital Workspace"
                className="w-full h-72 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 9 SERVICES WITH MATCHING PICTURES (Light-Blue / Navy Combo, Not All Plain White) */}
      <section className="py-20 bg-gradient-to-b from-[#EAF4FF] via-[#DCEEFF] to-[#CFE6FF] text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mt-1">
              9 Core Services
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white/95 border border-blue-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold text-[#051836] mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0B5ED7] hover:text-[#051836]"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 5 STEPS SECTION (Dark Navy / Royal Blue Combo) */}
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

      {/* 4. FAQ SECTION (Soft Sky Blue Surface) */}
      <section className="py-16 bg-[#E6F2FF] text-[#051836]">
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