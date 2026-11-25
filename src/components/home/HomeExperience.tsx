"use client";

import { MotionConfig } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { EnquiryDrawer } from "@/components/enquiry/EnquiryDrawer";
import { Hero } from "@/components/hero/Hero";
import { OpeningBand } from "@/components/home/OpeningBand";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteNav } from "@/components/nav/SiteNav";

export function HomeExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [occasion, setOccasion] = useState<string | undefined>(undefined);

  const openEnquiry = useCallback((next?: string) => {
    setOccasion(next);
    setMenuOpen(false);
    setEnquiryOpen(true);
  }, []);

  const closeEnquiry = useCallback(() => setEnquiryOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || enquiryOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, enquiryOpen]);

  return (
    <MotionConfig reducedMotion="user">
      <SiteNav
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onEnquire={() => openEnquiry()}
      />
      <main>
        <Hero onEnquire={() => openEnquiry("Wedding feast")} />
        <OpeningBand onEnquire={openEnquiry} />
      </main>
      <SiteFooter onEnquire={() => openEnquiry()} />
      <EnquiryDrawer open={enquiryOpen} occasion={occasion} onClose={closeEnquiry} />
    </MotionConfig>
  );
}
