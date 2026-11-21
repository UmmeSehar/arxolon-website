import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  TrendingUp,
  Palette,
  Video,
  Share2,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const servicesData = [
    {
      name: "Website Development",
      icon: <Globe className="w-5 h-5" />,
      title: "Modern Websites That Win Customers",
      subtitle:
        "We build fast, mobile-friendly websites and online stores that look professional on every phone, tablet, and computer.",
      points: [
        "Business & Company Websites",
        "Online Stores (E-Commerce)",
        "WordPress & Custom Websites",
        "Fast Loading & Mobile Ready",
        "Easy Admin Panel for You",
        "Full Maintenance & Support",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      badge: "Mobile & Desktop Responsive",
    },
    {
      name: "Digital Marketing",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Bring More Buyers to Your Business",
      subtitle:
        "Stop wasting money on guesswork. We run targeted Facebook, Instagram, and Google ads that bring real customer calls and messages.",
      points: [
        "Facebook & Instagram Ads",
        "Google Search Ads & Ranking",
        "Local Business Promotion",
        "Lead Generation Campaigns",
        "Clear Weekly Results Report",
        "Budget-Friendly Ad Plans",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      badge: "Daily Customer Leads",
    },
    {
      name: "Graphic Designing",
      icon: <Palette className="w-5 h-5" />,
      title: "Eye-Catching Designs That Build Trust",
      subtitle:
        "People judge your business in 3 seconds by how it looks. We create clean logos, posters, and brand kits that make you stand out.",
      points: [
        "Professional Logo Design",
        "Business Cards & Letterheads",
        "Social Media Post Designs",
        "Flyers, Brochures & Banners",
        "Product Packaging Design",
        "Complete Brand Style Kit",
      ],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=80",
      badge: "100% Custom Branding",
    },
    {
      name: "Video Editing",
      icon: <Video className="w-5 h-5" />,
      title: "Scroll-Stopping Reels & Promo Videos",
      subtitle:
        "Video gets 3x more attention online. Send us your raw clips and we turn them into crisp, engaging ads, Reels, and YouTube videos.",
      points: [
        "Instagram Reels & TikTok Edits",
        "Facebook & YouTube Video Ads",
        "Captions, Subtitles & Effects",
        "Product Showcase Videos",
        "Clean Sound & Color Polish",
        "Fast Turnaround Delivery",
      ],
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80",
      badge: "High-Retention Edits",
    },
    {
      name: "Social Accounts Management",
      icon: <Share2 className="w-5 h-5" />,
      title: "We Handle Your Social Pages Daily",
      subtitle:
        "Too busy running your business? Our team plans, designs, writes, and posts content on your social accounts every single week.",
      points: [
        "Instagram & Facebook Handling",
        "LinkedIn & TikTok Page Growth",
        "Monthly Content Calendar",
        "Engaging Captions & Hashtags",
        "Regular Posting Schedule",
        "Monthly Follower & Reach Report",
      ],
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
      badge: "Done-For-You Growth",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Tell Us Your Idea",
      desc: "Message us on WhatsApp or fill out our short form with what your business needs.",
    },
    {
      num: "02",
      title: "We Make a Clear Plan",
      desc: "We suggest the best website, design, or marketing plan in simple language.",
    },
    {
      num: "03",
      title: "Get Quote & Timeline",
      desc: "You receive an honest price and exact delivery date with zero hidden charges.",
    },
    {
      num: "04",
      title: "We Design & Build",
      desc: "Our team creates your project and shares regular updates so you stay in control.",
    },
    {
      num: "05",
      title: "Launch & Grow",
      desc: "We check every detail, launch your project live, and support you as you grow.",
    },
  ];

  const faqs = [
    {
      q: "I don't know much about websites or IT. Will you guide me?",
      a: "Yes, 100%. We explain everything in simple, everyday language and handle all the technical setup for you from start to finish.",
    },
    {
      q: "Will my website work properly on mobile phones?",
      a: "Yes. Every website we build is tested on iPhones, Android phones, tablets, and laptops so nothing ever looks broken or overlapping.",
    },
    {
      q: "Can I hire you for monthly social media and video editing?",
      a: "Yes! Many of our clients choose monthly packages where we handle their graphic posts, video reels, and social media accounts every week.",
    },
    {
      q: "How long does it take to build a complete website?",
      a: "Most business websites are designed, tested, and ready to launch within 7 to 14 days depending on your pages and features.",
    },
  ];

  const currentService = servicesData[activeTab];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-arxDark text-white pt-16 pb-24 lg:pt-24 lg:pb-28 relative overflow-hidden">
        {/* Subtle Tech Grid & Glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #14D6F2 0%, transparent 45%), linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 48px 48px, 48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-cyan-400/30 text-arxCyan text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" /> Your All-in-One Digital Growth Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.12] tracking-tight text-white">
              We build websites and brands that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-arxCyan to-arxBlue">
                bring in customers.
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From modern websites and eye-catching graphic design to video editing, social media management, and digital ads—Arxolon Technologies helps your business look trusted and grow faster.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark font-bold text-base shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition inline-flex items-center gap-2"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/923241282633?text=Hi%20Arxolon%20Technologies!%20I%20want%20to%20start%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 rounded-full border border-white/25 hover:bg-white/10 text-white font-semibold text-base transition inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Animated Agency Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative animate-floatSlow">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-arxNavy">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                  alt="Arxolon Technologies Creative Team"
                  className="w-full h-64 sm:h-72 object-cover"
                />
                <div className="p-6 bg-arxNavy">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-arxCyan">
                      Complete Digital Solutions
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                      24h Fast Response
                    </span>
                  </div>
                  <p className="text-white font-bold text-lg">
                    Websites • Design • Video • Social Growth
                  </p>
                  <p className="text-slate-300 text-sm mt-1">
                    Everything your business needs under one roof in Lahore & worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-arxSurface border-b border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-arxDark font-heading">5-in-1</p>
            <p className="text-sm text-slate-600 font-medium mt-1">Complete Digital Services</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-arxDark font-heading">100%</p>
            <p className="text-sm text-slate-600 font-medium mt-1">Mobile & Tablet Responsive</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-arxDark font-heading">Fast</p>
            <p className="text-sm text-slate-600 font-medium mt-1">On-Time Project Delivery</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-arxDark font-heading">24h</p>
            <p className="text-sm text-slate-600 font-medium mt-1">Quick Support Reply</p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SERVICES TABS SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mt-2">
              Everything your business needs to shine online.
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Click any service below to see how we help your brand look professional and attract more clients.
            </p>
          </div>

          {/* Pill Tab Buttons */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-10">
            {servicesData.map((srv, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === idx
                    ? "bg-arxDark text-white shadow-lg"
                    : "bg-arxSurface text-slate-700 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {srv.icon}
                <span>{srv.name}</span>
              </button>
            ))}
          </div>

          {/* Active Service Showcase Card */}
          <div className="bg-arxSurface border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-100 text-arxDark text-xs font-bold mb-4">
                {currentService.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-arxDark mb-4">
                {currentService.title}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {currentService.subtitle}
              </p>

              <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                {currentService.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-semibold text-arxDark">
                    <CheckCircle2 className="w-5 h-5 text-arxBlue shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark font-bold text-sm shadow-md hover:opacity-95 transition"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-full border border-slate-300 text-arxDark hover:bg-white font-bold text-sm transition"
                >
                  See All Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  className="w-full h-64 sm:h-80 object-cover transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-STEP PROCESS SECTION */}
      <section className="py-20 lg:py-24 bg-arxDark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-arxCyan">
              Simple & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              How we work with you
            </h2>
            <p className="text-slate-300 mt-3 text-base sm:text-lg">
              No confusion, no technical headaches. Just 5 clear steps from your first message to launch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="border-t-2 border-arxCyan pt-5 bg-arxNavy/50 p-5 rounded-b-2xl"
              >
                <span className="text-2xl font-extrabold text-arxCyan font-heading block mb-2">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & FAQ SPLIT SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-arxBlue">
              Why Choose Arxolon
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mt-2 mb-5">
              Built for business owners, not tech experts.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Many agencies confuse clients with complicated words. At Arxolon Technologies, we focus on what truly matters: making your business look trustworthy and bringing you real customers.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Whether you need a brand-new website, daily social media posts, promotional videos, or paid ads, our team handles everything smoothly.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-arxBlue text-arxBlue hover:bg-arxBlue hover:text-white font-bold text-sm transition"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((item, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-arxDark hover:text-arxBlue"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-arxBlue shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-arxBlue shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="bg-gradient-to-r from-arxCyan to-arxBlue py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mb-4">
            Ready to upgrade your online presence?
          </h2>
          <p className="text-arxDark/85 font-medium text-base sm:text-lg mb-8">
            Send us a message today and get a free consultation for your website, design, or marketing project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-arxDark text-white font-bold text-sm sm:text-base hover:opacity-95 transition shadow-lg"
            >
              Start Your Project
            </Link>
            <a
              href="https://wa.me/923241282633"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full bg-white text-arxDark font-bold text-sm sm:text-base hover:bg-slate-100 transition shadow-lg"
            >
              WhatsApp: +92 324 1282633
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}