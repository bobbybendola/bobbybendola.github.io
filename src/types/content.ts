// Every piece of copy, every link, and every image reference on the site
// is typed here, then supplied by src/config/siteConfig.ts. Components
// only ever consume these shapes as props — they never import copy
// directly, so content can be swapped (or later fetched from a CMS/API)
// without touching layout code.

export type LucideIconName = "Linkedin" | "Github" | "GraduationCap"  |  "DevPost";

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIconName;
}

export interface ImageAsset {
  src: string;
  alt: string;
  /** width / height, used to reserve layout space and avoid shift */
  aspectRatio: `${number} / ${number}`;
}

export interface HeroContent {
  greeting: string; // e.g. "Hi, I'm"
  name: string;
  subheading: string;
  floatingImage: ImageAsset;
}

export interface BioContent {
  heading: string; // "An Engineer on a Mission."
  paragraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  photo: ImageAsset;
  photoCaption: string;
}

export interface MissionLink {
  label: string;
  url: string;
  icon?: string;
}

export interface MissionItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  links?: string;
}

export interface ProjectImage extends ImageAsset {
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectTeammate {
  name: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  caption: string;
  images: ProjectImage[];
  what: string[];
  how: string[];
  links: ProjectLink[];
  teammates: ProjectTeammate[];
}

export interface ProjectsContent {
  heading: string;
  featured: ProjectItem[];
  labsHeading: string;
  labs: ProjectItem[];
}

export interface SiteConfig {
  meta: {
    title: string;
  };
  brandName: string;
  nav: NavItem[];
  hero: HeroContent;
  bio: BioContent;
  missionSectionHeading: string;
  missions: MissionItem[];
  projects: ProjectsContent;
  social: SocialLink[];
  footer: {
    copyrightLine: string;
  };
  contact: ContactContent;
}

export interface ContactContent {
  title: string;
  description: string;
  email: string;
}