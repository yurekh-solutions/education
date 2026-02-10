import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Who are these courses for?",
    a: "Our courses are designed for beginners, career switchers, and working professionals who want to upskill in AI, web development, mobile development, and design.",
  },
  {
    q: "Do I need prior coding experience?",
    a: "No! Our beginner courses start from zero. We teach everything from the fundamentals. For advanced courses, we recommend basic programming knowledge.",
  },
  {
    q: "What is the placement support like?",
    a: "We provide dedicated career support including resume building, mock interviews, portfolio reviews, job referrals, and direct partnerships with 100+ hiring companies.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes, we offer flexible EMI options starting from ₹2,499/month. We also have scholarship programs for deserving students.",
  },
  {
    q: "Are the courses live or recorded?",
    a: "Our courses include both live sessions with mentors and recorded content you can access anytime. You also get lifetime access to all course materials and updates.",
  },
  {
    q: "What projects will I build?",
    a: "Each course includes 10-15 real-world projects. For example, in the Full Stack course you'll build an e-commerce platform, social media app, and more.",
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className="glass-card rounded-xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-3.5 sm:p-5 text-left"
    >
      <span className="font-heading font-semibold text-xs sm:text-sm pr-3 sm:pr-4">{q}</span>
      <ChevronDown
        size={16}
        className={`text-primary shrink-0 transition-transform duration-300 sm:hidden ${isOpen ? "rotate-180" : ""}`}
      />
      <ChevronDown
        size={18}
        className={`text-primary shrink-0 transition-transform duration-300 hidden sm:block ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <p className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
        {a}
      </p>
    </motion.div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-2 sm:gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
