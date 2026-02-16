import { motion } from "framer-motion";
import { Check } from "lucide-react";

const whyChoosePoints = [
  {
    title: "Practical Over Theoretical",
    desc: "Hands-on training with real projects and live practical sessions",
  },
  {
    title: "Affordable Student Pricing",
    desc: "Flexible payment options designed for school and college students",
  },
  {
    title: "Industry-Aligned Curriculum",
    desc: "Courses designed with industry experts for job-ready skills",
  },
  {
    title: "Skill + Portfolio Focus",
    desc: "Build a portfolio with 10-15 real projects during your course",
  },
  {
    title: "Modern Tools & Technologies",
    desc: "Learn the latest tools and frameworks used by top companies",
  },
  {
    title: "Doubt-Clearing Support",
    desc: "Small batch sizes with dedicated mentor support throughout",
  },
  {
    title: "Beginner-Friendly Approach",
    desc: "No prior experience required. We start from fundamentals",
  },
  {
    title: "Certification Upon Completion",
    desc: "Earn industry-recognized certificates for every course completed",
  },
];

const targetAudience = [
  "School Students",
  "College Students",
  "Beginners",
  "Career-Focused Learners",
];

const teachingMethodology = [
  "Beginner-friendly approach",
  "Live practical sessions",
  "Project-based learning",
  "Small batch sizes",
  "Doubt-clearing support",
  "Certification upon completion",
];

const WhySection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Why Choose EduCore
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Why Students <span className="gradient-text">Choose EduCore</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {whyChoosePoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-4 sm:p-6 group hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base mb-1 sm:mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teaching Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10">
            Our Teaching <span className="gradient-text">Methodology</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {teachingMethodology.map((method, i) => (
              <motion.div
                key={method}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl p-4 sm:p-5 text-center hover:border-primary/30 transition-all"
              >
                <p className="font-heading font-semibold text-xs sm:text-sm leading-relaxed">
                  {method}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-8 sm:mb-10">
            Our <span className="gradient-text">Target Audience</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {targetAudience.map((audience, i) => (
              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 sm:p-6 text-center hover:border-primary/30 transition-all"
              >
                <p className="font-heading font-bold text-sm sm:text-base">
                  {audience}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
