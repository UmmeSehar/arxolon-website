import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#051836] text-slate-300 pt-16 pb-10 border-t border-blue-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Centered Large Logo */}
        <Link to="/" className="inline-block mb-5">
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-16 sm:h-20 w-auto object-contain mx-auto"
          />
        </Link>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-7">
          Websites, mobile apps, graphic & logo design, video editing, content writing, and social media management for growing businesses.
        </p>

        {/* Social Media Icons: Instagram, Facebook, LinkedIn (No YouTube) */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/arxolontechnologiesbqrl=aWszYnpjbG9vaXdk"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full bg-white text-[#051836] hover:bg-pink-500 hover:text-white flex items-center justify-center transition shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61596798540089"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-11 h-11 rounded-full bg-white text-[#051836] hover:bg-blue-600 hover:text-white flex items-center justify-center transition shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/arxolon-technologies-430625451"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-11 h-11 rounded-full bg-white text-[#051836] hover:bg-sky-600 hover:text-white flex items-center justify-center transition shadow-md"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Navigation Links Line */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm font-bold text-white pb-6 border-b border-blue-900/60">
          <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
          <span className="text-blue-700">|</span>
          <Link to="/services" className="hover:text-cyan-300 transition">Services</Link>
          <span className="text-blue-700">|</span>
          <Link to="/portfolio" className="hover:text-cyan-300 transition">Our Work</Link>
          <span className="text-blue-700">|</span>
          <Link to="/about" className="hover:text-cyan-300 transition">About Us</Link>
          <span className="text-blue-700">|</span>
          <Link to="/contact" className="hover:text-cyan-300 transition">Contact</Link>
        </div>

        {/* Essential Info Only */}
        <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs sm:text-sm text-slate-400">
          <a href="mailto:info.arxolontech@gmail.com" className="inline-flex items-center gap-1.5 hover:text-cyan-300">
            <Mail className="w-4 h-4 text-cyan-300" /> info.arxolontech@gmail.com
          </a>
          <span className="hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-cyan-300" /> Model Town Link Road, Lahore, Pakistan
          </span>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          © 2026 Arxolon Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}