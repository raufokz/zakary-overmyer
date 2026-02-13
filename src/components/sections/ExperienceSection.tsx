import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Icon } from '@/components/ui/Icon';
import { resumeService } from '@/services/resume.service';

export function ExperienceSection() {
  const experiences = resumeService.getExperiences();

  return (
    <Section
      id="experience"
      title="Professional Experience"
      subtitle="A track record of delivering impactful solutions across leading organizations"
      dark
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-600/50 to-transparent hidden sm:block" />

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              animation={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
              delay={index * 100}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-slate-900 hidden sm:block z-10 shadow-lg shadow-blue-500/30" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content Card */}
                <div className="md:w-1/2 pl-12 sm:pl-0">
                  <Card className={`relative overflow-hidden ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    {/* Current Badge Glow */}
                    {exp.current && (
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full" />
                    )}

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                          {exp.current && (
                            <Badge variant="success" className="text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-blue-400 font-semibold">{exp.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-slate-300 font-medium">{exp.period}</p>
                        <p className="text-slate-500 text-sm flex items-center justify-end gap-1.5">
                          <Icon name="location" size="sm" />
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-5 leading-relaxed">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                            <Icon name="check" size="sm" className="text-blue-400 w-3 h-3" />
                          </div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="primary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </Section>
  );
}
