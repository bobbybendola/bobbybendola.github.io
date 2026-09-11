import { siteConfig } from "@/config/siteConfig";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { MissionGrid } from "@/components/sections/MissionGrid";
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <Hero content={siteConfig.hero} />

      <main>
        <Bio content={siteConfig.bio} />
        <MissionGrid heading={siteConfig.missionSectionHeading} missions={siteConfig.missions} />
        <Contact content={siteConfig.contact} />
      </main>

      <Footer social={siteConfig.social} copyrightLine={siteConfig.footer.copyrightLine} />
    </div>
  );
}
