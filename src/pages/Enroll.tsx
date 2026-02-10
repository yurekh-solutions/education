import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, BookOpen, MessageSquare, ChevronDown, CheckCircle, Sparkles, ArrowLeft, MessageCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import enrollImage from "@/assets/image.png";

const courses = [
  "AI & Machine Learning",
  "Full Stack Development",
  "Frontend Mastery",
  "Backend Engineering",
  "UI/UX Design",
  "Mobile App Development",
];

const Enroll = () => {
  const [searchParams] = useSearchParams();
  const courseFromUrl = searchParams.get("course") || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseFromUrl,
    customCourse: "",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectCourse = (course: string) => {
    setFormData({ ...formData, course });
    setIsDropdownOpen(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 pb-20 px-4 sm:px-6">
          <div className="container mx-auto max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-green-500" size={40} />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-3">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                Your enrollment inquiry has been sent. We&apos;ll connect with you on WhatsApp shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/919136242706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={18} />
                  Open WhatsApp
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <ArrowLeft size={18} />
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back Navigation */}
      <div className="fixed top-20 sm:top-24 left-4 sm:left-6 z-40">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm">
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">Back</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-6">
              <Sparkles size={16} />
              Start Your Journey
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              Enroll in Your <span className="gradient-text">Dream Course</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
              Fill in your details and we&apos;ll connect with you on WhatsApp to guide you through the enrollment process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section - Two Column Layout */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img
                  src={enrollImage}
                  alt="Enroll Now"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm">WhatsApp Support</p>
                      <p className="text-xs text-muted-foreground">+91 91362 42706</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
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
                          className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {course}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => selectCourse("Other")}
                        className="w-full px-4 py-3 text-left hover:bg-secondary transition-colors border-t border-border text-sm"
                      >
                        Other (Type below)
                      </button>
                    </motion.div>
                  )}
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
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <MessageCircle size={20} fill="currentColor" />
                    Send via WhatsApp
                  </>
                )})
              </button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-xs text-center text-muted-foreground mt-4">
                <MessageCircle size={14} className="text-green-500" />
                <span>You will be redirected to WhatsApp (+91 91362 42706)</span>
              </div>
            </form>
          </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enroll;
