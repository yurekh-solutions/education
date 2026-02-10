import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight, GraduationCap } from "lucide-react";

const courses = [
  { title: "AI & Machine Learning", path: "/courses/ai-machine-learning", short: "AI & ML" },
  { title: "Full Stack Development", path: "/courses/full-stack-development", short: "Full Stack" },
  { title: "Frontend Mastery", path: "/courses/frontend-mastery", short: "Frontend" },
  { title: "Backend Engineering", path: "/courses/backend-engineering", short: "Backend" },
  { title: "UI/UX Design", path: "/courses/ui-ux-design", short: "UI/UX" },
  { title: "Mobile App Development", path: "/courses/mobile-app-development", short: "Mobile" },
];

interface StepNavigationProps {
  currentCourse?: string;
  showEnroll?: boolean;
}

const StepNavigation = ({ currentCourse, showEnroll = true }: StepNavigationProps) => {
  const location = useLocation();
  const isEnrollPage = location.pathname === "/enroll";

  const getCurrentStep = () => {
    if (isEnrollPage) return 3;
    if (currentCourse) return 2;
    return 1;
  };

  const currentStep = getCurrentStep();

  return (
    <div className="sticky top-[72px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-2">
        {/* Progress Steps - Desktop */}
        <div className="hidden md:flex items-center justify-center gap-1">
          {/* Step 1: Home */}
          <Link
            to="/"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              currentStep === 1
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Home size={14} />
            <span className="text-xs font-medium">Home</span>
          </Link>

          <ChevronRight size={16} className="text-muted-foreground" />

          {/* Step 2: Courses */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentStep === 2
                  ? "bg-primary text-primary-foreground"
                  : currentStep > 2
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <GraduationCap size={14} />
              <span className="text-xs font-medium max-w-[100px] truncate">
                {currentCourse || "Courses"}
              </span>
            </button>

            {/* Dropdown for course navigation */}
            <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="p-2">
                <p className="text-xs text-muted-foreground px-3 py-2 uppercase tracking-wider">
                  All Courses
                </p>
                {courses.map((course) => (
                  <Link
                    key={course.path}
                    to={course.path}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      location.pathname === course.path
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        location.pathname === course.path
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {showEnroll && (
            <>
              <ChevronRight size={14} className="text-muted-foreground" />

              {/* Step 3: Enroll */}
              <Link
                to={currentCourse ? `/enroll?course=${encodeURIComponent(currentCourse)}` : "/enroll"}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  currentStep === 3
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-xs font-medium">Enroll</span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <Home size={14} />
            <span>Home</span>
          </Link>

          <div className="flex items-center gap-1 text-xs px-2">
            <span className="text-muted-foreground truncate max-w-[100px]">
              {isEnrollPage ? "Enroll" : currentCourse || "Course"}
            </span>
          </div>

          {/* Mobile Course Menu */}
          <div className="relative">
            <button 
              onClick={(e) => {
                const menu = e.currentTarget.nextElementSibling;
                if (menu) {
                  menu.classList.toggle('hidden');
                }
              }}
              className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-lg"
            >
              <GraduationCap size={14} />
              <span>Courses</span>
            </button>
            <div className="hidden absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl z-50">
              <div className="p-1.5 max-h-60 overflow-y-auto">
                {courses.map((course) => (
                  <Link
                    key={course.path}
                    to={course.path}
                    onClick={(e) => {
                      const menu = e.currentTarget.closest('.hidden');
                      if (menu) menu.classList.add('hidden');
                    }}
                    className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
                      location.pathname === course.path
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepNavigation;
