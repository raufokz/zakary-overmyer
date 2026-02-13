import { Section } from './Section';
import { Card } from './Card';

const highlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '6+ Years Experience',
    description: 'Proven track record delivering complex front-end solutions across multiple industries.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Enterprise-Grade Apps',
    description: 'Specialized in building scalable, maintainable applications for large organizations.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Distributed Teams',
    description: 'Experienced in collaborating with remote teams across different time zones and cultures.',
  },
];

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate about crafting exceptional user experiences with modern web technologies"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed">
            I'm a <strong className="text-white">Senior Software Engineer</strong> specializing in 
            front-end web development, based in Marion, Illinois and working remotely with teams 
            worldwide. With over 6 years of hands-on experience, I've dedicated my career to 
            building enterprise-grade web applications that are both powerful and user-friendly.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            My expertise spans the full spectrum of modern front-end development, from crafting 
            pixel-perfect interfaces to architecting complex state management solutions. I'm 
            particularly passionate about accessibility (WCAG compliance), performance optimization, 
            and creating seamless developer experiences.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Throughout my career, I've had the privilege of working with distributed teams at 
            organizations like <strong className="text-white">Rockwell Automation</strong>, 
            <strong className="text-white"> Atrium Campus</strong>, and <strong className="text-white">ROI Selling</strong>, 
            where I've contributed to mission-critical applications serving thousands of users.
          </p>
        </div>
        
        <div className="space-y-6">
          {highlights.map((item, index) => (
            <Card key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
