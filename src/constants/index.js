import { bps, klinik, artha, zoya } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  esp32,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  // {
  //     imageUrl: css,
  //     name: "CSS",
  //     type: "Frontend",
  // },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  //   {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  //   },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  //   {
  //     imageUrl: redux,
  //     name: "Redux",
  //     type: "State Management",
  //   },
  //   {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  //   },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Fullstack Developer – Klinik Setia Medika",
    company_name: "Klinik Setia Medika, Indonesia",
    icon: klinik, // custom icon
    iconBg: "#fcd5ce",
    date: "May 2025 - Jun 2025",
    points: [
      "Built a daily clinic reporting system using Next.js, covering patient visits, medical records, and doctor schedules.",
      "Implemented secure form submission and real-time data updates using server-side rendering.",
      "Improved workflow efficiency for doctors and admins with simplified UI/UX design.",
      "Collaborated with healthcare staff to automate manual reporting processes.",
    ],
  },
  {
    title: "Fullstack Developer – BPS Tasikmalaya",
    company_name: "Badan Pusat Statistik Tasikmalaya",
    icon: bps, // custom icon
    iconBg: "#cce3de",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Developed a real-time employee monitoring dashboard using native PHP and AJAX.",
      "Handled session management, secure login, and dynamic content rendering without frameworks.",
      "Enabled supervisors to track attendance, activity logs, and role-based access control.",
      "Delivered a fully functional system within tight deadlines for a government office.",
    ],
  },
  {
    title: "Fullstack Developer – Zooya Cookies",
    company_name: "Zooya Cookies, Indonesia",
    icon: zoya, // custom icon
    iconBg: "#f0efeb",
    date: "July 2025 - Sept 2025",
    points: [
      "Built a payroll system using PHP for managing employee salaries, bonuses, and deductions.",
      "Integrated monthly salary calculations, payslip generation, and approval system.",
      "Designed user-friendly admin panel for business owners to manage staff records efficiently.",
      "Helped automate Zooya's previously manual salary process into digital.",
    ],
  },
  {
    title: "Fullstack Developer – Hotel Artha Lombok",
    company_name: "Hotel Artha, Lombok, Indonesia",
    icon: artha, // custom icon
    iconBg: "#d3e4cd",
    date: "Sept 2024 - Oct 2024",
    points: [
      "Created a hotel room booking system using Next.js with modern UI and responsive design.",
      "Integrated room availability calendar, booking form, and admin dashboard.",
      "Enabled real-time room management and email confirmation for guests.",
      "Collaborated with hotel staff to understand user journey and booking process.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/bimaadam",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/bima-adam",
  },
];

export const projects = [
  {
    iconUrl: esp32, // custom icon recommended (ESP32 chip/logo)
    theme: "btn-back-orange",
    name: "ESP32 WebSocket LED Controller",
    description:
      "Created a real-time LED control system using Wemos D1 ESP32 with WebSocket protocol. Built using C++ (Arduino) and JavaScript for the web dashboard interface.",
    link: "https://github.com/bimaadam", // or demo link if any
  },
  {
    iconUrl: redux, // custom server bot icon
    theme: "btn-back-blue",
    name: "Server Monitoring Bot",
    description:
      "A bot built with TypeScript to monitor server status, CPU, and memory usage. Sends real-time alerts to Telegram for downtime or abnormal spikes.",
    link: "https://github.com/bimaadam", // update if public
  },
  {
    iconUrl: git, // AI bot style icon
    theme: "btn-back-pink",
    name: "JavaScript AI Chat Bot",
    description:
      "An experimental chatbot using vanilla JavaScript integrated with third-party AI APIs. Supports conversation flow and custom commands.",
    link: "https://github.com/bimaadam", // update if public
  },
  {
    iconUrl: car, // maybe object icon or Python logo
    theme: "btn-back-black",
    name: "Object Detection App (Private)",
    description:
      "A Python-based object detection tool using OpenCV and machine learning to detect physical objects via camera input. Repository is private due to client NDA.",
    link: "", // private, no link
  },
];
