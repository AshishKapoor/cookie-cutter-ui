import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import "@/assets/styles/globals.css";
import { ModeToggle } from "./components/mode-toggle";
import Typography from "./components/ui/typography";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="absolute top-4 right-4">
        <ModeToggle />
        <img
          src="app/assets/images/logo/logo.webp"
          alt="Vite logo"
          className="h-8 w-8"
        />
      </div>
      <div className="flex flex-col h-screen items-center justify-center bg-background">
        <Typography variant="h1" className="text-2xl">
          Hello World!
        </Typography>
        <Button>Hello</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
