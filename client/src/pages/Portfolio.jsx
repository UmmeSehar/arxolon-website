import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FALLBACK_MEDIA =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";

export default function Portfolio() {
  const handleImgError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MEDIA) {
      e.currentTarget.src = FALLBACK_MEDIA;
    }
  };

  const workItems = [
    {
      service: "Website Development",
      title: "Business & Service Websites",
      desc: "Clean, fast-loading websites built for service providers and companies.",
      points: ["Responsive layout across devices", "Clear navigation and structure"],
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Social Media Marketing",
      title: "Targeted Social Campaigns",
      desc: "Structured ad creatives and audience targeting for brand outreach.",
      points: ["Audience-focused campaign setup", "Clear performance tracking"],
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Mobile App Development",
      title: "Mobile App Interfaces & Builds",
      desc: "Practical mobile app screens and workflows for everyday users.",
      points: ["Intuitive user flow", "Smooth mobile screen experience"],
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Graphic Designing",
      title: "Promotional & Social Graphics",
      desc: "Cohesive promotional graphics, social cards, and marketing visuals.",
      points: ["Consistent color & typography", "Ready for digital & print use"],
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Website Designing",
      title: "Modern UI & Page Layouts",
      desc: "Clear visual layouts, typography, and section structure for websites.",
      points: ["Clean visual hierarchy", "Easy-to-read sections"],
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Social Media Account Management",
      title: "Multi-Platform Account Handling",
      desc: "Organized content scheduling and profile care across social channels.",
      points: ["Regular account upkeep", "Coordinated multi-account presence"],
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Video Editing",
      title: "Short Reels & Promo Video Edits",
      desc: "Edited short-form videos with clean transitions, sound, and captions.",
      points: ["Engaging pacing & cuts", "Formatted for social feeds"],
      img: "https://images.unsplash.com/photo-1574717024653-61fd3113ff6d?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "E-Commerce Fashion & Retail Store",
      title: "Fashion & Retail Online Stores",
      desc: "Storefront layouts designed for fashion and retail product catalogs.",
      points: ["Product-first visual showcase", "Simple customer browsing path"],
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Logos & Brand Identity",
      title: "Brand Marks & Identity Systems",
      desc: "Custom logo concepts, colors, and brand identity presentation.",
      points: ["Distinctive brand mark", "Cohesive visual styling"],
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Work</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-sm sm:text-base">
            Examples and deliverables across all 9 services we provide.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {workItems.map((item) => (
            <div
              key={item.service}
              className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.service}
                    onError={handleImgError}
                    className="w-full h-44 object-cover live-motion-img"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B5ED7]">
                    {item.service}
                  </span>
                  <h2 className="text-xl font-extrabold text-[#051836] mt-1 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-slate-700 leading-relaxed mb-3">{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B5ED7] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0B5ED7] hover:text-[#051836]"
                >
                  Ask About This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#051836] to-[#0B428A] text-white rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Want to discuss similar work for your business?</h3>
            <p className="text-sm text-blue-100 mt-1">
              Reach out to our team to talk through your project scope and details.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400 hover:bg-sky-300 text-[#051836] font-extrabold text-sm transition shrink-0"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}