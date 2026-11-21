import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const allServices = [
    {
      title: "Website Development",
      tag: "Websites & Online Stores",
      desc: "We create clean, fast-loading websites that look great on mobile phones and computers. Whether you need a company profile or an online shop, we build it ready for customers.",
      features: [
        "Custom Business Websites",
        "Online E-Commerce Stores",
        "WordPress & Modern Web Apps",
        "100% Mobile Friendly Design",
        "Contact & WhatsApp Integration",
        "Ongoing Updates & Support",
      ],
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Digital Marketing",
      tag: "Ads & Customer Leads",
      desc: "We help your business reach the right buyers on Facebook, Instagram, and Google so you get more inquiries, calls, and sales.",
      features: [
        "Facebook & Instagram Ad Campaigns",
        "Google Search Ads",
        "Local Audience Targeting",
        "Google Business Profile Growth",
        "Ad Copy & Creative Setup",
        "Clear Performance Reporting",
      ],
      img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Graphic Designing",
      tag: "Logos & Brand Visuals",
      desc: "Make a strong first impression with professional designs. From brand logos to social media posts and print flyers, we design visuals people remember.",
      features: [
        "Modern Logo & Brand Identity",
        "Social Media Posts & Banners",
        "Business Cards & Stationery",
        "Brochures, Menus & Flyers",
        "Product Packaging Design",
        "High-Resolution Print & Web Files",
      ],
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Video Editing",
      tag: "Reels, TikTok & Promo Ads",
      desc: "Turn raw phone or camera footage into smooth, high-energy videos that keep viewers watching and bring more engagement to your brand.",
      features: [
        "Instagram Reels & TikTok Videos",
        "Promotional Business Ads",
        "YouTube Video Editing",
        "Animated Captions & Transitions",
        "Background Music & Audio Cleanup",
        "Ready-to-Post Vertical & Wide Formats",
      ],
      img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Social Accounts Management",
      tag: "Complete Page Handling",
      desc: "Save your time while we keep your social media pages active, professional, and growing every week with planned posts and reels.",
      features: [
        "Facebook & Instagram Page Management",
        "LinkedIn & TikTok Account Handling",
        "Monthly Content & Post Planning",
        "Graphic Posts & Short Reels Included",
        "Caption Writing & Hashtag Strategy",
        "Monthly Growth Summary",
      ],
      img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-arxDark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxCyan">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-4">
            Simple, effective digital services for your business
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Choose a single service or combine them into a complete monthly package tailored to your goals.
          </p>
        </div>
      </section>

      {/* Alternating Service Rows */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {allServices.map((srv, idx) => (
            <div
              key={idx}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-arxSurface p-6 sm:p-10 rounded-3xl border border-slate-200/80"
            >
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-arxDark text-xs font-bold mb-3">
                  {srv.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-arxDark mb-4">
                  {srv.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">{srv.desc}</p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-semibold text-arxDark">
                      <CheckCircle2 className="w-4 h-4 text-arxBlue shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark font-bold text-sm shadow-md hover:opacity-95 transition"
                >
                  Get a Quote for {srv.title} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}