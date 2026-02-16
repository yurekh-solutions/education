import { motion } from "framer-motion";
import { Star, Clock, Users, ArrowRight } from "lucide-react";

const PricingPlans = () => {
  const courses = [
    {
      name: "Computer Fundamentals",
      category: "TRENDING",
      rating: 4.9,
      description: "Start your digital journey with computer basics, software, hardware, and OS fundamentals.",
      duration: "1 Month",
      students: "2.4K students",
      price: "₹2,999",
      badge: "trending",
    },
    {
      name: "HTML & CSS",
      category: "BESTSELLER",
      rating: 4.8,
      description: "Master web design foundations with HTML5 and CSS3. Build responsive, beautiful websites.",
      duration: "1.5 Months",
      students: "3.1K students",
      price: "₹3,499",
      badge: "bestseller",
    },
    {
      name: "JavaScript Essentials",
      category: "POPULAR",
      rating: 4.7,
      description: "Learn JavaScript fundamentals and ES6+. Build interactive web applications with modern JS.",
      duration: "2 Months",
      students: "2.8K students",
      price: "₹4,499",
      badge: "popular",
    },
    {
      name: "React Development",
      category: "NEW",
      rating: 4.8,
      description: "Build modern, scalable web apps with React, JSX, hooks, and state management.",
      duration: "2.5 Months",
      students: "1.9K students",
      price: "₹5,999",
      badge: "new",
    },
    {
      name: "Full Stack Web Development",
      category: "HOT",
      rating: 4.9,
      description: "Master both frontend and backend. Build complete web applications from scratch.",
      duration: "4 Months",
      students: "3.3K students",
      price: "₹8,999",
      badge: "hot",
    },
    {
      name: "UI/UX Design",
      category: "FEATURED",
      rating: 4.7,
      description: "Master design principles, Figma, user research, and create stunning user interfaces.",
      duration: "2 Months",
      students: "2.1K students",
      price: "₹4,999",
      badge: "featured",
    },
    {
      name: "Graphic Design",
      category: "TRENDING",
      rating: 4.6,
      description: "Learn Adobe Suite, design theory, branding, and create professional graphics.",
      duration: "2 Months",
      students: "1.8K students",
      price: "₹4,499",
      badge: "trending",
    },
    {
      name: "Video Editing & Production",
      category: "NEW",
      rating: 4.7,
      description: "Master video editing, color grading, effects, and create professional video content.",
      duration: "1.5 Months",
      students: "1.5K students",
      price: "₹3,999",
      badge: "new",
    },
    {
      name: "Frontend Advanced",
      category: "FEATURED",
      rating: 4.8,
      description: "Advanced frontend with TypeScript, Next.js, state management, and performance optimization.",
      duration: "3 Months",
      students: "1.6K students",
      price: "₹7,999",
      badge: "featured",
    },
    {
      name: "Mobile App Development",
      category: "HOT",
      rating: 4.9,
      description: "Build iOS and Android apps with React Native. Deploy production-ready mobile apps.",
      duration: "3 Months",
      students: "2.2K students",
      price: "₹9,999",
      badge: "hot",
    },
    {
      name: "Backend Engineering",
      category: "POPULAR",
      rating: 4.8,
      description: "Master server-side development with Node.js, databases, APIs, and cloud deployment.",
      duration: "3 Months",
      students: "2.5K students",
      price: "₹8,499",
      badge: "popular",
    },
    {
      name: "Data Analytics Basics",
      category: "TRENDING",
      rating: 4.6,
      description: "Learn data analysis, visualization, Excel, SQL, and Python for analytics.",
      duration: "2 Months",
      students: "1.7K students",
      price: "₹5,999",
      badge: "trending",
    },
  ];

  const getBadgeColor = (badge: string) => {
    const colors: { [key: string]: string } = {
      trending: "bg-blue-500/20 text-blue-400",
      bestseller: "bg-purple-500/20 text-purple-400",
      popular: "bg-cyan-500/20 text-cyan-400",
      new: "bg-green-500/20 text-green-400",
      hot: "bg-red-500/20 text-red-400",
      featured: "bg-orange-500/20 text-orange-400",
    };
    return colors[badge] || "bg-primary/20 text-primary";
  };

  return (
    <section id="pricing" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
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
            Our Pricing Plans
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Courses for <span className="gradient-text">Every Budget</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Choose from our comprehensive course catalog. Affordable pricing for school students, college students, and professionals.
          </p>
        </motion.div>

        {/* Course Grid */}
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
                  {course.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-yellow-400 text-yellow-400 sm:hidden" />
                  <Star size={16} className="fill-yellow-400 text-yellow-400 hidden sm:block" />
                  <span className="text-xs sm:text-sm font-semibold">{course.rating}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-sm sm:text-base mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                {course.name}
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
                  href={`/enroll?course=${encodeURIComponent(course.name)}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 sm:px-6 py-2 sm:py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow text-xs sm:text-sm group"
                >
                  Enroll Now
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform sm:hidden" />
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-14 lg:mt-16"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Not sure which course to choose?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary/20 border border-primary/50 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-primary hover:bg-primary/30 transition-all hover:border-primary"
          >
            Chat with Our Advisors
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
