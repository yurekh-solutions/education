import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] sm:w-[300px] lg:w-[400px] h-[180px] sm:h-[300px] lg:h-[400px] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px]" />
          
          <div className="relative z-10">
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Start Your <span className="gradient-text">Tech Journey</span>?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
              Join thousands of students who transformed their careers with EduCore.
              Limited seats available for the upcoming batch.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="#courses"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow text-sm sm:text-base"
              >
                Enroll Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:hidden" />
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform hidden sm:block" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-3.5 font-semibold text-foreground hover:bg-secondary transition-colors text-sm sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
