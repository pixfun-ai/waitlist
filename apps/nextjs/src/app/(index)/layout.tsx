import { Suspense } from "react";

import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback="...">
        <NavBar />
      </Suspense>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
