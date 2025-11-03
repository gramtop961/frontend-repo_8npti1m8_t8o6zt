import React from 'react';
import PostCard from './PostCard.jsx';

const posts = [
  {
    title: 'Design systems that scale: practical lessons',
    excerpt:
      'A step-by-step walkthrough for structuring tokens, components, and documentation so your system stays healthy as teams grow.',
    author: 'Ava Martin',
    date: 'Oct 28, 2025',
    tags: ['Design', 'Systems', 'UI'],
  },
  {
    title: 'Ship faster with feature flags in React',
    excerpt:
      'Reduce risk and iterate confidently by decoupling deploys from releases. We cover patterns, pitfalls, and tooling.',
    author: 'Jon Ruiz',
    date: 'Oct 22, 2025',
    tags: ['React', 'Tooling', 'DX'],
  },
  {
    title: 'From idea to MVP: a product thinking checklist',
    excerpt:
      'Use this simple framework to validate ideas quickly, focus on value, and avoid building the wrong thing.',
    author: 'Maya Patel',
    date: 'Oct 14, 2025',
    tags: ['Product', 'Strategy'],
  },
  {
    title: 'Accessibility wins: small changes, big impact',
    excerpt:
      'Practical tips you can apply today to make your app more inclusive without overhauling your codebase.',
    author: 'Liam Chen',
    date: 'Oct 5, 2025',
    tags: ['A11y', 'Frontend'],
  },
];

const BlogList = () => {
  return (
    <section id="latest" className="py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Latest articles</h2>
            <p className="mt-1 text-slate-600">Fresh reads from the team, published weekly.</p>
          </div>
          <a href="#topics" className="text-sm font-medium text-slate-900 hover:text-slate-700">View topics</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <PostCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
