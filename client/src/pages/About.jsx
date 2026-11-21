import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
  Headphones,
  Cpu,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Star,
} from "lucide-react";

export default function About() {
  const coreValues = [
    {
      icon: <Target className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Innovation",
      desc: "We use modern web, app, and design tools to build fresh, up-to-date digital experiences that help your brand stand ahead.",
    },
    {
      icon: <Eye className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Excellence",
      desc: "Every website, logo, video edit, and social post goes through careful quality checks so your business always looks sharp.",
    },
    {
      icon: <Heart className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Clarity & Simplicity",
      desc: "We avoid confusing technical jargon and explain everything in simple words that any business owner can easily understand.",
    },
    {
      icon: <Award className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Real Business Impact",
      desc: "We focus on results that truly matter—more customer inquiries, stronger brand trust, and consistent online growth.",
    },
    {
      icon: <Users className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Dedicated Creative Team",
      desc: "Your project is handled by skilled web developers, graphic designers, video editors, and social media specialists.",
    },
    {
      icon: <Globe className="w-7 h-7 text-[#0B5ED7]" />,
      title: "Local & Global Reach",
      desc: "Based on Model Town Link Road, Lahore, we proudly serve businesses across Pakistan and around the world.",
    },
  ];

  const partnerCards = [
    {
      icon: <Headphones className="w-7 h-7 text-white" />,
      title: "24/7 Friendly Support",
      desc: "Direct WhatsApp and email assistance whenever you have a question or need quick updates.",
    },
    {
      icon: <Cpu className="w-7 h-7 text-white" />,
      title: "Modern Design & Tech",
      desc: "Fast, mobile-perfect websites, apps, and high-definition video & graphic creations.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-white" />,
      title: "On-Time Commitment",
      desc: "Honest timelines and reliable delivery so your launches and campaigns stay right on schedule.",
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-white" />,
      title: "Impactful Results",
      desc: "Complete 9-in-1 digital solutions built to grow your brand visibility and customer base.",
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* 1. HERO SECTION WITH 3 STAT CARDS (Zynex About Style) */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/80 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-arxDark">
            About <span className="text-[#0B5ED7]">Arxolon Technologies</span>
          </h1>
          <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Arxolon Technologies, we combine modern web & mobile engineering with creative graphic design, video editing, and social media growth. Based in <strong>Lahore, Pakistan</strong>, we help businesses look trusted and win customers worldwide.
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">9 Services</p>
              <p className="text-sm font-semibold text-slate-600 mt-1.5">Complete Digital Solutions</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">100%</p>
              <p className="text-sm font-semibold text-slate-600 mt-1.5">Mobile & Screen Responsive</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#0B5ED7]">Fast</p>
              <p className="text-sm font-semibold text-slate-600 mt-1.5">On-Time Project Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR JOURNEY & STORY */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mt-2 mb-5">
              Built to make digital growth simple for every business
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-base">
              We noticed that many business owners feel overwhelmed when trying to take their company online. Some agencies use overly complicated words, while others fail to deliver clean visuals that work properly on mobile phones.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4 text-base">
              <strong>Arxolon Technologies</strong> was founded with a clear mission: to bring together all 9 essential digital services—Website Development, Website Designing, Mobile App Development, Social Media Marketing, Social Accounts Management, Graphic Designing, Video Editing, Logo & Brand Identity, and Content & Blog Writing—under one friendly, reliable team.
            </p>
            <p className="text-slate-600 leading-relaxed mb-7 text-base">
              Whether you are starting a new brand or upgrading an established company, we guide you step-by-step and deliver work you are proud to show your customers.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Simple, Non-IT Communication",
                "Mobile-Perfect Responsive Layouts",
                "Custom Logos, Posts & Video Reels",
                "Dedicated Support After Launch",
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm font-bold text-arxDark">
                  <CheckCircle2 className="w-5 h-5 text-[#0B5ED7] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Arxolon Technologies Team"
                className="w-full h-[430px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION & GOALS */}
      <section className="py-16 lg:py-24 bg-arxSurface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0B5ED7] text-xs font-extrabold uppercase tracking-wider mb-4">
              Our Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-arxDark mb-4">
              Empowering businesses with clean design and smart technology
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              Our mission is to help small, medium, and growing businesses build a powerful online presence without stress. From your first logo and website to daily social media management and promo videos, we handle the creative and technical work so you can focus on running your business.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-200/80 shadow-sm">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 text-[#0B5ED7] text-xs font-extrabold uppercase tracking-wider mb-4">
              Our Goals & Commitments
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-arxDark mb-4">
              Long-term trust, transparent timelines, and measurable growth
            </h3>
            <p className="text-slate-600 leading-relaxed text-base">
              We aim to be the most trusted digital partner for our clients by keeping three promises: 100% honest communication, strict respect for delivery deadlines, and visual quality that rivals top international agencies.
            </p>
          </div>
        </div>
      </section>

      {/* 4. 6 CORE VALUES GRID (Zynex About Style) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mt-2">
              Our Core Values & Standards
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/90 hover:border-[#0B5ED7] hover:shadow-lg transition text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                  {val.icon}
                </div>
                <h3 className="text-xl font-extrabold text-arxDark mb-3">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY PARTNER WITH US? (Zynex Dark Highlight Section in Bright Royal Blue) */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-[#04142C] via-[#082A5E] to-[#0B5ED7] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-cyan-300/30 text-cyan-200 text-xs font-extrabold uppercase tracking-widest mb-4">
              ✨ Partnership Excellence ✨
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold">
              Why Partner <span className="text-cyan-300">with Us?</span>
            </h2>
            <p className="mt-4 text-blue-100 text-base sm:text-lg">
              We are more than just a service provider—we are your dedicated digital growth partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCards.map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-8 text-center hover:bg-white/15 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#00C6FF] to-[#0072FF] flex items-center justify-center mx-auto mb-5 shadow-lg">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">{card.title}</h3>
                <p className="text-sm text-blue-100 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-20 lg:py-24 bg-arxSurface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B5ED7]">
              Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-arxDark mt-2">
              Trusted by Growing Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Hamza Tariq",
                role: "Clothing & Retail Brand",
                text: "Arxolon built our e-commerce website and edits our Instagram reels every week. Our customers love the clean look of our store.",
              },
              {
                name: "Dr. Ayesha Siddiqui",
                role: "Healthcare & Dental Clinic",
                text: "Their team explained everything in simple words, designed our brand identity, and launched a mobile-friendly site right on time.",
              },
              {
                name: "Bilal Ahmed",
                role: "Construction & Property Group",
                text: "Very cooperative staff in Lahore. From brochures and logos to social media ads, everything is delivered with great quality.",
              },
            ].map((rev, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    "{rev.text}"
                  </p>
                </div>
                <div>
                  <p className="font-extrabold text-arxDark">{rev.name}</p>
                  <p className="text-xs font-bold text-[#0B5ED7]">{rev.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="py-20 bg-white text-center px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#073B8C] to-[#0B5ED7] text-white p-10 sm:p-14 rounded-3xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to take your business to the next level?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8">
            Contact our Lahore team today and let’s discuss your website, mobile app, design, or social media goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#073B8C] font-extrabold text-base hover:bg-cyan-50 transition shadow-lg"
          >
            Start a Conversation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}