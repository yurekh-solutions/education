import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Enroll from "./pages/Enroll";
import AIMachineLearning from "./pages/courses/AIMachineLearning";
import FullStackDevelopment from "./pages/courses/FullStackDevelopment";
import FrontendMastery from "./pages/courses/FrontendMastery";
import BackendEngineering from "./pages/courses/BackendEngineering";
import UIUXDesign from "./pages/courses/UIUXDesign";
import MobileAppDevelopment from "./pages/courses/MobileAppDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/courses/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/courses/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/courses/frontend-mastery" element={<FrontendMastery />} />
          <Route path="/courses/backend-engineering" element={<BackendEngineering />} />
          <Route path="/courses/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/courses/mobile-app-development" element={<MobileAppDevelopment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
