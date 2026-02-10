import { motion } from "framer-motion";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "AI & Machine Learning",
    description: "Master Python, TensorFlow, and build intelligent systems from scratch.",
    duration: "6 Months",
    students: "2.4K",
    rating: "4.9",
    price: "₹14,999",
    tag: "Trending",
    color: "from-primary/20 to-accent/20",
    link: "/courses/ai-machine-learning",
  },
  {
    title: "Full Stack Web Development",
    description: "React, Node.js, MongoDB — build production-ready web applications.",
    duration: "8 Months",
    students: "3.1K",
    rating: "4.8",
    price: "₹12,999",
    tag: "Bestseller",
    color: "from-accent/20 to-primary/20",
    link: "/courses/full-stack-development",
  },
  {
    title: "Frontend Mastery",
    description: "HTML, CSS, JavaScript, React, Next.js with modern UI/UX principles.",
    duration: "4 Months",
    students: "1.8K",
    rating: "4.7",
    price: "₹8,999",
    tag: "Popular",
    color: "from-primary/20 to-primary/5",
    link: "/courses/frontend-mastery",
  },
  {
    title: "Backend Engineering",
    description: "Node.js, Express, databases, APIs, cloud deployment and DevOps basics.",
    duration: "5 Months",
    students: "1.5K",
    rating: "4.8",
    price: "₹10,999",
    tag: "New",
    color: "from-accent/20 to-accent/5",
    link: "/courses/backend-engineering",
  },
  {
    title: "UI/UX Design",
    description: "Figma, design systems, user research, prototyping and handoff workflows.",
    duration: "3 Months",
    students: "1.2K",
    rating: "4.9",
    price: "₹7,999",
    tag: "Hot",
    color: "from-primary/10 to-accent/20",
    link: "/courses/ui-ux-design",
  },
  {
    title: "Mobile App Development",
    description: "React Native cross-platform apps for iOS and Android with real projects.",
    duration: "5 Months",
    students: "980",
    rating: "4.7",
    price: "₹11,999",
    tag: "Featured",
    color: "from-accent/10 to-primary/20",
    link: "/courses/mobile-app-development",
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
            Industry-Ready <span className="gradient-text">Tech Courses</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 sm:px-0">
            Comprehensive programs designed with industry experts to make you job-ready from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {courses.map((course, i) => (
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
                    <Star size={12} className="text-primary fill-primary sm:hidden" />
                    <Star size={14} className="text-primary fill-primary hidden sm:block" />
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
                    <Clock size={12} className="sm:hidden" /> 
                    <Clock size={14} className="hidden sm:block" /> 
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} className="sm:hidden" /> 
                    <Users size={14} className="hidden sm:block" /> 
                    {course.students} students
                  </span>
                </div>

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-border">
                  <span className="font-heading text-lg sm:text-xl font-bold text-primary">
                    {course.price}
                  </span>
                  <Link 
                    to={course.link}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors group/btn"
                  >
                    View Details
                    <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform sm:hidden" />
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform hidden sm:block" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
