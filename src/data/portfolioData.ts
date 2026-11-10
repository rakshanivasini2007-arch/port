export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  githubUrl: string;
  techTags: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string; description?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  type: 'CURRENT' | 'PREVIOUS';
  institution: string;
  location: string;
  degree: string;
  year: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
}

export const PERSONAL_INFO = {
  name: "Rakshanivasini AG",
  shortName: "RAKSHA",
  role: "B.Tech Information Technology Student",
  location: "Salem, Tamil Nadu, India",
  email: "rakshanivasini2007@gmail.com",
  phone: "+91 7867841379",
  linkedin: "https://linkedin.com/in/raksha-nivasini-b592b9380",
  linkedinDisplay: "linkedin.com/in/raksha-nivasini-b592b9380",
  github: "https://github.com/rakshanivasini2007-anch",
  githubDisplay: "github.com/rakshanivasini2007-anch",
  primaryPositioning: "Building practical software with C++, Python, web technologies, and problem-solving at the core.",
  secondaryPositioning: "B.Tech Information Technology student focused on software development, Data Structures & Algorithms, AI/ML and practical problem solving.",
  heroParagraph: "I enjoy building practical applications, strengthening my Data Structures & Algorithms foundation, and exploring AI/ML and modern software development.",
  aboutParagraph1: "I am a B.Tech Information Technology student with a strong foundation in C++, Python, Web Development, Data Structures & Algorithms, and problem solving.",
  aboutParagraph2: "I enjoy applying technical concepts to practical software development projects while continuously improving my programming and problem-solving abilities.",
};

export const ABOUT_CARDS = [
  {
    title: "EDUCATION",
    value: "B.Tech — Information Technology",
    icon: "GraduationCap",
  },
  {
    title: "FOCUS",
    value: "Software Development + DSA",
    icon: "Target",
  },
  {
    title: "INTERESTS",
    value: "AI/ML + Web Development + Problem Solving",
    icon: "Sparkles",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", description: "Procedural Programming & Fundamentals" },
      { name: "C++", description: "Object-Oriented & Competitive Problem Solving" },
      { name: "Python", description: "Data Structures, Scripting & AI/ML Workflows" },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML5", description: "Semantic Page Structure & Accessibility" },
      { name: "CSS", description: "Modern Visual Styling, Layouts & Responsiveness" },
    ],
  },
  {
    category: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", description: "Arrays, Strings, Algorithm Design & Efficiency" },
      { name: "OOP", description: "Classes, Inheritance, Encapsulation & Polymorphism" },
      { name: "Problem Solving", description: "Analytical Thinking & Logic Building" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "Database Connectivity", description: "Integration of Databases with Python Services" },
      { name: "CRUD Operations", description: "Create, Read, Update & Delete Data Pipelines" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", description: "Version Control & Code Tracking" },
      { name: "GitHub", description: "Remote Repositories & Collaboration" },
    ],
  },
];

export const DSA_NODES = [
  { label: "Arrays", description: "Indexed memory contiguous data structures" },
  { label: "Strings", description: "Pattern matching & character manipulation" },
  { label: "Algorithms", description: "Searching, Sorting & Logical Efficiency" },
  { label: "Problem Solving", description: "Decomposing complex engineering challenges" },
];

export const PROJECTS: Project[] = [
  {
    id: "expense-tracker",
    number: "01",
    title: "EXPENSE TRACKER",
    subtitle: "Personal Financial Record Management",
    description: "A practical Expense Tracker application designed for managing personal financial records efficiently with real-time updates.",
    highlights: [
      "Developed an Expense Tracker application focused on personal expense management",
      "Implemented functionality for efficient expense tracking and category classification",
      "Designed with usability and intuitive interaction in mind",
      "Supports real-time record updates and clear summary visual representation"
    ],
    githubUrl: "https://github.com/rakshanivasini2007-anch/expense-tracker",
    techTags: ["Python", "Database", "CRUD Operations", "Usability Design"]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "marma-fintech",
    role: "AI/ML INTERN",
    company: "Marma Fintech Pvt. Ltd.",
    period: "May 2026 – May 2026",
    responsibilities: [
      "Developed practical skills in Python programming for backend and algorithmic logic",
      "Worked with database connectivity to seamlessly link software logic with data storage",
      "Implemented and executed CRUD operations for dynamic data manipulation",
      "Gained hands-on exposure to AI/ML development workflows and practical pipelines",
      "Applied core programming concepts to real-world practical software development tasks"
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "skcet",
    type: "CURRENT",
    institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
    location: "Coimbatore, Tamil Nadu",
    degree: "Bachelor of Technology — Information Technology",
    year: "Expected Graduation: 2029"
  },
  {
    id: "srk-school",
    type: "PREVIOUS",
    institution: "SRK Matriculation Higher Secondary School, Salem",
    location: "Salem, Tamil Nadu",
    degree: "12th — HSC",
    year: "2025"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "cert-ibm-ai",
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    year: "2026"
  },
  {
    id: "cert-coursera-skills",
    title: "Developing Interpersonal Skills",
    issuer: "Coursera",
    year: "2026"
  },
  {
    id: "cert-python-genai",
    title: "Programming in Python – Gen AI",
    issuer: "Certification Program",
    year: "2025"
  }
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Verbal Communication",
  "Teamwork",
  "Adaptability"
];

export const LANGUAGES = [
  { name: "English", note: "Fluent" },
  { name: "Tamil", note: "Native / Proficient" },
  { name: "Telugu", note: "Conversational" }
];

export const BUILDING_EDGE_PILLARS = [
  {
    code: "CODE",
    title: "C / C++ / Python",
    description: "Core languages for building robust software applications and algorithmic logic."
  },
  {
    code: "THINK",
    title: "DSA / OOP / Problem Solving",
    description: "Structured thinking, object design patterns, and efficient algorithm formulation."
  },
  {
    code: "BUILD",
    title: "Practical Software Projects",
    description: "Transforming concepts into usable software applications like Expense Tracker."
  },
  {
    code: "EXPLORE",
    title: "AI/ML + Web Development",
    description: "Hands-on exposure to machine learning workflows and modern web interfaces."
  }
];
