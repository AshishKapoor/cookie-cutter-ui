import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import "@/assets/styles/globals.css";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex h-screen items-center justify-center bg-background">
        <Button>Click Me</Button>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
