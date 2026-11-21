import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white border-b border-blue-400/20 ${
        scrolled
          ? "bg-[#051836]/80 backdrop-blur-xl shadow-lg py-2.5"
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

        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((item) => (
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
          ))}
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

      {open && (
        <div className="md:hidden bg-[#051836]/95 backdrop-blur-xl border-t border-blue-400/20 px-5 py-5 space-y-2.5">
          {navLinks.map((item) => (
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
          ))}
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