import { motion } from "framer-motion";
import { Check, X, Zap, Crown, Rocket } from "lucide-react";

const plans = [
  {
    name: "Basic",
    icon: Zap,
    price: "₹4,999",
    period: "/month",
    description: "Perfect for beginners starting their journey",
    color: "from-primary/20 to-primary/5",
    popular: false,
    features: [
      { text: "Access to 5 courses", included: true },
      { text: "Basic project templates", included: true },
      { text: "Community forum access", included: true },
      { text: "Email support", included: true },
      { text: "Certificate of completion", included: true },
      { text: "Live mentorship sessions", included: false },
      { text: "Career placement support", included: false },
      { text: "1-on-1 doubt clearing", included: false },
    ],
  },
  {
    name: "Professional",
    icon: Crown,
    price: "₹9,999",
    period: "/month",
    description: "Most popular choice for serious learners",
    color: "from-accent/20 to-primary/20",
    popular: true,
    features: [
      { text: "Access to all 50+ courses", included: true },
      { text: "Advanced project templates", included: true },
      { text: "Priority community support", included: true },
      { text: "24/7 chat support", included: true },
      { text: "Industry-recognized certificate", included: true },
      { text: "Weekly live mentorship", included: true },
      { text: "Career placement support", included: true },
      { text: "1-on-1 doubt clearing (10hrs)", included: true },
    ],
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "₹14,999",
    period: "/month",
    description: "Complete package with guaranteed placement",
    color: "from-primary/20 to-accent/20",
    popular: false,
    features: [
      { text: "Lifetime access to all courses", included: true },
      { text: "Custom project development", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "Priority 24/7 support", included: true },
      { text: "Premium certificate", included: true },
      { text: "Daily live mentorship", included: true },
      { text: "Guaranteed job placement", included: true },
      { text: "Unlimited 1-on-1 sessions", included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] rounded-full bg-primary/5 blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-[250px] sm:w-[400px] lg:w-[600px] h-[250px] sm:h-[400px] lg:h-[600px] rounded-full bg-accent/5 blur-[100px] sm:blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Pricing Plans
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            Flexible pricing options designed to fit your goals and budget. All plans include lifetime access to course materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-xl overflow-hidden relative ${
                plan.popular
                  ? "border-primary/50 md:scale-105 shadow-2xl"
                  : "hover:border-primary/30"
              } transition-all`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${plan.color}`} />

              <div className="p-5 sm:p-6 lg:p-8">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center mb-3 sm:mb-4`}>
                  <plan.icon className="text-primary" size={24} />
                </div>

                {/* Plan name */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
                    Billed monthly, cancel anytime
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold transition-all mb-4 sm:mb-6 text-sm sm:text-base ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90 glow"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  Get Started
                </button>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
                    What's included:
                  </p>
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm"
                    >
                      {feature.included ? (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={12} className="text-primary sm:hidden" />
                          <Check size={14} className="text-primary hidden sm:block" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-muted/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X size={12} className="text-muted-foreground sm:hidden" />
                          <X size={14} className="text-muted-foreground hidden sm:block" />
                        </div>
                      )}
                      <span
                        className={`text-xs sm:text-sm ${
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 px-4 sm:px-0">
            All plans include access to our community, regular updates, and new course additions
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-[10px] sm:text-xs text-muted-foreground px-2 sm:px-0">
            <span className="flex items-center gap-2">
              <Check size={14} className="text-primary" />
              30-day money-back guarantee
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-primary" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-primary" />
              Cancel anytime
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
