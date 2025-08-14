import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import LandingPage from "./pages/LandingPage";
import MedBot from "./pages/MedBot";
import OnlineConsultation from "./pages/OnlineConsultation";
import OfflineConsultation from "./pages/OfflineConsultation";
import FollowUp from "./pages/FollowUp";
import DoctorReader from "./pages/DoctorReader";
import CallTelMed from "./pages/CallTelMed";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/medbot" element={<MedBot />} />
          <Route path="/online-consultation" element={<OnlineConsultation />} />
          <Route path="/offline-consultation" element={<OfflineConsultation />} />
          <Route path="/follow-up" element={<FollowUp />} />
          <Route path="/doctor-reader" element={<DoctorReader />} />
          <Route path="/call-telmed" element={<CallTelMed />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
