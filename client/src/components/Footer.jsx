import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#051836] text-slate-300 pt-14 pb-8 border-t border-blue-400/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Link to="/" className="inline-block mb-4">
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-14 sm:h-16 w-auto object-contain mx-auto"
          />
        </Link>

        <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-bold text-white pb-6 border-b border-white/15">
          <Link to="/" className="hover:text-sky-300">Home</Link>
          <span>•</span>
          <Link to="/services" className="hover:text-sky-300">Services</Link>
          <span>•</span>
          <Link to="/portfolio" className="hover:text-sky-300">Our Work</Link>
          <span>•</span>
          <Link to="/about" className="hover:text-sky-300">About Us</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-sky-300">Contact</Link>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-slate-300">
          <a
            href="mailto:info.arxolontech@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-sky-300"
          >
            <Mail className="w-4 h-4 text-sky-300" /> info.arxolontech@gmail.com
          </a>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-sky-300" /> Model Town Link Road, Lahore, Pakistan
          </span>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          © 2024 Arxolon Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}