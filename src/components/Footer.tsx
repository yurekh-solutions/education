import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import eduLogo from "@/assets/edu.jpeg";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about EduCore courses.");
    window.open(`https://wa.me/919090822772?text=${message}`, "_blank");
  };
  return (
    <footer className="border-t border-border py-8 sm:py-10 lg:py-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img src={eduLogo} alt="EduCore" className="h-7 w-auto sm:h-8 rounded-lg" />
              <span className="font-heading text-base sm:text-lg font-bold gradient-text">EduCore</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Empowering students with future-ready digital skills through practical, industry-aligned training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-2 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {["Home", "Courses", "Services", "About"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-bold mb-2 sm:mb-4 text-sm sm:text-base">Top Courses</h4>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              {["Full Web Development", "UI/UX Design", "JavaScript Essentials", "Graphic Design"].map((c) => (
                <a key={c} href="#courses" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {c}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-2 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Mail size={12} className="text-primary sm:hidden" /><Mail size={14} className="text-primary hidden sm:block" /> connect.educore@gmail.com</span>
              <span className="flex items-center gap-2"><Phone size={12} className="text-primary sm:hidden" /><Phone size={14} className="text-primary hidden sm:block" /> +91 90820 25722</span>
              <span className="flex items-center gap-2"><MapPin size={12} className="text-primary sm:hidden" /><MapPin size={14} className="text-primary hidden sm:block" /> India</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Chat Button */}
        <button
          onClick={openWhatsApp}
          className="fixed bottom-4 sm:bottom-6 right-16 sm:right-20 z-40 flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} className="sm:hidden" fill="currentColor" />
          <MessageCircle size={20} className="hidden sm:block" fill="currentColor" />
        </button>

        <div className="border-t border-border pt-4 sm:pt-6 text-center text-[10px] sm:text-xs text-muted-foreground">
          © {new Date().getFullYear()} EduCore. All rights reserved. Designed & Developed by <a href="https://yurekh.com/"> YUREKHSOLUTIONS </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
