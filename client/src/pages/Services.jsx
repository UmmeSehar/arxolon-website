import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Headphones, ShieldCheck, ArrowRight } from "lucide-react";

const FALLBACK_MEDIA =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";

export default function Services() {
  const [selectedService, setSelectedService] = useState("Website Development");

  const handleImgError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MEDIA) {
      e.currentTarget.src = FALLBACK_MEDIA;
    }
  };

  const serviceList = [
    {
      name: "Website Development",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      advantage: "Clean structure, responsive screens, and reliable performance.",
    },
    {
      name: "Social Media Marketing",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80",
      advantage: "Audience-focused ad planning and clear campaign tracking.",
    },
    {
      name: "Mobile App Development",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
      advantage: "Smooth navigation and practical mobile user experience.",
    },
    {
      name: "Graphic Designing",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
      advantage: "Sharp visual hierarchy and consistent brand styling.",
    },
    {
      name: "Website Designing",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
      advantage: "Modern layouts that highlight key offers clearly.",
    },
    {
      name: "Social Media Account Management",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
      advantage: "Coordinated handling across Instagram, Facebook, and TikTok.",
    },
    {
      name: "Video Editing",
      img: "https://images.unsplash.com/photo-1574717024653-61fd3113ff6d?auto=format&fit=crop&w=900&q=80",
      advantage: "Clean cuts, captions, and social-ready video formats.",
    },
    {
      name: "E-Commerce Fashion & Retail Store",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      advantage: "Product-focused storefront presentation for retail and apparel.",
    },
    {
      name: "Logos & Brand Identity",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
      advantage: "Memorable marks and cohesive visual guidelines.",
    },
  ];

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our 9 Services</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-sm sm:text-base">
            Explore our complete service lineup designed for businesses looking for clear, dependable execution.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="bg-[#CFE6FF] border border-blue-300 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#0B5ED7] shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-[#051836]">
                Work delivered on time according to agreed milestones.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Headphones className="w-5 h-5 text-[#0B5ED7] shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-[#051836]">
                24/7 support availability for smooth communication.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0B5ED7] shrink-0 mt-0.5" />
              <p className="text-sm font-bold text-[#051836]">
                Dedicated commitment to quality from start to finish.
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 font-semibold border-t border-blue-300/80 pt-4">
            If you connect with our team, they will tell you about more advantages and custom options tailored to your project requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {serviceList.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    onError={handleImgError}
                    className="w-full h-44 object-cover live-motion-img"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-extrabold text-[#051836] mb-2">{item.name}</h2>
                  <p className="text-sm text-slate-700 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-1" />
                    <span>{item.advantage}</span>
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to="/contact"
                  onClick={() => setSelectedService(item.name)}
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0B5ED7] hover:text-[#051836]"
                >
                  Select Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#051836] to-[#0B428A] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <label
                htmlFor="serviceSelect"
                className="block text-xs uppercase tracking-wider text-sky-300 font-bold mb-1.5"
              >
                Select Service (All 9)
              </label>
              <select
                id="serviceSelect"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-[#07214A] border border-sky-300/30 text-white text-sm font-bold focus:outline-none"
              >
                {serviceList.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-sky-400 hover:bg-sky-300 text-[#051836] font-extrabold text-sm transition"
            >
              Continue With {selectedService}
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-blue-200 p-6 sm:p-8 grid md:grid-cols-12 gap-6 items-center shadow-sm">
            <div className="md:col-span-5 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                alt="Handshake and Project Discussion"
                onError={handleImgError}
                className="w-full h-56 object-cover rounded-xl live-motion-img"
              />
            </div>
            <div className="md:col-span-7">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#051836] mb-2">
                Let’s Discuss Your Project Details
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once you pick a service above and reach out to our team, we can discuss your timeline, goals, and additional advantages together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}