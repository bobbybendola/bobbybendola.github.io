import type { SiteConfig } from "@/types/content";

import chemECAR from "../assets/images/chem_e_car/chem_e_car_team25.jpg";
import chemEcar_logo from "../assets/images/chem_e_car/chem_e_car_at_uci_logo.jpeg";
import lumnin_car  from "../assets/images/chem_e_car/luminol_car.png";
import lumnin_car_pcb  from "../assets/images/chem_e_car/luminol_car_pcb.png";

import ieeeOPS from "../assets/images/ieee/ieee_ops.jpg";
import ieeeLogo from "../assets/images/ieee/ieee_logoName.png";
import cap_PCB from "../assets/images/ieee/capstone_pcbpng.png";
import cap_rover from "../assets/images/ieee/capstone_rover.jpg";
import ieee_ws from "../assets/images/ieee/WSpng.png";
import ieee_mmp3 from "../assets/images/ieee/mmp3.png";
import ieee_mmp3_sch from "../assets/images/ieee/ieee_mp3_sch.png";
import ieee_stopWatch from "../assets/images/ieee/OPS_digital_stopwatch_close_up.jpeg";
import ieee_555piano from "../assets/images/ieee/555_Keyboard .png";

import solarCarIcon from "../assets/images/solar_car/Solar Car Icon.png";
import solarCar from "../assets/images/solar_car/compressed team photo.jpg";
import solarCarCelebrateUCI from "../assets/images/solar_car/celebrate_uci.jpg";
import solarCarPowerPCB from "../assets/images/solar_car/power_pcb.png";
import solarCarFullSize from "../assets/images/solar_car/full_size_car.jpg";

import esc from "../assets/images/esc/esc_lifetank25_4.jpg";
import esc2 from "../assets/images/esc/esc_lifetank25_1.jpg";
import esc_logo from "../assets/images/esc/esc_logo.png"
import escLIfeTankWin  from "../assets/images/esc/esc_lifetank25_3.jpg";

import asic from "../assets/images/landing/ASIC-Design-2.jpg";

import riscv_1 from "../assets/images/RISC_V/Processor_IO.png";
import riscv_2 from "../assets/images/RISC_V/Waveform_checks.png";

import FRND_arch from "../assets/images/FRND/arch_diagram.png";
import FRND_drone from "../assets/images/FRND/drone_picture.png";

import berkAI from "../assets/images/hacks/berk_ai_26.jpg";
import pipedowntrain from "../assets/images/hacks/training_pipe_defect.png";

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

  goatcounterCode: "stevenk",

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
    intro: "Currently building with a FPGAs, and focusing on small-scale SIMD optimizations and CUDA programming.",
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
          { label: "DevPost", href: "https://devpost.com/software/frnd-field-neighbouring-relay-data-points" }, 
          { label: "YouTube", href: "https://www.youtube.com/watch?v=904H0sNUbPI" }
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

      //RC- Rover
      {
        id: "OPS Rover",
        title: "DT - Capstone_Rover",
        caption: "A Modified version of the UCI IEEE OPS Rover (25-26) (Featuring Ferb from Phineas and Ferb). Developed from breadboard to PCB.",
        images: [ {src: cap_PCB , alt: "cap_PCB" , aspectRatio: " 16 / 9" } ,
                  {src: cap_rover , alt: "cap_rover", aspectRatio: "16 / 9" } 
        ], 
        what: [],
        how: [],
        links: [
          { label: "GitHub", href: "https://github.com/bobbybendola/IEEE_OPS_Capstone_Rover" }, 
          { label: "YouTube", href: "https://youtube.com/watch/BwKgsygS7Fk" }
        ],
        teammates: [
          { name: "UCI IEEE", href: "https://www.linkedin.com/company/ieee-uci/" }
        ],
      }, 

      //Mini-Weather Station
      {
        id: "weather-station",
        title: "Mini Weather Station",
        caption: "Engineered a portable mini weather station powered by a 9V battery, integrating an AHT20 temperature and humidity sensor via I2C with an LCD interface, and deployed a custom ESP32 Wi-Fi protocol for wireless inter-microcontroller data telemetry..",
        images: [ {src: ieee_ws, alt: "ieee_ws" , aspectRatio: " 16 / 9" }        
        ], 
        what: [],
        how: [],
        links: [
          { label: "UCI IEEE", href: "https://ieee.ics.uci.edu/" }
        ],
        teammates: [
          { name: "UCI IEEE", href: "https://www.linkedin.com/company/ieee-uci/" }
        ],
      }, 

      //Mini-digital stopwatch
      {
        id: "digital-stopwatch",
        title: "Digital StopWatch",
        caption: "Programmed interrupt-driven push-button controls on an ESP32 to eliminate continuous polling, utilizing hardware interrupts on falling edge signals to trigger real-time countdown logic across a TM1637 7-segment display and piezo buzzer.",
        images: [ {src: ieee_stopWatch, alt: "ieee_stopWatch" , aspectRatio: " 16 / 9" }        
        ], 
        what: [],
        how: [],
        links: [
          { label: "GitHub", href: "https://github.com/bobbybendola/IEEE_OPS_Digital-Stopwatch" }
        ],
        teammates: [
          { name: "UCI IEEE", href: "https://www.linkedin.com/company/ieee-uci/" }
        ],
      }, 

      //Mini-MP3 player
      {
        id: "mini MP3",
        title: "Standalone Mini MP3 Player",
        caption: "A mini mp3 player, with functionality to change music with a SD card, play pause and replay music tracks in real-time as well. Utilizing DFPlayer Mini module to store audio files using an SD Card, and uisng HardwareSerial Library for communication over UART on the ESP32.",
        images: [ {src: ieee_mmp3 , alt: "ieee_mmp3 " , aspectRatio: " 16 / 9" },
          {src: ieee_mmp3_sch  , alt: "ieee_mmp3 " , aspectRatio: " 16 / 9" }        
        ], 
        what: [],
        how: [],
        links: [
          { label: "GitHub", href: "https://github.com/bobbybendola/IEEE_OPS_Mini_MP3_Player" }
        ],
        teammates: [
          { name: "UCI IEEE", href: "https://www.linkedin.com/company/ieee-uci/" }
        ],
      }, 

      //555 Timer Piano
      {
        id: "mini MP3",
        title: "555 Timer Piano",
        caption: "handheld three-key musical keyboard built from initial breadboard verification to a custom PCB layout, modulating the 555 timer IC's oscillating frequency via variable resistance and capacitor discharge rates to produce distinct musical notes.",
        images: [ {src: ieee_555piano , alt: "ieee_mmp3 " , aspectRatio: " 16 / 9" }     
        ], 
        what: [],
        how: [],
        links: [
          { label: "UCI IEEE", href: "https://ieee.ics.uci.edu/" }
        ],
        teammates: [
          { name: "UCI IEEE", href: "https://www.linkedin.com/company/ieee-uci/" }
        ],
      }, 

      //Berk AI 
      {
        id: "Berk AI ",
        title: "Forge - 1st place-Redis Track UC Berkeley  AI Hack 2026", 
        caption: "Engineered an AI infrastructure pipeline combining RedisVL HNSW vector search, RedisJSON, and FastAPI to synthesize and verify executable tools with Claude Opus 4, winning 1st place and Best Technical Implementation at the UC Berkeley AI Hackathon. ",
        images: [ {src:  berkAI   , alt: " berkAI " , aspectRatio: " 16 / 9" }
                  
        ], 
        what: [],
        how: [],
        links: [
          { label: "DevPost", href: "https://devpost.com/software/forge-z8v4qm#updates" },
          { label: "GitHub", href: "https://github.com/bobbybendola/forge-z8v4qm" }, 
          { label: "Youtube", href: "https://www.youtube.com/watch?v=4K3G6_XONPU" }, 
        ],
        teammates: [
          { name: "Arjun Vivek", href: "https://www.linkedin.com/in/arjun-vivek/" }

        ],
      }, 

      //pipedown Berk AI 
      {
        id: "Berk AI ",
        title: "Locally trained Kaggle YOLOv8n Pipe Defect CV Model", 
        caption: "Supported Team PipeDown post UCB AI 2026 by creating an optimized YOLOv8n object detection training on an Apple M4 Mac mini, routing backpropagation through the 10-core GPU via Metal/MPS to achieve high-accuracy pipe defect detection.",
        images: [ {src: pipedowntrain  , alt: " berkAI pipedown training" , aspectRatio: " 16 / 9" }
                  
        ], 
        what: [],
        how: [],
        links: [
          { label: "DevPost PipeDown", href: "https://devpost.com/software/tbd-nprbw3" },
          { label: "GitHub", href: "https://github.com/bobbybendola/PipeDefectDectectionModel" }, 
          { label: "YouTube", href: "https://www.youtube.com/watch?v=AaJa3gm1w9M" }, 
        ],
        teammates: [
          { name: "Aditi Varia", href: "https://www.linkedin.com/in/aditi-varia/" }, 
          { name: "Shrujan Sriram", href: "https://www.linkedin.com/in/shrujansriram/" }, 
           { name: "Abhinav Gondesi", href: "https://www.linkedin.com/in/abhinav-gondesi-b5696b303/" }

        ],
      }, 

      //ESC LifeTank FingerPath 
      {
        id: "ESC LifeTank ",
        title: "FingerPath- Winner of ESC LifeTank Engineering Pitch Competition", 
        caption: "Pitched and secured a first-place finish at UC's Engineering Student Council startup competition with team FingerPath, developing a functional prototype of a wearable haptic navigation glove that translates mapping cues into tactile hand vibrations as an intuitive alternative to traditional screen and audio displays.",
        images: [ {src: escLIfeTankWin   , alt: " escLIfeTankWin " , aspectRatio: " 16 / 9" }
                  
        ], 
        what: [],
        how: [],
        links: [
          { label: "LinkedIn", href: "https://lnkd.in/p/gmEtqC-T" }
        ],
        teammates: [
          { name: "Anthony Heang", href: "https://www.linkedin.com/in/anthony-heang/" }, 
          { name: "Andrew Heang", href: "https://www.linkedin.com/in/andrew-heang/" }, 
           { name: "Shrish Potla", href: "https://www.linkedin.com/in/shrishpotla/" },
           { name: "Tobias Fabro", href: "https://www.linkedin.com/in/tobias-fabro/" } 

        ],
      }, 


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
