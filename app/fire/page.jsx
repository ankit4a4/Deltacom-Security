"use client";

import FireHero from "@/components/fire/FireHero";
import SecondCounts from "@/components/fire/SecondCounts";
import RapidResponse from "@/components/fire/RapidResponse";
import ProtectionApplications from "@/components/fire/ProtectionApplications";
import CodeCompliance from "@/components/fire/CodeCompliance";
import FireCTA from "@/components/fire/FireCTA";

export default function FireProtection() {
  return (
    <>

      <FireHero />
      <SecondCounts />
      <RapidResponse />
      <ProtectionApplications />
      <CodeCompliance />
      <FireCTA />
    </>
  );
}
