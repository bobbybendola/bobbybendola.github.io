import type { SiteConfig } from "@/types/content";

import chemECAR from "../assets/images/chem_e_car/chem_e_car_team25.jpg";
import chemEcar_logo from "../assets/images/chem_e_car/chem_e_car_at_uci_logo.jpeg";
import lumnin_car  from "../assets/images/chem_e_car/luminol_car.png";
import lumnin_car_pcb  from "../assets/images/chem_e_car/luminol_car_pcb.png";

import ieeeOPS from "../assets/images/ieee/ieee_ops.jpg";
import ieeeLogo from "../assets/images/ieee/ieee_logoName.png";

import solarCarIcon from "../assets/images/solar_car/Solar Car Icon.png";
import solarCar from "../assets/images/solar_car/compressed team photo.jpg";
import solarCarCelebrateUCI from "../assets/images/solar_car/celebrate_uci.jpg";
import solarCarPowerPCB from "../assets/images/solar_car/power_pcb.png";
import solarCarFullSize from "../assets/images/solar_car/full_size_car.jpg";

import esc from "../assets/images/esc/esc_lifetank25_4.jpg";
import esc2 from "../assets/images/esc/esc_lifetank25_1.jpg";
import esc_logo from "../assets/images/esc/esc_logo.png"

import asic from "../assets/images/landing/ASIC-Design-2.jpg";

import riscv_1 from "../assets/images/RISC_V/Processor_IO.png";
import riscv_2 from "../assets/images/RISC_V/Waveform_checks.png";

import FRND_arch from "../assets/images/FRND/arch_diagram.png";
import FRND_drone from "../assets/images/FRND/drone_picture.png";



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

  nav: [
    { label: "Learning Everyday", href: "/#bio" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Get in Touch", href: "/#contact" },
  ],

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
    ctaHref: "mailto:steven.k.biji@gmail.com",
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
      image: solarCar, 
      icon: solarCarIcon   ,
      links: "https://www.ucisolarcar.org/"
    },

    {
      id: "lab-instructor-ieee",
      title: "Embedded Systems Lab Instructor — UCI IEEE OPS",
      description:
        "Instructed engineering students in low-level C++, ESP32 peripherals, communication protocols, PCB-build-up, soldering, and hardware debugging. Deliever lectures on these topics periodically, creating engaging lecture content and activties",
        image: ieeeOPS  , 
        icon: ieeeLogo, 
        links: "https://ieee.ics.uci.edu/ops/"
    },

    {
      id: "technical-director-esc",
      title: "Technical Director — UCI Engineering Student Council",
      description:
        "Leading web development for the ESC website and the EScan attendance management platform using Next.js, QR-based registration, and automated backend infrastructure.",
      image: esc, 
       icon: esc_logo, 
       links: "https://esc.eng.uci.edu/" 
    },
    {
      id: "education",
      title: "Education — UC Irvine",
      description:
        "B.S. Computer Engineering. Dean's Honor List.",
        image: esc2  
    },
  ],


  projects: {
      
      
    

    
    heading: "Projects and Builds",
    labsHeading: "Lab Notes",
    labs: [],
    featured: [

      //TISA
      {
       
        id: "TISA",
        title: "TISA: Tensor Instruction Set Architecture ",
        caption: "Architected compute-engine RTL components for a programmable deep-learning accelerator, implementing parallel multiply-accumulate datapaths and control logic in SystemVerilog, verified through AMD Vivado simulation. CURRENTLY  in the works.",
        images: [          
        ], 
        what: [],
        how: [],
        links: [
          { label: "Report", href: "https://www.vrushanganand.com/assets/TISA.pdf" },
          { label: "GitHub", href: "https://github.com/vrushang1234/ml-ecosystem" },
        ],
        teammates: [
          { name: "Vrushang Anand", href: "https://www.linkedin.com/in/vrushang-anand12/" },
           { name: "Amogh Thiagarajan", href: "https://www.linkedin.com/in/amogh-t-82133a2a5/" }
        ],
      }, 

      //CHEM E 
      {
        id: "chem-e-car",
        title: "UCI AIChE Chem-E-Car ",
        caption: "Firmware and electronic system build up (including custom-PCB debugging) for UCI's AiCHE ChemECar Team. Placed 6th and 7th place for the 2025-26 season. Designed state-based car control movement for Luminol v-1.",
        images: [ {src: lumnin_car , alt: "Luminol V-1", aspectRatio: "16 / 9" } ,
                  {src: lumnin_car_pcb , alt: "Luminol V-1 PCB", aspectRatio: "16 / 9" } 
        ], 
        what: [],
        how: [],
        links: [
          { label: "GitHub", href: "https://github.com/ganji8908/Chem-E-Car/tree/Winter_2026_Luminol_Car" },
          { label: "UCI Chem-E-Car", href: "https://www.aicheuci.org/chem-e-projects/chem-e-car" },
        ],
        teammates: [
          { name: "Emilio Arroyo", href: "https://www.linkedin.com/in/emilio-arroyo23/" },
           { name: "Rajesh Ganji", href: "https://www.linkedin.com/in/rajesh--ganji/" }
        ],
      },
      
      //RISC-V
      {
        id: "RISC - V ",
        title: "Single Cycle RISC-V Processor",
        caption: "Implemented a complete single-cycle RISC-V processor in Verilog, integrating the register file, ALU, control unit, and instruction memory, and validated data movement and control signals through Vivado simulation.",
        images: [ {src: riscv_1 , alt: "processor_IO" , aspectRatio: " 16 / 9" } ,
                  {src: riscv_2  , alt: "Waveforms", aspectRatio: "16 / 9" } 
        ], 
        what: [],
        how: [],
        links: [
          { label: "GitHub", href: "https://github.com/bobbybendola/RISC-V-Single-Cycle-Processor" }
        ],
        teammates: [
        ],
      }, 

      //FRND
      {
        id: "FRND",
        title: "FRND-Field Neighbouring Relay Data Points",
        caption: "Engineered a standalone serverless P2P mesh network using Raspberry Pi and wireless routing for emergency-response field coordination, integrating offline LLM inference via a Qualcomm UnoQ board.",
        images: [ {src: FRND_arch  , alt: "FRND architecture" , aspectRatio: " 16 / 9" } ,
                  {src: FRND_drone  , alt: "FRND Drone", aspectRatio: "16 / 9" } 
        ], 
        what: [],
        how: [],
        links: [
          { label: "GitHub", href: "https://github.com/vrushang1234/FRND" },
          { label: "DevPost", href: "https://devpost.com/software/frnd-field-neighbouring-relay-data-points" }
        ],
        teammates: [
          { name: "Vrushang Anand", href: "https://www.linkedin.com/in/vrushang-anand12/" },
          { name: "Rachit Jain" , href: " https://www.linkedin.com/in/rachit-jain27/" }, 
          { name: "Ritvik Singh" , href: " https://www.linkedin.com/in/singhritvik/" }, 
        ],
      }, 

      //SolarCar
      {
        id: "Solar Car",
        title: "Solar Car Motor Engineer",
        caption: "Integrated high-voltage wiring architecture and PCB assemblies for the ZotSun solar racing vehicle, validating circuit continuity and power distribution across a 96V system. Placed 10th of 29 teams in single occupant teams and first to finish scrutineering. ",
        images: [ {src: solarCarFullSize  , alt: "solarCarFullSize" , aspectRatio: " 16 / 9" } ,
                  {src: solarCarPowerPCB  , alt: "solarCarPowerPCB", aspectRatio: "16 / 9" } 
        ], 
        what: [],
        how: [],
        links: [
          { label: "UCI Solar Car", href: "https://www.ucisolarcar.org/" }
          
        ],
        teammates: [
          { name: "Vincent Lai", href: "https://www.linkedin.com/in/vincent-lai-b1520030a/" },
          { name: "Raiche Gutierrez" , href: " https://www.linkedin.com/in/raiche-gutierrez-b0447a2b9/" }, 
          { name: "Devin Zarate" , href: " https://www.linkedin.com/in/devin-zarate/" }, 
          { name: "Gina LeRow" , href: "https://www.linkedin.com/in/ginalerow/" }, 
          { name: "Austin Lee" , href: "https://www.linkedin.com/in/austinzhl/" }
        ],
      }, 

      //SolarCar
      {
        id: "Solar Car",
        title: "Solar Car Motor Engineer",
        caption: "Integrated high-voltage wiring architecture and PCB assemblies for the ZotSun solar racing vehicle, validating circuit continuity and power distribution across a 96V system. Placed 10th of 29 teams in single occupant teams and first to finish scrutineering. ",
        images: [ {src: solarCarFullSize  , alt: "solarCarFullSize" , aspectRatio: " 16 / 9" } ,
                  {src: solarCarPowerPCB  , alt: "solarCarPowerPCB", aspectRatio: "16 / 9" } 
        ], 
        what: [],
        how: [],
        links: [
          { label: "UCI Solar Car", href: "https://www.ucisolarcar.org/" }
          
        ],
        teammates: [
          { name: "Vincent Lai", href: "https://www.linkedin.com/in/vincent-lai-b1520030a/" },
          { name: "Raiche Gutierrez" , href: " https://www.linkedin.com/in/raiche-gutierrez-b0447a2b9/" }, 
          { name: "Devin Zarate" , href: " https://www.linkedin.com/in/devin-zarate/" }, 
          { name: "Gina LeRow" , href: "https://www.linkedin.com/in/ginalerow/" }, 
          { name: "Austin Lee" , href: "https://www.linkedin.com/in/austinzhl/" }
        ],
      }
    
    ],



  },

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/in/stevenkuzhipala", icon: "Linkedin" },
    { label: "GitHub", href: "https://github.com/bobbybendola", icon: "Github" },
    { label: "Devpost", href: "https://devpost.com/steven-k-biji", icon: "DevPost" },
  ],

  footer: {
    copyrightLine: "©2026 — Steven Kuzhipala",
  },


contact: {
  title: "Get in Touch",
  description: "Always open to connect.",
  email: "steven.k.biji@gmail.com",
},

};
