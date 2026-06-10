import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, RotateCcw, ChevronDown } from "lucide-react";
import introVideo from "../assets/Student_creating_applications_202606101551-ezremove.mp4";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [showSoundPrompt, setShowSoundPrompt] = useState(true);

  // Autoplay handler and global interaction listener to unmute
  useEffect(() => {
    // Autoplay muted (required by browser policies)
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented by browser:", err);
        setIsPlaying(false);
      });
    }

    // Unmute on the very first user interaction anywhere on the screen
    const handleFirstInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        setShowSoundPrompt(false);
      }
      // Remove listeners after first interaction
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    // Hide sound tooltip prompt after 6 seconds if no interaction
    const promptTimer = setTimeout(() => {
      setShowSoundPrompt(false);
    }, 6000);

    return () => {
      cleanupListeners();
      clearTimeout(promptTimer);
    };
  }, []);

  const handleMuteToggle = (e) => {
    e.stopPropagation(); // prevent triggering parent clicks
    if (videoRef.current) {
      const currentMute = videoRef.current.muted;
      videoRef.current.muted = !currentMute;
      setIsMuted(!currentMute);
      setShowSoundPrompt(false);
    }
  };

  const handleReplayClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsEnded(false);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setIsEnded(true);
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#F3F7F2] flex items-center">
      {/* Self-Introduction Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnded}
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000"
        src={introVideo}
      />

      {/* Dynamic Light Cinematic Overlay */}
      <div
        className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 z-10 ${
          isPlaying
            ? "bg-[#F3F7F2]/20"
            : "bg-gradient-to-b from-[#F3F7F2]/85 via-[#F3F7F2]/60 to-[#F3F7F2]/95"
        }`}
      />

      {/* Hero Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          className="md:col-span-7 text-left transition-opacity duration-1000"
          style={{ opacity: isPlaying ? 0.08 : 1, pointerEvents: isPlaying ? "none" : "auto" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-[#1B231A] uppercase leading-none m-0"
            variants={itemVariants}
          >
            Hi, I'm
          </motion.h1>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-stroke-white uppercase leading-none mt-2 mb-6"
            variants={itemVariants}
          >
            Vedansh
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#1B231A]/70 max-w-lg mb-8 font-light leading-relaxed"
            variants={itemVariants}
          >
            Creating modern, highly performant web applications and digital experiences using React.js, Node.js, and Tailwind CSS.
            Focused on scalability, speed, and beautiful design.
          </motion.p>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-3.5 bg-[#1B231A] text-white font-bold text-sm tracking-wide rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-3.5 border border-[#1B231A]/20 bg-[#1B231A]/5 text-[#1B231A] font-bold text-sm tracking-wide rounded-full hover:bg-[#1B231A]/10 active:scale-95 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Buttons Area */}
        <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center z-30">
          <AnimatePresence mode="wait">
            
            {/* 1. Mute/Unmute Floating Button (Shown while video plays) */}
            {isPlaying && !isEnded && (
              <motion.div
                key="sound-toggle"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative flex flex-col items-center gap-3 cursor-pointer group"
                onClick={handleMuteToggle}
              >
                {/* Floating helpful sound prompt */}
                <AnimatePresence>
                  {showSoundPrompt && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full mb-3 px-3 py-1.5 bg-[#1B231A] text-white text-[10px] font-mono rounded-lg shadow-md whitespace-nowrap uppercase tracking-wider select-none pointer-events-none"
                    >
                      Click anywhere to unmute 🔊
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="w-20 h-20 rounded-full border border-[#1B231A]/20 bg-white/40 backdrop-blur-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-primary-red/50 group-hover:shadow-[0_0_20px_rgba(127,168,115,0.3)]">
                  {isMuted ? (
                    <VolumeX className="text-[#1B231A] w-6 h-6 animate-pulse" />
                  ) : (
                    <Volume2 className="text-[#1B231A] w-6 h-6" />
                  )}
                </div>
                <span className="text-[10px] font-mono tracking-widest text-[#1B231A]/60 group-hover:text-primary-red transition-colors duration-300 uppercase font-bold">
                  {isMuted ? "SOUND OFF" : "SOUND ON"}
                </span>
              </motion.div>
            )}

            {/* 2. Play Again Button (Shown ONLY when video ends) */}
            {isEnded && (
              <motion.div
                key="play-again-btn"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="flex flex-col items-center gap-3 cursor-pointer group"
                onClick={handleReplayClick}
              >
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-primary-red/50 bg-[#1B231A] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(127,168,115,0.4)] relative">
                  <RotateCcw className="text-[#7FA873] w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-180" />
                </div>
                <span className="text-xs font-mono tracking-widest text-[#1B231A]/80 group-hover:text-primary-red transition-colors duration-300 uppercase font-bold">
                  PLAY AGAIN (WITH AUDIO)
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block transition-opacity duration-500"
        style={{ opacity: isPlaying ? 0 : 1, pointerEvents: isPlaying ? "none" : "auto" }}
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-[#1B231A]/50 hover:text-[#1B231A] transition-colors duration-300">
          <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-primary-red" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
