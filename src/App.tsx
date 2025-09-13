import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import FindHelpPage from "./pages/FindHelpPage";
import BeHelperPage from "./pages/BeHelperPage";
import EventsPage from "./pages/EventsPage";
import ImpactPage from "./pages/ImpactPage";
import RequestHelpPage from "./pages/RequestHelpPage";
import QuickChatPage from "./pages/QuickChatPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/find-help" element={<FindHelpPage />} />
            <Route path="/be-helper" element={<BeHelperPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/request-help" element={<RequestHelpPage />} />
            <Route path="/quick-chat" element={<QuickChatPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
