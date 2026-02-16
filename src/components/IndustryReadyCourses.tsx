import { motion } from "framer-motion";
import { Star, Clock, Users, ArrowRight } from "lucide-react";

const IndustryReadyCourses = () => {
  const courses = [
    {
      badge: "TRENDING",
      rating: 4.9,
      title: "AI & Machine Learning",
      description: "Master Python, TensorFlow, and build intelligent systems from scratch.",
      duration: "6 Months",
      students: "2.4K students",
      price: "₹14,999",
      link: "/courses/ai-machine-learning",
    },
    {
      badge: "BESTSELLER",
      rating: 4.8,
      title: "Full Stack Web Development",
      description: "React, Node.js, MongoDB — build production-ready web applications.",
      duration: "8 Months",
      students: "3.1K students",
      price: "₹12,999",
      link: "/courses/full-stack-development",
    },
    {
      badge: "POPULAR",
      rating: 4.7,
      title: "Frontend Mastery",
      description: "HTML, CSS, JavaScript, React, Next.js with modern UI/UX principles.",
      duration: "4 Months",
      students: "1.8K students",
      price: "₹8,999",
      link: "/courses/frontend-mastery",
    },
    {
      badge: "NEW",
      rating: 4.8,
      title: "Backend Engineering",
      description: "Node.js, Express, databases, APIs, cloud deployment and DevOps basics.",
      duration: "5 Months",
      students: "1.5K students",
      price: "₹10,999",
      link: "/courses/backend-engineering",
    },
    {
      badge: "HOT",
      rating: 4.9,
      title: "UI/UX Design",
      description: "Figma, design systems, user research, prototyping and handoff workflows.",
      duration: "3 Months",
      students: "1.2K students",
      price: "₹7,999",
      link: "/courses/ui-ux-design",
    },
    {
      badge: "FEATURED",
      rating: 4.7,
      title: "Mobile App Development",
      description: "React Native cross-platform apps for iOS and Android with real projects.",
      duration: "5 Months",
      students: "980 students",
      price: "₹11,999",
      link: "/courses/mobile-app-development",
    },
  ];

  const getBadgeColor = (badge: string) => {
    const colors: { [key: string]: string } = {
      TRENDING: "bg-blue-500/20 text-blue-400",
      BESTSELLER: "bg-purple-500/20 text-purple-400",
      POPULAR: "bg-cyan-500/20 text-cyan-400",
      NEW: "bg-green-500/20 text-green-400",
      HOT: "bg-red-500/20 text-red-400",
      FEATURED: "bg-orange-500/20 text-orange-400",
    };
    return colors[badge] || "bg-primary/20 text-primary";
  };

  return (
    <section id="industry-courses" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 sm:right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-primary/5 blur-[100px] sm:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Industry-Ready Programs
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Comprehensive <span className="gradient-text">Tech Courses</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Designed with industry experts to make you job-ready from day one. Choose from professional programs.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group glass-card rounded-xl p-5 sm:p-6 hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Badge and Rating */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className={`text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2.5 sm:px-3 py-1 rounded-full ${getBadgeColor(course.badge)}`}>
                  {course.badge}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400 sm:hidden" />
                  <Star size={16} className="fill-yellow-400 text-yellow-400 hidden sm:block" />
                  <span className="text-xs sm:text-sm font-semibold">{course.rating}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-sm sm:text-base mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-5 line-clamp-2 flex-grow">
                {course.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-col gap-2 sm:gap-2.5 mb-4 sm:mb-5 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-primary flex-shrink-0 sm:hidden" />
                  <Clock size={16} className="text-primary flex-shrink-0 hidden sm:block" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-primary flex-shrink-0 sm:hidden" />
                  <Users size={16} className="text-primary flex-shrink-0 hidden sm:block" />
                  <span>{course.students}</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="border-t border-border pt-4 sm:pt-5">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="font-heading font-bold text-lg sm:text-xl gradient-text">{course.price}</span>
                </div>
                <a
                  href={course.link}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 sm:px-6 py-2 sm:py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow text-xs sm:text-sm group"
                >
                  View Details
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform sm:hidden" />
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryReadyCourses;
