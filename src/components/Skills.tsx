import { Section } from './Section';
import { Card } from './Card';

const skillCategories = [
  {
    title: 'Frontend Frameworks',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Languages',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: 'TypeScript', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3/SCSS', level: 90 },
    ],
  },
  {
    title: 'State & Data',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: [
      { name: 'RxJS', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 85 },
      { name: 'NgRx/Redux', level: 85 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: [
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Jest/Cypress', level: 85 },
    ],
  },
];

const additionalSkills = [
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

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I use to bring ideas to life"
      dark
    >
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-6">Additional Expertise</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
