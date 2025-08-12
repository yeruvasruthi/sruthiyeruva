// src/data/projects.js
export const projects = [
    {
        slug: "furora",
        title: "Furora: Your Pet World, Beautifully Connected",
        tags: ["React", "Leaflet", "Vite", "Tailwind", "Framer Motion"],
        desc: "Furora is a pet-friendly web application that helps users discover pet-friendly locations, manage pet care routines, track expenses, and find perfect matches for their pets.",
        long: "Built a map-centric UX with Leaflet (custom markers & bounds sync), an Explore page that reads OSM/Overpass data, and a Care section for tips. Added smooth interactions with Framer Motion, deep links for opening in native maps with place names, and mobile-first accessibility.",
        repo: "https://github.com/yeruvasruthi/furora",
        image: "/public/furora-cover.png",
        impact: [
            "Fast map interactions on mobile (60fps feel with lightweight tiles).",
            "Fewer taps to a destination via deep links to native maps.",
            "Clear, accessible UI with friendly empty states."
          ],
          architecture: [
            "React + Vite front end; Leaflet for mapping and layers.",
            "State kept local per view; URL params for shareable state.",
            "Utility modules for Overpass queries and result shaping."
          ],
          decisions: [
            "Chose Leaflet for small bundle size and plugin ecosystem.",
            "Kept data client-side to simplify deploys and demos.",
            "Prioritized UX clarity over feature overload."
          ]
    },
  
    {
      slug: "ai-solutions-dashboard",
      title: "AI Solutions Dashboard & Component Library",
      tags: ["React", "TypeScript", "Sass", "Firebase", "Jest"],
      image: "/public/solutions.png",
      impact: [
        "+99.9% uptime during test deployments",
        "-30% post-release defects",
        "100% WCAG accessibility compliance across supported devices"
      ],
      architecture: [
        "React + TypeScript with modular components and typed contracts",
        "AuthN/AuthZ via Firebase (JWT) with protected routes",
        "Global state with React Context API",
        "Sass-based theming, semantic HTML, ARIA attributes",
        "CI/CD via GitHub Actions; unit testing with Jest; containerized with Docker"
      ],
      decisions: [
        "Chose React for development velocity and ecosystem maturity",
        "Mobile-first responsive design with clear scaling paths",
        "Accessibility as a requirement (WCAG compliance)",
        "Observability via logs/metrics to track real-time session behavior"
      ],
      desc:
        "Built a scalable React and TypeScript dashboard with a reusable component library, Firebase authentication, and responsive, accessible UI for visualizing AI/LLM insights.",
      long:
        "Designed and developed a TypeScript-based React component library to visualize AI/LLM insights, ensuring consistent theming with Sass and WCAG-compliant accessibility. Implemented Firebase authentication, protected routing, and global state management using React Context API to support real-time session tracking. Ensured responsive, mobile-first design with semantic HTML and ARIA attributes. Enhanced code quality with Jest unit tests and Git-based peer reviews, aligning with Agile sprint workflows to ensure delivery quality and maintainability."
      
    },
  
    {
      slug: "smart-city-traffic",
      title: "Smart City Traffic Management (Spring Boot)",
      tags: ["Java", "Spring Boot", "REST API", "MySQL", "Docker"],
      image: "/public/smartcity.png",
      impact: [
        "+35% faster route processing",
        "20% query performance improvement through index tuning",
        "Handled 100K+ traffic records with real-time processing"
      ],
      architecture: [
        "Java + Spring Boot backend with modular service design",
        "RESTful APIs for congestion-based dynamic rerouting",
        "MySQL optimized with indexes and pagination",
        "Dockerized services for environment consistency",
        "CI/CD pipeline for automated builds and deployments"
      ],
      decisions: [
        "Selected Spring Boot for scalability and production readiness",
        "Modular services to simplify future scaling and features",
        "Focused on high-performance queries for large datasets",
        "Docker for portability and streamlined testing"
      ],
      desc:
        "Engineered a Spring Boot–based backend platform with REST APIs and MySQL to optimize traffic flow, achieving a 35% increase in route processing efficiency.",
      long:
        "Developed a scalable backend in Java and Spring Boot for real-time traffic data ingestion and analysis, improving route processing speeds by 35%. Built RESTful APIs to enable dynamic rerouting based on congestion levels, serving over 10,000 daily vehicles in a simulated smart city environment. Designed and optimized MySQL schemas to manage over 100K+ records with a 20% reduction in query response time through index tuning. Deployed the system using Docker containers for cross-platform compatibility and streamlined environment setup."
    },
  
    {
      slug: "cloud-expense-tracker",
      title: "Cloud Expense Tracker Platform",
      tags: ["MERN", "AWS EC2", "JWT", "Route 53"],
      image: "/public/expense.png",
      impact: [
        "+25% improvement in financial visibility for users",
        "99.9% uptime across test deployments",
        "-40% manual QA time via automated Postman tests"
      ],
      architecture: [
        "MERN stack with clear front/back separation",
        "JWT authentication for secure sessions",
        "MongoDB flexible schema for real-time transactions",
        "AWS EC2 deployment with Route 53 DNS routing",
        "Automated API testing pipeline via Postman"
      ],
      decisions: [
        "Chose MERN for rapid full-stack iteration and flexibility",
        "Implemented JWT to protect user data",
        "Used AWS for reliable, scalable hosting",
        "Automated testing to improve release quality"
      ],
      desc:
        "Created a secure MERN stack expense tracker with JWT authentication, AWS deployment, and real-time analytics, improving users’ financial visibility by 25%.",
      long:
        "Developed a full-stack expense tracking platform using the MERN stack (MongoDB, Express, React, Node.js) with JWT-based user authentication and personalized budgeting dashboards. Enabled real-time transaction tracking and dynamic filtering for over 10,000 records using MongoDB’s flexible schema design. Deployed the solution on AWS EC2 with Route 53 DNS configuration, achieving 99.9% uptime. Automated API validation and regression testing with Postman, reducing manual QA time by 40% and ensuring robust feature delivery."
    }
  ]
  