import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
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

  return (
    <div className="pt-20 bg-[#DCEEFF] text-[#051836] min-h-screen">
      {/* Start: Dark Navy */}
      <section className="py-16 bg-gradient-to-r from-[#051836] via-[#082A5E] to-[#0B428A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold">About Arxolon Technologies</h1>
          <p className="mt-4 text-blue-100 max-w-3xl text-sm sm:text-base leading-relaxed">
            We help businesses build a strong digital presence through practical web and mobile solutions, design, video editing, and social media support.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {/* Mission + Picture */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#082A5E] text-white rounded-2xl p-6 sm:p-8 border border-sky-300/20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-sky-300 mb-3">Our Mission</h2>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Our mission is to deliver clear, dependable digital work on time so business owners can grow smoothly without technical stress.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="Our Mission"
            className="w-full h-60 object-cover rounded-xl"
          />
        </div>

        {/* Long-Term Trust + Picture */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#CFE6FF] text-[#051836] rounded-2xl p-6 sm:p-8 border border-blue-300">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80"
            alt="Long Term Trust"
            className="w-full h-60 object-cover rounded-xl"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#051836] mb-3">Long-Term Trust</h2>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed mb-4">
              We focus on honest communication, timely delivery, and lasting working relationships. Contact our team to discuss additional advantages and custom details for your project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-bold text-[#082A5E]">
              {nineServices.map((srv) => (
                <div key={srv}>• {srv}</div>
              ))}
            </div>
          </div>
        </div>

        {/* End Banner: Dark Navy */}
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