"use client";

import React, { useState, useEffect } from "react";
import { SearchModal } from "@/components/ui/SearchModal";

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleOpenSearch = () => {
      setIsSearchOpen(true);
    };

    window.addEventListener('openSearch', handleOpenSearch);

    return () => {
      window.removeEventListener('openSearch', handleOpenSearch);
    };
  }, []);

  return (
    <>
      {children}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

