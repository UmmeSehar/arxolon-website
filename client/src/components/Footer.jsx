import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export default function Footer() {
  const exploreLinks = [
    { label: "Home", to: "/" },
    { label: "Our Services", to: "/services" },
    { label: "About Us", to: "/about" },
    { label: "Contact Hub", to: "/contact" },
  ];

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

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/arxolontechnologies/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61596798540089",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/arxolon-technologies-430625451",
    },
  ];

  return (
    <footer className="bg-[#051836] text-slate-300 pt-16 pb-8 border-t border-blue-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand & Overview */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Arxolon Technologies"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Arxolon Technologies provides clear, dependable digital solutions across web, mobile, design, video, e-commerce, and social media.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-sky-400/20 text-xs font-bold text-white hover:text-sky-300 transition"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Explore / Pages */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-sky-300 mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-sky-400 inline-block"></span>
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold text-white">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-sky-300 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All 9 Services */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-sky-300 mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-sky-400 inline-block"></span>
              9 Services
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              {nineServices.map((srv) => (
                <li key={srv}>
                  <Link to="/services" className="hover:text-sky-300 transition">
                    {srv}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-sky-300 mb-4 flex items-center gap-2">
              <span className="w-3 h-0.5 bg-sky-400 inline-block"></span>
              Get In Touch
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <a
                href="mailto:info.arxolontech@gmail.com"
                className="flex items-center gap-2.5 hover:text-sky-300 transition"
              >
                <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                <span>info.arxolontech@gmail.com</span>
              </a>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-300 shrink-0" />
                <span>Model Town Link Road, Lahore, Pakistan</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                <span>Direct WhatsApp & Inquiry Available</span>
              </p>
              <p className="flex items-center gap-2.5 text-slate-400">
                <Globe className="w-4 h-4 text-sky-300 shrink-0" />
                <span>arxolon-website.vercel.app</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-xs text-slate-400">
          <p>© 2024 Arxolon Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}