"use client";

import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

/**
 * Main Header Component
 * Switches between Desktop and Mobile layouts based on screen size
 */
export function Header() {
  return (
    <>
      {/* Desktop Header (visible on lg+) */}
      <DesktopHeader />

      {/* Mobile Header (visible on < lg) */}
      <MobileHeader />
    </>
  );
}

