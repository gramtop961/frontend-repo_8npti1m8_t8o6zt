import React from 'react';
import { BookOpen, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-900 text-white">
              <BookOpen className="w-5 h-5" />
            </span>
            <span className="text-lg">Minimal Blog</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#latest" className="hover:text-slate-900">Latest</a>
            <a href="#topics" className="hover:text-slate-900">Topics</a>
            <a href="#about" className="hover:text-slate-900">About</a>
          </nav>

          <div className="hidden sm:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles"
                className="pl-9 pr-3 py-2 w-56 rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
