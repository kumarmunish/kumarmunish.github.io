import { ThemeProvider } from "./components/ThemeProvider";
import Portfolio from "./components/Portfolio";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Portfolio />
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
