import { siteConfig } from "@/config/siteConfig";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Projects } from "@/components/sections/Projects";

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <Header />
      <main>
        <Projects content={siteConfig.projects} />
      </main>
      <Footer social={siteConfig.social} copyrightLine={siteConfig.footer.copyrightLine} />
    </div>
  );
}
