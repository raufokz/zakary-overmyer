import { GitHubIcon, LinkedInIcon } from '@/components/ui/Icon';
import { resumeService } from '@/services/resume.service';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/websky112',
    icon: GitHubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: LinkedInIcon,
  },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const profile = resumeService.getProfile();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <a
              href="#"
              className="inline-block text-2xl font-bold text-white hover:text-blue-400 transition-colors"
            >
              ZJO<span className="text-blue-500">.</span>
            </a>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
              Senior Software Engineer specializing in Front-End Web Development. 
              Building enterprise-grade applications with modern technologies.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size="md" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {profile.phone}
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {profile.location}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs flex items-center gap-2">
              <span>Built with</span>
              <span className="text-blue-400">React</span>
              <span>•</span>
              <span className="text-blue-400">TypeScript</span>
              <span>•</span>
              <span className="text-blue-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
