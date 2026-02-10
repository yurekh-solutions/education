import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  ShoppingCart,
  Megaphone,
  PenTool,
  BarChart3,
  Newspaper,
  Code2,
  QrCode,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built, responsive websites with modern tech stacks." },
  { icon: Smartphone, title: "Mobile Applications", desc: "Cross-platform mobile apps for iOS & Android." },
  { icon: Palette, title: "UI/UX Designing", desc: "Beautiful, intuitive interfaces that users love." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Scalable online stores with payment integration." },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, PPC, social media & content strategies." },
  { icon: PenTool, title: "Brand Identity", desc: "Logos, style guides & brand collateral design." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "Data-driven insights and custom dashboards." },
  { icon: Newspaper, title: "Content Creation", desc: "Compelling content for all digital channels." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke software solutions for your business." },
  { icon: QrCode, title: "Digital Cards & QR", desc: "Smart visiting cards & custom QR codes." },
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
            Our Services
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Premium <span className="gradient-text">Digital Services</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 sm:px-0">
            End-to-end digital solutions to elevate your brand and accelerate growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-3 sm:p-4 lg:p-5 group hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 lg:mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon size={18} className="text-primary" />
              </div>
              <h3 className="font-heading text-xs sm:text-sm font-bold mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
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
