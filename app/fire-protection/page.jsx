"use client";

import FireHero from "@/components/fire/FireHero";
import SecondCounts from "@/components/fire/SecondCounts";
import RapidResponse from "@/components/fire/RapidResponse";
import ProtectionApplications from "@/components/fire/ProtectionApplications";
import CodeCompliance from "@/components/fire/CodeCompliance";
import FireCTA from "@/components/fire/FireCTA";
import FireProtectionContent from "@/components/fire/FireProtectionContent"

export default function FireProtection() {
  return (
    <>

      <FireHero />
      <SecondCounts />
      <FireProtectionContent/>
      <RapidResponse />
      <ProtectionApplications />
      <CodeCompliance />
      <FireCTA />
    </>
  );
}
