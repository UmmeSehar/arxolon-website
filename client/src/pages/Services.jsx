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
        "Arxolon Technologies builds fast, secure, and visually compelling websites tailored to your business goals. We blend clean code with modern design so your site loads quickly and converts visitors into real customers across every screen size.",
      points: [
        "Custom Business Websites",
        "React & Modern Web Applications",
        "WordPress & CMS Development",
        "Speed & SEO Optimization",
        "Mobile-First Responsive Layouts",
      ],
    },
    {
      id: "social-media-marketing",
      name: "Social Media Marketing",
      shortName: "Social Marketing",
      icon: Megaphone,
      img: "/social-marketing.jpg",
      description:
        "Reach the right audience and turn social engagement into measurable inquiries. Our targeted ad campaigns and strategic content funnels help your brand stand out on Facebook, Instagram, and TikTok with clear performance tracking.",
      points: [
        "Facebook & Instagram Ad Campaigns",
        "Lead Generation & Sales Funnels",
        "Audience Targeting & Retargeting",
        "Campaign Analytics & Reporting",
        "Brand Awareness Growth Strategy",
      ],
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      shortName: "Mobile Apps",
      icon: Smartphone,
      img: "/mobile-app.jpg",
      description:
        "Mobile applications are powerful tools for connecting with your customers on the go. We design and develop intuitive iOS and Android apps with smooth navigation, reliable performance, and clean interfaces.",
      points: [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform React Native Apps",
        "Clean App UI/UX Prototyping",
        "App Deployment & Ongoing Support",
      ],
    },
    {
      id: "graphic-designing",
      name: "Graphic Designing",
      shortName: "Graphic Design",
      icon: Palette,
      img: "/graphic-design.jpg",
      description:
        "Our designers craft eye-catching visual creatives that communicate your brand message clearly. From daily social media posts and ad banners to brochures, flyers, and packaging designs, we cover every visual need.",
      points: [
        "Social Media Posts & Carousels",
        "Marketing Flyers, Posters & Banners",
        "Company Profile & Catalog Design",
        "Product Packaging & Label Design",
        "Custom Brand Illustrations",
      ],
    },
    {
      id: "website-designing",
      name: "Website Designing",
      shortName: "Website Design",
      icon: Layout,
      img: "/web-design.jpg",
      description:
        "Great websites start with thoughtful visual structure. We design clean, modern page layouts with clear typography, balanced colors, and effortless user flow so visitors immediately trust your brand.",
      points: [
        "Modern UI/UX Website Layouts",
        "Landing Page Conversion Design",
        "Wireframing & Interactive Mockups",
        "Website Redesign & Modernization",
        "Consistent Visual Hierarchy",
      ],
    },
    {
      id: "social-media-management",
      name: "Social Media Account Management",
      shortName: "Social Management",
      icon: Share2,
      img: "/social-management.jpg",
      description:
        "Stay active and consistent across your social channels without daily stress. Our team handles content calendars, regular posting, profile optimization, and multi-account upkeep across Instagram, Facebook, and TikTok.",
      points: [
        "Monthly Content Calendar Planning",
        "Consistent Posting & Scheduling",
        "Instagram, Facebook & TikTok Care",
        "Profile Bio & Highlight Optimization",
        "Caption Writing & Hashtag Strategy",
      ],
    },
    {
      id: "video-editing",
      name: "Video Editing",
      shortName: "Video Editing",
      icon: Video,
      img: "/video-editing.jpg",
      description:
        "Capture attention in the first three seconds with crisp, high-retention video edits. We edit promotional ads, Instagram Reels, TikTok shorts, and YouTube videos with smooth transitions, clean audio, and dynamic captions.",
      points: [
        "Instagram Reels & TikTok Short Edits",
        "Promotional & Ad Video Editing",
        "Dynamic Subtitles & Motion Text",
        "Color Grading & Sound Balancing",
        "Social-Ready Aspect Ratios",
      ],
    },
    {
      id: "ecommerce-fashion-retail",
      name: "E-Commerce Fashion & Retail Store",
      shortName: "E-Commerce Store",
      icon: ShoppingBag,
      img: "/ecommerce-store.jpg",
      description:
        "Launch an online storefront built specifically for fashion, apparel, and retail brands. We combine attractive product catalogs, size/variant selectors, and smooth checkout flows to help you sell online effortlessly.",
      points: [
        "Fashion & Apparel Storefront Design",
        "Shopify & WooCommerce Store Setup",
        "Product Catalog & Variant Filtering",
        "Secure Checkout & Payment Setup",
        "Mobile Shopping Optimization",
      ],
    },
    {
      id: "logos-brand-identity",
      name: "Logos & Brand Identity",
      shortName: "Logos & Branding",
      icon: Award,
      img: "/brand-logo.jpg",
      description:
        "Build lasting brand recognition with a distinctive logo and cohesive visual identity. We craft memorable brand marks, color palettes, typography systems, and stationery assets that set your business apart.",
      points: [
        "Custom Minimalist & Emblem Logos",
        "Brand Color Palette & Typography",
        "Business Card & Stationery Design",
        "Social Media Brand Kit",
        "High-Resolution Vector Source Files",
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

      {/* 2. CLICKABLE 9-SERVICE ICON TAB STRIP (Arfa Technologies Style) */}
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

      {/* 3. SERVICE GUARANTEES BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-[#DCEEFF] border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-sm">
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
      </div>

      {/* 4. ALL 9 SERVICES VERTICAL DETAILED SHOWCASE SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {serviceList.map((item, idx) => (
          <section
            key={item.id}
            id={item.id}
            className="scroll-mt-36 bg-white rounded-3xl border border-blue-100 shadow-md p-7 sm:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Side: Heading, Detailed Description, Bullet Points & Action Buttons */}
            <div className="lg:col-span-7">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#EBF4FF] text-[#0B5ED7] text-xs font-extrabold uppercase tracking-wider mb-3">
                Service 0{idx + 1}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#051836] mb-4">
                {item.name}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Feature Checklist Grid */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
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

            {/* Right Side: Service Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-blue-100 shadow-lg bg-[#F1F5F9]">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={handleImgError}
                  className="w-full h-64 sm:h-80 object-cover live-motion-img"
                />
              </div>
            </div>
          </section>
        ))}

        {/* 5. BOTTOM QUICK SELECT & HANDSHAKE DISCUSSION SECTION (Preserved) */}
        <div className="space-y-6 pt-4">
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