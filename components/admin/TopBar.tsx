import { User } from "lucide-react";

export function TopBar() {
  return (
    <header className="h-16 bg-background border-b border-foreground/10 fixed top-0 right-0 left-64 z-40">
      <div className="h-full flex items-center justify-end px-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-soft-accent flex items-center justify-center">
            <User className="w-4 h-4 text-foreground" />
          </div>
          <span className="font-sans text-sm font-light text-foreground">
            Admin
          </span>
        </div>
      </div>
    </header>
  );
}

