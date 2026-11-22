import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  ChevronDown,
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const serviceMenuItems = [
    { name: "Website Development", id: "website-development", icon: Globe },
    { name: "Social Media Marketing", id: "social-media-marketing", icon: Megaphone },
    { name: "Mobile App Development", id: "mobile-app-development", icon: Smartphone },
    { name: "Graphic Designing", id: "graphic-designing", icon: Palette },
    { name: "Website Designing", id: "website-designing", icon: Layout },
    { name: "Social Media Account Management", id: "social-media-management", icon: Share2 },
    { name: "Video Editing", id: "video-editing", icon: Video },
    { name: "E-Commerce Fashion & Retail Store", id: "ecommerce-fashion-retail", icon: ShoppingBag },
    { name: "Logos & Brand Identity", id: "logos-brand-identity", icon: Award },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white border-b border-blue-400/20 ${
        scrolled
          ? "bg-[#051836]/90 backdrop-blur-xl shadow-lg py-2.5"
          : "bg-[#051836] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-11 sm:h-14 md:h-16 w-auto object-contain live-motion-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.path}
                className="relative py-2"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 text-sm lg:text-[15px] font-bold transition-colors whitespace-nowrap ${
                      isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
                    }`
                  }
                >
                  {item.name}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdown ? "rotate-180 text-cyan-300" : ""
                    }`}
                  />
                </NavLink>

                {/* Hover Mega Dropdown Box (All 9 Services) */}
                {servicesDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50">
                    <div className="bg-white text-[#051836] rounded-2xl shadow-2xl border border-blue-100 p-5 grid grid-cols-2 gap-2.5">
                      {serviceMenuItems.map((srv) => {
                        const IconComponent = srv.icon;
                        return (
                          <Link
                            key={srv.id}
                            to={`/services#${srv.id}`}
                            onClick={() => setServicesDropdown(false)}
                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#EBF4FF] transition group"
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#0B5ED7]/10 text-[#0B5ED7] group-hover:bg-[#0B5ED7] group-hover:text-white flex items-center justify-center shrink-0 transition">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-xs sm:text-[13px] font-extrabold text-[#051836] group-hover:text-[#0B5ED7] leading-snug">
                              {srv.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm lg:text-[15px] font-bold transition-colors whitespace-nowrap ${
                    isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          <a
            href="https://wa.me/923241282633?text=Hello%20Arxolon%20Technologies!"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-200 font-bold text-xs lg:text-sm transition whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" /> WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 lg:px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#051836] font-extrabold text-xs lg:text-sm shadow-md hover:opacity-95 transition whitespace-nowrap"
          >
            Inquiry <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 shrink-0"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-[#051836]/95 backdrop-blur-xl border-t border-blue-400/20 px-5 py-5 space-y-2.5 max-h-[85vh] overflow-y-auto">
          {navLinks.map((item) =>
            item.hasDropdown ? (
              <div key={item.path} className="border-b border-white/10 pb-2">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `py-2 text-base font-bold ${
                        isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-2 text-cyan-300"
                    aria-label="Expand Services"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3 mt-1 space-y-1.5 border-l-2 border-cyan-400/40">
                    {serviceMenuItems.map((srv) => (
                      <Link
                        key={srv.id}
                        to={`/services#${srv.id}`}
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block py-1.5 text-sm font-semibold text-blue-100 hover:text-cyan-300"
                      >
                        {srv.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-base font-bold border-b border-white/10 ${
                    isActive ? "text-cyan-300" : "text-white hover:text-cyan-200"
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}
          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              href="https://wa.me/923241282633?text=Hello%20Arxolon%20Technologies!"
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center py-2.5 rounded-full bg-emerald-500 text-white font-bold text-sm"
            >
              WhatsApp Us
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex-1 text-center py-2.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#051836] font-extrabold text-sm"
            >
              Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}