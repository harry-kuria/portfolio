
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  details: string[];
  video?: string;
  thumbnail?: string;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface BlogPost {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  date: string;
}
