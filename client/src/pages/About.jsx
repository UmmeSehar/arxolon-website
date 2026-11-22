import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Lightbulb,
  Award,
  Users,
  TrendingUp,
  ShieldCheck,
  Globe,
  Headphones,
  Cpu,
  Sparkles,
  MessageCircle,
  Wallet,
  CalendarCheck,
} from "lucide-react";

const FALLBACK_MEDIA =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";

export default function About() {
  const handleImgError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MEDIA) {
      e.currentTarget.src = FALLBACK_MEDIA;
    }
  };

  const nineServices = [
    "Website Development",
    "Social Media Marketing",
    "Mobile App Development",
    "Graphic Designing",
    "Website Designing",
    "Social Media Account Management",
    "Video Editing",
    "E-Commerce Fashion & Retail Store",
    "Logos & Brand Identity",
  ];

  const pillars = [
    {
      title: "Clear & Simple Process",
      desc: "We keep communication straightforward so you always know what is happening next.",
    },
    {
      title: "Visual & Functional Care",
      desc: "Every page, graphic, video edit, and store layout is built to look clean and work smoothly.",
    },
    {
      title: "Reliable Collaboration",
      desc: "We work closely with you from initial discussion through delivery and support.",
    },
  ];

  const coreValues = [
    {
      icon: <Lightbulb className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Innovation",
      desc: "We continuously adopt practical tools and modern design trends to build fresh, effective digital solutions for your business.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Excellence",
      desc: "Our commitment to quality ensures clean websites, sharp visuals, and smooth performance across every project.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Community",
      desc: "At Arxolon Technologies, we build strong, supportive relationships where clients and creators grow together.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Impact",
      desc: "We measure success through real business growth—helping brands reach more customers and stand out online.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Expert Team",
      desc: "Our dedicated developers, designers, and editors bring hands-on care and clear guidance to every task.",
    },
    {
      icon: <Globe className="w-6 h-6 text-[#0B5ED7]" />,
      title: "Global Reach",
      desc: "We serve businesses locally and internationally with reliable communication and consistent digital quality.",
    },
  ];

  const partnerReasons = [
    {
      icon: <Headphones className="w-7 h-7 text-[#051836]" />,
      title: "24/7 Support",
      desc: "Dedicated assistance and quick responses whenever you have questions or updates.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-[#051836]" />,
      title: "Modern Tech",
      desc: "Clean, fast, and up-to-date web, mobile, and creative workflows.",
    },
    {
      icon: <Globe className="w-7 h-7 text-[#051836]" />,
      title: "Global Standards",
      desc: "Professional visual polish and dependable execution tailored for growing brands.",
    },
    {
      icon: <Award className="w-7 h-7 text-[#051836]" />,
      title: "Impactful Results",
      desc: "Focused on practical outcomes, clear presentation, and lasting client satisfaction.",
    },
  ];

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      {/* 1. ZYNEX-STYLE TRUST-BUILDING TOP HERO & STATS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-[#F0F7FF] to-[#DCEEFF] text-[#051836] border-b border-blue-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B5ED7]/10 border border-[#0B5ED7]/25 text-[#0B5ED7] text-xs sm:text-sm font-extrabold mb-5">
            <Sparkles className="w-4 h-4" /> Delivering Excellence Since 2024 – 2026
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#051836] tracking-tight leading-tight">
            About <span className="text-[#0B5ED7]">Arxolon Technologies</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-extrabold text-[#051836]">Arxolon Technologies</span>, we drive innovation at the intersection of{" "}
            <span className="font-bold text-[#0B5ED7]">modern technology and creative design</span>. Based in{" "}
            <span className="font-extrabold text-[#051836]">Lahore, Pakistan</span>, from{" "}
            <span className="font-bold text-[#0B5ED7]">2024 to 2026</span> we have been empowering startups, retail brands, and growing businesses with custom websites, mobile apps, standout logos, video editing, and result-driven social media management.
          </p>

          {/* 3 Trust Stat Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-7 border border-blue-200/90 shadow-md">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">
                2024–2026
              </p>
              <p className="text-sm font-bold text-slate-600 mt-2">
                Consistent Digital Innovation
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-blue-200/90 shadow-md">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">
                9 Core
              </p>
              <p className="text-sm font-bold text-slate-600 mt-2">
                All-in-One Creative & Tech Services
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-blue-200/90 shadow-md">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">
                100%
              </p>
              <p className="text-sm font-bold text-slate-600 mt-2">
                Client Satisfaction & Custom Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXISTING SECTIONS (UNCHANGED) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-sm">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">Our Approach</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
              Arxolon Technologies brings design, development, video editing, and social media handling together under one roof so business owners do not have to juggle disconnected vendors.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We focus on practical execution, clean presentation, and responsive support for everyday business growth.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
              alt="Our Approach"
              onError={handleImgError}
              className="w-full h-64 object-cover rounded-xl live-motion-img"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#082A5E] text-white rounded-2xl p-6 sm:p-8 border border-sky-300/20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-300 mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Our mission is to deliver clear, dependable digital work on time so business owners can grow smoothly without technical stress.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Our Mission"
              onError={handleImgError}
              className="w-full h-64 object-cover rounded-xl live-motion-img"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#CFE6FF] text-[#051836] rounded-2xl p-6 sm:p-8 border border-blue-300">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
              alt="Long Term Trust"
              onError={handleImgError}
              className="w-full h-64 object-cover rounded-xl live-motion-img"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">Long-Term Trust</h2>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-4">
              We focus on honest communication, timely delivery, and lasting working relationships. Contact our team to discuss additional advantages and custom details for your project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-bold text-[#082A5E]">
              {nineServices.map((srv) => (
                <div key={srv} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#051836] mb-2">{p.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. EXISTING SECTION: WE ALWAYS STRIVE TO PROVIDE THE BEST SERVICE (UNCHANGED) */}
      <section className="py-20 bg-white text-[#051836] border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl border border-blue-200 shadow-md bg-[#DCEEFF] p-2">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
              alt="We always strive to provide the best service"
              onError={handleImgError}
              className="w-full h-72 sm:h-80 object-cover rounded-xl live-motion-img"
            />
          </div>
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] mt-2 mb-4 leading-tight">
              We always strive to provide the best service
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              We are a dedicated digital and tech agency helping growing businesses across different industries build clean websites, engaging social media pages, standout logos, and high-converting online stores.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              We believe in client satisfaction and steady progress. Every project is handled with clear communication, creative care, and practical solutions designed around your business goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#082A5E] hover:bg-[#0B428A] text-white font-extrabold text-sm transition shadow-md"
            >
              Get Started <ArrowRight className="w-4 h-4 text-sky-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. EXISTING SECTION: OUR MISSION & OUR VISION CARDS (UNCHANGED) */}
      <section className="py-20 bg-[#DCEEFF] text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#DCEEFF] flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#0B5ED7]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#051836] mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              To equip businesses and entrepreneurs with modern websites, mobile apps, and creative branding solutions—bridging the digital gap in simple, stress-free steps so every brand can thrive online.
            </p>
          </div>

          <div className="bg-[#082A5E] text-white rounded-2xl p-8 border border-sky-300/20 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-sky-400/15 border border-sky-300/30 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-sky-300" />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">Our Vision</h3>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              To be recognized as a trusted creative and technology partner that empowers businesses worldwide with reliable digital infrastructure, standout visual identity, and long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* 5. EXISTING SECTION: OUR CORE VALUES (UNCHANGED) */}
      <section className="py-20 bg-white text-[#051836]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836]">
              Our Core <span className="text-[#0B5ED7]">Values</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              The principles that guide our work, communication, and commitment to every client.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-[#F1F5F9] hover:bg-[#DCEEFF]/70 transition rounded-2xl p-7 border border-blue-200 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-blue-200 flex items-center justify-center mb-4 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#051836] mb-2">{val.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXISTING SECTION: WHY PARTNER WITH US? (UNCHANGED) */}
      <section className="py-20 bg-gradient-to-br from-[#051836] via-[#09295B] to-[#0E3A7A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-400/15 border border-sky-300/30 text-sky-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" /> Partnership Excellence
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Why <span className="text-sky-300">Partner with Us?</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-blue-100">
              We are more than just a service provider;{" "}
              <span className="font-bold text-white">we are your growth partner.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerReasons.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 border border-sky-300/20 rounded-2xl p-7 text-center flex flex-col items-center hover:border-sky-300 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-400 flex items-center justify-center mb-5 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXPANDED LIGHT-BLUE / WHITE TRUST & COMMITMENT SECTION (Replaces narrow dark-blue strip) */}
      <section className="py-20 bg-gradient-to-b from-[#DCEEFF] via-[#EBF4FF] to-white text-[#051836] border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-blue-200 shadow-xl p-8 sm:p-12 lg:p-14">
            <div className="max-w-3xl">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#0B5ED7]/10 text-[#0B5ED7] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3">
                Our Promise to Every Client
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051836] leading-tight">
                We Fulfill Every Commitment—Tailored to Your Requirements & Budget
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                At Arxolon Technologies, trust is built through actions, not empty promises. Whatever we commit to at the start of your project, we deliver with complete honesty, transparent pricing, and zero hidden surprises. Whether you are launching a startup on a focused budget or scaling an established brand, our team crafts custom digital solutions that fit your exact needs and financial plan.
              </p>
            </div>

            {/* 3 Trust & Budget Commitment Pillars */}
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-200/80">
                <Wallet className="w-7 h-7 text-[#0B5ED7] mb-3" />
                <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">
                  Flexible & Budget-Friendly Plans
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We structure packages around your exact budget so you get maximum quality and real business value without overspending.
                </p>
              </div>

              <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-200/80">
                <CheckCircle2 className="w-7 h-7 text-[#0B5ED7] mb-3" />
                <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">
                  100% Requirement Fulfillment
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Every feature, design detail, and revision is carefully aligned with your business goals before final delivery.
                </p>
              </div>

              <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-200/80">
                <CalendarCheck className="w-7 h-7 text-[#0B5ED7] mb-3" />
                <h3 className="font-extrabold text-lg text-[#051836] mb-1.5">
                  Honest Timelines & Ongoing Care
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  We respect your launch deadlines, keep you updated at every step, and stay available even after your project goes live.
                </p>
              </div>
            </div>

            {/* Bottom Direct Action Bar */}
            <div className="pt-6 border-t border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#051836]">
                  Want to talk about your project and budget?
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Reach out directly to our team for personalized guidance and clear project estimates.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 shrink-0">
                <a
                  href="https://wa.me/923241282633?text=Hello%20Arxolon%20Technologies!%20I%20would%20like%20to%20discuss%20my%20project%20requirements%20and%20budget."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B5ED7] hover:bg-[#051836] text-white font-extrabold text-sm shadow-md transition"
                >
                  Go to Contact <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}