"use client";
import * as React from "react";
import { BackgroundElements } from "./BackgroundElements";
import { ContentSection } from "./ContentSection";
import { FeatureCard } from "./FeatureCard";
import { LanguageIcon } from "./Icons";

export default function HeroSection() {
  return (
    <section className="overflow-hidden relative rounded-3xl h-[858px] w-[1320px] max-md:w-full max-md:h-auto max-md:min-h-screen">
      <BackgroundElements />

      <ContentSection />

      <FeatureCard
        className="absolute left-[130px] top-[441px] max-md:relative max-md:top-0 max-md:left-0 max-md:mx-auto max-md:my-5"
        title="Global Job Opportunities"
        description="Access jobs in top healthcare destinations."
      />

      <FeatureCard
        className="absolute left-[872px] top-[516px] max-md:relative max-md:top-0 max-md:left-0 max-md:mx-auto max-md:my-5"
        title="Language & Certification Support"
        description="Meet employer & visa language requirements."
        icon={<LanguageIcon />}
      />

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/97cd5a1ca556c29344cb9c56f96d0c24c206d566"
        alt="Healthcare professional"
        className="absolute h-[518px] left-[477px] top-[340px] w-[366px] max-md:block max-md:relative max-md:left-0 max-md:mx-auto max-md:my-5 max-md:w-4/5 max-md:h-auto"
      />
    </section>
  );
}
