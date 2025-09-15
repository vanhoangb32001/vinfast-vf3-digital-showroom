import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingChat } from "@/components/floating-chat";
import Index from "./pages/Index";
import ChiTietXe from "./pages/ChiTietXe";
import DatCoc from "./pages/DatCoc";
import NotFound from "./pages/NotFound";
import { ContactForm } from "./components/ContactForm";
import { FloatingButtons } from "./components/FloatingButtons";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="vinfast-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/chi-tiet-xe" element={<ChiTietXe />} />
                <Route path="/dat-coc" element={<DatCoc />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ContactForm />
              <FloatingButtons />
            </main>
            <Footer />
            <FloatingChat />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
