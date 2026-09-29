import weddingImage from "@/assets/wedding-invitation.jpg";
import nqueenImage from "@/assets/nqueen-visualizer.jpg";
import goPassImage from "@/assets/gopass-system.jpg";
import dastavezImage from "@/assets/dastavez-ai.jpg";
import mealFinderImage from "@/assets/meal-finder.jpg";

export const contact = {
  email: "deepsakshi07@gmail.com",
  resume: "/Sakshi-Deep-Resume.pdf",
};

export const experiences = [
  {
    period: "Jul 2026 — Present",
    role: "Creative Developer Intern",
    company: "Utsavy · Jaipur, Rajasthan",
    description:
      "Designing and building interactive digital invitation websites for weddings, anniversaries, birthdays and engagements — each one crafted around the family's own story.",
    points: [
      "Build bespoke invitation experiences end to end",
      "Design elegant layouts and typography systems",
      "Add music, galleries and animated storytelling sections",
      "Optimise every invite for mobile-first sharing",
      "Refine visual detail with the creative team",
    ],
  },
  {
    period: "Jun — Aug 2024",
    role: "React Developer Intern",
    company: "OpeBo Industries Ltd",
    description:
      "Worked on reusable React interface components and pixel-accurate implementation of design specifications within a collaborative team workflow.",
    points: [
      "Built reusable React UI components",
      "Translated designs into pixel-perfect screens",
      "Applied clean OOP structure and testing practice",
      "Collaborated through Git-based workflows",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Amity University, Patna",
    detail: "2024 — 2026 · 8.5 CGPA",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "M.S. College, Motihari",
    detail: "80.4%",
  },
];

export const skillGroups = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "Programming", items: ["Java", "C", "Python"] },
  { label: "Database", items: ["MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { label: "Currently exploring", items: ["MERN Stack"] },
];

export const projects = [
  {
    number: "01",
    title: "Wedding Invitation Experience",
    category: "Frontend Development",
    description:
      "A responsive digital wedding invitation experience designed with a premium visual system, interactive sections and mobile-first layouts.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
    image: weddingImage,
    imageWidth: 1600,
    imageHeight: 1104,
    alt: "Elegant digital wedding invitation interface",
  },
  {
    number: "02",
    title: "N-Queen Visualizer",
    category: "Interactive Web Application",
    description:
      "An interactive visualization of the N-Queens problem that makes algorithmic concepts easier to understand through a visual chessboard interface.",
    technologies: ["React", "JavaScript", "Algorithms", "Responsive UI"],
    image: nqueenImage,
    imageWidth: 1408,
    imageHeight: 1008,
    alt: "N-Queens algorithm visualizer interface",
  },
  {
    number: "03",
    title: "GoPass",
    subtitle: "Visitor & Event Pass Management System",
    category: "Product Interface",
    description:
      "A web-based visitor and event pass management experience designed to simplify pass creation and management through a structured interface.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    image: goPassImage,
    imageWidth: 1408,
    imageHeight: 1008,
    alt: "GoPass visitor management dashboard",
  },
  {
    number: "04",
    title: "Dastavez AI",
    category: "Internship Project",
    description:
      "Worked on the frontend interface of an AI-focused web application, contributing to responsive layouts, visual refinement and user-facing interface development.",
    technologies: ["Frontend", "JavaScript", "Responsive UI"],
    image: dastavezImage,
    imageWidth: 1408,
    imageHeight: 1008,
    alt: "Dastavez AI document workspace interface",
  },
];

export const processSteps = [
  ["01", "Understand", "Understand the requirement, audience and visual direction."],
  ["02", "Structure", "Plan layout, sections and content hierarchy."],
  ["03", "Build", "Translate the design into responsive frontend components."],
  ["04", "Refine", "Improve spacing, typography, interactions and visual consistency."],
  ["05", "Test", "Check the experience across desktop, tablet and mobile."],
];

export const certifications = [
  ["Master DSA with Java", "Coding Blocks"],
  ["MERN Stack", "GeeksforGeeks · Ongoing"],
  ["Agile Project Management", "HP LIFE"],
  ["Youth Employability Program", "TCS"],
];