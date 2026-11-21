import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Layout,
  Smartphone,
  Megaphone,
  Share2,
  Palette,
  Video,
  Award,
  FileText,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus,
  Sparkles,
  Clock,
  ShieldCheck,
  HeartHandshake,
  Star,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const featuredTabs = [
    {
      label: "Website Development",
      title: "Website Development & Design",
      desc: "We build fast, mobile-friendly websites and online stores that look clean on every phone and computer. Even if you have zero technical experience, we make your website easy to manage and ready to bring in customers.",
      bullets: [
        "Business & Company Websites",
        "Online Shopping Stores",
        "Modern Mobile-Ready Design",
        "Easy Admin Panel",
        "Fast Page Loading",
        "Ongoing Updates & Support",
      ],
    },
    {
      label: "Mobile App Development",
      title: "Mobile App Development",
      desc: "Turn your business idea into a smooth Android and iOS mobile app. We design simple, attractive app screens that your customers can use effortlessly on their phones.",
      bullets: [
        "Android & iOS Apps",
        "Service Booking Apps",
        "E-Commerce Shopping Apps",
        "Clean & Simple User Screens",
        "Push Notifications",
        "Complete Testing & Launch",
      ],
    },
    {
      label: "Graphic & Logo Design",
      title: "Graphic Designing & Brand Logos",
      desc: "People judge your brand in seconds by how it looks. Our creative designers craft memorable logos, social media posts, brochures, and packaging that make your business stand out.",
      bullets: [
        "Custom Logo Design",
        "Social Media Post Designs",
        "Packaging & Label Design",
        "Brochures & Catalogs",
        "Business Cards & Stationery",
        "Complete Brand Style Kit",
      ],
    },
    {
      label: "Video Editing",
      title: "Video Editing & Social Reels",
      desc: "Short videos get the highest attention online. Send us your raw clips and we turn them into scroll-stopping Instagram Reels, TikToks, and promotional video ads.",
      bullets: [
        "Instagram Reels & TikToks",
        "Facebook & YouTube Video Ads",
        "Bold Captions & Subtitles",
        "Smooth Transitions & Effects",
        "Clean Audio & Color Polish",
        "Fast Turnaround Delivery",
      ],
    },
    {
      label: "Social Media Growth",
      title: "Social Marketing & Account Handling",
      desc: "Too busy running your business? We handle your Instagram, Facebook, and LinkedIn pages daily—and run targeted ads that bring real customer messages and sales.",
      bullets: [
        "Daily Page Management",
        "Facebook & Instagram Ads",
        "Monthly Content Calendar",
        "Engaging Captions & Hashtags",
        "Audience & Reach Growth",
        "Weekly Progress Updates",
      ],
    },
  ];

  const nineServices = [
    {
      icon: <Globe className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Website Development",
      desc: "Fast, secure, and mobile-ready business websites and online stores built to turn visitors into loyal customers.",
    },
    {
      icon: <Layout className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Website Designing",
      desc: "Clean, modern layouts and easy-to-navigate page designs that make your business look trusted right away.",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Mobile App Development",
      desc: "Smooth Android and iOS mobile applications tailored to your business so customers stay connected anywhere.",
    },
    {
      icon: <Megaphone className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Social Media Marketing",
      desc: "Targeted Facebook and Instagram ad campaigns designed to bring daily customer inquiries, calls, and sales.",
    },
    {
      icon: <Share2 className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Social Accounts Management",
      desc: "Complete daily handling of your Instagram, Facebook, and LinkedIn pages—planning, posting, and growing your brand.",
    },
    {
      icon: <Palette className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Graphic Designing",
      desc: "Eye-catching social media posts, flyers, brochures, banners, and print designs crafted to grab attention.",
    },
    {
      icon: <Video className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Video Editing",
      desc: "Scroll-stopping Instagram Reels, TikTok videos, and promo ads with crisp sound, captions, and clean edits.",
    },
    {
      icon: <Award className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Logo & Brand Identity",
      desc: "Memorable custom logos, brand colors, and visual kits that give your business a distinct, professional look.",
    },
    {
      icon: <FileText className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Content & Blog Writing",
      desc: "Clear, persuasive website text, product descriptions, and informative articles written in simple, engaging words.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Share Your Idea",
      desc: "Tell us what your business needs in plain, everyday words—no tech background required.",
    },
    {
      num: "02",
      title: "Clear Action Plan",
      desc: "We prepare an honest timeline, transparent pricing, and creative plan tailored to you.",
    },
    {
      num: "03",
      title: "Design & Build",
      desc: "Our designers, developers, and editors craft your project with regular previews.",
    },
    {
      num: "04",
      title: "Review & Polish",
      desc: "We refine every visual and detail until you are 100% happy with how everything looks.",
    },
    {
      num: "05",
      title: "Launch & Grow",
      desc: "Your website, app, or campaign goes live with reliable ongoing support from our team.",
    },
  ];

  const faqs = [
    {
      q: "I don't know much about IT or websites. Will you guide me?",
      a: "Yes, 100%! We explain everything in simple, everyday language and handle all the design, coding, and setup for you.",
    },
    {
      q: "Will my website look proper on mobile phones and tablets?",
      a: "Yes. Every website we design and build is tested across iPhones, Android phones, tablets, and laptops so nothing ever overlaps or looks broken.",
    },
    {
      q: "Can you manage our social accounts and edit videos every month?",
      a: "Yes! Many business owners choose our monthly plans where we create graphic posts, edit Reels/videos, and manage their social pages weekly.",
    },
    {
      q: "How long does it take to complete a website or branding kit?",
      a: "Logos and graphic kits take 2 to 4 days, while complete business websites are usually designed, tested, and launched within 7 to 14 days.",
    },
    {
      q: "Do you provide support after the project is delivered?",
      a: "Yes, our Lahore team stays available on WhatsApp and email whenever you need updates, edits, or marketing help.",
    },
  ];

  const currentTab = featuredTabs[activeTab];

  return (
    <div>
      {/* 1. BRIGHT BLUE HERO SECTION (Arfa Technologies Scale + Bright Royal/Cyan Blue) */}
      <section className="bg-gradient-to-br from-[#073B8C] via-[#0B5ED7] to-[#0099FF] text-white min-h-[92vh] flex items-center pt-32 pb-24 lg:pt-36 lg:pb-28 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[460px] h-[460px] bg-cyan-300/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-white text-xs sm:text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4 text-cyan-200" /> Creative Digital & Tech Agency
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.08] tracking-tight text-white">
              Creative Digital Agency That{" "}
              <span className="text-cyan-200">Grows Your Business.</span>
            </h1>
            <p className="mt-6 text-base sm:text-xl text-blue-50 leading-relaxed max-w-2xl">
              We build modern websites and mobile apps, design standout logos, edit engaging videos, and manage your social media—all in simple, stress-free steps.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-white text-[#073B8C] hover:bg-cyan-50 font-extrabold text-base shadow-xl transition hover:scale-105"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/15 font-extrabold text-base transition"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          {/* Right Animated Device & Creative Showcase */}
          <div className="lg:col-span-5">
            <div className="animate-floatSlow bg-white/12 backdrop-blur-lg border border-white/25 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <svg viewBox="0 0 420 330" className="w-full h-auto" fill="none">
                <circle cx="210" cy="165" r="140" fill="#FFFFFF" fillOpacity="0.1" />
                {/* Laptop Screen */}
                <rect x="45" y="38" width="330" height="205" rx="18" fill="#051E47" stroke="#7DD3FC" strokeWidth="3" />
                <circle cx="70" cy="60" r="5" fill="#FF5F56" />
                <circle cx="88" cy="60" r="5" fill="#FFBD2E" />
                <circle cx="106" cy="60" r="5" fill="#27C93F" />
                <line x1="45" y1="78" x2="375" y2="78" stroke="#1E40AF" strokeWidth="2" />

                {/* Bright Visual Blocks inside Laptop */}
                <rect x="68" y="96" width="150" height="92" rx="14" fill="url(#brightBlueGrad)" />
                <path d="M128 126L158 142L128 158V126Z" fill="#FFFFFF" />
                <rect x="68" y="202" width="120" height="10" rx="5" fill="#38BDF8" />
                <rect x="68" y="220" width="85" height="8" rx="4" fill="#93C5FD" fillOpacity="0.6" />

                {/* Stats & Creative Cards */}
                <rect x="234" y="96" width="118" height="58" rx="12" fill="#0F346E" />
                <rect x="248" y="113" width="60" height="9" rx="4.5" fill="#38BDF8" />
                <rect x="248" y="130" width="88" height="8" rx="4" fill="#FFFFFF" fillOpacity="0.65" />

                <rect x="234" y="166" width="118" height="64" rx="12" fill="#0F346E" />
                <rect x="250" y="200" width="14" height="20" rx="4" fill="#38BDF8" />
                <rect x="274" y="188" width="14" height="32" rx="4" fill="#60A5FA" />
                <rect x="298" y="178" width="14" height="42" rx="4" fill="#22D3EE" />
                <rect x="322" y="172" width="14" height="48" rx="4" fill="#34D399" />

                {/* Floating Pill */}
                <rect x="95" y="260" width="230" height="42" rx="21" fill="#FFFFFF" />
                <circle cx="122" cy="281" r="10" fill="#10B981" />
                <text x="142" y="286" fill="#073B8C" fontSize="13" fontWeight="800" fontFamily="sans-serif">
                  Web • Apps • Design • Video
                </text>

                <defs>
                  <linearGradient id="brightBlueGrad" x1="68" y1="96" x2="218" y2="188" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00C6FF" />
                    <stop offset="1" stopColor="#0072FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE SERVICE TABS WITH CARTOON ILLUSTRATION (Arfa Style) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Strip */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 border-b border-slate-200 pb-4 mb-14">
            {featuredTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-3 rounded-full text-sm sm:text-base font-extrabold transition-all ${
                  activeTab === idx
                    ? "bg-[#0B5ED7] text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 hover:text-[#0B5ED7] hover:bg-blue-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content + Cartoon Designer Vector Illustration */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arxDark mb-5">
                {currentTab.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                {currentTab.desc}
              </p>

              <div className="grid sm:grid-cols-2 gap-3.5 mb-9">
                {currentTab.bullets.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-arxDark">
                    <CheckCircle2 className="w-5 h-5 text-[#0B5ED7] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white font-extrabold text-sm shadow-lg hover:opacity-95 transition"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/services"
                  className="px-7 py-3.5 rounded-full bg-blue-50 text-[#0B5ED7] hover:bg-blue-100 font-extrabold text-sm transition"
                >
                  See All 9 Services →
                </Link>
              </div>
            </div>

            {/* Right Clean Cartoon / Vector Desk Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 shadow-sm">
                <svg viewBox="0 0 460 340" className="w-full h-auto" fill="none">
                  {/* Floating Creative Cards */}
                  <rect x="40" y="30" width="95" height="65" rx="12" fill="#FFFFFF" stroke="#0B5ED7" strokeWidth="2.5" />
                  <circle cx="87" cy="56" r="14" fill="#38BDF8" fillOpacity="0.3" />
                  <path d="M87 47V65M78 56H96" stroke="#0B5ED7" strokeWidth="2.5" strokeLinecap="round" />

                  <rect x="325" y="35" width="95" height="65" rx="12" fill="#FFFFFF" stroke="#00C6FF" strokeWidth="2.5" />
                  <rect x="342" y="52" width="60" height="10" rx="5" fill="#0B5ED7" />
                  <rect x="342" y="70" width="42" height="8" rx="4" fill="#93C5FD" />

                  {/* Monitor Screen */}
                  <rect x="145" y="45" width="170" height="115" rx="14" fill="#073B8C" />
                  <rect x="158" y="58" width="144" height="85" rx="8" fill="#FFFFFF" />
                  <circle cx="230" cy="95" r="22" fill="#38BDF8" fillOpacity="0.35" />
                  <path d="M224 95L229 100L238 89" stroke="#0B5ED7" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="215" y="160" width="30" height="25" fill="#0B5ED7" />
                  <rect x="190" y="182" width="80" height="8" rx="4" fill="#073B8C" />

                  {/* Desk Line */}
                  <rect x="55" y="190" width="350" height="14" rx="7" fill="#073B8C" />
                  <rect x="85" y="204" width="14" height="105" rx="5" fill="#0B5ED7" />
                  <rect x="361" y="204" width="14" height="105" rx="5" fill="#0B5ED7" />

                  {/* Stylized Designer Character */}
                  <circle cx="230" cy="132" r="22" fill="#FDBA74" />
                  <path d="M208 128C208 113 252 113 252 128" fill="#051324" />
                  <path d="M188 190C188 164 272 164 272 190" fill="#00C6FF" />

                  {/* Chair */}
                  <rect x="192" y="232" width="76" height="12" rx="6" fill="#051324" />
                  <rect x="224" y="244" width="12" height="50" fill="#051324" />
                  <rect x="198" y="294" width="64" height="10" rx="5" fill="#051324" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLETE 9 SERVICES BOXES */}
      <section className="py-20 lg:py-28 bg-arxSurface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Complete Digital Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-arxDark mt-2">
              All 9 Services We Provide
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              Clear, easy-to-understand services crafted to build your brand, attract customers, and grow your business online.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {nineServices.map((srv, idx) => (
              <div
                key={idx}
                className="group bg-white border border-slate-200/80 hover:border-[#0B5ED7] rounded-3xl p-8 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-6 transition">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-arxDark mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#0B5ED7] group-hover:translate-x-1 transition-transform"
                >
                  Request This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PURE AESTHETIC STUDIO PICTURES (No Extra Clutter Text) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden shadow-lg h-72">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Creative Team"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-72">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
              alt="Web & Mobile Engineering"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg h-72">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
              alt="Brand Strategy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 5. ARFA-STYLE "LET'S BUILD SOMETHING TOGETHER" ILLUSTRATION SECTION */}
      <section className="py-20 lg:py-24 bg-arxSurface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-arxDark leading-tight mb-5">
              LET’S BUILD <br />
              <span className="text-[#0B5ED7]">SOMETHING TOGETHER</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Let’s build something extraordinary together! Our creative and technical team brings your digital ideas to life with clean designs, fast websites, engaging videos, and smart social growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white font-extrabold text-sm shadow-lg hover:opacity-95 transition"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-full border-2 border-arxDark text-arxDark hover:bg-arxDark hover:text-white font-extrabold text-sm transition"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right Cartoon Puzzle Builder Vector */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
              <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
                {/* Digital Wall Board */}
                <rect x="65" y="45" width="180" height="190" rx="16" fill="#073B8C" />
                <rect x="85" y="68" width="62" height="62" rx="10" fill="#0B5ED7" />
                <rect x="160" y="68" width="62" height="62" rx="10" fill="#38BDF8" />
                <rect x="85" y="145" width="62" height="62" rx="10" fill="#38BDF8" fillOpacity="0.4" />
                {/* Missing Slot */}
                <rect x="160" y="145" width="62" height="62" rx="10" fill="#FFFFFF" stroke="#00C6FF" strokeWidth="2.5" strokeDasharray="6 4" />

                {/* Floating Bright Piece */}
                <rect x="235" y="128" width="56" height="56" rx="12" fill="#00C6FF" />

                {/* Character Placing the Piece */}
                <circle cx="315" cy="98" r="20" fill="#FDBA74" />
                <path d="M295 94C295 80 335 80 335 94" fill="#051324" />
                <rect x="292" y="124" width="46" height="75" rx="14" fill="#0B5ED7" />
                <path d="M292 142L265 152" stroke="#FDBA74" strokeWidth="10" strokeLinecap="round" />
                <rect x="296" y="199" width="15" height="62" rx="6" fill="#051324" />
                <rect x="319" y="199" width="15" height="62" rx="6" fill="#051324" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 5-STEP WORKFLOW */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#051E47] to-[#0B5ED7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              5 Simple Steps From Idea to Launch
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((st, i) => (
              <div
                key={i}
                className="border-t-2 border-cyan-300 bg-white/10 backdrop-blur-sm p-6 rounded-b-2xl"
              >
                <span className="text-2xl font-extrabold text-cyan-200 block mb-2">
                  {st.num}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((item, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-arxDark hover:text-[#0B5ED7]"
                >
                  <span>{item.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-[#0B5ED7] shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#0B5ED7] shrink-0" />
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
    </div>
  );
}