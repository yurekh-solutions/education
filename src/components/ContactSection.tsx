import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="absolute bottom-0 left-1/3 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 sm:mt-3 mb-3 sm:mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2 sm:px-0">
            Have a question? Fill out the form and our team will reach out to you directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="glass-card rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-1 sm:mb-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail size={16} className="text-primary sm:hidden" />
                  <Mail size={18} className="text-primary hidden sm:block" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs sm:text-sm">Email Us</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">hello@educore.in</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-1 sm:mb-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone size={16} className="text-primary sm:hidden" />
                  <Phone size={18} className="text-primary hidden sm:block" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs sm:text-sm">Call Us</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/919136242706" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-4 sm:p-6 block hover:border-green-500/50 transition-colors group"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-1 sm:mb-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MessageCircle size={16} className="text-green-500 sm:hidden" />
                  <MessageCircle size={18} className="text-green-500 hidden sm:block" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs sm:text-sm">WhatsApp</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">+91 91362 42706</p>
                </div>
              </div>
            </a>

            <div className="glass-card rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-1 sm:mb-2">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin size={16} className="text-primary sm:hidden" />
                  <MapPin size={18} className="text-primary hidden sm:block" />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs sm:text-sm">Visit Us</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card rounded-xl p-4 sm:p-6 lg:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div>
                <label className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 sm:mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-border bg-secondary/50 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>
              <div>
                <label className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 sm:mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-border bg-secondary/50 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                />
              </div>
            </div>

            <div className="mb-3 sm:mb-4">
              <label className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 sm:mb-1.5 block">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full rounded-lg border border-border bg-secondary/50 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label className="text-[10px] sm:text-xs font-medium text-muted-foreground mb-1 sm:mb-1.5 block">Message</label>
              <textarea
                required
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="I'm interested in the Full Stack course..."
                className="w-full rounded-lg border border-border bg-secondary/50 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow text-sm sm:text-base"
            >
              Send Message <Send size={14} className="sm:hidden" /><Send size={16} className="hidden sm:block" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
