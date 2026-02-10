import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Full Stack Developer at TCS",
    text: "EduCore completely transformed my career. The project-based approach helped me build a strong portfolio that impressed recruiters.",
    rating: 5,
    course: "Full Stack Web Development",
  },
  {
    name: "Rahul Verma",
    role: "ML Engineer at Infosys",
    text: "The AI & ML course is incredibly comprehensive. I went from zero Python knowledge to building production ML models in 6 months.",
    rating: 5,
    course: "AI & Machine Learning",
  },
  {
    name: "Ananya Patel",
    role: "UI/UX Designer at Flipkart",
    text: "The mentors are amazing and always available. The design thinking workshops gave me a huge edge in interviews.",
    rating: 5,
    course: "UI/UX Design",
  },
  {
    name: "Vikram Singh",
    role: "React Developer at Razorpay",
    text: "Best investment I've made in my career. The curriculum is always up-to-date with the latest industry trends.",
    rating: 5,
    course: "Frontend Mastery",
  },
  {
    name: "Sneha Reddy",
    role: "Mobile Developer at PhonePe",
    text: "I built 3 apps during the course that I now have on the Play Store. The hands-on experience was invaluable.",
    rating: 5,
    course: "Mobile App Development",
  },
  {
    name: "Arjun Nair",
    role: "Backend Engineer at Zoho",
    text: "The backend course covers everything — from APIs to cloud deployment. I felt completely job-ready after completing it.",
    rating: 5,
    course: "Backend Engineering",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[180px] sm:w-[300px] lg:w-[400px] h-[180px] sm:h-[300px] lg:h-[400px] rounded-full bg-accent/5 blur-[80px] sm:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 sm:px-0">
            Real stories from real students who launched their tech careers with EduCore.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-4 sm:p-5 lg:p-6 relative group hover:border-primary/30 transition-colors"
            >
              <Quote size={24} className="text-primary/20 absolute top-3 right-3 sm:top-4 sm:right-4 sm:hidden" />
              <Quote size={32} className="text-primary/20 absolute top-4 right-4 hidden sm:block" />

              <div className="flex gap-1 mb-3 sm:mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="text-primary fill-primary sm:hidden" />
                ))}
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary hidden sm:block" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-5">
                "{t.text}"
              </p>

              <div className="border-t border-border pt-3 sm:pt-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-xs sm:text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs sm:text-sm">{t.name}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <span className="inline-block mt-2 sm:mt-3 text-[10px] sm:text-[11px] font-medium text-primary bg-primary/10 rounded-full px-2.5 sm:px-3 py-0.5">
                  {t.course}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
