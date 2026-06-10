import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "RAG Chatbot",
      type: "AI & LLMs • Ongoing",
      desc: "An ongoing retrieval-augmented generation chatbot built to ingest document arrays, query vector databases, and return highly accurate contextual summaries.",
      components: [
        "Vector database (Pinecone / ChromaDB) integration for high-dimensional semantic search and retrieval context caching.",
        "LLM orchestration pipeline designed using LangChain to manage context windows, prompting, and conversational memory.",
        "Document ingestion engine to parse, clean, and chunk multi-format text sources (PDF, docx, txt) using semantic splitters.",
        "Retrieval-Augmented Generation query synthesis utilizing OpenAI API for generating natural, source-grounded answers.",
        "Modular chat interface styled with sleek custom elements, displaying message streams and source document metadata."
      ],
      tags: ["LangChain", "OpenAI API", "Pinecone", "Python"],
      isPrivate: true,
      github: null,
      live: null
    },
    {
      title: "WhatsApp Automation Tool",
      type: "Workflow Automation • Sold",
      desc: "Commercial automation workflow built using n8n, deployed for real estate and medical doctor clients to manage appointments and automate client engagement.",
      components: [
        "n8n Workflow Engine coordinating webhooks, complex conditional branching, and API request payloads.",
        "WhatsApp Cloud API / Twilio integration sending automated confirmation updates and media attachments.",
        "Central PostgreSQL database storing booking schedules, client information, and property listing schemas.",
        "Bi-directional Google Calendar sync mapping booked slots and preventing scheduling conflicts automatically.",
        "Dynamic content generation engine suggesting custom listings and follow-ups based on recipient replies."
      ],
      tags: ["n8n", "WhatsApp Cloud API", "Node.js", "Webhooks"],
      isPrivate: false,
      clientProject: true,
      github: null,
      live: "#"
    },
    {
      title: "Jarvis AI Assistant",
      type: "AI Desktop Assistant",
      desc: "A voice-activated system assistant built in Python that triggers commands, opens applications, performs web lookups, and processes natural language.",
      components: [
        "Speech Recognition model processing raw vocal inputs into text with offline fallback capabilities.",
        "Text-to-Speech synthesizer (pyttsx3 & gTTS) producing customizable natural voice feedback strings.",
        "OS-level subsystem access wrapper invoking commands, launching programs, and controlling system parameters.",
        "OpenAI API Integration yielding advanced conversational reasoning, code explanation, and general-knowledge tasks.",
        "Web search and data scraping modules querying public sources for instant weather, news, and search summaries."
      ],
      tags: ["Python", "Speech Recognition", "OpenAI", "System APIs"],
      isPrivate: true,
      github: null,
      live: null
    },
    {
      title: "AI Based Farming System",
      type: "IoT • National Represent (RBVPS)",
      desc: "An intelligent agricultural hardware/software system designed using ESP32. Tracks moisture, automates irrigation, and won National Level representation at RBVPS.",
      components: [
        "ESP32 Microcontroller managing core sensor polling and continuous Wi-Fi connection states.",
        "Capacitive soil moisture sensors and DHT22 sensors capturing real-time environmental telemetry.",
        "Relay-driven water pump controller executing automated, moisture-triggered irrigation logic offline.",
        "C++ Firmware designed for microcontrollers with calibration filters and connection error recovery.",
        "Blynk IoT Cloud dashboard visualization plotting telemetry charts and pushing critical alert notifications."
      ],
      tags: ["ESP32", "C++", "IoT Sensors", "Arduino IDE"],
      isPrivate: false,
      award: "National Level • RBVPS",
      github: "#",
      live: "#"
    },
    {
      title: "Personal Portfolio",
      type: "Frontend Design",
      desc: "A custom-engineered developer showcase website styled with an organic Pistachio Green color scheme, custom preloader shutter, and scroll SVG timeline.",
      components: [
        "Vite-powered React setup providing an extremely fast build environment and modular layouts.",
        "Tailwind CSS v4 framework driving custom palettes, grid overlays, responsive breakpoints, and styling.",
        "Framer Motion orchestrating physics-based spring page entrances, micro-animations, and text-fill loaders.",
        "Fully custom responsive SVG S-curve line drawing and animating on viewport scroll tracking.",
        "Interactive conference badge pass card mockups reacting to cursor position hover tilts."
      ],
      tags: ["React.js", "Tailwind CSS v4", "Framer Motion", "Vite"],
      isPrivate: false,
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="bg-[#F3F7F2] text-[#1B231A] py-24 md:py-36 w-full relative border-t border-[#1B231A]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#1B231A]/10 bg-[#1B231A]/5 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none m-0 text-[#1B231A]">
              RECENT CREATIONS
            </h2>
          </div>
          <p className="text-[#1B231A]/60 text-base md:text-lg max-w-sm mt-4 md:mt-0 font-light text-left md:text-right">
            A showcase of recent technical developments, from intelligent AI agents and integrations to IoT systems and custom web platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              whileHover={{ y: -10 }}
              className="group bg-white border border-[#1B231A]/5 rounded-3xl p-8 flex flex-col justify-between hover:border-primary-red/50 hover:shadow-[0_15px_30px_rgba(127,168,115,0.15)] transition-all duration-500 cursor-default relative overflow-hidden"
            >
              <div>
                {/* Project Header Icons/Badges */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[11px] font-mono text-primary-red font-bold uppercase tracking-wider">
                    {project.type}
                  </span>
                  
                  <div className="flex gap-2 items-center">
                    {/* Status Badge */}
                    {project.isPrivate && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-[10px] font-mono font-bold shadow-sm">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        PRIVATE
                      </div>
                    )}
                    {project.award && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-mono font-bold shadow-sm">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                          <path d="M4 22h16"/>
                          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/>
                          <path d="M12 2a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/>
                        </svg>
                        AWARD
                      </div>
                    )}
                    {project.clientProject && (
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-red/10 border border-primary-red/20 text-primary-red text-[10px] font-mono font-bold shadow-sm">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <line x1="12" x2="12" y1="2" y2="22"/>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                        COMMERCIAL
                      </div>
                    )}

                    {/* Links if public */}
                    {!project.isPrivate && (project.github || project.live) && (
                      <div className="flex gap-3 items-center ml-1.5 border-l border-[#1B231A]/10 pl-3">
                        {project.github && (
                          <a
                            href={project.github}
                            className="text-[#1B231A]/60 hover:text-[#1B231A] transition-colors"
                            aria-label="View Github"
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            className="text-[#1B231A]/60 hover:text-[#1B231A] transition-colors"
                            aria-label="View Live Site"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-black uppercase text-[#1B231A] mb-4 tracking-tight group-hover:text-primary-red transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-[#1B231A]/70 font-light text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Key Components List */}
                {project.components && (
                  <div className="mb-6 text-left">
                    <h4 className="text-[10px] font-mono font-bold text-[#1B231A]/40 uppercase tracking-widest mb-3">
                      Key Components
                    </h4>
                    <ul className="space-y-2">
                      {project.components.map((comp, compIdx) => (
                        <li key={compIdx} className="flex items-start gap-2 text-xs text-[#1B231A]/75 leading-relaxed">
                          <span className="text-primary-red font-bold mt-0.5">•</span>
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Tags Footer */}
              <div className="flex flex-wrap gap-2 border-t border-[#1B231A]/10 pt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#F3F7F2] border border-[#1B231A]/5 text-[#1B231A]/60 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
