import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923241282633?text=Hello%20Arxolon%20Technologies!%20I%20visited%20your%20website%20and%20need%20help%20with%20my%20business."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-3.5 rounded-full shadow-2xl shadow-emerald-600/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden sm:inline text-sm">Chat with Us</span>
    </a>
  );
}