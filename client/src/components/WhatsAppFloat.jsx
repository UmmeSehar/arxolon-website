import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {open && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#071E42] text-white border border-cyan-400/30 shadow-2xl p-4">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/15">
            <span className="font-extrabold text-sm text-cyan-300">Arxolon Chat</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Chat"
              className="p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-blue-100 mb-3">
            Have a question about our services or project timeline? Chat with us on WhatsApp.
          </p>
          <a
            href="https://wa.me/923241282633?text=Hello%20Arxolon%20Technologies!%20I%20need%20help."
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition"
          >
            Open WhatsApp Chat
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Chat with us"
        className="flex items-center gap-2 focus:outline-none"
      >
        {hovered && !open && (
          <span className="bg-[#051836] text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-cyan-400/30 shadow-lg whitespace-nowrap">
            Need help? Chat with us
          </span>
        )}
        <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-105">
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </span>
      </button>
    </div>
  );
}