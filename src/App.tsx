import { siteConfig } from "@/config/siteConfig";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { MissionGrid } from "@/components/sections/MissionGrid";


export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Navbar brandName={siteConfig.brandName} items={siteConfig.nav.items} />

      <main>
        <Hero content={siteConfig.hero} />
        <Bio content={siteConfig.bio} />
        <MissionGrid heading={siteConfig.missionSectionHeading} missions={siteConfig.missions} />
        {/* // TODO(sections): drop a new <Section /> here for e.g. a timeline or testimonials */}
      </main>

      <Footer items={siteConfig.nav.items} social={siteConfig.social} copyrightLine={siteConfig.footer.copyrightLine} />
    </div>
  );
}
