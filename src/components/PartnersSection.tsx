import { motion } from "framer-motion";

const partners = [
  "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Flipkart", "Razorpay",
];

const PartnersSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8 font-medium tracking-wider uppercase px-4"
        >
          Our Students Work At
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-14 px-2"
        >
          {partners.map((p) => (
            <span
              key={p}
              className="font-heading text-sm sm:text-lg lg:text-xl font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors"
            >
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
