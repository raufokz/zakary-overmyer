import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const coursework = [
  'Software Engineering',
  'Web Development',
  'Data Structures',
  'Algorithms',
  'Database Systems',
  'Computer Networks',
  'UI/UX Design',
  'Agile Methodologies',
];

export function EducationSection() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic foundation in computer science and software engineering"
    >
      <AnimatedSection animation="scaleIn">
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden p-8 md:p-10">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-500/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-tr-full" />
            
            <div className="relative flex flex-col md:flex-row gap-8">
              {/* University Logo/Icon */}
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-900/30 transform hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-12 h-12 text-amber-100"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  University of Minnesota
                </h3>
                <p className="text-xl text-amber-400 font-semibold mb-2">
                  Twin Cities
                </p>
                <p className="text-blue-400 font-medium text-lg mb-6">
                  Computer Science & Software Engineering
                </p>
                
                <p className="text-slate-400 mb-8 leading-relaxed max-w-xl">
                  Developed a comprehensive foundation in software engineering principles, 
                  algorithms, data structures, and modern web development technologies. 
                  Engaged in collaborative team projects applying real-world development practices 
                  and agile methodologies.
                </p>
                
                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="px-4 py-2 bg-slate-800/70 border border-slate-700/50 rounded-lg text-sm text-slate-300 hover:border-amber-500/30 hover:text-amber-300 transition-all duration-300 cursor-default"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700" />
          </Card>
        </div>
      </AnimatedSection>
    </Section>
  );
}
