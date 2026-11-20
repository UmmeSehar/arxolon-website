import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Arxolon Technologies Logo */}
        <Link className="flex items-center" to="/">
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold transition-all ${
                  isActive
                    ? 'text-arxBlue border-b-2 border-arxCyan pb-1'
                    : 'text-arxNavy hover:text-arxBlue'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/admin"
            className="text-xs font-bold text-slate-600 hover:text-arxNavy px-3 py-2 rounded-lg border border-slate-200 flex items-center gap-1"
          >
            <ShieldCheck className="w-4 h-4 text-arxBlue" /> Client Portal
          </Link>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-arxNavy to-arxBlue hover:opacity-95 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-1.5 shadow-md transition"
          >
            Free SEO Audit <ArrowUpRight className="w-4 h-4 text-arxCyan" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-arxNavy p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-arxNavy font-bold hover:text-arxBlue"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/admin"
            onClick={() => setOpen(false)}
            className="block py-2 text-arxBlue font-bold"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-arxNavy text-white py-2.5 rounded-lg font-bold"
          >
            Get Free Proposal
          </Link>
        </div>
      )}
    </header>
  );
}