import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await fetch("https://formsubmit.co/ajax/info.arxolon1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Arxolon Inquiry: ${form.service}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone || "Not Provided",
          Service: form.service,
          Message: form.message,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  const whatsappUrl = `https://wa.me/923241282633?text=${encodeURIComponent(
    `Hi Arxolon Technologies!\nName: ${form.name || "Visitor"}\nService: ${form.service}\nDetails: ${form.message || "I want a quote for my project."}`
  )}`;

  return (
    <div className="bg-white">
      <section className="bg-arxDark text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-arxCyan">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 mb-4">
            Let's discuss your project
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Send us a message below or chat directly on WhatsApp. We reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          {/* Left Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-arxDark">
              Get in touch directly
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Have a question about pricing or want to see how we can help your business? Reach out anytime.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-arxSurface border border-slate-200/80">
                <Phone className="w-5 h-5 text-arxBlue shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Phone / WhatsApp</p>
                  <a href="tel:+923241282633" className="text-base font-bold text-arxDark hover:text-arxBlue">
                    +92 324 1282633
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-arxSurface border border-slate-200/80">
                <Mail className="w-5 h-5 text-arxBlue shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Email Address</p>
                  <a href="mailto:info.arxolon1@gmail.com" className="text-base font-bold text-arxDark hover:text-arxBlue">
                    info.arxolon1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-arxSurface border border-slate-200/80">
                <MapPin className="w-5 h-5 text-arxBlue shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Office Location</p>
                  <p className="text-base font-bold text-arxDark">Lahore, Model Town Link Road</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-arxSurface border border-slate-200/80">
                <Clock className="w-5 h-5 text-arxBlue shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500">Working Hours</p>
                  <p className="text-base font-bold text-arxDark">Monday – Saturday, 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Responsive Form */}
          <div className="lg:col-span-7">
            <div className="bg-arxSurface p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-extrabold text-arxDark mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Thank you, {form.name}. Our team has received your inquiry and will reply shortly.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-bold text-sm"
                    >
                      <MessageCircle className="w-4 h-4" /> Also Chat on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", service: "Website Development", message: "" });
                      }}
                      className="px-6 py-3 rounded-full border border-slate-300 text-arxDark font-bold text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-arxDark mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-arxDark focus:border-arxBlue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-arxDark mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-arxDark focus:border-arxBlue focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-arxDark mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="text"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+92 300 0000000"
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-arxDark focus:border-arxBlue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-arxDark mb-2">
                        Select Service *
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-arxDark focus:border-arxBlue focus:outline-none"
                      >
                        <option>Website Development</option>
                        <option>Digital Marketing</option>
                        <option>Graphic Designing</option>
                        <option>Video Editing</option>
                        <option>Social Accounts Management</option>
                        <option>Complete Monthly Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-arxDark mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write a few lines about what you need..."
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 bg-white text-arxDark focus:border-arxBlue focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-arxCyan to-arxBlue text-arxDark font-bold text-sm shadow-md hover:opacity-95 transition"
                    >
                      {sending ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                    </button>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition"
                    >
                      <MessageCircle className="w-4 h-4" /> Send on WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}