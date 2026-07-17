// ============================================================
// Portfolio v2 — Suryansh Agrawal — All Data
// ============================================================

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'MERN' | 'AI/ML' | 'Full Stack' | 'Backend';
  githubLink: string;
  liveLink?: string;
  highlights: string[];
  emoji: string;
  accentColor: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  link: string;
  badgeColor: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  campus: string;
  duration: string;
  grade: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface CodingProfile {
  name: string;
  url: string;
  icon: string;
  color: string;
  stat?: string;
}

// ============================================================
// PERSONAL INFO
// ============================================================
export const personalInfo = {
  name: 'Suryansh Agrawal',
  roles: [
    'Full Stack Developer',
    3000,
    'MERN Stack Engineer',
    3000,
    'AI/ML Enthusiast',
    3000,
    'Software Engineer',
    3000,
  ] as (string | number)[],
  email: 'suryanshagrawal54@gmail.com',
  linkedin: 'https://www.linkedin.com/in/suryansh-agrawal-b43821283',
  github: 'https://github.com/suryanshagrawal21',
  leetcode: 'https://leetcode.com/u/suryanshagrawal21/',
  resumeUrl: 'https://drive.google.com/file/d/1L9NkA7kLa_t7OMV46Xy6aYHJrR5ur2_V/view?usp=sharing',
  bio: "I'm a B.Tech CSE student (2023–27) at SRM IST, passionate about building scalable full-stack applications and intelligent AI/ML systems. I architect robust backends, craft polished frontends, and integrate machine learning pipelines — bridging engineering precision with real-world impact.",
  tagline: 'Building the future, one commit at a time.',
  availability: 'Open to Internships & Full-Time Roles',
};

// ============================================================
// PROJECTS (Priority Order)
// ============================================================
export const projects: Project[] = [
  {
    id: 'smart-campus',
    title: 'Smart Campus',
    subtitle: 'Unified MERN Platform for Academic Management',
    description:
      'A full-featured campus management system with real-time dashboards, multi-role authentication, and interactive maps — built for SRM students and faculty.',
    longDescription:
      'Smart Campus is an end-to-end MERN application that centralises student records, faculty workflows, and administrative controls into a single responsive dashboard. Features include JWT-based multi-role auth (Student / Faculty / Admin), Cloudinary-powered media uploads, interactive campus maps, and real-time CRUD operations on academic data.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Tailwind CSS'],
    category: 'MERN',
    githubLink: 'https://github.com/suryanshagrawal21/smart-campus',
    liveLink: 'https://smartcampusreporting.vercel.app/',
    highlights: [
      'Multi-role JWT authentication (Student / Faculty / Admin)',
      'Cloudinary integration for image and document uploads',
      'Interactive campus maps with location markers',
      'Real-time admin dashboard with CRUD operations',
      'Fully responsive UI with dark mode',
    ],
    emoji: '🏛️',
    accentColor: '#6C63FF',
  },
  {
    id: 'medibill-ai',
    title: 'MediBill AI',
    subtitle: 'OCR-Powered Medical Bill Analyzer',
    description:
      'An AI-driven healthcare tool that extracts, parses, and analyses medical bills using Tesseract OCR and Python — making healthcare costs transparent.',
    longDescription:
      'MediBill AI leverages computer vision and NLP to automate medical bill analysis. Users upload prescription/bill images; Tesseract OCR extracts text which is then parsed and categorised using Python NLP pipelines. Results are stored in PostgreSQL and surfaced via a RESTful API, enabling cost breakdowns and trend analysis for patients.',
    tags: ['Python', 'Tesseract OCR', 'FastAPI', 'PostgreSQL', 'React', 'NLP'],
    category: 'AI/ML',
    githubLink: 'https://github.com/suryanshagrawal21/MediBill-AI',
    highlights: [
      'Tesseract OCR pipeline for medical bill text extraction',
      'NLP-based categorisation of line items (medicine, consultation, tests)',
      'PostgreSQL schema with full audit trail',
      'REST API exposing cost breakdown endpoints',
      'Patient-friendly dashboard with spend analytics',
    ],
    emoji: '🏥',
    accentColor: '#00D4AA',
  },
  {
    id: 'customerpulse-ai',
    title: 'CustomerPulse AI',
    subtitle: 'Real-Time Sentiment Analysis CRM',
    description:
      'A MERN-based CRM enriched with ML sentiment scoring that auto-classifies customer feedback, enabling data-driven support decisions.',
    longDescription:
      'CustomerPulse AI combines a MERN stack CRM with a Python ML microservice. Customer messages are routed to a sentiment analysis model (Naive Bayes / BERT fine-tuned) via REST API, tagged as Positive / Neutral / Negative, and surfaced on an analytics dashboard. Provides actionable insights for support teams.',
    tags: ['React', 'Node.js', 'MongoDB', 'Python', 'Scikit-Learn', 'REST API', 'Express'],
    category: 'MERN',
    githubLink: 'https://github.com/suryanshagrawal21/CustomerPulse-AI',
    liveLink: 'https://customer-pulse-ai.vercel.app',
    highlights: [
      'ML-powered sentiment classification (Positive / Neutral / Negative)',
      'Real-time feedback ingestion pipeline',
      'MERN stack with Python ML microservice integration',
      'Interactive analytics charts for support teams',
      'Paginated feedback management dashboard',
    ],
    emoji: '📊',
    accentColor: '#8B85FF',
  },
  {
    id: 'ipl-prediction',
    title: 'IPL Score Predictor',
    subtitle: 'ML Engine for Cricket Score Forecasting',
    description:
      'A machine learning engine trained on historical IPL data to predict match scores with high accuracy using Ridge Regression and feature engineering.',
    longDescription:
      'Built on a Python data science stack, this project ingests 10+ seasons of IPL match data, engineers features (venue, batting team, bowling team, current over, wickets), and trains a Ridge Regression model. Cross-validation and hyperparameter tuning minimise prediction variance. Exposed via a Streamlit/Flask UI.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Ridge Regression', 'Matplotlib'],
    category: 'AI/ML',
    githubLink: 'https://github.com/suryanshagrawal21/AI-Based-IPL-Score-Prediction-System',
    highlights: [
      'Trained on 10+ seasons of IPL historical data',
      'Feature engineering: venue, teams, over, wickets',
      'Ridge Regression with cross-validation tuning',
      'Matplotlib visualisations of prediction accuracy',
      'REST API exposing prediction endpoints',
    ],
    emoji: '🏏',
    accentColor: '#F59E0B',
  },
  {
    id: 'utensify',
    title: 'Utensify',
    subtitle: 'MERN E-Commerce for Kitchen Essentials',
    description:
      'A full-featured e-commerce platform for kitchen products with product management, cart, Cloudinary media, and secure checkout — built on the MERN stack.',
    longDescription:
      'Utensify is a production-grade MERN e-commerce platform. Features include dynamic product catalogues stored in MongoDB, Cloudinary image management, JWT-authenticated user sessions, shopping cart with real-time price calculations, and an admin panel for inventory management.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT', 'Redux'],
    category: 'MERN',
    githubLink: 'https://github.com/suryanshagrawal21/Utensify-E-Commerce-Platform',
    highlights: [
      'Full product CRUD with Cloudinary image uploads',
      'JWT-authenticated user sessions',
      'Shopping cart with real-time price calculations',
      'Admin inventory management dashboard',
      'Responsive mobile-first product listing',
    ],
    emoji: '🍳',
    accentColor: '#EF4444',
  },
  {
    id: 'movie-booking',
    title: 'Movie Booking System',
    subtitle: 'Concurrent Seat Reservation with SQL',
    description:
      'A transactionally safe cinema booking system handling concurrent reservations with strict SQL integrity — built to eliminate double-booking anomalies.',
    longDescription:
      'This Python + SQL project tackles the classic concurrency problem in ticketing systems. Implements 3NF-normalised schema design, atomic database transactions, and seat-locking mechanisms to guarantee zero double-bookings even under concurrent load. Features a clean CLI interface and comprehensive reporting.',
    tags: ['Python', 'SQL', 'PostgreSQL', 'Database Design', '3NF Normalisation', 'Transactions'],
    category: 'Backend',
    githubLink: 'https://github.com/suryanshagrawal21/Movie-Booking-System',
    highlights: [
      '3NF normalised schema with referential integrity',
      'Atomic transactions preventing double-booking',
      'Concurrent seat-locking mechanism',
      'Comprehensive booking reports and analytics',
      'Clean CLI interface with input validation',
    ],
    emoji: '🎬',
    accentColor: '#EC4899',
  },
];

// ============================================================
// SKILLS
// ============================================================
export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'HTML5 / CSS3'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'Python (FastAPI/Flask)', 'REST APIs', 'JWT Auth'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Drizzle ORM', 'Mongoose'],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    skills: ['Scikit-Learn', 'Pandas', 'NumPy', 'Tesseract OCR', 'NLP Pipelines', 'Matplotlib'],
  },
  {
    category: 'Core CS',
    icon: '🧠',
    skills: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'Operating Systems', 'Machine Learning'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    skills: ['Git & GitHub', 'Postman', 'Docker', 'Cloudinary', 'Vite', 'VS Code'],
  },
];

// ============================================================
// EXPERIENCE
// ============================================================
export const experiences: Experience[] = [
  {
    role: 'Web Development Intern',
    company: 'AICTE — EduSkills',
    type: 'Internship',
    duration: 'Apr 2025 – Jun 2025',
    location: 'Remote',
    description: [
      'Engineered responsive, component-driven web interfaces using HTML5, modern CSS architectures, and JavaScript.',
      'Implemented rigorous technical requirement analysis and translated business logic into functional frontend components.',
      'Optimised DOM manipulation workflows to ensure high-performance rendering across modern browsers.',
      'Collaborated in structured sprint cycles, delivering features on schedule with clean, documented code.',
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
  },
  {
    role: 'Technology Job Simulation',
    company: 'Deloitte',
    type: 'Virtual Simulation',
    duration: 'Dec 2024',
    location: 'Virtual',
    description: [
      'Participated in an intensive simulation emulating enterprise software delivery lifecycles.',
      'Executed client requirement gathering, system design modelling, and agile consulting workflows.',
      'Analysed technical trade-offs to propose scalable architectural solutions for business problems.',
    ],
    skills: ['System Design', 'Agile', 'Technical Analysis'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Independent Projects',
    type: 'Self-Directed',
    duration: '2023 – Present',
    location: 'Personal Projects',
    description: [
      'Architected and deployed multiple full-stack MERN applications, handling end-to-end development from database schema to frontend deployment.',
      'Integrated ML models into Python backends, exposing prediction capabilities via structured REST APIs.',
      'Implemented robust authentication systems, state management, and optimised database queries for production reliability.',
    ],
    skills: ['MERN Stack', 'Python', 'Machine Learning', 'REST APIs', 'MongoDB', 'PostgreSQL'],
  },
];

// ============================================================
// CERTIFICATIONS
// ============================================================
export const certifications: Certification[] = [
  {
    title: 'Oracle Cloud Infrastructure 2025',
    issuer: 'Oracle — Certified Generative AI Professional',
    year: '2025',
    link: 'https://drive.google.com/file/d/16Z4uPvMTFUTo6PPWHteDPDC-ud2Eevc0/view?usp=drive_link',
    badgeColor: '#F97316',
  },
  {
    title: 'Modern AI Masterclass: Build 6 Projects',
    issuer: 'Udemy',
    year: '2025',
    link: 'https://drive.google.com/file/d/1cA-gVM1qkkpMG1CzSm74PQaeV54ejeI2/view?usp=drive_link',
    badgeColor: '#EC4899',
  },
  {
    title: 'Web Development Internship Certificate',
    issuer: 'AICTE — EduSkills Academy',
    year: '2025',
    link: 'https://drive.google.com/file/d/1rw_1i5aJGEFz9iIRHFylPYD8p4Awf9ek/view?usp=drive_link',
    badgeColor: '#6C63FF',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Infosys Springboard',
    year: '2026',
    link: 'https://drive.google.com/file/d/17tn4thnG6go9VHjAYZDSBwA1n7-_Pc_V/view?usp=drive_link',
    badgeColor: '#3B82F6',
  },
  {
    title: 'Python (Basic) Certification',
    issuer: 'HackerRank',
    year: '2024',
    link: 'https://drive.google.com/file/d/1t1fE06EhGxCj00ErYxCxqUc5FlT8rytP/view?usp=drive_link',
    badgeColor: '#00D4AA',
  },
  {
    title: 'Java (Basic) Certification',
    issuer: 'HackerRank',
    year: '2024',
    link: 'https://drive.google.com/file/d/1-Pr5WhxG9pX66tdy9WXAFSsKFmOlPQ0U/view?usp=drive_link',
    badgeColor: '#10B981',
  },
  {
    title: 'Deloitte Data Analytics Simulation',
    issuer: 'Deloitte — Forage',
    year: '2026',
    link: 'https://drive.google.com/file/d/1zcomFC63383PhcVprlRIdbV1XyDfs0LE/view?usp=drive_link',
    badgeColor: '#86C232',
  },
  {
    title: 'Deloitte Technology Simulation',
    issuer: 'Deloitte — Forage',
    year: '2024',
    link: 'https://drive.google.com/file/d/1nGICQ0CMTzPZCeolMFc3w9ZdrktHWzz0/view?usp=drive_link',
    badgeColor: '#4ADE80',
  },
  {
    title: 'Basic Statistical Data Analysis using R',
    issuer: 'SRMIST (Delhi NCR-Campus)',
    year: '2025',
    link: 'https://drive.google.com/file/d/1kc95aViesYyoEJ7wtLeD63zX2jAyKxlr/view?usp=drive_link',
    badgeColor: '#F43F5E',
  },
];

// ============================================================
// EDUCATION
// ============================================================
export const education: Education[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'SRM Institute of Science and Technology',
    campus: 'Delhi NCR Campus',
    duration: '2023 – 2027',
    grade: '8.99 / 10 CGPA',
    highlights: [
      'Core courses: DSA, DBMS, OOP, OS, CN, Machine Learning',
      'Active in tech clubs and hackathons',
      'Pursuing full-stack and AI/ML specialisation',
    ],
  },
];

// ============================================================
// CODING PROFILES
// ============================================================
export const codingProfiles: CodingProfile[] = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/suryanshagrawal21/',
    icon: '⚡',
    color: '#FFA116',
    stat: 'Active Solver',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/suryanshagrawal21',
    icon: '🐙',
    color: '#6C63FF',
    stat: 'Open Source',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/suryanshagrawal54',
    icon: '🏅',
    color: '#00D4AA',
    stat: 'Certified',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/suryanshagrawal21/',
    icon: '🌿',
    color: '#86C232',
    stat: 'Contributor',
  },
];
