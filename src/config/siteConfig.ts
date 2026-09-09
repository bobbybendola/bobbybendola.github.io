import type { SiteConfig } from "@/types/content";
import chemECAR from "../assets/images/chem_e_car/chem_e_car_team25.jpg";
import chemEcar_logo from "../assets/images/chem_e_car/chem_e_car_at_uci_logo.jpeg";

import ieeeOPS from "../assets/images/ieee/ieee_ops.jpg";

import solarCar from "../assets/images/solar_car/compressed team photo.jpg";
import solarCarCelebrateUCI from "../assets/images/solar_car/celebrate_uci.jpg";

import esc from "../assets/images/esc/esc_lifetank25_4.jpg";
import esc2 from "../assets/images/esc/esc_lifetank25_1.jpg";

import asic from "../assets/images/landing/ASIC-Design-2.jpg";



/**
 * siteConfig.ts
 * ─────────────
 * Every string, link, and image on the site lives here. To rebrand,
 * update copy, or point at new assets, edit this file only — no
 * component in src/components should need to change.
 *
 * // TODO(api): this object is a natural place to hook up a headless
 * // CMS or `fetch('/api/site-content')` later; components already
 * // consume it as plain props, so swapping a static import for an
 * // async fetch + context provider is a drop-in change.
 */
export const siteConfig: SiteConfig = {
  meta: {
    title: "Steven Kuzhipala — Computer Engineer, UCI",
  },

  brandName: "Steven Kuzhipala — Computer Engineer, UCI",

  nav: {
    items: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Resume", href: "/resume" },
      { label: "Contact", href: "/contact" },
    ],
  },

  hero: {
    greeting: "Hi, I'm",
    name: "Steven Kuzhipala",
    subheading:
      "",
    floatingImage: {
      src: asic,
      alt: "ASIC Waveform close up ",
      aspectRatio: "16 / 9",
    },
  },

  bio: {
    heading: "Learning Everyday.",
    paragraphs: [
"I'm a Computer Engineering student at UC Irvine focused on digital logic, computer architecture, and embedded systems.", 

"Currently, I'm working on scaling matrix multiplication from scratch, building SystemVerilog deep-learning accelerators on FPGAs, and writing real-time C++ control firmware.", 

"Outside of coursework, I teach embedded systems and low-level C++ through hands-on hardware bring-up.", 

"I love learning about new tech, especially AI/ML agentic workflows, and edge computing, and thrive when collaborating with large engineering teams.", 

"Actively seeking opportunities in ASIC design, FPGA prototyping, and embedded firmware development."
  ],

    ctaLabel: "Get in Touch",
    ctaHref: "/contact",
    // Placeholder — swap for the real photo (do not hotlink someone
    // else's live site asset).
    photo: {
      src: solarCarCelebrateUCI,
      alt: "Celebrate UCI 2025",
      aspectRatio: "4 / 3",
    },
    photoCaption: "At Celebrate UCI 2025 for Solar Car!",
  },

  missionSectionHeading: "Experience",

  missions: [
    {
      id: "embedded-cheme-car",
      title: "Embedded Systems Engineer — UCI AIChE Chem-E Car",
      description:
        "Developed C++ control firmware integrating color sensors, motor drivers, and linear actuators. Designed and assembled the Luminol v1 custom PCB and optimized I2C communication to cut sensor latency by 50%.",
      image: chemECAR , 
      icon: chemEcar_logo  ,
      links: "https://www.aicheuci.org/chem-e-projects/chem-e-car"
    },
    {
      id: "motor-engineer-zotsun",
      title: "Motor Engineer — UCI ZotSun Solar Racing",
      description:
        "Assembled, soldered, and stress-tested motor-contactor PCBs from Altium schematics. Integrated high-voltage power systems across a 96V battery, motor controller, and MPPTs.",
      image: solarCar
    },

    {
      id: "lab-instructor-ieee",
      title: "Embedded Systems Lab Instructor — UCI IEEE OPS",
      description:
        "Instructed engineering students in low-level C++, ESP32 peripherals, communication protocols, PCB-build-up, soldering, and hardware debugging. Deliever lectures on these topics periodically, creating engaging lecture content and activties",
        image: ieeeOPS  
    },

    {
      id: "technical-director-esc",
      title: "Technical Director — UCI Engineering Student Council",
      description:
        "Leading web development for the ESC website and the EScan attendance management platform using Next.js, QR-based registration, and automated backend infrastructure.",
      image: esc 
    },
    {
      id: "education",
      title: "Education — UC Irvine",
      description:
        "B.S. Computer Engineering. Dean's Honor List.",
        image: esc2  
    },
  ],

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/stevenkuzhipala", icon: "Linkedin" },
    { label: "GitHub", href: "https://github.com/bobbybendola", icon: "Github" },
    { label: "Devpost", href: "https://devpost.com/steven-k-biji", icon: "DevPost" },
  ],

  footer: {
    copyrightLine: "©2026 — Steven Kuzhipala",
  },
};
