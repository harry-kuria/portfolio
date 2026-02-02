
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
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
