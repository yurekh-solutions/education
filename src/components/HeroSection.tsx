import { motion } from "framer-motion";
import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "10K+", label: "Students" },
  { icon: BookOpen, value: "50+", label: "Courses" },
  { icon: Award, value: "95%", label: "Placement" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-6">
              🚀 New Batch Starting Soon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
            style={{ opacity: 0 }}
          >
            Master{" "}
            <span className="gradient-text">AI & Full Stack</span>
            <br className="hidden sm:block" />
            Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-8"
          >
            Industry-ready courses designed to transform you into a skilled
            developer. Learn from experts, build real projects, and land your
            dream tech job.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14"
          >
            <a
              href="#courses"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow text-sm sm:text-base"
            >
              Explore Courses
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-foreground hover:bg-secondary transition-colors text-sm sm:text-base"
            >
              <Play size={16} /> Watch Demo
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 sm:gap-8"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2 sm:gap-3">
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading text-lg sm:text-xl font-bold">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
