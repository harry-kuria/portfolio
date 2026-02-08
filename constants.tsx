// Import local photos from assets directory
import heroImage from './assets/MOK_0369 (2).JPG';
import aboutImage from './assets/MOK_0392.jpg';
import profileImage from './assets/MOK_0400.jpg';

import { Experience, Project, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Harrison Thiong'o Kuria",
  firstName: "Harrison",
  title: "Go & Mobile Systems Architect",
  location: "Nairobi, Kenya",
  email: "harrisonkuria254@gmail.com",
  phone: "+254712311209",
  linkedin: "https://linkedin.com/in/harrison-kuria",
  github: "https://github.com/harry-kuria",
  summary: "Software Engineer with 5+ years of experience building production-grade backend services using Go and mobile platforms. Expert in React JS for high-performance web interfaces. Specializing in distributed systems, microservices, and offline-first mobile architectures."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Backend Engineering",
    skills: ["Go (Golang)", "Microservices", "gRPC / Protobuf", "PostgreSQL", "Redis", "Distributed Systems"]
  },
  {
    category: "Mobile Systems",
    skills: ["Android (Kotlin)", "Jetpack Compose", "Offline-First Sync", "SDK Development", "Dependency Injection"]
  },
  {
    category: "Modern Web",
    skills: ["React JS", "TypeScript", "Tailwind CSS", "Redux / Zustand", "Next.js", "Vite"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "CI/CD (GitHub Actions)", "AWS", "Firebase", "Unit Testing"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Craft Silicon",
    role: "Android Engineer",
    period: "Dec 2025 – Present",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: [
      "Architecting native Android applications using Kotlin and Jetpack Compose.",
      "Optimizing complex data flows and backend integrations for financial systems.",
      "Mentoring junior devs and driving high standards in code quality."
    ]
  },
  {
    company: "Terra Softworks",
    role: "Senior Android Engineer",
    period: "Jun 2024 – Dec 2025",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: [
      "Led WaaS (Wallet as a Service) mobile platform with offline-first architecture.",
      "Built high-performance protobuf communication layers.",
      "Engineered smart synchronization algorithms for low-bandwidth environments."
    ]
  },
  {
    company: "Clinix-Plus",
    role: "Software Engineer (Go, React JS)",
    period: "Mar 2023 - Jul 2024",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: [
      "Developed scalable REST APIs in Go for health-tech solutions.",
      "Architected secure, compliant medical data storage systems.",
      "Optimized database queries for millisecond response times",
      "Designed and maintained Clinix-plus UI"
    ]
  },
  {
    company: "Afiagate",
    role: "Mobile & Backend Engineer",
    period: "Jan 2023 – Jul 2024",
    location: "Nairobi, Kenya",
    type: "Full-time",
    description: [
      "End-to-end development of mobile apps and Go-based backends.",
      "Implemented seamless OAuth2 authentication flows."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Clinix Plus",
    description: "Comprehensive healthcare management platform with secure medical data storage and scalable REST APIs built in Go.",
    tags: ["Go", "React JS", "REST API", "PostgreSQL", "Healthcare"],
    link: "https://clinix-plus.com",
    details: [
      "Architected secure, HIPAA-compliant medical data storage systems.",
      "Optimized database queries achieving millisecond response times.",
      "Scalable backend infrastructure handling high-volume healthcare operations."
    ]
  },
  {
    title: "Medislot",
    description: "Medical booking platform where patients can book medical practitioners and practitioners can manage their schedules and book medical facilities.",
    tags: ["Kotlin", "Jetpack Compose", "Go", "REST API"],
    details: [
      "Patients can book appointments with medical practitioners.",
      "Practitioners can view and manage their bookings in real-time.",
      "Practitioners can update their available time slots dynamically.",
      "Practitioners can book medical facilities for their practice."
    ],
    video: "https://youtube.com/shorts/9sSQPnJcLeE?feature=share"
  },
  
  {
    title: "WaaS Platform",
    description: "A robust Wallet as a Service hybrid mobile platform powered by Go and Protobuf.",
    tags: ["Go", "Kotlin", "Protobuf", "Room DB", "SQLite"],
    details: [
      "Bidirectional delta synchronization for offline capabilities.",
      "Ultra-low latency transaction processing."
    ]
  },
  {
    title: "SpotX UI Engine",
    description: "Modern onboarding tours SDK for Jetpack Compose. Spotlight any composable with elegant, Material 3-styled overlays—built the Compose way: declarative, fast, and a joy to use.",
    tags: ["Kotlin", "Jetpack Compose", "SDK"],
    link: "https://harry-kuria.github.io/SpotX/",
    details: [
      "Kotlin-first, Compose-native SDK with minimal API and maximum clarity.",
      "Highlight UI elements with customizable shapes and Material 3 styling.",
      "Simple, composable API for elegant onboarding experiences."
    ]
  },
  {
    title: "Veritalk",
    description: "Production-grade social interaction platform with real-time features.",
    tags: ["Flutter", "Firebase", "Android SDK", "REST"],
    link: "https://veritalk.en.uptodown.com/android",
    details: [
      "Supports thousands of concurrent active users.",
      "Optimized for high performance on budget devices."
    ]
  }
];

export const IMAGES = {
  hero: heroImage,
  about: aboutImage,
  profile: profileImage
};
