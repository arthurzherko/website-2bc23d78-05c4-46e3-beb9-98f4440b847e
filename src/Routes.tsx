import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Index } from "@/pages";
import { Fun } from "@/pages/fun";
import { About } from "@/pages/about";
import { SillyHeader } from "@/components/silly-header";
import { SillyFooter } from "@/components/silly-footer";

export function Routes() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <SillyHeader />
      <main className="flex-1">
        <RouterRoutes>
          <Route path="/" element={<Index />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/about" element={<About />} />
        </RouterRoutes>
      </main>
      <SillyFooter />
    </div>
  );
}