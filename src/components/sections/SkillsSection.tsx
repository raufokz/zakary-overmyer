import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SkillBar } from '@/components/ui/SkillBar';
import { Icon } from '@/components/ui/Icon';
import { resumeService } from '@/services/resume.service';

const categoryIcons: Record<string, string> = {
  'Frontend Frameworks': 'code',
  'Languages': 'code',
  'State & Data': 'server',
  'Tools & DevOps': 'settings',
};

export function SkillsSection() {
  const skillCategories = resumeService.getSkillCategories();
  const additionalSkills = resumeService.getAdditionalSkills();

  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and tools I use to bring ideas to life"
      dark
    >
      {/* Skill Categories Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedSection key={category.title} animation="fadeInUp" delay={categoryIndex * 100}>
            <Card className="h-full">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <Icon name={categoryIcons[category.title] || 'code'} size="lg" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 100 + skillIndex * 100}
                  />
                ))}
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* Additional Skills */}
      <AnimatedSection animation="fadeInUp" delay={400}>
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-xl text-slate-300 text-sm font-medium hover:border-blue-500/50 hover:text-blue-400 hover:bg-slate-800 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Core Technologies Highlight */}
      <AnimatedSection animation="fadeInUp" delay={600}>
        <div className="mt-16 p-8 bg-gradient-to-br from-blue-500/10 via-slate-800/50 to-cyan-500/5 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Core Technology Stack</h3>
            <p className="text-slate-400 text-sm">Primary tools for enterprise-grade web development</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'Angular', color: '#DD0031' },
              { name: 'TypeScript', color: '#3178C6' },
              { name: 'JavaScript', color: '#F7DF1E' },
              { name: 'React', color: '#61DAFB' },
              { name: 'Next.js', color: '#FFFFFF' },
              { name: 'RxJS', color: '#B7178C' },
              { name: 'GraphQL', color: '#E10098' },
              { name: 'Git', color: '#F05032' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-transparent hover:border-slate-600 transition-all duration-300 group cursor-default"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform group-hover:scale-110"
                  style={{ backgroundColor: tech.color + '20', color: tech.color }}
                >
                  {tech.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="text-slate-300 text-xs font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
