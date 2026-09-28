"use client";

import { useState, useEffect } from "react";
import LandingNavbar from "@/components/layout/LandingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import WhyClimateSection from "@/components/landing/WhyClimateSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AiMlSection from "@/components/landing/AiMlSection";
import ClimateRiskSection from "@/components/landing/ClimateRiskSection";
import DashboardPreviewSection from "@/components/landing/DashboardPreviewSection";
import GoalsSection from "@/components/landing/GoalsSection";
import Sdg13Section from "@/components/landing/Sdg13Section";
import CtaSection from "@/components/landing/CtaSection";
import LandingFooter from "@/components/layout/LandingFooter";

export default function HomePage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Apply dark mode class to html element
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <LandingNavbar isDark={isDark} onToggleDark={() => setIsDark(!isDark)} />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhyClimateSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AiMlSection />
        <ClimateRiskSection />
        <DashboardPreviewSection />
        <GoalsSection />
        <Sdg13Section />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  );
}
