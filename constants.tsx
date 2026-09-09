// Import local photos from assets directory
import heroImage from './assets/harry2.jpeg';
import aboutImage from './assets/harry3.jpeg';
import originalPhoto from './assets/MOK_0369 (2).JPG';
import bomaImage from './assets/boma1.png';
const profileImage = originalPhoto;

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
      "Built high-performance backend sync microservice using Go.",
      "Engineered Backend-for-Backend service for low-bandwidth mobile environments using Go.",
      "Background Sync in mobile using Kotlin for offline.",
      "Integrated NFC to support NFC payments.",
      "Offline Storage using Room database.",
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
    title: "BomaPay",
    description: "Full-stack Android fintech & proptech platform powered by a high-concurrency Go backend and native Kotlin client, enabling tenants to pay rent flexibly in micro-installments ('in bits') with real-time transaction feasibility, M-Pesa Daraja STK Push, and roommate bill splitting.",
    tags: ["Go", "Kotlin", "Android", "M-Pesa Daraja", "Rent in Bits", "STK Push", "Fintech", "Google Play"],
    link: "https://play.google.com/store/apps/details?id=com.bomapay.app",
    playStore: "https://play.google.com/store/apps/details?id=com.bomapay.app",
    image: bomaImage,
    details: [
      "High-Performance Go Backend: Built a concurrent Go microservice orchestrating Safaricom M-Pesa Daraja STK Push triggers, asynchronous webhook callbacks, and idempotent ledger transactions.",
      "Flexible 'Pay in Bits' Engine: Empowers tenants to break lump-sum monthly rent into manageable micro-payments as cash flows in.",
      "Real-Time Transaction Feasibility: Instant M-Pesa STK Push verification showing cumulative progress toward monthly rent targets and verified digital receipts.",
      "Native Android Architecture: Engineered with Kotlin, Jetpack Compose, Coroutines, and Flow for responsive, 60fps UI.",
      "Smart Roommate Bill Splitting: Multi-party shared expense division for utilities (electricity, water, Wi-Fi) with automated ledgers.",
      "Live Production App: Published and maintained on Google Play Store (com.bomapay.app)."
    ],
    caseStudy: {
      title: "BomaPay: Full-Stack Micro-Installment Rent Platform Powered by Go & Native Android",
      image: bomaImage,
      challenge: "In Kenya's dynamic gig and urban economy, tenants rarely receive lump-sum income that lines up neatly with rigid month-end rent deadlines. Forcing lump-sum payments leads to cash-flow anxiety, defaults, and awkward landlord disputes. Furthermore, when tenants attempted to pay rent 'in bits' via standard Paybill numbers, there was zero transaction feasibility—manual bookkeeping caused lost payments, miscalculated balances, and endless reconciliation chaos.",
      solution: "Architected and shipped an end-to-end system: a high-concurrency backend written in Go and a modern native Android client in Kotlin and Jetpack Compose. The Go backend interfaces directly with Safaricom's M-Pesa Daraja API, ensuring transaction idempotency, cryptographic callback signature verification, and sub-millisecond payment dispatch. The Kotlin client visualizes financial feasibility in real time, backed by Room DB for offline-first resilience.",
      results: [
        "Enabled true financial flexibility by allowing tenants to pay rent in daily/weekly micro-installments without manual calculation friction.",
        "Engineered reliable Go backend handling concurrent M-Pesa STK callbacks with zero duplicate transaction processing.",
        "Delivered 100% transaction feasibility and visibility: both tenant and property manager see verified, real-time balance updates on every STK push callback.",
        "Shipped to the Google Play Store (com.bomapay.app) adhering to strict Play Console security, data safety, and target SDK guidelines."
      ],
      techStack: ["Go", "Kotlin", "Jetpack Compose", "M-Pesa Daraja STK Push", "Goroutines & Channels", "Room DB", "Google Play Console"]
    }
  },
  {
    title: "SpotX UI Engine",
    description: "Modern onboarding tours SDK for Jetpack Compose, officially published on Maven Central (io.github.harry-kuria:spotx). Spotlight any composable with elegant, Material 3-styled overlays—built the Compose way: declarative, fast, and a joy to use.",
    tags: ["Kotlin", "Jetpack Compose", "Maven Central", "SDK", "Material 3"],
    link: "https://harry-kuria.github.io/SpotX/",
    mavenCentral: "https://central.sonatype.com/artifact/io.github.harry-kuria/spotx",
    details: [
      "Published to Maven Central (io.github.harry-kuria:spotx): Globally distributed with strict Sonatype OSSRH GPG signing and POM metadata compliance.",
      "4-Line Integration: Simple Gradle implementation allowing Android developers worldwide to add onboarding spotlights in minutes.",
      "Kotlin-First & Compose-Native: Declarative architecture with zero legacy Android View baggage.",
      "Customizable Material 3 Overlays: Dynamic target highlighting, custom scrims, shapes, and smooth animated transitions."
    ],
    video: "https://youtube.com/shorts/A54Ixhb-FgU?feature=share",
    thumbnail: "https://i.ytimg.com/vi/A54Ixhb-FgU/hqdefault.jpg",
    caseStudy: {
      title: "SpotX: The 4-Line Solution to Onboarding Tours in Jetpack Compose",
      challenge: "Implementing user onboarding tours in Jetpack Compose was repetitive and error-prone. Developers had to write custom `Canvas` overlays and calculate coordinates manually for every single screen, leading to spaghetti code and inconsistent UI designs across the app.",
      solution: "Built SpotX, a declarative SDK that abstracts the complexity of target highlighting. It uses a Fluent API pattern, allowing developers to add a beautiful, Material 3-styled spotlight to any Composable with just 4 lines of code. Shipped directly to Maven Central so any Android team can integrate it via standard Gradle dependencies.",
      results: [
        "Published and verified on Maven Central under the verified namespace io.github.harry-kuria.",
        "Reduced onboarding implementation time by 90% (from hours to minutes).",
        "Eliminated 100% of manual coordinate and canvas math.",
        "Adopted by multiple production apps and open-source Android projects."
      ],
      techStack: ["Kotlin", "Jetpack Compose", "Maven Central", "Sonatype OSSRH", "Gradle", "GPG Signing"]
    }
  },
  {
    title: "WaaS Platform",
    description: "A robust Wallet as a Service hybrid mobile platform powered by Go and Protobuf.",
    tags: ["Go", "Kotlin", "Protobuf", "Room DB", "SQLite"],
    details: [
      "Bidirectional delta synchronization for offline capabilities.",
      "Ultra-low latency transaction processing."
    ],
    caseStudy: {
      title: "Zero Downtime using Local-First Architecture",
      challenge: "In target markets with intermittent connectivity (2G/3G), 40% of transactions were failing or timing out, leading to user churn and operational reconciliation nightmares. In instances where the backend was down, one could not use our services via the mobile app.",
      solution: "Architected a 'Local-First' sync engine using Go. Implemented a custom conflict resolution strategy based on vector clocks to handle multi-device updates. The mobile app writes to a local encrypted SQLite DB relative to the UI, while a background worker manages potential conflicts and syncs with the backend. The app Syncs after every 10 minutes to check for uodates from the server and only pulls the updated records from the server.",
      results: [
        "Reduced transaction failure rate from 40% to <0.1%.",
        "Decreased backend server load by 40% by batching sync requests.",
        "Enabled full app functionality in completely offline mode."
      ]
    }
  },
  {
    title: "Clinix Plus",
    description: "Comprehensive healthcare management platform with secure medical data storage and scalable REST APIs built in Go.",
    tags: ["Go", "React JS", "REST API", "PostgreSQL", "Healthcare"],
    link: "https://clinix-plus.com",
    details: [
      "Architected secure, HIPAA-compliant medical data storage systems.",
      "Optimized database queries achieving millisecond response times.",
      "Scalable backend infrastructure handling high-volume healthcare operations."
    ],
    caseStudy: {
      title: "Why we built Clinix Plus",
      challenge: "Medical practices were drowning in operational chaos caused by disjointed manual tools. Patient data was fragmented across paper records and spreadsheets, leading to revenue leakage, lack of access control, and dangerous delays in patient history retrieval.",
      solution: "Built 'Clinix Plus', a comprehensive Hospital Management System (HMS) that centralizes the entire patient journey—from triage to billing. Implemented strict Role-Based Access Control (RBAC) to ensure data privacy (e.g., receptionists cannot view medical notes). Integrated M-Pesa for automated financial tracking to stop revenue leakage.",
      results: [
        "Digitized the entire workflow: Registration → Triage → Consultation → Pharmacy → Billing.",
        "Eliminated unauthorized data access via granular RBAC guards.",
        "Reduced revenue leakage by 100% through automated M-Pesa integration."
      ]
    }
  },
  {
    title: "MediSlot",
    description: "Modern healthcare scheduling and facility reservation engine designed to eliminate slot contention across medical practices. Built from the ground up with a reactive Jetpack Compose mobile client and a high-throughput Go backend for real-time calendar synchronization.",
    tags: ["Go", "Kotlin", "Jetpack Compose", "Healthcare", "REST API", "Concurrency", "Calendar Sync"],
    details: [
      "Multi-Entity Reservation Engine: Orchestrates patient appointments, doctor availability rosters, and clinical facility/room allocations seamlessly.",
      "Concurrency & Zero-Contention Scheduling: Built with optimistic locking in Go to eliminate double-booking race conditions during high-demand booking windows.",
      "Modern Jetpack Compose UI: Declarative, fluid scheduling UI with dynamic calendar pickers and instant confirmation feedback.",
      "Real-Time Slot Synchronization: Asynchronous state management ensuring practitioners and clinics stay synchronized on slot adjustments."
    ],
    video: "https://youtube.com/shorts/9sSQPnJcLeE?feature=share",
    caseStudy: {
      title: "MediSlot: High-Concurrency Healthcare & Facility Scheduling Engine",
      challenge: "Legacy healthcare scheduling tools suffer from severe architectural fragmentation: disconnected paper logs, monolithic backends, and clunky user interfaces that frequently result in double-booking consultation rooms and lost doctor slots. When multiple patients and practitioners attempt to schedule appointments simultaneously, race conditions often lead to administrative conflicts, patient wait times, and underutilized clinic facilities.",
      solution: "Engineered MediSlot as an independent, greenfield full-stack platform. Built a high-performance Go REST backend featuring transaction-level slot locking to guarantee zero booking overlap. Designed a reactive native Android client in Kotlin and Jetpack Compose featuring custom calendar matrices, dynamic slot availability states, and instant push notifications.",
      results: [
        "Eliminated double-booking race conditions across shared consultation rooms and medical practitioner calendars.",
        "Built clean-room multi-tier booking model supporting patients, practitioners, and medical facility operators.",
        "Engineered ultra-responsive Go backend maintaining sub-50ms query response times under high booking contention.",
        "Crafted modern 60fps Jetpack Compose UI with declarative state handling and offline-ready cached schedules."
      ],
      techStack: ["Go", "Kotlin", "Jetpack Compose", "REST APIs", "Goroutines", "Concurrency Control", "Material 3"]
    }
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
