import { Button } from '@/components/Button';
import { GitHubIcon, Icon } from '@/components/ui/Icon';
import { resumeService } from '@/services/resume.service';

export function HeroSection() {
  const profile = resumeService.getProfile();

  const handleDownloadResume = () => {
    resumeService.downloadResume();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Glow */}
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-blue-500/40 rounded-full animate-float" />
        <div className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-blue-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-[25%] w-1 h-1 bg-cyan-300/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-8 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            Available for Remote Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {profile.name.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {profile.name.split(' ').slice(2).join(' ')}
          </span>
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-200 font-semibold mb-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          Senior Software Engineer
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-blue-400 font-medium mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Front-End Web Development
        </p>

        {/* Value Proposition */}
        <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Building enterprise-grade web applications with <span className="text-slate-300">Angular</span>, <span className="text-slate-300">React</span>, and <span className="text-slate-300">TypeScript</span>. 
          {' '}6+ years crafting accessible, high-performance solutions for distributed teams.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <a href="#contact">
            <Button
              size="lg"
              className="group"
              icon={
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              }
              iconPosition="right"
            >
              Hire Me
            </Button>
          </a>
          <Button
            variant="outline"
            size="lg"
            onClick={handleDownloadResume}
            icon={<Icon name="download" size="md" />}
          >
            Download Resume
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-400 opacity-0 animate-fade-in-up mb-8" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2.5 text-sm">
            <Icon name="location" size="md" className="text-blue-500" />
            <span>{profile.location}</span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors"
          >
            <Icon name="email" size="md" className="text-blue-500" />
            <span>{profile.email}</span>
          </a>
          <a
            href={`https://${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-sm hover:text-blue-400 transition-colors"
          >
            <GitHubIcon size="md" className="text-blue-500" />
            <span>{profile.github}</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
