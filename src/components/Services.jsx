import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Services() {
  const containerRef = useRef(null);

  // Track scroll inside the services section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Grow path stroke from 0 to 1 based on scroll
  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  const steps = [
    {
      num: "01",
      title: "Define",
      desc: "Analyzing your visual requirements, technical stack, and target audience to build a solid architectural roadmap.",
      position: "right", // Alternating cards
      rotation: "rotate-2",
      align: "self-end md:mr-24"
    },
    {
      num: "02",
      title: "Design",
      desc: "Creating high-fidelity UI mockups and prototyping animations to guarantee an outstanding aesthetic and visual flow.",
      position: "left",
      rotation: "-rotate-2",
      align: "self-start md:ml-24"
    },
    {
      num: "03",
      title: "Build",
      desc: "Writing modular React/Next.js client code, styling with Tailwind, and configuring high-performance backend endpoints.",
      position: "right",
      rotation: "rotate-3",
      align: "self-end md:mr-24"
    },
    {
      num: "04",
      title: "Launch",
      desc: "Auditing performance, running comprehensive tests, optimizing search metrics, and deploying to global hosting arrays.",
      position: "left",
      rotation: "-rotate-3",
      align: "self-start md:ml-24"
    }
  ];

  return (
    <section
      id="skills" // Using "skills" as section anchor or we can add skills/services
      ref={containerRef}
      className="relative bg-white text-black py-24 md:py-36 w-full overflow-hidden grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 relative">
          <div className="inline-block px-4 py-1.5 rounded-full border border-black/10 bg-black/5 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
            How we work
          </div>

          <div className="relative max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight uppercase font-sans text-black">
              Let us show you how we drive your brand to new heights
            </h2>

            {/* Hand-drawn sketch arrow (SVG) */}
            <div className="absolute -right-12 -bottom-10 hidden lg:block text-primary-red">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="rotate-[25deg]">
                <path
                  d="M10 10 Q35 5, 40 35 T20 50 M20 50 L15 40 M20 50 L30 48"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <p className="text-gray-500 font-light text-base md:text-lg max-w-lg mt-6 leading-relaxed">
            Our step-by-step process delivers pixel-perfect interfaces integrated with high-performance production code.
          </p>
        </div>

        {/* Timeline Path and Cards */}
        <div className="relative min-h-[1200px] flex flex-col justify-between items-center py-12">
          {/* Timeline SVG (Desktop) */}
          <div className="absolute inset-0 w-full h-full hidden md:block pointer-events-none">
            <svg
              viewBox="0 0 1200 1200"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              {/* Reference/Background Line */}
              <path
                d="M 600,0 C 850,150 850,250 600,400 C 350,550 350,650 600,800 C 850,950 850,1050 600,1200"
                stroke="#e5e7eb"
                strokeWidth="4"
                strokeDasharray="8 8"
              />

              {/* Animated Growth Line */}
              <motion.path
                d="M 600,0 C 850,150 850,250 600,400 C 350,550 350,650 600,800 C 850,950 850,1050 600,1200"
                stroke="#FF2A2A"
                strokeWidth="5"
                strokeLinecap="round"
                style={{ pathLength }}
                className="drop-shadow-[0_2px_8px_rgba(255,42,42,0.3)]"
              />
            </svg>
          </div>

          {/* Timeline SVG (Mobile / Central Vertical) */}
          <div className="absolute inset-0 w-full h-full md:hidden pointer-events-none">
            <svg
              viewBox="0 0 200 1200"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M 100,0 L 100,1200"
                stroke="#e5e7eb"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <motion.path
                d="M 100,0 L 100,1200"
                stroke="#FF2A2A"
                strokeWidth="4"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Cards List */}
          <div className="w-full flex flex-col gap-24 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-full md:w-[45%] flex flex-col ${step.align}`}
              >
                {/* Scroll-triggered card */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, type: "spring", stiffness: 80 }
                  }}
                  viewport={{ once: false, amount: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] border-2 border-black/5 bg-white text-black shadow-lg cursor-default group transition-colors duration-500 hover:bg-primary-red hover:text-white hover:border-transparent hover:shadow-[0_20px_40px_rgba(255,42,42,0.25)] ${step.rotation}`}
                >
                  {/* Active background overlay (for red transition glow) */}
                  <div className="absolute inset-0 bg-primary-red opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 -z-10" />

                  {/* Hole punch detail */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-200 border border-gray-300 rounded-full group-hover:bg-red-950 group-hover:border-red-900 transition-colors duration-500 shadow-inner" />

                  {/* Step number in italic serif */}
                  <span className="font-serif italic text-4xl md:text-5xl text-primary-red group-hover:text-white/80 transition-colors duration-500 mb-4 block leading-none font-bold">
                    {step.num}
                  </span>

                  {/* Heading */}
                  <h3 className="text-2xl font-black tracking-tight uppercase mb-3 leading-none group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 group-hover:text-white/85 transition-colors duration-500 text-sm md:text-base font-light leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center mt-32 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block rotate-[-3deg] text-[#FF2A2A] font-serif italic text-3xl md:text-4xl font-semibold tracking-wider hover:scale-105 transition-transform"
          >
            Ready to be delivered!
          </motion.div>
        </div>
      </div>
    </section>
  );
}
