import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CheckSquare,
  Clock,
  Headphones,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Globe,
  Megaphone,
  Smartphone,
  Palette,
  Layout,
  Share2,
  Video,
  ShoppingBag,
  Award,
} from "lucide-react";

const FALLBACK_MEDIA =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";

export default function Services() {
  const [selectedService, setSelectedService] = useState("Website Development");
  const location = useLocation();

  const handleImgError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MEDIA) {
      e.currentTarget.src = FALLBACK_MEDIA;
    }
  };

  const serviceList = [
    {
      id: "website-development",
      name: "Website Development",
      shortName: "Web Development",
      icon: Globe,
      img: "/web-dev.jpg",
      description:
        "Arxolon Technologies builds fast, secure, and visually compelling websites tailored to your exact business goals. Whether you need a corporate company profile, a service booking portal, or a custom web application, our developers focus on clean architecture, rapid page loading, and seamless navigation across desktops, tablets, and smartphones.",
      subDescription:
        "We combine modern technical standards with clear user journeys so visitors immediately understand your brand value and turn into long-term paying clients.",
      points: [
        "Custom Business & Corporate Websites",
        "React & Modern Web Applications",
        "WordPress & CMS Development",
        "Full Mobile & Tablet Responsiveness",
        "On-Page SEO & Speed Optimization",
        "Contact Forms & WhatsApp Integration",
        "SSL Security & Hosting Deployment",
        "Post-Launch Maintenance & Updates",
      ],
    },
    {
      id: "social-media-marketing",
      name: "Social Media Marketing",
      shortName: "Social Marketing",
      icon: Megaphone,
      img: "/social-marketing.jpg",
      description:
        "Reach your ideal customers where they spend the most time and turn social engagement into real business inquiries. Our social media marketing team designs data-driven paid ad campaigns, audience retargeting funnels, and conversion-focused creatives across Facebook, Instagram, and TikTok.",
      subDescription:
        "Every campaign is structured around transparent performance tracking so you get measurable brand reach, qualified leads, and steady sales growth without wasted ad spend.",
      points: [
        "Facebook & Instagram Paid Ad Campaigns",
        "High-Converting Lead Generation Funnels",
        "Precision Audience & Location Targeting",
        "Retargeting & Lookalike Audience Setup",
        "Ad Copywriting & Scroll-Stopping Creatives",
        "TikTok & Meta Business Manager Setup",
        "Weekly Campaign Analytics & Reporting",
        "Brand Awareness & Customer Growth Strategy",
      ],
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      shortName: "Mobile Apps",
      icon: Smartphone,
      img: "/mobile-app.jpg",
      description:
        "Mobile applications put your business directly into your customers' hands with instant convenience. We design and develop intuitive, high-performance Android and iOS mobile apps built around smooth navigation, clean screens, and reliable backend connectivity.",
      subDescription:
        "From initial wireframe planning to final store publishing, our team ensures your app feels effortless for everyday users while supporting your business operations.",
      points: [
        "Native & Cross-Platform Android Apps",
        "iOS Mobile Application Development",
        "React Native High-Speed Mobile Builds",
        "User-Friendly App UI/UX Prototyping",
        "Push Notifications & Real-Time Alerts",
        "Secure Login & Database Integration",
        "App Performance Testing & Optimization",
        "Play Store & App Store Publishing Support",
      ],
    },
    {
      id: "graphic-designing",
      name: "Graphic Designing",
      shortName: "Graphic Design",
      icon: Palette,
      img: "/graphic-design.jpg",
      description:
        "Strong visual presentation builds immediate trust before a customer even reads a single word. Our graphic designers craft clean, modern, and memorable visual assets tailored to your brand personality across both digital platforms and print materials.",
      subDescription:
        "From daily Instagram carousels and promotional ad banners to company profiles, brochures, and product packaging, every graphic is aligned with your colors and message.",
      points: [
        "Social Media Posts & Carousel Graphics",
        "Promotional Flyers, Posters & Brochures",
        "Digital Ad Banners & Cover Designs",
        "Company Profile & Product Catalogs",
        "Product Packaging & Label Artwork",
        "Event Invitations & Standee Designs",
        "Custom Icons & Brand Illustrations",
        "Print-Ready & High-Resolution Files",
      ],
    },
    {
      id: "website-designing",
      name: "Website Designing",
      shortName: "Website Design",
      icon: Layout,
      img: "/web-design.jpg",
      description:
        "A great website begins with thoughtful visual structure and effortless readability. We design modern, clean page layouts with balanced spacing, clear typography, and intuitive user flows that guide visitors naturally toward contacting your business.",
      subDescription:
        "Whether you are launching a brand-new site or refreshing an outdated interface, our UI/UX layouts make your business look credible, organized, and easy to explore.",
      points: [
        "Modern UI/UX Website Page Layouts",
        "High-Converting Landing Page Design",
        "Wireframing & Visual Site Architecture",
        "Complete Website Redesign & Makeover",
        "Clean Typography & Color Harmony",
        "Mobile-First Screen Layout Planning",
        "Interactive Prototypes & Design Previews",
        "User-Focused Navigation & Call-to-Actions",
      ],
    },
    {
      id: "social-media-management",
      name: "Social Media Account Management",
      shortName: "Social Management",
      icon: Share2,
      img: "/social-management.jpg",
      description:
        "Keep your brand active, consistent, and professional across social platforms without the daily hassle of managing everything yourself. Our team handles content calendars, regular post publishing, profile optimization, and coordinated multi-account care.",
      subDescription:
        "We maintain a steady visual voice across Instagram, Facebook, and TikTok so your audience sees a reliable, active business every time they visit your page.",
      points: [
        "Monthly Content Calendar & Scheduling",
        "Consistent Daily/Weekly Post Publishing",
        "Instagram, Facebook & TikTok Management",
        "Profile Bio, Highlights & Page Setup",
        "Engaging Captions & Hashtag Research",
        "Consistent Visual Grid & Brand Aesthetic",
        "Multi-Account Coordinated Handling",
        "Monthly Page Activity & Growth Overview",
      ],
    },
    {
      id: "video-editing",
      name: "Video Editing",
      shortName: "Video Editing",
      icon: Video,
      img: "/video-editing.jpg",
      description:
        "Video is the fastest way to capture attention and explain your offer in seconds. We transform raw footage into crisp, high-retention Instagram Reels, TikTok shorts, promotional ads, and YouTube videos with smooth pacing and clean sound.",
      subDescription:
        "By combining dynamic subtitles, clean transitions, background music balance, and social-ready formats, your videos stand out in crowded feeds.",
      points: [
        "Instagram Reels & TikTok Short Edits",
        "Promotional & Business Ad Videos",
        "YouTube Video Cutting & Pacing",
        "Dynamic Subtitles & Animated Captions",
        "Smooth Transitions & Motion Graphics",
        "Audio Cleanup & Background Music Sync",
        "Color Correction & Visual Polish",
        "Vertical, Square & Widescreen Exports",
      ],
    },
    {
      id: "ecommerce-fashion-retail",
      name: "E-Commerce Fashion & Retail Store",
      shortName: "E-Commerce Store",
      icon: ShoppingBag,
      img: "/ecommerce-store.jpg",
      description:
        "Turn your fashion, apparel, or retail brand into a 24/7 online storefront designed for effortless shopping. We build clean, product-focused e-commerce stores where customers can browse collections, select sizes or colors, and place orders smoothly.",
      subDescription:
        "Every store is structured to highlight your product photography, build buyer confidence, and simplify order management for your team.",
      points: [
        "Fashion, Apparel & Retail Storefronts",
        "Shopify & WooCommerce Store Setup",
        "Organized Categories & Collection Pages",
        "Size, Color & Product Variant Selectors",
        "Smooth Cart & Fast Checkout Experience",
        "Cash on Delivery & Payment Integration",
        "Mobile-Optimized Shopping Browsing",
        "Easy Inventory & Order Dashboard",
      ],
    },
    {
      id: "logos-brand-identity",
      name: "Logos & Brand Identity",
      shortName: "Logos & Branding",
      icon: Award,
      img: "/brand-logo.jpg",
      description:
        "Your logo and visual identity are the face of your company across every website, social page, invoice, and storefront. We design distinctive, timeless logos alongside cohesive color palettes, typography pairings, and brand stationery.",
      subDescription:
        "Instead of a random icon, we deliver a complete visual identity kit that makes your business instantly recognizable and trustworthy everywhere.",
      points: [
        "Custom Minimalist, Wordmark & Emblem Logos",
        "Multiple Original Logo Concepts",
        "Official Brand Color Palette & Codes",
        "Typography & Font Pairing Guidelines",
        "Business Card & Letterhead Stationery",
        "Social Media Profile & Banner Kit",
        "Transparent PNG & Print-Ready Formats",
        "Editable Vector Source Files (AI/SVG/PDF)",
      ],
    },
  ];

  // Smoothly scroll to the clicked service section when opened via Navbar dropdown or hash link
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const matched = serviceList.find((s) => s.id === targetId);
      if (matched) {
        setSelectedService(matched.name);
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 120);
        }
      }
    }
  }, [location.hash]);

  const handleTabClick = (srv) => {
    setSelectedService(srv.name);
    const element = document.getElementById(srv.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-20 bg-[#F8FAFC] text-[#051836] min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold">Our Services</h1>
            <p className="mt-3 text-blue-100 max-w-2xl text-sm sm:text-base">
              Explore our complete 9-service digital & creative lineup designed for clear, dependable business growth.
            </p>
          </div>
          <div className="bg-sky-400/15 border border-sky-300/30 rounded-2xl px-6 py-4 max-w-md">
            <p className="text-xs sm:text-sm text-sky-100 font-semibold leading-relaxed">
              We love to create an experience that enables a win-win situation—aligning our digital craft with your business success.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CLICKABLE 9-SERVICE ICON TAB STRIP */}
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-[68px] sm:top-[76px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start lg:justify-between gap-2 overflow-x-auto py-3 no-scrollbar">
            {serviceList.map((srv) => {
              const IconComp = srv.icon;
              const isActive = selectedService === srv.name;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => handleTabClick(srv)}
                  className={`flex flex-col items-center justify-center px-3.5 py-2.5 rounded-xl min-w-[115px] transition-all border-b-2 shrink-0 ${
                    isActive
                      ? "bg-[#EBF4FF] text-[#0B5ED7] border-[#0B5ED7] font-extrabold"
                      : "text-slate-700 hover:text-[#0B5ED7] hover:bg-slate-50 border-transparent font-bold"
                  }`}
                >
                  <IconComp
                    className={`w-6 h-6 mb-1.5 ${
                      isActive ? "text-[#0B5ED7]" : "text-slate-500"
                    }`}
                  />
                  <span className="text-xs text-center whitespace-nowrap">
                    {srv.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. ALL 9 SERVICES VERTICAL DETAILED SHOWCASE SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {serviceList.map((item, idx) => (
          <section
            key={item.id}
            id={item.id}
            className="scroll-mt-36 bg-white rounded-3xl border border-blue-100 shadow-md p-7 sm:p-12 lg:p-14 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Side: Heading, Expanded Paragraphs, 8 Bullet Points & Action Buttons */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#EBF4FF] text-[#0B5ED7] text-xs font-extrabold uppercase tracking-wider mb-3">
                Service 0{idx + 1}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#051836] mb-4">
                {item.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
                {item.description}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {item.subDescription}
              </p>

              {/* Expanded 8-Point Feature Checklist Grid */}
              <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
                {item.points.map((pt) => (
                  <div
                    key={pt}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#051836]"
                  >
                    <CheckSquare className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  onClick={() => setSelectedService(item.name)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B5ED7] hover:bg-[#082A5E] text-white font-extrabold text-sm shadow-md transition"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/923241282633?text=${encodeURIComponent(
                    `Hello Arxolon Technologies! I am interested in your ${item.name} service.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" /> Discuss on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side: Larger Service Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-lg bg-[#F1F5F9]">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={handleImgError}
                  className="w-full h-72 sm:h-96 object-cover live-motion-img"
                />
              </div>
            </div>
          </section>
        ))}

        {/* 4. UNIFIED BOTTOM SECTION (All 3 Advantage & Action Blocks Combined in One Cohesive Showcase) */}
        <section className="pt-8">
          <div className="bg-white rounded-3xl border border-blue-200 shadow-xl overflow-hidden">
            {/* Unified Section Header */}
            <div className="bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white px-7 py-10 sm:px-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-sky-400/20 border border-sky-300/30 text-sky-200 text-xs font-extrabold uppercase tracking-wider mb-3">
                Extra Value With Every Service
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold">
                Why Partner With Arxolon & Get Started
              </h2>
              <p className="mt-2 text-sm sm:text-base text-blue-100 max-w-3xl">
                Beyond delivering each service cleanly, our team provides reliable timelines, ongoing guidance, and direct consultation tailored to your business goals.
              </p>

              {/* Part A: 3 Core Service Advantages */}
              <div className="grid md:grid-cols-3 gap-5 mt-8">
                <div className="bg-white/10 border border-sky-300/20 rounded-2xl p-5 flex items-start gap-3.5">
                  <Clock className="w-6 h-6 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white mb-1">
                      On-Time Milestone Delivery
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                      Work delivered on schedule according to clearly agreed project milestones.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 border border-sky-300/20 rounded-2xl p-5 flex items-start gap-3.5">
                  <Headphones className="w-6 h-6 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white mb-1">
                      24/7 Responsive Support
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                      Continuous support availability for smooth updates and quick answers.
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 border border-sky-300/20 rounded-2xl p-5 flex items-start gap-3.5">
                  <ShieldCheck className="w-6 h-6 text-sky-300 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white mb-1">
                      Dedicated Quality Commitment
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                      Consistent attention to detail and quality from initial planning to launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part B: Quick Service Selector Bar */}
            <div className="bg-[#DCEEFF] border-b border-blue-200 px-7 py-6 sm:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <label
                  htmlFor="serviceSelect"
                  className="block text-xs uppercase tracking-wider text-[#0B5ED7] font-extrabold mb-1.5"
                >
                  Quick Select Service (All 9)
                </label>
                <select
                  id="serviceSelect"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="px-4 py-2.5 rounded-xl bg-white border border-blue-300 text-[#051836] text-sm font-extrabold focus:outline-none shadow-sm"
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B5ED7] hover:bg-[#051836] text-white font-extrabold text-sm shadow-md transition"
              >
                Continue With {selectedService} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Part C: Handshake Visual + Discussion Text + Bold WhatsApp Button */}
            <div className="p-7 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-blue-100 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                  alt="Handshake and Project Discussion"
                  onError={handleImgError}
                  className="w-full h-60 object-cover rounded-2xl live-motion-img"
                />
              </div>
              <div className="lg:col-span-7">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">
                  Let’s Discuss Your Project Details
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  When you connect with our team, we walk you through additional advantages, custom packages, and timeline options tailored to your business requirements. Reach out directly on WhatsApp or via our inquiry form to get started today.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/923241282633?text=${encodeURIComponent(
                      `Hello Arxolon Technologies! I would like to discuss my project details for ${selectedService}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp — Let’s Discuss</span>
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border-2 border-[#0B5ED7] text-[#0B5ED7] hover:bg-[#0B5ED7] hover:text-white font-extrabold text-sm sm:text-base transition"
                  >
                    <span>Send Project Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}