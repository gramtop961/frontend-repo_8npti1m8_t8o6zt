import React from 'react';
import { Clock, User, Tag, ChevronRight } from 'lucide-react';

const PostCard = ({ title, excerpt, author, date, tags }) => {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col">
      <div className="flex-1">
        <a href="#" className="block">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 group-hover:text-slate-700">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-3">{excerpt}</p>
        </a>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <User className="w-4 h-4" /> {author}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-4 h-4" /> {date}
          </span>
        </div>
        <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-700">
          Read more <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
            <Tag className="w-3.5 h-3.5" /> {t}
          </span>
        ))}
      </div>
    </article>
  );
};

export default PostCard;
