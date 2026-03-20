import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Lab805 from "./pages/Lab805";
import InsideLab from "./pages/InsideLab";
import SteamTunnels from "./pages/SteamTunnels";
import FieldNotes from "./pages/FieldNotes";
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";

const queryClient = new QueryClient();

const isLegalSubdomain = window.location.hostname.startsWith("legal.");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLegalSubdomain ? <Navigate to="/legal" replace /> : <Index />} />
          <Route path="/lab805" element={<Lab805 />} />
          <Route path="/lab805/inside" element={<InsideLab />} />
          <Route path="/lab805/steam-tunnels" element={<SteamTunnels />} />
          <Route path="/field-notes/no-actors-no-crew" element={<FieldNotes />} />
          <Route path="/legal" element={<Legal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
