import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const services = [
    "Website Development",
    "Social Media Marketing",
    "Mobile App Development",
    "Graphic Designing",
    "Website Designing",
    "Social Media Account Management",
    "Video Editing",
    "E-Commerce Fashion & Retail Store",
    "Logos & Brand Identity",
  ];

  const isValidPhone = (rawPhone) => {
    const digits = rawPhone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) return false;
    if (/^(\d)\1+$/.test(digits)) return false; // 1111111... jaise numbers reject
    return true;
  };

  const isValidEmail = (emailVal) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailVal.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!isValidEmail(form.email)) {
      setStatus({
        type: "error",
        text: "Please enter a valid email address (for example: name@gmail.com).",
      });
      return;
    }

    if (!isValidPhone(form.phone)) {
      setStatus({
        type: "error",
        text: "Phone number is not valid. Please enter a real contact number.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/info.arxolontech@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Inquiry - ${form.service} (${form.name})`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Service: form.service,
          Message: form.message,
        }),
      });

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus({
          type: "success",
          text: "Message sent! If this is your first time, please check info.arxolontech@gmail.com (including Spam) to activate form emails.",
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
          text: "Could not send message right now. Please try again or email info.arxolontech@gmail.com directly.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        text: "Network error while sending message. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      <section className="py-14 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-2 text-blue-100 text-sm sm:text-base">
            Send your inquiry directly to info.arxolontech@gmail.com
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-blue-200 p-6 sm:p-10 shadow-md">
          {status.text && (
            <div
              className={`mb-6 p-4 rounded-xl flex items-start gap-3 text-sm font-bold ${
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

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5ED7] focus:outline-none text-sm"
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
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5ED7] focus:outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+92 3XX XXXXXXX"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5ED7] focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                  Select Service *
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5ED7] focus:outline-none text-sm bg-white"
                >
                  {services.map((srv) => (
                    <option key={srv} value={srv}>
                      {srv}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-[#051836] mb-1.5">
                Message *
              </label>
              <textarea
                rows="4"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your project details..."
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5ED7] focus:outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#051836] to-[#0B5ED7] text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition"
            >
              {submitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}