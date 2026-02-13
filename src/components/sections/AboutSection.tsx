import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Icon } from '@/components/ui/Icon';

const highlights = [
  {
    icon: 'clock',
    title: '6+ Years Experience',
    description: 'Proven track record delivering complex front-end solutions across multiple industries and enterprise environments.',
  },
  {
    icon: 'building',
    title: 'Enterprise-Grade Apps',
    description: 'Specialized in building scalable, maintainable applications with robust architecture for large organizations.',
  },
  {
    icon: 'users',
    title: 'Distributed Teams',
    description: 'Experienced in collaborating with remote teams across different time zones, cultures, and development workflows.',
  },
];

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '4', label: 'Companies' },
];

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Passionate about crafting exceptional user experiences with modern web technologies"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - About Text */}
        <div className="space-y-6">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a <strong className="text-white font-semibold">Senior Software Engineer</strong> specializing in 
              front-end web development, based in <strong className="text-blue-400">Marion, Illinois</strong> and working remotely with teams 
              worldwide. With over 6 years of hands-on experience, I've dedicated my career to 
              building enterprise-grade web applications that are both powerful and user-friendly.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-lg text-slate-300 leading-relaxed">
              My expertise spans the full spectrum of modern front-end development, from crafting 
              pixel-perfect interfaces to architecting complex state management solutions. I'm 
              particularly passionate about <strong className="text-white">WCAG accessibility</strong>, performance optimization, 
              and creating seamless developer experiences.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={300}>
            <p className="text-lg text-slate-300 leading-relaxed">
              Throughout my career, I've had the privilege of working with distributed teams at 
              organizations like <strong className="text-blue-400">Rockwell Automation</strong>, 
              <strong className="text-blue-400"> Atrium Campus</strong>, and <strong className="text-blue-400">ROI Selling</strong>, 
              where I've contributed to mission-critical applications serving thousands of users.
            </p>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        
        {/* Right Column - Highlight Cards */}
        <div className="space-y-6">
          {highlights.map((item, index) => (
            <AnimatedSection key={index} animation="fadeInRight" delay={index * 150}>
              <Card className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={item.icon} size="xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
