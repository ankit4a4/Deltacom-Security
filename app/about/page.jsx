"use client";

import AboutHero from "@/components/about/AboutHero";
import OurMission from "@/components/about/OurMission";
import OurValues from "@/components/about/OurValues";
import OurJourney from "@/components/about/OurJourney";
import ServingtheWashington from "@/components/about/ServingtheWashington";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <div>
      <AboutHero />
      <OurMission />
      <OurValues />
      <OurJourney />
      <ServingtheWashington />
      <AboutCTA />
    </div>
  );
}
