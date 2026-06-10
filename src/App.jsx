import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Premium Luxury Agency Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`transition-all duration-1000 ${loading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
        {!loading && (
          <>
            <Navbar />
            <main className="w-full flex flex-col items-center">
              <Hero />
              <About />
              <Services />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
