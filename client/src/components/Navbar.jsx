import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 35);
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

  // Top par bright blue hero ke saath transparent blue, scroll par frosted-glass blur
  const headerStyle = scrolled
    ? "bg-white/75 backdrop-blur-xl shadow-lg border-b border-slate-200/70 py-2.5 text-arxDark"
    : isHome
    ? "bg-[#0B5ED7]/90 backdrop-blur-md border-b border-white/15 py-3.5 text-white"
    : "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 text-arxDark";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Bara aur Clear Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-14 sm:h-16 md:h-[72px] w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-[15px] font-bold transition-colors ${
                  scrolled || !isHome
                    ? isActive
                      ? "text-[#0B5ED7]"
                      : "text-arxDark hover:text-[#0B5ED7]"
                    : isActive
                    ? "text-cyan-200 underline underline-offset-8 decoration-2"
                    : "text-white hover:text-cyan-200"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-extrabold text-sm shadow-md transition hover:scale-105 ${
              scrolled || !isHome
                ? "bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white"
                : "bg-white text-[#073B8C] hover:bg-cyan-50"
            }`}
          >
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className={`lg:hidden p-2 rounded-xl ${
            scrolled || !isHome ? "text-arxDark hover:bg-slate-100" : "text-white hover:bg-white/15"
          }`}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl text-arxDark">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-bold hover:text-[#0B5ED7]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center py-3.5 rounded-full bg-gradient-to-r from-[#00C6FF] to-[#0072FF] text-white font-extrabold text-sm"
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}