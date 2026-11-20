import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-arxDark text-white pt-16 pb-8 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-800 pb-12">
        <div>
          <div className="mb-4">
            <img src="/logo.png" alt="Arxolon Technologies" className="h-12 w-auto object-contain" />
          </div>
          <h4 className="font-bold text-arxCyan mb-4 uppercase text-xs tracking-wider">Solutions</h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link to="/services" className="hover:text-arxCyan transition">Full-Stack Web Development</Link></li>
            <li><Link to="/services" className="hover:text-arxCyan transition">Technical & On-Page SEO</Link></li>
            <li><Link to="/services" className="hover:text-arxCyan transition">DR 60+ Backlink Outreach</Link></li>
            <li><Link to="/services" className="hover:text-arxCyan transition">Performance Digital Marketing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-arxCyan mb-4 uppercase text-xs tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-arxCyan transition">About Arxolon</Link></li>
            <li><Link to="/portfolio" className="hover:text-arxCyan transition">Client Case Studies</Link></li>
            <li><Link to="/contact" className="hover:text-arxCyan transition">Book Consultation</Link></li>
            <li><Link to="/admin" className="hover:text-arxCyan transition">Leads Portal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-arxCyan mb-4 uppercase text-xs tracking-wider">Contact Hub</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-arxCyan" /> info@arxolontech.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-arxCyan" /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Globe className="w-4 h-4 text-arxCyan" /> www.arxolontech.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-arxCyan" /> Lahore • Dubai • London</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Arxolon Technologies. All rights reserved.</p>
        <p className="mt-2 sm:mt-0 text-slate-500">Web Engineering • Search Dominance • Digital Growth</p>
      </div>
    </footer>
  );
}