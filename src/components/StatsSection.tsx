import { motion } from "framer-motion";
import { TrendingUp, Award, Briefcase, Globe, Target, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: 10000,
    suffix: "+",
    label: "Active Students",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    value: 95,
    suffix: "%",
    label: "Placement Rate",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Hiring Partners",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Globe,
    value: 50,
    suffix: "+",
    label: "Countries Reached",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Target,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Zap,
    value: 1000,
    suffix: "+",
    label: "Projects Built",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Our Impact
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Transforming Lives Through{" "}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Join thousands of successful students who have transformed their careers with our programs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-4 sm:p-5 lg:p-6 text-center hover:border-primary/30 transition-all hover:scale-105"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 lg:mb-4`}
              >
                <stat.icon className={`${stat.color}`} size={20} />
              </div>
              <div className={`font-heading text-xl sm:text-2xl lg:text-3xl font-bold mb-1 lg:mb-2 ${stat.color}`}>
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
