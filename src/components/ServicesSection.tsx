import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Code2,
  BarChart3,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Technology & Programming", desc: "Computer Fundamentals, HTML/CSS, JavaScript, React & Modern Frameworks" },
  { icon: Palette, title: "Design & Creativity", desc: "Graphic Designing, UI/UX Basics, Video Editing, Digital Content Creation" },
  { icon: Code2, title: "Development & Tools", desc: "Frontend Development, Project-based Learning, Portfolio Building" },
  { icon: BarChart3, title: "Finance & Professional Skills", desc: "Finance Basics, Accounting Concepts, Career Skills Development" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full bg-accent/5 blur-[100px] sm:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Our Training Domains
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Learning <span className="gradient-text">Paths for Every Student</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 sm:px-0">
            Choose from our four core training domains designed for school and college students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-4 sm:p-5 lg:p-6 group hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 lg:mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
