import React from "react";
import { motion as m } from "framer-motion";
import portraitImage from "../assets/portrait-chin.jpg";

export default function About() {
  // Sparkle stars
  const StarIcon = () => (
    <m.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-[#1B231A]"
      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
    </m.svg>
  );

  return (
    <section id="about" className="relative bg-primary-red text-[#1B231A] py-24 md:py-32 w-full overflow-hidden">
      {/* Decorative Star 1 */}
      <div className="absolute top-12 left-10 md:left-24">
        <StarIcon />
      </div>
      {/* Decorative Star 2 */}
      <div className="absolute bottom-28 right-12 md:right-32">
        <StarIcon />
      </div>
      {/* Decorative Star 3 */}
      <div className="absolute top-1/2 right-1/4 hidden md:block">
        <StarIcon />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Left Column: Hanging Employee ID Badge */}
        <div className="md:col-span-5 flex flex-col items-center relative pt-12 md:pt-20">
          {/* Lanyard Line */}
          <div className="absolute top-0 w-1.5 h-20 md:h-28 bg-black z-10" />

          {/* Metal Clip */}
          <div className="absolute top-20 md:top-28 w-6 h-6 bg-zinc-400 border border-zinc-600 rounded-b-md shadow-md z-15 flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-zinc-700 rounded-full" />
          </div>

          {/* Conference Pass ID Card Container */}
          <m.div
            initial={{ rotate: -3, y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="w-[280px] md:w-[320px] bg-[#1B231A] border-[3px] border-[#2D3A2C] rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-5 mt-16 cursor-grab active:cursor-grabbing text-black relative"
          >
            {/* Slot Punch for Clip */}
            <div className="w-10 h-3 bg-black rounded-full absolute top-3" />

            {/* Badge Header */}
            <div className="flex justify-between items-center w-full mt-4 border-b border-[#2D3A2C] pb-2">
              <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                CREATOR PASS
              </span>
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest animate-pulse">
                • ACTIVE
              </span>
            </div>

            {/* Profile Photo Card */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-[#2D3A2C] relative shadow-inner">
              <img
                src={portraitImage}
                alt="Vedansh profile pass"
                className="w-full h-full object-cover grayscale brightness-110 contrast-105"
              />
              <div className="absolute inset-0 bg-[#7FA873]/10 mix-blend-overlay" />
            </div>

            {/* Dev Details */}
            <div className="text-center w-full">
              <h4 className="text-lg font-black tracking-tight text-white uppercase m-0 leading-none">
                VEDANSH
              </h4>
              <p className="text-[10px] font-mono font-bold text-[#7FA873] tracking-wider mt-1.5 uppercase">
                AI • AUTOMATION • FULL STACK
              </p>
            </div>

            {/* Barcode representation */}
            <div className="w-full flex flex-col items-center gap-1 border-t border-[#2D3A2C] pt-3">
              <div className="h-6 w-full flex items-center justify-center gap-0.5 px-2">
                {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3].map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 h-full"
                    style={{ width: `${(val % 3) + 1.5}px` }}
                  />
                ))}
              </div>
              <span className="text-[9px] font-mono text-zinc-500 tracking-[0.25em]">
                *VN-2026-FSD*
              </span>
            </div>
          </m.div>
        </div>

        {/* Right Column: About Info & Technology Logos */}
        <div className="md:col-span-7 text-left flex flex-col justify-center">
          <m.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-6xl md:text-8xl font-black text-[#1B231A] tracking-tight uppercase mb-6"
          >
            Hello!
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            className="text-lg md:text-xl font-light text-[#1B231A]/90 leading-relaxed max-w-2xl mb-6"
          >
            Hey, I'm <strong className="text-white font-extrabold uppercase">VEDANSH</strong> — a Class 12 student, Full Stack Developer, and aspiring AI Engineer passionate about building impactful technology.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="text-base md:text-lg font-light text-[#1B231A]/80 leading-relaxed max-w-2xl mb-6"
          >
            What started as curiosity has grown into a passion for creating web applications, AI-powered automations, and IoT projects. I've worked with React, Next.js, Node.js, MongoDB, Tailwind CSS, ESP32, Arduino, and modern AI tools to transform ideas into real products.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-base md:text-lg font-light text-[#1B231A]/80 leading-relaxed max-w-2xl mb-6"
          >
            What drives me most is the excitement of creating something from nothing. I enjoy solving problems, exploring new technologies, and pushing my limits through ambitious projects that help me grow as both a developer and a creator.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
            className="text-base md:text-lg font-light text-[#1B231A]/80 leading-relaxed max-w-2xl mb-6"
          >
            Currently, I'm focused on AI Engineering, intelligent automation, and building systems that combine innovation with real-world value.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="text-base md:text-lg font-light text-[#1B231A]/80 leading-relaxed max-w-2xl mb-6"
          >
            When I'm not coding, you'll find me learning, hitting the gym, planning new ideas, or chasing bigger goals than yesterday.
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.35 }}
            className="text-base md:text-lg font-light text-[#1B231A]/80 leading-relaxed max-w-2xl mb-12"
          >
            And yes, before anyone asks — I'm currently single, which means my projects receive an unreasonable amount of attention.
          </m.p>

          {/* Technology Skills Grid */}
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-8 md:gap-12"
          >
            {/* React Logo */}
            <m.div
              whileHover={{ scale: 1.15 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
              className="flex items-center justify-center bg-white/20 p-5 rounded-2xl border border-[#1B231A]/10 shadow-[0_10px_20px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              <svg width="48" height="48" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1B231A] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                <title>React Logo</title>
                <circle cx="0" cy="0" r="2.05" fill="#1B231A"/>
                <g stroke="#1B231A" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            </m.div>

            {/* Node.js Logo */}
            <m.div
              whileHover={{ scale: 1.15 }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 },
                scale: { duration: 0.3 }
              }}
              className="flex items-center justify-center bg-white/20 p-5 rounded-2xl border border-[#1B231A]/10 shadow-[0_10px_20px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1B231A] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                <title>Node.js Logo</title>
                <path d="M128 0L24 60v136l104 60 104-60V60L128 0zm79.2 181.8l-23.7 13.7v-29.3L157.9 181V122h49.3v59.8zm-59.2 34.2l-20-11.5v-28.7l20 11.5v28.7zM128 106.6v53.4l-46.2-26.7v-53.4L128 106.6zM48.8 74.2l79.2-45.7v27.4L79.2 84.1V141H48.8V74.2zm20 107.6v-53.4l20 11.5v53.4l-20-11.5zm138.4-13.4l-20 11.5V111l20-11.5v53.4zM207.2 74.2v66.8h-30.4V84.1l-48.8-28.2V28.5l79.2 45.7z" fill="currentColor"/>
              </svg>
            </m.div>

            {/* MongoDB Logo */}
            <m.div
              whileHover={{ scale: 1.15 }}
              animate={{ y: [0, -12, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.0 },
                scale: { duration: 0.3 }
              }}
              className="flex items-center justify-center bg-white/20 p-5 rounded-2xl border border-[#1B231A]/10 shadow-[0_10px_20px_rgba(0,0,0,0.05)] cursor-pointer"
            >
              <svg width="48" height="48" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1B231A] drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
                <title>MongoDB Logo</title>
                <path d="M191.1 113.8c-1.3-4.5-3.3-9-5.9-13.4C175 82.2 153.2 60.1 133 32c-2.3-3.2-3.8-6.6-4.9-10-.1-.2-.2-.5-.3-.7h-.2c-.2.2-.3.4-.4.7-1.2 3.4-2.7 6.8-4.9 10C102 60.1 80.2 82.2 70 100.4c-2.6 4.4-4.6 8.9-5.9 13.4C59.9 127 57 141 57 154c0 40 31.8 72.4 71 72.4 39.2 0 71-32.4 71-72.4.1-13-2.8-27-8.9-40.2zM128 211.7c-31 0-56.2-25.6-56.2-57.1 0-14.7 3.5-31.5 13.7-49.3 9.4-16.5 24.3-34.9 38-53.7.8-1.1 1.6-2.2 2.3-3.3.6 1 1.4 2.1 2.2 3.1 13.6 18.7 28.5 37.1 38 53.7 10.3 17.8 13.8 34.6 13.8 49.3-.1 31.8-25.2 57.3-56.2 57.3z" fill="currentColor"/>
                <path d="M123.6 22.8c.2.2.3.4.4.7 1.1 3.4 2.6 6.8 4.9 10 20.2 28.1 42 50.2 52.2 68.4 2.6 4.4 4.6 8.9 5.9 13.4.7 1.6 1.3 3.2 1.8 4.8V22c-.1.2-.2.5-.3.7-1.1 3.4-2.6 6.8-4.9 10zM123.6 222.1V120.3s0-.1 0 0V22.8c-1.1 3.4-2.6 6.8-4.9 10-20.2 28.1-42 50.2-52.2 68.4-2.6 4.4-4.6 8.9-5.9 13.4-.7 1.6-1.3 3.2-1.8 4.8v102.7c31.1 0 56.2-25.6 56.2-57.1" fill="#1B231A"/>
                <path d="M128 226.4c-39.2 0-71-32.4-71-72.4 0-13 2.9-27 8.9-40.2 1.3-4.5 3.3-9 5.9-13.4C82 82.2 103.8 60.1 124 32c2.3-3.2 3.8-6.6 4.9-10 .1-.2.2-.5.3-.7V226.4z" fill="#1B231A"/>
              </svg>
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Ripped / Torn Paper Transition Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[90px] text-white fill-current"
        >
          <path d="M0,0 C150,90 350,10 500,70 C650,120 850,30 1000,80 C1100,105 1150,115 1200,120 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
