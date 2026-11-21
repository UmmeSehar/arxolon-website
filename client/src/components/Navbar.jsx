import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-11 sm:h-13 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-[15px] font-semibold transition-colors ${
                  isActive
                    ? "text-arxBlue"
                    : "text-arxDark hover:text-arxBlue"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/923241282633?text=Hi%20Arxolon%20Technologies!%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-emerald-500 text-emerald-700 hover:bg-emerald-50 text-sm font-bold transition"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark font-bold text-sm shadow-md shadow-cyan-500/20 hover:opacity-95 transition"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="lg:hidden p-2 rounded-lg text-arxDark hover:bg-slate-100"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-5 space-y-3 shadow-xl">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-semibold text-arxDark hover:text-arxBlue"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-3">
            <a
              href="https://wa.me/923241282633?text=Hi%20Arxolon%20Technologies!%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 rounded-full border border-emerald-500 text-emerald-700 font-bold text-sm"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="w-full text-center py-3 rounded-full bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark font-bold text-sm"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}