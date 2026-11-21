import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Modern Corporate & Service Website",
      category: "Website Development",
      desc: "Clean, fast-loading responsive website with WhatsApp inquiry integration and mobile-first layout.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "E-Commerce Fashion & Retail Store",
      category: "Website Development",
      desc: "Easy-to-browse online store with product galleries, smooth checkout, and mobile optimization.",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Complete Brand Logo & Packaging Kit",
      category: "Graphic Designing",
      desc: "Modern logo identity, social media templates, and print packaging created for a retail brand.",
      img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "High-Converting Instagram & Facebook Ad Campaign",
      category: "Digital Marketing",
      desc: "Targeted local ad creatives and lead generation funnel designed to bring daily customer inquiries.",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Promotional Brand Reels & Commercial Edits",
      category: "Video Editing",
      desc: "Fast-paced promotional video ads and social media reels with dynamic captions and sound design.",
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Monthly Social Media Page Growth & Content",
      category: "Social Accounts Management",
      desc: "Full Instagram and Facebook page handling with weekly graphic posts, reels, and audience engagement.",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const categories = [
    "All",
    "Website Development",
    "Digital Marketing",
    "Graphic Designing",
    "Video Editing",
    "Social Accounts Management",
  ];

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-white">
      <section className="bg-arxDark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxCyan">
            Our Work
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-4">
            Creative solutions built for real businesses
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore examples of our web design, branding, video editing, and social media work.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition ${
                  filter === cat
                    ? "bg-arxDark text-white shadow-md"
                    : "bg-arxSurface text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((item, idx) => (
              <div
                key={idx}
                className="group bg-arxSurface rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="overflow-hidden h-56 bg-slate-200">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-arxBlue uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-arxDark mt-1.5 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-arxDark hover:text-arxBlue"
                  >
                    Request Similar Project <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}