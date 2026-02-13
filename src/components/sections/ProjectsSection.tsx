import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Icon, GitHubIcon, StarIcon } from '@/components/ui/Icon';
import { useGitHubRepos } from '@/hooks/useGitHub';
import { githubService } from '@/services/github.service';

export function ProjectsSection() {
  const { repos, loading, error } = useGitHubRepos(6);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Recent work and open-source contributions from GitHub"
    >
      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-slate-700" />
            <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
          </div>
          <p className="mt-6 text-slate-400">Loading repositories...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <AnimatedSection animation="scaleIn">
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/20 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-sm">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="warning" size="xl" className="text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">Unable to Load Projects</h3>
              <p className="text-slate-500 text-sm">{error}</p>
              <p className="text-slate-600 mt-4 text-xs">
                Please visit my GitHub directly to view projects.
              </p>
              <a
                href="https://github.com/websky112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="outline" size="sm" icon={<GitHubIcon size="sm" />}>
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      )}

      {/* Projects Grid */}
      {!loading && !error && repos.length > 0 && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <AnimatedSection key={repo.id} animation="fadeInUp" delay={index * 100}>
                <Card className="flex flex-col h-full group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-blue-600/10 transition-all duration-300">
                        <Icon name="folder" className="text-blue-400" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-white truncate group-hover:text-blue-400 transition-colors">
                          {repo.name}
                        </h3>
                        <p className="text-xs text-slate-500">
                          Updated {formatDate(repo.updated_at)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {repo.description || 'No description available for this repository.'}
                  </p>

                  {/* Topics/Tags */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <Badge key={topic} className="text-xs capitalize">
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 4 && (
                        <Badge className="text-xs">+{repo.topics.length - 4}</Badge>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center gap-4">
                      {/* Language */}
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: githubService.getLanguageColor(repo.language) }}
                          />
                          <span className="text-sm text-slate-400">{repo.language}</span>
                        </div>
                      )}
                      {/* Stars */}
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <StarIcon size="sm" />
                        <span className="text-sm">{repo.stargazers_count}</span>
                      </div>
                      {/* Forks */}
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Icon name="share" size="sm" />
                        <span className="text-sm">{repo.forks_count}</span>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-1">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                          aria-label={`Live demo of ${repo.name}`}
                        >
                          <Icon name="link" size="md" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                        aria-label={`View ${repo.name} on GitHub`}
                      >
                        <GitHubIcon size="md" />
                      </a>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* View All Button */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="text-center mt-12">
              <a
                href="https://github.com/websky112?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  icon={<GitHubIcon size="md" />}
                  className="group"
                >
                  <span>View All Projects on GitHub</span>
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </>
      )}

      {/* Empty State */}
      {!loading && !error && repos.length === 0 && (
        <div className="text-center py-16">
          <p className="text-slate-400">No repositories found.</p>
        </div>
      )}
    </Section>
  );
}
