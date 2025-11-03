import React from 'react';

const Footer = () => {
  return (
    <footer id="about" className="mt-10 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-slate-900">Minimal Blog</h4>
            <p className="mt-2 text-slate-600 max-w-xs">
              A clean, focused blog template built with React and Tailwind.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Topics</h4>
            <ul id="topics" className="mt-2 space-y-1 text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Design</a></li>
              <li><a href="#" className="hover:text-slate-900">Development</a></li>
              <li><a href="#" className="hover:text-slate-900">Product</a></li>
              <li><a href="#" className="hover:text-slate-900">Guides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900">Stay in the loop</h4>
            <form className="mt-2 flex gap-2">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full md:w-auto flex-1 min-w-0 rounded-md border border-slate-300 px-3 py-2 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
              <button type="submit" className="inline-flex items-center px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Minimal Blog. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
