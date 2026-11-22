import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d49b3fed-59f9-454d-98f9-b35fc2cdab3d",
          subject: `New Inquiry from ${form.name} - Arxolon Technologies`,
          from_name: "Arxolon Technologies Website",
          ...form,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          text: "Thank you! Your message has been sent. Our team will contact you shortly.",
        });
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "Website Development",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          text: "Something went wrong. Please try again or message us on WhatsApp.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        text: "Network error. Please check your internet connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      {/* Header Banner */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-300">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2">
            Start Your Project With Us
          </h1>
          <p className="mt-3 text-blue-100 max-w-2xl text-sm sm:text-base leading-relaxed">
            Fill out the form below or connect with our team directly. We respond quickly with clear guidance.
          </p>
        </div>
      </section>

      {/* Responsive Form & Info Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Info Card */}
          <div className="lg:col-span-5 bg-[#051836] text-white rounded-2xl p-6 sm:p-8 border border-sky-300/20 shadow-lg space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-white">Get In Touch</h2>
              <p className="text-sm text-blue-100 mt-2 leading-relaxed">
                Have a question about websites, apps, design, video editing, or social media management? Send us your details anytime.
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Email Us</p>
                  <a
                    href="mailto:info.arxolontech@gmail.com"
                    className="text-blue-200 hover:text-sky-300 break-all"
                  >
                    info.arxolontech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Location</p>
                  <p className="text-blue-200">Model Town Link Road, Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Quick Response</p>
                  <p className="text-blue-200">Direct WhatsApp & Email support available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Responsive Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-md">
            <h2 className="text-2xl font-extrabold text-[#051836] mb-1">
              Send Us a Message
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Share your requirements in simple words and our team will reply soon.
            </p>

            {status.text && (
              <div
                className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-sm font-bold ${
                  status.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <span>{status.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+92 300 0000000"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                    Select Service *
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:border-[#0B5ED7] focus:outline-none"
                  >
                    <option>Website Development</option>
                    <option>Social Media Marketing</option>
                    <option>Mobile App Development</option>
                    <option>Graphic Designing</option>
                    <option>Website Designing</option>
                    <option>Social Media Account Management</option>
                    <option>Video Editing</option>
                    <option>E-Commerce Fashion & Retail Store</option>
                    <option>Logos & Brand Identity</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                  Project Details *
                </label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us briefly what you need..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:border-[#0B5ED7] focus:outline-none"
                ></textarea>
              </div>

              <div className="space-y-3 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#082A5E] hover:bg-[#0B428A] text-white font-extrabold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? "Sending Message..." : "Send Inquiry"}
                  <Send className="w-4 h-4 text-sky-300" />
                </button>

                <a
                  href={`https://wa.me/923241282633?text=${encodeURIComponent(
                    `Hello Arxolon Technologies! I would like to inquire about ${form.service}.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-sm sm:text-base transition flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Contact on WhatsApp</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}