import { Section } from './Section';
import { Card } from './Card';

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic foundation in computer science and software engineering"
    >
      <div className="max-w-2xl mx-auto">
        <Card className="relative overflow-hidden">
          {/* Decorative Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
          
          <div className="relative flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
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
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-white mb-2">
                University of Minnesota – Twin Cities
              </h3>
              <p className="text-blue-400 font-medium text-lg mb-4">
                Computer Science & Software Engineering
              </p>
              <p className="text-slate-400 mb-6">
                Developed a strong foundation in software engineering principles, algorithms, 
                data structures, and web development technologies. Participated in collaborative 
                projects and gained hands-on experience with modern development practices.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                  Software Engineering
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                  Web Development
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                  Data Structures
                </span>
                <span className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300">
                  Algorithms
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
