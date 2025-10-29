
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import CanalizationGrates from "./pages/equipment/CanalizationGrates";
import Grinders from "./pages/equipment/Grinders";
import AuxiliaryEquipment from "./pages/equipment/AuxiliaryEquipment";
import WaterTreatment from "./pages/equipment/WaterTreatment";
import Settlers from "./pages/equipment/Settlers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/equipment/canalization-grates" element={<CanalizationGrates />} />
          <Route path="/equipment/grinders" element={<Grinders />} />
          <Route path="/equipment/auxiliary" element={<AuxiliaryEquipment />} />
          <Route path="/equipment/water-treatment" element={<WaterTreatment />} />
          <Route path="/equipment/settlers" element={<Settlers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;