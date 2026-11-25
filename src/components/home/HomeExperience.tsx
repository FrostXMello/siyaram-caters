"use client";

import { MotionConfig } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { EnquiryDrawer } from "@/components/enquiry/EnquiryDrawer";
import { Hero } from "@/components/hero/Hero";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteNav } from "@/components/nav/SiteNav";
import { BrandStory } from "@/components/sections/BrandStory";
import { BrandValues } from "@/components/sections/BrandValues";
import { CateringSection } from "@/components/sections/CateringSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EventsExplorer } from "@/components/sections/EventsExplorer";
import { ExploreSiyaram } from "@/components/sections/ExploreSiyaram";
import { GallerySection } from "@/components/sections/GallerySection";
import { RestaurantSection } from "@/components/sections/RestaurantSection";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { SweetsSection } from "@/components/sections/SweetsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VenuesSection } from "@/components/sections/VenuesSection";

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
        <BrandStory onEnquire={openEnquiry} />
        <ExploreSiyaram />
        <CateringSection onEnquire={openEnquiry} />
        <SweetsSection onEnquire={openEnquiry} />
        <RestaurantSection onEnquire={openEnquiry} />
        <VenuesSection onEnquire={openEnquiry} />
        <EventsExplorer onEnquire={openEnquiry} />
        <ServiceAreas />
        <GallerySection />
        <BrandValues />
        <TestimonialsSection />
        <StoriesSection />
        <ContactSection onEnquire={openEnquiry} />
      </main>
      <SiteFooter onEnquire={() => openEnquiry()} />
      <EnquiryDrawer open={enquiryOpen} occasion={occasion} onClose={closeEnquiry} />
    </MotionConfig>
  );
}
