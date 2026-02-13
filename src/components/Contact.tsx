import { Section } from './Section';
import { Card } from './Card';
import { Button } from './Button';

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'zarkaryjames@gmail.com',
    href: 'mailto:zarkaryjames@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (703) 596-215',
    href: 'tel:+1703596215',
  },
  // Add any additional contact methods here (e.g., LinkedIn, etc.)
];

export function Contact() {
  return (
    <Section
      id="contact"
      title="Let's Work Together"
      subtitle="Ready to bring your vision to life? Let's discuss how I can help."
      dark
    >
      <div className="max-w-4xl mx-auto">
        {/* CTA Card */}
        <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/30 mb-12">
          <div className="text-center py-8 px-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Looking for a Senior Front-End Engineer?
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              I'm currently available for new opportunities. Whether you need help with
              Angular, React, or building a scalable front-end architecture, I'm here to help
              your team succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:zarkaryjames@gmail.com">
                <Button
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  Hire Me Now
                </Button>
              </a>
              <a href="https://github.com/websky112" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  icon={
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  }
                >
                  View My Work
                </Button>
              </a>
            </div>
          </div>
        </Card>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group"
            >
              <Card className="text-center h-full">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                  {method.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{method.label}</h4>
                <p className="text-slate-400 group-hover:text-blue-400 transition-colors break-all">
                  {method.value}
                </p>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
