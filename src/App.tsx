import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import VisualizerPage from "./pages/Visualizer";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/visualizer"} component={VisualizerPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * App Component
 * 
 * Design Philosophy: Minimalismo Brutalist com Movimento Orgânico
 * - Tema escuro (dark) como padrão
 * - Paleta monocromática: preto (#000000) e branco (#FFFFFF)
 * - Tipografia ousada com Poppins 900 para display
 * - Espaço negativo generoso
 * - Animações suaves e naturais
 */

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
