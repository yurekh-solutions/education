import { motion } from "framer-motion";
import { Shield, Zap, HeartHandshake, GraduationCap } from "lucide-react";

const reasons = [
  {
    icon: GraduationCap,
    title: "Expert Mentors",
    desc: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: Zap,
    title: "Project-Based Learning",
    desc: "Build 15+ real projects that showcase your skills to employers.",
  },
  {
    icon: Shield,
    title: "Placement Support",
    desc: "Dedicated career team with mock interviews, resume building & referrals.",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Access",
    desc: "Get lifetime access to course materials, updates, and community support.",
  },
];

const WhySection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Why EduCore
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Why Students <span className="gradient-text">Choose Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 sm:p-6"
            >
              <div className="h-10 w-10 sm:h-14 sm:w-14 mx-auto rounded-xl sm:rounded-2xl gradient-border glass-card flex items-center justify-center mb-3 sm:mb-5">
                <r.icon size={20} className="text-primary sm:hidden" />
                <r.icon size={24} className="text-primary hidden sm:block" />
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-lg mb-1 sm:mb-2">{r.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
