import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#151D14] text-[#F3F7F2] pt-20 pb-12 w-full overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between min-h-[50vh] gap-16">
        {/* Top Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-b border-white/5 pb-16">
          {/* Expertise Column */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
              Expertise
            </span>
            <ul className="flex flex-col gap-2 p-0 m-0 text-xs font-mono text-[#F3F7F2]/70 tracking-widest uppercase">
              <li>AI Engineering</li>
              <li>Automation Systems</li>
              <li>Full Stack Development</li>
              <li>IoT & Embedded Systems</li>
            </ul>
          </div>

          {/* Experience Column */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
              About
            </span>
            <div className="flex flex-col items-start gap-1">
              <span className="text-sm font-semibold tracking-wide">
                Student Developer & Builder
              </span>
              <a
                href="#projects"
                onClick={(e) => handleScrollToSection(e, "projects")}
                className="text-xs font-mono text-primary-red uppercase tracking-wider relative group py-1"
              >
                View Work
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-red origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Status Column */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
              Status
            </span>
            <div className="flex flex-col gap-1 text-sm">
              <span className="flex items-center gap-2 font-semibold">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                Currently Building
              </span>
              <span className="text-white/50 text-xs font-mono">
                Class XII Student
              </span>
              <span className="text-white/30 text-xs font-mono">
                Vadodara, Gujarat
              </span>
            </div>
          </div>
        </div>

        {/* Center Hero Branding */}
        <div className="w-full flex justify-center py-6 select-none">
          <motion.h2
            initial={{ opacity: 0.1, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            whileHover={{
              textShadow: "0 0 50px rgba(127,168,115,0.45)",
              color: "#FFFFFF",
              scale: 1.02
            }}
            className="text-[14vw] md:text-[12vw] font-black tracking-tighter text-[#F3F7F2]/15 lowercase leading-none m-0 text-center uppercase cursor-default transition-all duration-500"
          >
            vedansh
          </motion.h2>
        </div>

        {/* Bottom Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-xs font-mono text-white/40 pt-8 border-t border-white/5">
          {/* Left: Copyright */}
          <div className="flex flex-col gap-1">
            <span>&copy; {currentYear} Vedansh.</span>
            <span className="text-[10px] opacity-65">Built with curiosity, caffeine & countless debugging sessions.</span>
          </div>

          {/* Center: Socials & Email */}
          <div className="flex justify-start md:justify-center items-center">
            <div className="flex flex-col items-start md:items-center gap-2">
              <div className="flex gap-3 text-[10px] font-mono tracking-widest uppercase mb-0.5">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
                <span className="text-white/10">|</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <span className="text-white/10">|</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
              <a
                href="mailto:vedanshgarg1979@gmail.com"
                className="text-[#F3F7F2]/70 hover:text-white transition-colors duration-300 relative group py-0.5"
              >
                vedanshgarg1979@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary-red transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>

          {/* Right: Empty Spacer to maintain layout alignment */}
          <div className="hidden md:block" />
        </div>
      </div>
    </footer>
  );
}
