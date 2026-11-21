import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FALLBACK_MEDIA =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";

export default function About() {
  const handleImgError = (e) => {
    if (e.currentTarget.src !== FALLBACK_MEDIA) {
      e.currentTarget.src = FALLBACK_MEDIA;
    }
  };

  const nineServices = [
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

  const pillars = [
    {
      title: "Clear & Simple Process",
      desc: "We keep communication straightforward so you always know what is happening next.",
    },
    {
      title: "Visual & Functional Care",
      desc: "Every page, graphic, video edit, and store layout is built to look clean and work smoothly.",
    },
    {
      title: "Reliable Collaboration",
      desc: "We work closely with you from initial discussion through delivery and support.",
    },
  ];

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold">About Arxolon Technologies</h1>
          <p className="mt-4 text-blue-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            We help businesses build a strong digital presence through practical web and mobile solutions, graphic and website design, video editing, e-commerce stores, and social media support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-sm">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">Our Approach</h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
              Arxolon Technologies brings design, development, video editing, and social media handling together under one roof so business owners do not have to juggle disconnected vendors.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We focus on practical execution, clean presentation, and responsive support for everyday business growth.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80"
              alt="Our Approach"
              onError={handleImgError}
              className="w-full h-64 object-cover rounded-xl live-motion-img"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#082A5E] text-white rounded-2xl p-6 sm:p-8 border border-sky-300/20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-300 mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Our mission is to deliver clear, dependable digital work on time so business owners can grow smoothly without technical stress.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Our Mission"
              onError={handleImgError}
              className="w-full h-64 object-cover rounded-xl live-motion-img"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#CFE6FF] text-[#051836] rounded-2xl p-6 sm:p-8 border border-blue-300">
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
              alt="Long Term Trust"
              onError={handleImgError}
              className="w-full h-64 object-cover rounded-xl live-motion-img"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">Long-Term Trust</h2>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-4">
              We focus on honest communication, timely delivery, and lasting working relationships. Contact our team to discuss additional advantages and custom details for your project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-bold text-[#082A5E]">
              {nineServices.map((srv) => (
                <div key={srv} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0B5ED7] shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm">
              <h3 className="text-lg font-extrabold text-[#051836] mb-2">{p.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#051836] text-white rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-sky-300/20">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">Want to talk about your project?</h3>
            <p className="text-sm text-blue-100 mt-1">Reach out to our team for more details and advantages.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400 hover:bg-sky-300 text-[#051836] font-extrabold text-sm transition shrink-0"
          >
            Go to Contact <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}