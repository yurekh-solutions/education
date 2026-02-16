import { motion } from "framer-motion";
import { BookOpen, Code, Rocket, Award, Users, Briefcase } from "lucide-react";

const steps = [
  {
    icon: BookOpen,
    title: "Learn Fundamentals",
    description: "Start with core concepts and build a strong foundation",
    duration: "Week 1-4",
    color: "from-primary/20 to-primary/5",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  },
  {
    icon: Code,
    title: "Hands-on Projects",
    description: "Build real-world applications with guided mentorship",
    duration: "Week 5-12",
    color: "from-accent/20 to-accent/5",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Collaborate & Network",
    description: "Work in teams, participate in hackathons and events",
    duration: "Week 13-16",
    color: "from-primary/20 to-accent/10",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
  },
  {
    icon: Rocket,
    title: "Capstone Project",
    description: "Create your portfolio-worthy final project",
    duration: "Week 17-20",
    color: "from-accent/20 to-primary/10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    icon: Award,
    title: "Get Certified",
    description: "Earn industry-recognized certification",
    duration: "Week 21-22",
    color: "from-primary/10 to-accent/20",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Resume building, interview prep, and job placement",
    duration: "Week 23+",
    color: "from-accent/10 to-primary/20",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  },
];

const LearningPathSection = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full bg-primary/5 blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full bg-accent/5 blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Learning Journey
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Your Path to <span className="gradient-text">Success</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            A structured roadmap designed to take you from beginner to job-ready professional
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-20" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row gap-4 sm:gap-6 items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="glass-card rounded-xl p-4 sm:p-5 lg:p-6 hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <step.icon className="text-primary" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5 sm:mb-2 gap-2">
                          <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold truncate">
                            {step.title}
                          </h3>
                          <span className="text-[10px] sm:text-xs font-semibold text-primary bg-primary/10 px-2 sm:px-3 py-1 rounded-full flex-shrink-0">
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center indicator */}
                <div className="hidden lg:flex w-12 h-12 rounded-full bg-primary/20 border-4 border-background items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative h-32 sm:h-44 lg:h-48 rounded-xl overflow-hidden group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="text-[10px] sm:text-xs font-semibold text-primary-foreground bg-primary/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full inline-block">
                        Step {i + 1} of {steps.length}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12 lg:mt-16"
        >
          <a
            href="/enroll"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow text-sm sm:text-base"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPathSection;
