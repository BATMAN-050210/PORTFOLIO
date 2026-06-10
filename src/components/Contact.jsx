import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-[#0D0B14] text-white py-24 md:py-36 w-full relative border-t border-[#1C182B]">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Header */}
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-sm">
          Get in touch
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-6 leading-none">
          Let's Connect
        </h2>
        <p className="text-white/60 font-light text-base md:text-lg max-w-lg mx-auto mb-16 leading-relaxed">
          Whether it's AI, web development, automation, or just a great idea, let's connect.
        </p>

        {/* Contact Form Box (Glassmorphic) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#15121F]/60 border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden backdrop-blur-md"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-16 gap-4 text-center"
            >
              <CheckCircle size={64} className="text-primary-red animate-bounce" />
              <h3 className="text-2xl font-black uppercase tracking-tight text-white mt-4">
                Message Received!
              </h3>
              <p className="text-white/60 font-light max-w-xs text-sm">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#1C182B] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary-red transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#1C182B] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary-red transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#1C182B] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-primary-red transition-colors duration-300 resize-none"
                  placeholder="Tell me about your idea, project, or just say hello..."
                />
              </div>

              {/* Submit CTA */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 py-4 bg-white text-black font-bold uppercase text-sm tracking-widest rounded-2xl flex items-center justify-center gap-2 hover:bg-primary-red hover:text-white transition-colors duration-300 cursor-pointer shadow-lg"
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Social Connect Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 items-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-primary-red transition-all duration-300 font-mono text-xs tracking-widest uppercase hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-primary-red transition-all duration-300 font-mono text-xs tracking-widest uppercase hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-primary-red transition-all duration-300 font-mono text-xs tracking-widest uppercase hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>
          <a
            href="mailto:vedanshgarg1979@gmail.com"
            className="flex items-center gap-2 text-white/50 hover:text-primary-red transition-all duration-300 font-mono text-xs tracking-widest uppercase hover:-translate-y-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
