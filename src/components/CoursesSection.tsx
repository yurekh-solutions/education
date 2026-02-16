import { motion } from "framer-motion";
import { Clock, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courseLevels = [
  {
    level: "Level 1 – Foundation",
    subtitle: "Beginner",
    priceRange: "₹2,500 – ₹4,000",
    courses: [
      {
        title: "Computer Fundamentals",
        description: "Basics, OS, Internet, Hardware & Software",
        duration: "1 Month",
        rating: "4.8",
        tag: "Beginner",
        color: "from-primary/20 to-accent/20",
      },
      {
        title: "HTML & CSS",
        description: "Web structure & styling fundamentals",
        duration: "1.5 Months",
        rating: "4.9",
        tag: "Popular",
        color: "from-accent/20 to-primary/20",
      },
      {
        title: "Basic Graphic Design",
        description: "Canva & Photoshop basics for beginners",
        duration: "1 Month",
        rating: "4.7",
        tag: "Creative",
        color: "from-primary/20 to-primary/5",
      },
    ],
  },
  {
    level: "Level 2 – Skill Development",
    subtitle: "Intermediate",
    priceRange: "₹5,000 – ₹8,000",
    courses: [
      {
        title: "JavaScript Essentials",
        description: "Logic, DOM, Functions & Advanced concepts",
        duration: "2 Months",
        rating: "4.8",
        tag: "Trending",
        color: "from-primary/20 to-accent/20",
      },
      {
        title: "Advanced Graphic Design",
        description: "Photoshop & Illustrator professional tools",
        duration: "2 Months",
        rating: "4.9",
        tag: "Pro",
        color: "from-accent/20 to-primary/20",
      },
      {
        title: "UI/UX Basics",
        description: "Wireframes, Prototypes & Design thinking",
        duration: "1.5 Months",
        rating: "4.7",
        tag: "Design",
        color: "from-primary/10 to-accent/20",
      },
    ],
  },
  {
    level: "Level 3 – Career & Professional",
    subtitle: "Advanced",
    priceRange: "₹12,000 – ₹25,000",
    courses: [
      {
        title: "Full Web Development",
        description: "HTML, CSS, JS, React - Complete stack",
        duration: "4–6 Months",
        rating: "4.9",
        tag: "Bestseller",
        color: "from-primary/20 to-accent/20",
      },
      {
        title: "React Development",
        description: "Components, Hooks, State management",
        duration: "3 Months",
        rating: "4.8",
        tag: "Advanced",
        color: "from-accent/20 to-primary/20",
      },
      {
        title: "Portfolio & Live Projects",
        description: "Real-world builds & portfolio creation",
        duration: "2 Months",
        rating: "4.8",
        tag: "Career-Ready",
        color: "from-primary/20 to-primary/5",
      },
    ],
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] rounded-full bg-primary/5 blur-[100px] sm:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Our Courses
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Three Learning <span className="gradient-text">Levels for Every Student</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 sm:px-0">
            From fundamentals to professional expertise. Choose your learning level.
          </p>
        </motion.div>

        {courseLevels.map((levelGroup, levelIndex) => (
          <div key={levelIndex} className="mb-12 sm:mb-16 lg:mb-20">
            {/* Level Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-10"
            >
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                {levelGroup.level}
              </h3>
              <p className="text-sm sm:text-base text-primary font-semibold mb-2">
                {levelGroup.subtitle}
              </p>
              <p className="text-lg sm:text-xl font-bold text-primary">
                {levelGroup.priceRange}
              </p>
            </motion.div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {levelGroup.courses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-colors"
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${course.color}`} />

                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2.5 sm:px-3 py-1">
                        {course.tag}
                      </span>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                        <Star size={14} className="text-primary fill-primary" />
                        {course.rating}
                      </div>
                    </div>

                    <h3 className="font-heading text-base sm:text-lg font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-4 sm:mb-5">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {course.duration}
                      </span>
                    </div>

                    <div className="pt-3 sm:pt-4 border-t border-border">
                      <a href={`/enroll?course=${encodeURIComponent(course.title)}`} className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow text-sm sm:text-base">
                        Enroll Now
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
