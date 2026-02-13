import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Icon, GitHubIcon } from '@/components/ui/Icon';
import { resumeService } from '@/services/resume.service';

export function ContactSection() {
  const profile = resumeService.getProfile();

  const contactMethods = [
    {
      icon: <Icon name="email" size="lg" />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      description: 'Best for detailed inquiries',
    },
    {
      icon: <Icon name="phone" size="lg" />,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone.replace(/[^0-9+]/g, '')}`,
      description: 'For urgent matters',
    },
    {
      icon: <GitHubIcon size="lg" />,
      label: 'GitHub',
      value: profile.github,
      href: `https://${profile.github}`,
      description: 'View my code & projects',
    },
    {
      icon: <Icon name="location" size="lg" />,
      label: 'Location',
      value: profile.location,
      href: null,
      description: 'Available for remote work',
    },
  ];

  return (
    <Section
      id="contact"
      title="Let's Work Together"
      subtitle="Ready to bring your vision to life? Let's discuss how I can help."
      dark
    >
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <AnimatedSection animation="scaleIn">
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-600/20 via-blue-700/10 to-cyan-600/10 border-blue-500/30 mb-12">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
            
            <div className="relative text-center py-10 px-6 md:px-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Currently Available
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Looking for a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Senior Front-End Engineer</span>?
              </h3>
              
              <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                I'm passionate about building exceptional web experiences. Whether you need help with 
                <span className="text-blue-400 font-medium"> Angular</span>, 
                <span className="text-blue-400 font-medium"> React</span>, or architecting a 
                <span className="text-blue-400 font-medium"> scalable front-end</span>, 
                I'm ready to help your team succeed.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`mailto:${profile.email}`}>
                  <Button
                    size="lg"
                    className="group min-w-[200px]"
                    icon={<Icon name="email" />}
                  >
                    <span>Hire Me Now</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Button>
                </a>
                <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="min-w-[200px]"
                    icon={<GitHubIcon />}
                  >
                    View My Work
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((method, index) => (
            <AnimatedSection key={method.label} animation="fadeInUp" delay={index * 100}>
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <Card className="text-center h-full py-8 group-hover:border-blue-500/50 group-hover:bg-slate-800/80">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4 group-hover:scale-110 group-hover:from-blue-500/30 group-hover:to-cyan-500/20 transition-all duration-300">
                      {method.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {method.label}
                    </h4>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors break-all px-2">
                      {method.value}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">{method.description}</p>
                  </Card>
                </a>
              ) : (
                <Card className="text-center h-full py-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    {method.label}
                  </h4>
                  <p className="text-white font-medium break-all px-2">{method.value}</p>
                  <p className="text-xs text-slate-500 mt-2">{method.description}</p>
                </Card>
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Response Time Notice */}
        <AnimatedSection animation="fadeInUp" delay={500}>
          <div className="text-center mt-12 p-6 bg-slate-800/30 rounded-xl border border-slate-700/30">
            <p className="text-slate-400 text-sm">
              <span className="text-emerald-400 font-medium">⚡ Fast Response</span> — 
              I typically respond to inquiries within 24 hours during business days.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
