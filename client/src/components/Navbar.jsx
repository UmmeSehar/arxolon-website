import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

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
          ? "bg-[#051836]/75 backdrop-blur-xl shadow-lg py-2.5"
          : "bg-[#051836] py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#051836] font-extrabold text-sm shadow-md hover:opacity-95 transition whitespace-nowrap"
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/20 shrink-0"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#051836]/95 backdrop-blur-xl border-t border-blue-400/20 px-5 py-5 space-y-3">
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
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 block w-full text-center py-3 rounded-full bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#051836] font-extrabold text-sm"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}