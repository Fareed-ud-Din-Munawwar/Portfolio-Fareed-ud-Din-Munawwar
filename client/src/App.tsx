import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { useEffect, useState } from "react";

// Get base path from Vite's import.meta.env.BASE_URL or default to "/"
const BASE_PATH = import.meta.env.BASE_URL || "/";

// Helper function to strip base path from pathname
function stripBasePath(pathname: string): string {
  if (BASE_PATH !== "/" && pathname.startsWith(BASE_PATH)) {
    return pathname.slice(BASE_PATH.length - 1) || "/";
  }
  return pathname;
}

// Helper function to add base path to path
function addBasePath(path: string): string {
  if (BASE_PATH === "/") return path;
  return BASE_PATH.slice(0, -1) + (path.startsWith("/") ? path : "/" + path);
}

// Custom location hook that handles base path for GitHub Pages
function useBasePathLocation(): [string, (path: string, ...args: any[]) => void] {
  const [location, setLocationState] = useState(() => stripBasePath(window.location.pathname));
  
  useEffect(() => {
    const updateLocation = () => {
      setLocationState(stripBasePath(window.location.pathname));
    };
    
    window.addEventListener("popstate", updateLocation);
    return () => window.removeEventListener("popstate", updateLocation);
  }, []);
  
  const setLocation = (path: string) => {
    const newPath = addBasePath(path);
    window.history.pushState(null, "", newPath);
    setLocationState(path);
  };
  
  return [location, setLocation];
}

function AppRouter() {
  return (
    <Router hook={useBasePathLocation}>
      <Switch>
        <Route path="/" component={Home} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppRouter />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
