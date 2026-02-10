import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, BookOpen, MessageSquare, ChevronDown } from "lucide-react";

interface EnrollFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const courses = [
  "AI & Machine Learning",
  "Full Stack Development",
  "Frontend Mastery",
  "Backend Engineering",
  "UI/UX Design",
  "Mobile App Development",
];

const EnrollForm = ({ isOpen, onClose, defaultCourse = "" }: EnrollFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: defaultCourse || "",
    customCourse: "",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const courseInterest = formData.course === "Other" 
      ? formData.customCourse 
      : formData.course;

    const whatsappMessage = `
*New Enrollment Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Course Interest:* ${courseInterest}
*Message:* ${formData.message || "No additional message"}

_Sent from EduCore Website_
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919136242706?text=${encodedMessage}`;

    // Small delay for better UX
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      onClose();
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        customCourse: "",
        message: "",
      });
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectCourse = (course: string) => {
    setFormData({ ...formData, course });
    setIsDropdownOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 px-4"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-heading text-2xl font-bold">Enroll Now</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Fill in your details and we&apos;ll connect on WhatsApp
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <BookOpen size={16} className="text-primary" />
                    Interested Course *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-left flex items-center justify-between"
                    >
                      <span className={formData.course ? "text-foreground" : "text-muted-foreground"}>
                        {formData.course || "Select a course"}
                      </span>
                      <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-xl z-10 max-h-60 overflow-y-auto"
                        >
                          {courses.map((course) => (
                            <button
                              key={course}
                              type="button"
                              onClick={() => selectCourse(course)}
                              className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              {course}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => selectCourse("Other")}
                            className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors border-t border-border"
                          >
                            Other (Type below)
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Custom Course Input */}
                  {formData.course === "Other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <input
                        type="text"
                        name="customCourse"
                        value={formData.customCourse}
                        onChange={handleChange}
                        placeholder="Type your course of interest"
                        className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors mt-2"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <MessageSquare size={16} className="text-primary" />
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any questions or specific requirements?"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={18} />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting, you agree to be contacted on WhatsApp
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EnrollForm;
