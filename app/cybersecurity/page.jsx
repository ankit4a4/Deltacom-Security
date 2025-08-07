"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberHero from "@/components/cybersecurity/CyberHero";
import CyberLandscape from "@/components/cybersecurity/CyberLandscape";
import CybersecurityServices from "@/components/cybersecurity/CybersecurityServices";
import IndustrySpecific from "@/components/cybersecurity/IndustrySpecific";
import InfrastructureServices from "@/components/cybersecurity/InfrastructureServices";
import CyberCTA from "@/components/cybersecurity/CyberCTA";

export default function Cybersecurity() {
  return (
    <>
      <CyberHero />
      <CyberLandscape />
      <CybersecurityServices />
      <IndustrySpecific />
      <InfrastructureServices />
      <CyberCTA />
    </>
  );
}
