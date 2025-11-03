import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-full">
              New • Handpicked insights
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Ideas, stories, and guides for curious minds
            </h1>
            <p className="mt-4 text-slate-600 max-w-prose">
              Explore concise, actionable articles on design, development, and product thinking. No fluff — just signal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#latest" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
                Read the latest
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#topics" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-300 text-slate-900 hover:bg-slate-50">
                Browse topics
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-slate-200 bg-white shadow-sm p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                <div className="rounded-lg bg-gradient-to-br from-indigo-200 to-indigo-100" />
                <div className="rounded-lg bg-gradient-to-br from-sky-200 to-sky-100" />
                <div className="rounded-lg bg-gradient-to-br from-emerald-200 to-emerald-100" />
                <div className="rounded-lg bg-gradient-to-br from-amber-200 to-amber-100" />
                <div className="rounded-lg bg-gradient-to-br from-rose-200 to-rose-100" />
                <div className="rounded-lg bg-gradient-to-br from-violet-200 to-violet-100" />
                <div className="rounded-lg bg-gradient-to-br from-teal-200 to-teal-100" />
                <div className="rounded-lg bg-gradient-to-br from-fuchsia-200 to-fuchsia-100" />
                <div className="rounded-lg bg-gradient-to-br from-blue-200 to-blue-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
