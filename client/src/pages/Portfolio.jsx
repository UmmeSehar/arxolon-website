import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const workItems = [
    {
      service: "Website Development",
      title: "Business & Service Websites",
      desc: "Clean, fast-loading websites built for service providers and companies.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Social Media Marketing",
      title: "Targeted Social Campaigns",
      desc: "Structured ad creatives and audience targeting for brand outreach.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Mobile App Development",
      title: "Mobile App Interfaces & Builds",
      desc: "Practical mobile app screens and workflows for everyday users.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Graphic Designing",
      title: "Promotional & Social Graphics",
      desc: "Cohesive promotional graphics, social cards, and marketing visuals.",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Website Designing",
      title: "Modern UI & Page Layouts",
      desc: "Clear visual layouts, typography, and section structure for websites.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Social Media Account Management",
      title: "Multi-Platform Account Handling",
      desc: "Organized content scheduling and profile care across social channels.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Video Editing",
      title: "Short Reels & Promo Video Edits",
      desc: "Edited short-form videos with clean transitions, sound, and captions.",
      img: "https://images.unsplash.com/photo-1574717024653-61fd2323656d?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "E-Commerce Fashion & Retail Store",
      title: "Fashion & Retail Online Stores",
      desc: "Storefront layouts designed for fashion and retail product catalogs.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    },
    {
      service: "Logos & Brand Identity",
      title: "Brand Marks & Identity Systems",
      desc: "Custom logo concepts, colors, and brand identity presentation.",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <div className="pt-20 bg-[#E6F2FF] text-[#051836] min-h-screen">
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Our Work</h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-sm sm:text-base">
            Examples across all 9 services we offer.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {workItems.map((item) => (
          <div
            key={item.service}
            className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <div>
              <img src={item.img} alt={item.service} className="w-full h-44 object-cover" />
              <div className="p-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B5ED7]">
                  {item.service}
                </span>
                <h2 className="text-xl font-extrabold text-[#051836] mt-1 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
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
    </div>
  );
}