// App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Content from './Content';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Hero />
      <Content />
      <Content2 />
      <Content3 />
      <Footer />
    </div>
  );
}

export default App;
