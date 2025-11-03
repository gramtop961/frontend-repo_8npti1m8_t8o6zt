import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import BlogList from './components/BlogList.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
