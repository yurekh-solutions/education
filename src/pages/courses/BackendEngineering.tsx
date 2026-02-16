import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Star, Award, BookOpen, Code, CheckCircle, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BackendEngineering = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const curriculum = [
    {
      module: "Module 1: Node.js Fundamentals",
      topics: ["Node.js Basics", "NPM & Modules", "Async Programming", "File System"],
      duration: "2 weeks",
    },
    {
      module: "Module 2: Express.js & APIs",
      topics: ["Express Framework", "RESTful APIs", "Middleware", "Error Handling"],
      duration: "3 weeks",
    },
    {
      module: "Module 3: Databases",
      topics: ["SQL & PostgreSQL", "MongoDB", "Redis", "Database Design"],
      duration: "4 weeks",
    },
    {
      module: "Module 4: Authentication & Security",
      topics: ["JWT", "OAuth", "Security Best Practices", "Rate Limiting"],
      duration: "3 weeks",
    },
    {
      module: "Module 5: Microservices & Cloud",
      topics: ["Microservices Architecture", "Docker", "AWS Services", "CI/CD"],
      duration: "4 weeks",
    },
    {
      module: "Module 6: Advanced Topics",
      topics: ["GraphQL", "WebSockets", "Message Queues", "Caching Strategies"],
      duration: "3 weeks",
    },
    {
      module: "Module 7: Capstone Project",
      topics: ["Scalable Backend", "Production Deployment", "Monitoring", "Documentation"],
      duration: "4 weeks",
    },
  ];

  const features = [
    "Build scalable APIs",
    "Database design mastery",
    "Cloud deployment skills",
    "Security best practices",
    "Microservices architecture",
    "Industry certificate",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 sm:mb-8">
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                🚀 New
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Backend <span className="gradient-text">Engineering</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6">
                Node.js, Express, databases, APIs, cloud deployment and DevOps basics. Build the backbone of modern applications.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span className="text-sm">5 Months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span className="text-sm">1.5K Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-primary fill-primary" />
                  <span className="text-sm">4.8 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} className="text-primary" />
                  <span className="text-sm">Certificate</span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Link 
                  to="/enroll?course=Backend%20Engineering"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity glow"
                >
                  <Sparkles size={20} />
                  Enroll Now - ₹10,999
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                alt="Backend Engineering"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <BookOpen className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-bold">80+</p>
                    <p className="text-xs text-muted-foreground">Hours Content</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 glass-card p-4 rounded-lg"
              >
                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Course Curriculum</h2>
          <div className="space-y-4">
            {curriculum.map((item, i) => (
              <motion.div
                key={item.module}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold mb-2">{item.module}</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.topics.map((topic) => (
                          <span key={topic} className="text-xs bg-secondary px-3 py-1 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm text-primary font-semibold whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Build Scalable Backend Systems?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Master backend development and become the architect of powerful applications
            </p>
            <Link 
              to="/enroll?course=Backend%20Engineering"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity glow flex items-center gap-2"
            >
              <Sparkles size={18} />
              Enroll Now - ₹10,999
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BackendEngineering;
