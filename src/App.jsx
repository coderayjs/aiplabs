import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Header from './components/Header';
import LogoCloud from './components/LogoCloud';
import Products from './components/Products';
import Features from './components/Features';
import CookieConsent from './components/CookieConsent';
import AIChatButton from './components/AIChatButton';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={
            <main className="flex-grow">
              <Hero />
              <LogoCloud />
              <Products />
              <Features />
            </main>
          } />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
        <Footer />
        <CookieConsent />
        <AIChatButton />
      </div>
    </Router>
  );
}

export default App; 