import React, { useState } from "react";
import { X } from "lucide-react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      onMouseEnter={() => setOpen(true)}
    >
      {/* Expandable Chat Card */}
      {open && (
        <div className="mb-3 w-80 sm:w-[340px] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-emerald-500 p-5 text-white relative">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp Box"
              className="absolute top-3.5 right-3.5 p-1 rounded-full hover:bg-white/20 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
                  <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.404L3.1 29.02l6.79-1.78a12.74 12.74 0 0 0 6.114 1.56h.005c7.058 0 12.796-5.74 12.796-12.8 0-3.42-1.332-6.635-3.75-9.053A12.715 12.715 0 0 0 16.004 3.2zm0 23.437h-.004a10.61 10.61 0 0 1-5.41-1.482l-.388-.23-4.03 1.057 1.076-3.928-.253-.403a10.596 10.596 0 0 1-1.627-5.65c0-5.864 4.772-10.636 10.64-10.636 2.84 0 5.51 1.107 7.518 3.116a10.566 10.566 0 0 1 3.114 7.523c0 5.865-4.773 10.633-10.636 10.633zm5.834-7.966c-.32-.16-1.892-.934-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.012 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.307c.16.213 2.256 3.445 5.466 4.83.763.33 1.36.527 1.824.674.766.244 1.464.21 2.015.127.615-.092 1.892-.773 2.159-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
                </svg>
              </div>
              <div>
                <h4 className="font-extrabold text-base">Start a Conversation</h4>
                <p className="text-xs text-emerald-50 mt-0.5">
                  If you need any help, go chat with us!
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50">
            <p className="text-[11px] text-slate-400 mb-3">
              The team typically replies in a few minutes
            </p>
            <a
              href="https://wa.me/923241282633?text=Hello%20Arxolon%20Technologies!%20I%20need%20help%20with%20my%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-white border-l-4 border-emerald-500 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-extrabold text-sm">
                  AT
                </div>
                <div>
                  <p className="font-bold text-sm text-arxDark">Arxolon Technologies</p>
                  <p className="text-xs text-slate-500">Web, Design, Video & Social Support</p>
                </div>
              </div>
              <span className="text-emerald-600 font-extrabold text-xs">Chat →</span>
            </a>
          </div>
        </div>
      )}

      {/* Cute Round Button + "Need help? Chat with us" Pill */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Need help? Chat with us"
        className="flex items-center gap-2.5 group focus:outline-none"
      >
        <span className="bg-white text-slate-700 text-xs font-semibold px-3.5 py-2 rounded-lg shadow-md border border-slate-200/80">
          Need help? <strong className="text-arxDark">Chat with us</strong>
        </span>
        <div className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 transition-transform group-hover:scale-105">
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
              <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.404L3.1 29.02l6.79-1.78a12.74 12.74 0 0 0 6.114 1.56h.005c7.058 0 12.796-5.74 12.796-12.8 0-3.42-1.332-6.635-3.75-9.053A12.715 12.715 0 0 0 16.004 3.2zm0 23.437h-.004a10.61 10.61 0 0 1-5.41-1.482l-.388-.23-4.03 1.057 1.076-3.928-.253-.403a10.596 10.596 0 0 1-1.627-5.65c0-5.864 4.772-10.636 10.64-10.636 2.84 0 5.51 1.107 7.518 3.116a10.566 10.566 0 0 1 3.114 7.523c0 5.865-4.773 10.633-10.636 10.633zm5.834-7.966c-.32-.16-1.892-.934-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.012 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.986-2.373-.26-.624-.524-.54-.72-.55h-.613c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.146 3.093 1.306 3.307c.16.213 2.256 3.445 5.466 4.83.763.33 1.36.527 1.824.674.766.244 1.464.21 2.015.127.615-.092 1.892-.773 2.159-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}