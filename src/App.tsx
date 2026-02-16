import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Enroll from "./pages/Enroll";
import ComputerFundamentals from "./pages/courses/ComputerFundamentals";
import HtmlCSS from "./pages/courses/HtmlCSS";
import JavaScriptEssentials from "./pages/courses/JavaScriptEssentials";
import ReactDevelopment from "./pages/courses/ReactDevelopment";
import FullStackDevelopment from "./pages/courses/FullStackDevelopment";
import UIUXDesign from "./pages/courses/UIUXDesign";
import GraphicDesign from "./pages/courses/GraphicDesign";
import VideoEditing from "./pages/courses/VideoEditing";
import FrontendAdvanced from "./pages/courses/FrontendAdvanced";
import MobileAppDevelopment from "./pages/courses/MobileAppDevelopment";
import BackendEngineering from "./pages/courses/BackendEngineering";
import DataAnalytics from "./pages/courses/DataAnalytics";

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
          <Route path="/courses/computer-fundamentals" element={<ComputerFundamentals />} />
          <Route path="/courses/html-css" element={<HtmlCSS />} />
          <Route path="/courses/javascript-essentials" element={<JavaScriptEssentials />} />
          <Route path="/courses/react-development" element={<ReactDevelopment />} />
          <Route path="/courses/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/courses/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/courses/graphic-design" element={<GraphicDesign />} />
          <Route path="/courses/video-editing" element={<VideoEditing />} />
          <Route path="/courses/frontend-advanced" element={<FrontendAdvanced />} />
          <Route path="/courses/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/courses/backend-engineering" element={<BackendEngineering />} />
          <Route path="/courses/data-analytics" element={<DataAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
