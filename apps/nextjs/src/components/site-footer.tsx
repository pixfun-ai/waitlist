import * as React from "react";

import { cn } from "@saasfly/ui";

// import { ModeToggle } from "~/components/mode-toggle";

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn(className)}>
      <div className="container py-3 pt-6">
        <div className="text-2xl text-[#A6A6A6]">Copyright © 2024 Pixfun</div>
        {/* <ModeToggle /> */}
      </div>
    </footer>
  );
}
