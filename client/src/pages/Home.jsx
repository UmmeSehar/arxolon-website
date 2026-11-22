import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus, Sparkles, CheckCircle2, Star } from "lucide-react";

const FALLBACK_MEDIA =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";

export default function Home() {
  const [heroZoomed, setHeroZoomed] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [currentWork, setCurrentWork] = useState(0);

  const featuredWorks = [
    { title: "Website Development", img: "/separate_image_1.png" },
    { title: "Social Media Marketing", img: "/separate_image_2.png" },
    { title: "Mobile App Development", img: "/separate_image_3.png" },
    { title: "Graphic Designing", img: "/separate_image_4.png" },
    { title: "Website Designing", img: "/separate_image_5.png" },
    { title: "Social Media Management", img: "/separate_image_6.png" },
    { title: "Video Editing", img: "/separate_image_7.png" },
    { title: "E-Commerce Fashion & Retail Store", img: "/separate_image_8.png" },
    { title: "Logos & Brand Identity", img: "/separate_image_9.png" },
  ];

  // 700ms slide transition + 2000ms center pause = 2700ms total cycle per image
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentWork((prev) => (prev + 1) % featuredWorks.length);
    }, 2700);
    return () => clearInterval(slideInterval);
  }, [featuredWorks.length]);

  const handleImgError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MEDIA) {
      e.currentTarget.src = FALLBACK_MEDIA;
    }
  };

  const services = [
    {
      title: "Website Development",
      desc: "Fast, reliable business websites and web applications built for smooth performance across devices.",
      img: "/web-dev.jpg",
    },
    {
      title: "Social Media Marketing",
      desc: "Targeted campaigns on social platforms to reach real audiences, inquiries, and brand growth.",
      img: "/social-marketing.jpg",
    },
    {
      title: "Mobile App Development",
      desc: "Clean, user-friendly mobile applications crafted for everyday customer convenience.",
      img: "/mobile-app.jpg",
    },
    {
      title: "Graphic Designing",
      desc: "Clear, modern social posts, banners, flyers, and visual creatives tailored to your brand.",
      img: "/graphic-design.jpg",
    },
    {
      title: "Website Designing",
      desc: "Structured, attractive page layouts and clear visual hierarchy that visitors easily understand.",
      img: "/web-design.jpg",
    },
    {
      title: "Social Media Account Management",
      desc: "Consistent posting, profile care, and multi-account handling across Instagram, Facebook, and TikTok.",
      img: "/social-management.jpg",
    },
    {
      title: "Video Editing",
      desc: "Engaging short-form reels, promos, and clean video edits with smooth pacing and sound.",
      img: "/video-editing.jpg",
    },
    {
      title: "E-Commerce Fashion & Retail Store",
      desc: "Online storefronts for fashion and retail brands with clean product displays and easy shopping flow.",
      img: "/ecommerce-store.jpg",
    },
    {
      title: "Logos & Brand Identity",
      desc: "Distinctive logos, color palettes, and cohesive visual identity elements for lasting recognition.",
      img: "/brand-logo.jpg",
    },
  ];
  
  const highlights = [
    {
      title: "Easy for Everyone",
      desc: "Clear communication without confusing technical terms so any business owner can follow along easily.",
    },
    {
      title: "All-in-One Creative & Tech",
      desc: "From websites and mobile apps to graphics, video edits, stores, and social management in one place.",
    },
    {
      title: "Direct Team Discussion",
      desc: "Connect with our team to share your exact goals and discuss additional advantages for your project.",
    },
    {
      title: "On-Time Delivery",
      desc: "We keep a steady plan and clear milestones so your work moves forward smoothly without delays.",
    },
    {
      title: "Flexible Support & Updates",
      desc: "Whether starting fresh or improving an existing setup, our team stays available to guide you.",
    },
  ];

  const steps = [
    { num: "01", title: "Share Requirements", desc: "Tell us what you need in simple words." },
    { num: "02", title: "Plan & Structure", desc: "We map out the right layout and workflow." },
    { num: "03", title: "Design & Build", desc: "Our team creates your visuals, pages, and assets." },
    { num: "04", title: "Review & Refine", desc: "We polish details based on your feedback." },
    { num: "05", title: "Launch & Support", desc: "Go live smoothly with ongoing assistance." },
  ];

  const clientReviews = [
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
    {
      name: "Ayesha Siddiqui",
      role: "Fashion Boutique Owner",
      quote: "Our online retail store and brand logo turned out modern, clean, and very easy for customers to browse.",
    },
    {
      name: "Bilal Ahmed",
      role: "Real Estate Consultant",
      quote: "Their social media campaigns and short video reels brought steady inquiries right from the first month.",
    },
    {
      name: "Hina Kamran",
      role: "Clinic & Wellness Director",
      quote: "Reliable team that listens carefully, explains every step clearly, and delivers right on schedule.",
    },
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
      {/* 1. HERO SECTION (Dark Blue) */}
      <section className="bg-gradient-to-br from-[#051836] via-[#09295B] to-[#0E3A7A] text-white pt-28 pb-24 lg:pt-36 lg:pb-28">
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
               src="https://img.magnific.com/free-photo/business-woman-talking-with-two-businessmen_1262-806.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Digital Workspace"
                onError={handleImgError}
                onClick={() => setHeroZoomed(!heroZoomed)}
                className={`w-full h-72 sm:h-80 object-cover rounded-2xl hero-motion-img ${
                  heroZoomed ? "is-zoomed shadow-2xl" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES SECTION (Silver/Light-White Background + Bold Larger Heading + Blue Service Containers) */}
      <section className="py-24 bg-[#F1F5F9] text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-6xl sm:text-base font-extrabold uppercase tracking-widest text-[#0B5ED7] block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#051836] mt-2">
              9 Core Services
            </h2>
            <p className="text-slate-700 mt-3 text-base sm:text-lg leading-relaxed">
              Simple, practical solutions designed for easy understanding and steady business growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-[#0B428A] text-white border border-sky-300/25 rounded-2xl overflow-hidden shadow-lg hover:border-sky-300 transition flex flex-col justify-between"
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

      {/* 3. HIGHLIGHTS SECTION (Light Blue Background + Heading + 5 Cards) */}
      <section className="py-24 bg-[#DCEEFF] text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7] block">
              Our Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mt-1.5">
              Why Businesses Choose Arxolon
            </h2>
            <p className="text-slate-700 mt-2 text-sm sm:text-base">
              Built around clarity, dependable delivery, and practical support at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <CheckCircle2 className="w-7 h-7 text-[#0B5ED7] mb-4" />
                  <h3 className="font-extrabold text-base sm:text-lg text-[#051836] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 5 STEPS SECTION (Dark Blue Background + Containers) */}
      <section className="py-24 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
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

      {/* OUR CREATIVE SHOWCASE (Realistic Brick Wall + Right-to-Left Sliding with 2s Center Pause) */}
      <section className="min-h-screen flex flex-col justify-center items-center py-20 realistic-brick-wall relative overflow-hidden border-y border-slate-300/80">
        {/* Realistic Wall Ambient Lighting & Wall Decor Chevrons */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-slate-200/60 pointer-events-none"></div>

        {/* Left Wall Decorative Vertical Chevrons */}
        <div className="hidden sm:flex flex-col gap-1 text-sky-500/70 font-black text-2xl leading-none select-none absolute left-16 bottom-28 pointer-events-none">
          <span>⌄</span>
          <span>⌄</span>
          <span>⌄</span>
          <span>⌄</span>
          <span>⌄</span>
        </div>

        {/* Right Wall Corner Accent Wave & Vertical Chevrons */}
        <div
          className="absolute bottom-0 right-0 w-72 sm:w-[440px] h-48 sm:h-72 bg-gradient-to-tl from-[#082A5E] via-[#0B428A] to-[#0284C7] pointer-events-none opacity-95"
          style={{ clipPath: "polygon(100% 15%, 15% 100%, 100% 100%)" }}
        ></div>
        <div className="hidden sm:flex flex-col gap-1 text-white/90 font-black text-2xl leading-none select-none absolute right-8 bottom-24 z-10 pointer-events-none">
          <span>⌃</span>
          <span>⌃</span>
          <span>⌃</span>
          <span>⌃</span>
          <span>⌃</span>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#051836] tracking-tight mb-10 drop-shadow-sm">
            Our Creative Showcase
          </h2>

          {/* Horizontal Right-to-Left Conveyor Stage (Enters from Right -> Pauses 2s Center -> Exits Left) */}
          <div className="relative h-80 sm:h-[430px] md:h-[490px] w-full overflow-hidden flex items-center justify-center">
            {featuredWorks.map((work, index) => {
              const total = featuredWorks.length;
              const prevIndex = (currentWork - 1 + total) % total;

              let positionClass =
                "translate-x-full opacity-0 pointer-events-none transition-none";
              if (index === currentWork) {
                positionClass =
                  "translate-x-0 opacity-100 transition-all duration-700 ease-out z-20";
              } else if (index === prevIndex) {
                positionClass =
                  "-translate-x-full opacity-0 transition-all duration-700 ease-out z-10 pointer-events-none";
              }

              return (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center ${positionClass}`}
                >
                  <div className="overflow-hidden rounded-2xl flex items-center justify-center px-4">
                    <img
                      src={work.img}
                      alt={work.title}
                      className="max-h-72 sm:max-h-[370px] md:max-h-[430px] w-auto object-contain showcase-clean-img"
                    />
                  </div>
                  <span className="mt-4 inline-block px-5 py-1.5 rounded-full bg-white/95 border border-slate-300 shadow-md text-xs sm:text-sm font-extrabold text-[#082A5E] tracking-wide">
                    {work.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {featuredWorks.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentWork(idx)}
                aria-label={`Showcase Slide ${idx + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentWork
                    ? "w-8 bg-[#082A5E]"
                    : "w-3 bg-amber-400/80 hover:bg-amber-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT FEEDBACK SECTION (6 Client Cards for Full, Balanced Page Length) */}
      <section className="py-24 bg-white text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7] block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mt-1.5">
              Client Feedback
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              What business owners and founders say about working with Arxolon Technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {clientReviews.map((item, i) => (
              <div
                key={i}
                className="bg-[#051836] text-white border border-sky-300/20 rounded-2xl p-7 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-xs text-sky-300">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMMON QUESTIONS (Light Blue Background + Black Text) */}
      <section className="py-24 bg-gradient-to-b from-[#DCEEFF] to-[#CFE6FF] text-[#051836]">
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