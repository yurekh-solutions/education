import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Star, Award, BookOpen, Code, CheckCircle, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GraphicDesign = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const curriculum = [
    { module: "Module 1: Design Fundamentals", topics: ["Color Theory", "Typography", "Composition", "Branding Basics"], duration: "2 weeks" },
    { module: "Module 2: Adobe Suite Mastery", topics: ["Photoshop", "Illustrator", "InDesign", "Project files"], duration: "3 weeks" },
    { module: "Module 3: Design Projects", topics: ["Logo Design", "Poster Creation", "Social Media Assets", "Packaging"], duration: "2 weeks" },
    { module: "Module 4: Portfolio Building", topics: ["Portfolio Creation", "Client Work", "Freelancing Tips", "Real Projects"], duration: "1 week" },
  ];
  const features = [
    { icon: Code, title: "Professional Software", desc: "Adobe Suite access & tutorials" },
    { icon: Award, title: "Certification", desc: "Industry-recognized certificate" },
    { icon: Users, title: "Live Support", desc: "Weekly feedback sessions" },
    { icon: BookOpen, title: "Resources", desc: "Lifetime design resources" },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="fixed top-20 sm:top-24 left-4 sm:left-6 z-40">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm">
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">Back</span>
        </Link>
      </div>

      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6">
              <Star size={16} fill="currentColor" />
              Creative Course
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Graphic <span className="gradient-text">Design</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Master Adobe Suite and create stunning graphics. Learn professional design techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-primary" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">2 Months</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-primary" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Students</p>
                  <p className="font-semibold">1.8K+ Enrolled</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star size={20} className="text-primary fill-primary" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Rating</p>
                  <p className="font-semibold">4.6/5.0</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card rounded-xl p-6 sm:p-8 mb-12 sm:mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Course Price</p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold gradient-text">₹4,499</h2>
                <p className="text-sm text-muted-foreground mt-2">One-time payment • Lifetime access</p>
              </div>
              <a href={`/enroll?course=${encodeURIComponent("Graphic Design")}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow">
                Enroll Now
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {curriculum.map((item, idx) => (
                <div key={idx} className="glass-card rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-base sm:text-lg">{item.module}</h3>
                        <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
                          <Clock size={14} /> {item.duration}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.topics.map((topic, i) => (
                          <span key={i} className="text-xs sm:text-sm px-3 py-1 rounded-full bg-secondary text-foreground">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-8">Why Choose This Course</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="glass-card rounded-lg p-6">
                  <feature.icon size={32} className="text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">Ready to Become a Designer?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 1,800+ students. Get lifetime access.
            </p>
            <a href={`/enroll?course=${encodeURIComponent("Graphic Design")}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow">
              <Play size={18} />
              Start Course Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicDesign;
