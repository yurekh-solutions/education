import { motion } from "framer-motion";
import { TrendingUp, Target, Clock, CheckCircle } from "lucide-react";

const steps = [
  { icon: Target, title: "Choose Your Course", desc: "Browse our catalog and pick the right course for your goals." },
  { icon: Clock, title: "Learn at Your Pace", desc: "Access live sessions and recorded lectures anytime, anywhere." },
  { icon: TrendingUp, title: "Build Real Projects", desc: "Work on 10-15 industry-grade projects to build your portfolio." },
  { icon: CheckCircle, title: "Get Placed", desc: "Our career team helps you land your dream job at top companies." },
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Your Path to <span className="gradient-text">Success</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="relative z-10 h-10 w-10 sm:h-14 sm:w-14 mx-auto rounded-xl sm:rounded-2xl glass-card gradient-border flex items-center justify-center mb-3 sm:mb-5">
                <s.icon size={20} className="text-primary sm:hidden" />
                <s.icon size={24} className="text-primary hidden sm:block" />
              </div>
              <span className="inline-block text-[10px] sm:text-xs font-bold text-primary mb-1 sm:mb-2">
                Step {i + 1}
              </span>
              <h3 className="font-heading font-bold text-sm sm:text-lg mb-1 sm:mb-2">{s.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
