export const skills = {
  backend: {
    label: "Backend Engineering",
    items: [
      "Java", "Spring", "Spring Boot", "Node.js", "Python",
      "REST APIs", "Microservices", "Spring Security", "JWT / OAuth2",
    ],
  },
  databases: {
    label: "Data & Storage",
    items: [
      "SQL", "JPA", "Hibernate",
      "MySQL", "PostgreSQL", "MongoDB", "Redis",
      "Oracle SQL",
    ],
  },
  messaging: {
    label: "Messaging & Real-Time",
    items: [
      "Kafka", "WebSockets", "RabbitMQ", "Event-Driven Architecture",
    ],
  },
  cloud: {
    label: "Cloud & DevOps",
    items: [
      "AWS", "Docker", "Kubernetes", "NGINX",
      "CI/CD", "GitHub Actions",
    ],
  },
  frontend: {
    label: "Frontend",
    items: [
      "React", "JavaScript", "HTML", "CSS",
      "TypeScript", "Redux",
    ],
  },
  ai: {
    label: "AI Engineering",
    items: [
      "LLM", "RAG", "AI Systems",
      "AI Agents", "Tool Calling", "Prompt Engineering",
    ],
  },
  design: {
    label: "Design & Architecture",
    items: [
      "OOP", "SOLID", "Design Patterns",
      "Low Level Design", "High Level Design",
      "System Design", "Clean Architecture",
    ],
  },
  languages: {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C++"],
  },
};

// For interview mode — topic groups with brief explanations
export const interviewTopics = [
  {
    category: "Java",
    icon: "☕",
    topics: [
      { name: "OOP", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction — principles applied in every layer of backend design." },
      { name: "Collections", desc: "HashMap, ArrayList, LinkedList, TreeMap — choosing the right structure matters for performance." },
      { name: "Multithreading", desc: "Thread lifecycle, Runnable vs Callable, synchronized blocks, volatile keyword." },
      { name: "Concurrency", desc: "ExecutorService, CompletableFuture, ReentrantLock, race conditions, and thread-safe design." },
      { name: "JVM Internals", desc: "Heap vs Stack, Garbage Collection, ClassLoader, and memory management basics." },
    ],
  },
  {
    category: "System Design",
    icon: "🏗️",
    topics: [
      { name: "Caching", desc: "Redis for session and data caching. Cache aside, write-through, and eviction strategies." },
      { name: "Kafka", desc: "Topics, partitions, consumer groups, offset management, and event-driven patterns." },
      { name: "Sharding", desc: "Horizontal partitioning of data across nodes to scale writes and storage." },
      { name: "Microservices", desc: "Service boundaries, API Gateway, service discovery, and inter-service communication." },
      { name: "Load Balancing", desc: "Distributing traffic across service instances. Round-robin, least connections, and health checks." },
      { name: "Rate Limiting", desc: "Token bucket and sliding window algorithms to protect APIs from overload." },
    ],
  },
  {
    category: "DSA",
    icon: "🧮",
    topics: [
      { name: "500+ Problems", desc: "Solved on LeetCode. Arrays, Trees, Graphs, DP, Sliding Window, Two Pointers, Binary Search." },
      { name: "Time Complexity", desc: "O(1), O(log n), O(n), O(n log n) — understanding trade-offs for production code decisions." },
      { name: "Graph Algorithms", desc: "BFS, DFS, Dijkstra, Topological Sort — applied in dependency resolution and scheduling." },
    ],
  },
];
