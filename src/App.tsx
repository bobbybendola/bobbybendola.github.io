import { siteConfig } from "@/config/siteConfig";

import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { MissionGrid } from "@/components/sections/MissionGrid";
import  { Contact } from "@/components/sections/Contact";


export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      

      <main>
        <Hero content={siteConfig.hero} />
        <Bio content={siteConfig.bio} />
        <MissionGrid heading={siteConfig.missionSectionHeading} missions={siteConfig.missions} />
        <Contact content={siteConfig.contact} />
      </main>

      <Footer 
      social={siteConfig.social} 
      copyrightLine={siteConfig.footer.copyrightLine} />
    </div>
  );
}
