// Resume Service - Handles resume data and download functionality
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

class ResumeService {
  private readonly profileData = {
    name: 'Zakary James Overmyer',
    title: 'Senior Software Engineer – Front-End Web Development',
    location: 'Marion, IL (Remote)',
    email: 'zarkaryjames@gmail.com',
    phone: '(703) 596-215',
    github: 'github.com/websky112',
    summary: `Senior Front-End Engineer with 6+ years of experience building enterprise-grade web applications. Skilled in leading distributed teams and delivering high-performance, accessible solutions using modern JavaScript frameworks including Angular, React, and Next.js.`,
  };

  private readonly experiences: Experience[] = [
    {
      company: 'Rockwell Automation',
      role: 'Senior Software Engineer',
      period: '2026 – Present',
      location: 'Remote',
      description: 'Leading front-end development initiatives for industrial automation software solutions.',
      achievements: [
        'Architecting scalable Angular applications for enterprise industrial control systems',
        'Implementing real-time data visualization dashboards for manufacturing analytics',
        'Mentoring junior developers and establishing front-end best practices',
        'Driving accessibility improvements to meet WCAG 2.1 AA compliance',
      ],
      technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'D3.js'],
      current: true,
    },
    {
      company: 'Atrium Campus',
      role: 'Front-End Developer',
      period: '2023 – Present',
      location: 'Remote',
      description: 'Building modern campus management and educational technology platforms.',
      achievements: [
        'Developed responsive React applications serving 50,000+ students and faculty',
        'Integrated GraphQL APIs for efficient data fetching and real-time updates',
        'Reduced page load times by 40% through code splitting and lazy loading',
        'Implemented comprehensive unit and integration testing with Jest and Cypress',
      ],
      technologies: ['React', 'Next.js', 'GraphQL', 'TypeScript', 'TailwindCSS'],
      current: true,
    },
    {
      company: 'ROI Selling',
      role: 'Software Engineer',
      period: '2020 – 2023',
      location: 'Remote',
      description: 'Developed sales enablement tools and ROI calculation platforms for enterprise clients.',
      achievements: [
        'Built interactive ROI calculators and value assessment tools used by Fortune 500 companies',
        'Designed and implemented RESTful APIs with Node.js backend integration',
        'Created reusable component libraries reducing development time by 30%',
        'Led migration from legacy jQuery codebase to modern Angular framework',
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'REST APIs', 'SCSS'],
      current: false,
    },
    {
      company: 'Upwork',
      role: 'Freelance Developer',
      period: '2019 – 2020',
      location: 'Remote',
      description: 'Provided freelance web development services to diverse clients worldwide.',
      achievements: [
        'Delivered 20+ successful projects with 100% client satisfaction rating',
        'Built custom e-commerce solutions, landing pages, and web applications',
        'Established strong client relationships leading to repeat business',
        'Gained experience across various industries including healthcare, finance, and retail',
      ],
      technologies: ['JavaScript', 'React', 'Vue.js', 'WordPress', 'CSS3'],
      current: false,
    },
  ];

  private readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'TypeScript', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3/SCSS', level: 90 },
      ],
    },
    {
      title: 'State & Data',
      skills: [
        { name: 'RxJS', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 85 },
        { name: 'NgRx/Redux', level: 85 },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Jest/Cypress', level: 85 },
      ],
    },
  ];

  private readonly additionalSkills = [
    'WCAG Accessibility',
    'Responsive Design',
    'Performance Optimization',
    'Agile/Scrum',
    'Code Review',
    'Technical Documentation',
    'Mentoring',
    'Webpack/Vite',
    'Node.js',
    'Figma',
    'Storybook',
    'Material UI',
  ];

  getProfile() {
    return this.profileData;
  }

  getExperiences() {
    return this.experiences;
  }

  getSkillCategories() {
    return this.skillCategories;
  }

  getAdditionalSkills() {
    return this.additionalSkills;
  }

  private generateResumeText(): string {
    const { name, title, location, email, phone, github, summary } = this.profileData;
    
    let text = `${name}\n`;
    text += `${title}\n`;
    text += `${location} | ${email} | ${phone}\n`;
    text += `${github}\n\n`;
    text += `PROFESSIONAL SUMMARY\n${summary}\n\n`;
    
    text += `EXPERIENCE\n`;
    this.experiences.forEach((exp) => {
      text += `\n${exp.role} at ${exp.company}\n`;
      text += `${exp.period} | ${exp.location}\n`;
      text += `${exp.description}\n`;
      text += `Achievements:\n`;
      exp.achievements.forEach((achievement) => {
        text += `• ${achievement}\n`;
      });
      text += `Technologies: ${exp.technologies.join(', ')}\n`;
    });
    
    text += `\nSKILLS\n`;
    this.skillCategories.forEach((category) => {
      text += `\n${category.title}\n`;
      category.skills.forEach((skill) => {
        text += `• ${skill.name} (${skill.level}%)\n`;
      });
    });
    
    text += `\nADDITIONAL SKILLS\n${this.additionalSkills.join(', ')}\n`;
    
    return text;
  }

downloadResume() {
  const pdfPath = '/pdf/Zakary_James_Overmyer_Resume.pdf';

  // Try to fetch PDF first
  fetch(pdfPath, { method: 'HEAD' })
    .then((response) => {
      if (response.ok) {
        // PDF exists → download it
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Zakary_James_Overmyer_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        this.downloadGeneratedResume();
      }
    })
    .catch(() => {
      this.downloadGeneratedResume();
    });
}

private downloadGeneratedResume() {
  const content = this.generateResumeText();
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'Zakary_James_Overmyer_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
}

export const resumeService = new ResumeService();
