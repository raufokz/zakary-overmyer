import { Section } from './Section';
import { Card } from './Card';
import { Badge } from './Badge';

const experiences = [
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

export function Experience() {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="A track record of delivering impactful solutions across leading organizations"
      dark
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600 to-slate-700 hidden sm:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-blue-500 border-4 border-slate-900 hidden sm:block z-10" />

              {/* Content */}
              <div className="md:w-1/2 pl-12 sm:pl-0">
                <Card className={index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        {exp.current && <Badge variant="success">Current</Badge>}
                      </div>
                      <p className="text-blue-400 font-medium">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 font-medium">{exp.period}</p>
                      <p className="text-slate-500 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-400">
                        <svg
                          className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
