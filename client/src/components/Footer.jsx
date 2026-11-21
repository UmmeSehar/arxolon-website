import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030D1A] text-slate-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
        <div>
          <img
            src="/logo.png"
            alt="Arxolon Technologies"
            className="h-12 w-auto object-contain mb-4"
          />
          <p className="text-sm text-slate-400 leading-relaxed">
            Websites, digital marketing, graphic designing, video editing, and social accounts management for growing businesses.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-4">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/services" className="hover:text-arxCyan transition">Website Development</Link></li>
            <li><Link to="/services" className="hover:text-arxCyan transition">Digital Marketing</Link></li>
            <li><Link to="/services" className="hover:text-arxCyan transition">Graphic Designing</Link></li>
            <li><Link to="/services" className="hover:text-arxCyan transition">Video Editing</Link></li>
            <li><Link to="/services" className="hover:text-arxCyan transition">Social Accounts Management</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-arxCyan transition">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-arxCyan transition">Our Work</Link></li>
            <li><Link to="/about" className="hover:text-arxCyan transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-arxCyan transition">Get a Free Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-arxCyan shrink-0 mt-1" />
              <a href="https://wa.me/923241282633" className="hover:text-arxCyan">
                +92 324 1282633
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-arxCyan shrink-0 mt-1" />
              <a href="mailto:info.arxolon1@gmail.com" className="hover:text-arxCyan">
                info.arxolon1@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-arxCyan shrink-0 mt-1" />
              <span>Lahore, Model Town Link Road</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-3">
        <p>© 2026 Arxolon Technologies. All rights reserved.</p>
        <p>Crafted for clarity, speed, and business growth.</p>
      </div>
    </footer>
  );
}