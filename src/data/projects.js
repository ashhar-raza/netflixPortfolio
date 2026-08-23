export const projects = [
  // ── SEASON 1 — Main Episodes ─────────────────────────────────────────────────
  {
    id: "S01E01",
    episode: "S01 E01",
    title: "AI Cold Calling Agent",
    subtitle: "Voice AI · Agentic Systems",
    genre: ["AI", "Voice AI", "Agentic Systems"],
    description:
      "A real-time AI voice agent designed to conduct conversational cold calls and qualify leads end-to-end.",
    technologies: ["Python", "FastAPI", "React", "Deepgram", "Groq", "Pipecat", "WebSockets"],
    architecture: [
      { label: "Speech To Text", tech: "Deepgram" },
      { label: "LLM Reasoning", tech: "Groq Llama 3" },
      { label: "Tool Calling", tech: "Agentic Workflow" },
      { label: "Text To Speech", tech: "Pipecat" },
    ],
    problem:
      "Building a seamless real-time conversational AI pipeline requires orchestrating multiple services — STT, LLM inference, and TTS — with minimal latency over WebSocket streams.",
    highlights: [
      "Real-time conversational workflow via WebSocket communication",
      "Async FastAPI backend with timeout protection and graceful fault handling",
      "Agentic tool-calling workflow to classify call outcomes into structured JSON",
      "Singleton pattern for efficient shared LLM and pipeline instance management",
      "Deepgram STT + Groq Llama 3 + Pipecat for full-duplex voice pipeline",
      "React dashboard to trigger simulations and visualise call analytics",
    ],
    github: "https://github.com/ashhar-raza/Call-Agent",
    featured: true,
  },
  {
    id: "S01E02",
    episode: "S01 E02",
    title: "Distributed Healthcare Platform",
    subtitle: "Microservices · Java · Distributed Systems",
    genre: ["Backend", "Microservices", "Distributed Systems"],
    description:
      "Converted a monolithic healthcare workflow into independently deployable microservices using Domain-Driven Design.",
    technologies: ["Java", "Spring Boot", "Kafka", "gRPC", "PostgreSQL", "Redis", "Docker"],
    architecture: [
      { label: "API Gateway", tech: "Spring Gateway" },
      { label: "Service Layer", tech: "Spring Boot Microservices" },
      { label: "Async Messaging", tech: "Apache Kafka" },
      { label: "Sync Communication", tech: "gRPC" },
      { label: "Data Layer", tech: "PostgreSQL + Redis" },
    ],
    problem:
      "A monolithic healthcare system creates tight coupling, deployment bottlenecks, and makes concurrent appointment booking prone to race conditions and data inconsistency.",
    engineeringChallenges: [
      "Concurrent appointment booking — multiple patients booking the same slot simultaneously",
      "Race conditions and data consistency across distributed services",
      "Maintaining ACID transactions at the service boundary",
      "Optimistic locking to handle concurrent bid updates without global locks",
    ],
    highlights: [
      "API Gateway + service discovery + centralised config for reliable orchestration",
      "gRPC inter-service calls for low-latency synchronous communication",
      "Kafka event bus for async communication across all microservices",
      "Service-level DB ownership ensuring data isolation (Domain-Driven Design)",
      "Strategy & Adapter patterns decoupling logic from external integrations",
      "Authentication and authorization at the gateway layer",
    ],
    github: "https://github.com/ashhar-raza/Distributed-Healthcare-System",
    featured: true,
  },
  {
    id: "S01E03",
    episode: "S01 E03",
    title: "Enterprise Reverse Bidding Platform",
    subtitle: "Enterprise · Backend · Concurrency",
    genre: ["Enterprise", "Backend", "Concurrency"],
    description:
      "A reverse bidding platform where vendors compete to provide products or services to an organization, requiring robust concurrency handling.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "REST APIs"],
    architecture: [
      { label: "REST API Layer", tech: "Spring Boot" },
      { label: "Concurrency Control", tech: "Optimistic Locking + Transactions" },
      { label: "Cache Layer", tech: "Redis" },
      { label: "Event Bus", tech: "Kafka" },
      { label: "Persistence", tech: "PostgreSQL" },
    ],
    problem:
      "Multiple vendors may submit or update bids concurrently for the same requirement, leading to race conditions and potential data inconsistency.",
    engineeringChallenges: [
      "Concurrent bid submissions from multiple vendors",
      "Race conditions when reading and updating bid state",
      "Ensuring bid validation and consistency under high concurrency",
      "Real-time bid status updates without polling overhead",
    ],
    highlights: [
      "Optimistic locking to handle concurrent bid updates safely",
      "Database transactions ensuring atomicity for bid operations",
      "Redis caching for frequently queried bid state",
      "Kafka for async notification of bid events",
      "Clean REST API design with proper validation and error handling",
      "Structured SQL schema design for bid lifecycle management",
    ],
    github: null,
    featured: true,
  },
  {
    id: "S01E04",
    episode: "S01 E04",
    title: "EdTech Learning Platform",
    subtitle: "EdTech · Full Stack",
    genre: ["EdTech", "Full Stack", "Backend"],
    description:
      "Scalable education platform handling courses, enrollment, payments, and notifications across web and mobile.",
    technologies: ["Node.js", "Express.js", "React", "React Native", "SQL", "AWS S3", "Docker"],
    architecture: [
      { label: "Web Frontend", tech: "React (Vite)" },
      { label: "Mobile App", tech: "React Native" },
      { label: "Backend API", tech: "Node.js + Express" },
      { label: "File Storage", tech: "AWS S3" },
      { label: "Database", tech: "SQL" },
    ],
    problem:
      "EdTech platforms require seamless cross-platform delivery (web + mobile), secure payment workflows, file storage, and role-based access — all in a single cohesive system.",
    highlights: [
      "Role-based access control (admin/user) with JWT authentication",
      "Payment integration for course enrollment",
      "SMS notifications for student and admin workflows",
      "AWS S3 for course material file storage and retrieval",
      "Containerised with Docker for consistent deployments",
      "React frontend with reusable component system and API service layers",
      "React Native mobile app for cross-platform learner access",
    ],
    github: null,
    featured: true,
  },
  // ── SEASON 1 — More Episodes ──────────────────────────────────────────────────
  {
    id: "S01E05",
    episode: "S01 E05",
    title: "Kaveri Enterprise Platform",
    subtitle: "Enterprise Operations",
    genre: ["Enterprise", "Backend", "Full Stack"],
    description:
      "Internal enterprise platform handling operational workflows including employee management, leave tracking, and compliance-focused admin panels.",
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "React", "Node.js", "SQL"],
    highlights: [
      "Kafka-based audit logs and reporting pipelines for operational traceability",
      "Designed REST APIs for compliance-heavy workflows with structured validation",
      "Structured logging pipelines for faster incident diagnosis",
      "Responsive admin dashboards with React",
      "Employee and leave management workflows",
    ],
    github: null,
    featured: false,
  },
  {
    id: "S01E06",
    episode: "S01 E06",
    title: "Zerox Point — Vendor Platform",
    subtitle: "Vendor & Admin Workflow",
    genre: ["Enterprise", "Full Stack"],
    description:
      "Vendor and admin management platform with OTP-based authentication, task assignment, and real-time workflow tracking.",
    technologies: ["React", "Node.js", "SQL"],
    highlights: [
      "Vendor management with role-based admin workflows",
      "OTP authentication for secure vendor onboarding",
      "Task assignment and real-time workflow tracking",
      "Responsive admin dashboard",
    ],
    github: null,
    featured: false,
  },
  {
    id: "S01E07",
    episode: "S01 E07",
    title: "Masthi Review — Movie Platform",
    subtitle: "Social · Review Platform",
    genre: ["Full Stack", "Social"],
    description:
      "Movie review platform integrating IMDb and Google APIs with admin dashboard, charts, and full CRUD for reviews.",
    technologies: ["React", "Node.js", "Express", "SQL"],
    highlights: [
      "IMDb API and Google APIs integration for movie metadata",
      "Admin dashboard with charts and analytics",
      "Full CRUD for movie reviews and ratings",
      "Rotten Tomatoes-style aggregated review display",
    ],
    github: null,
    featured: false,
  },
  // ── SEASON 2 — Upskilling Arc ─────────────────────────────────────────────────
  {
    id: "S02E01",
    episode: "S02 E01",
    title: "The Upskilling Arc",
    subtitle: "Scaler Software Development Program",
    genre: ["Education", "Self-Improvement"],
    description:
      "A dedicated structured learning journey through Scaler's Software Development Program, covering DSA, system design, distributed systems, and more.",
    technologies: [
      "Java", "JavaScript", "SQL", "Spring Boot",
      "Kafka", "Docker", "AWS",
    ],
    subjects: [
      "Data Structures & Algorithms", "Java", "JavaScript", "SQL",
      "Multithreading", "Low Level Design", "High Level Design",
      "System Design", "Distributed Systems", "Microservices",
      "Spring Boot", "Kafka", "Docker", "AWS",
    ],
    highlights: [],
    github: null,
    featured: false,
  },
];

// For the "featured" Netflix row
export const featuredProjects = projects.filter((p) => p.featured);

// All Season 1 projects
export const season1 = projects.filter((p) => p.id.startsWith("S01"));

// Additional episodes (non-hero)
export const moreEpisodes = projects.filter(
  (p) => p.id.startsWith("S01") && !p.featured
);
