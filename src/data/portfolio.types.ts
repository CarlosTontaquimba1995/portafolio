export interface Experience {
  id: string
  role: string
  organization: string
  period: string
  contract?: string
  achievements: string[]
  technologies: string[]
  current?: boolean
}

export interface SkillItem {
  label: string
  icon: string
  highlighted?: boolean
}

export interface SkillGroup {
  id: string
  title: string
  icon: string
  items: SkillItem[]
}

export interface ProjectAction {
  label: string
  icon: string
  emphasized?: boolean
}

export interface ProjectTechnologyGroup {
  label?: string
  items: string[]
  highlighted?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  layout: 'featured' | 'compact' | 'wide'
  technologyGroups: ProjectTechnologyGroup[]
  actions: ProjectAction[]
}

export interface PortfolioData {
  profile: {
    name: string
    title: string
    summary: string
    about: string
    relocation: string
    mainStack: Array<{ label: string; highlighted?: boolean }>
  }
  experiences: Experience[]
  skillGroups: SkillGroup[]
  education: Array<{ degree: string; institution: string }>
  languages: Array<{ name: string; level: string }>
  projects: Project[]
  contact: {
    email: string
    phoneDisplay: string
    phoneHref: string
    whatsappHref: string
    location: string
    linkedin: string
    github: string
  }
}
