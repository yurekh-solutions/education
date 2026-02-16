import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FrontendAdvanced = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="fixed top-20 sm:top-24 left-4 sm:left-6 z-40">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm">
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">Back</span>
        </Link>
      </div>

      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Frontend <span className="gradient-text">Advanced</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Master advanced frontend concepts. Learn TypeScript, Next.js, state management & performance optimization.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card rounded-xl p-6 sm:p-8 mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Course Price</p>
                <h2 className="font-heading text-4xl sm:text-5xl font-bold gradient-text">₹7,999</h2>
                <p className="text-sm text-muted-foreground mt-2">One-time payment • Lifetime access</p>
              </div>
              <a href={`/enroll?course=${encodeURIComponent("Frontend Advanced")}`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow">
                Enroll Now
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href={`/enroll?course=${encodeURIComponent("Frontend Advanced")}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground hover:opacity-90 transition-opacity glow">
              <Play size={18} />
              Start Course Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FrontendAdvanced;
