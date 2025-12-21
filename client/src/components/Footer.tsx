import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-center mb-4">
          © {new Date().getFullYear()} Fareed-ud-Din Munawwar. All rights reserved.
        </p>
        <p className="flex items-center text-sm text-muted-foreground/60">
          Built with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> using React, Tailwind & Motion
        </p>
      </div>
    </footer>
  );
}
