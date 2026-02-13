// GitHub Service - Angular-style service pattern
export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
  size: number;
  open_issues_count: number;
  watchers_count: number;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

class GitHubService {
  private readonly BASE_URL = 'https://api.github.com';
  private readonly USERNAME = 'websky112';
  private cache: Map<string, { data: unknown; timestamp: number }> = new Map();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  private async fetchWithCache<T>(url: string): Promise<T> {
    const cached = this.cache.get(url);
    if (cached && Date.now() - cached.timestamp < this.CACHE_DURATION) {
      return cached.data as T;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    this.cache.set(url, { data, timestamp: Date.now() });
    return data;
  }

  async getRepositories(limit = 6): Promise<GitHubRepository[]> {
    const url = `${this.BASE_URL}/users/${this.USERNAME}/repos?sort=updated&per_page=${limit}`;
    return this.fetchWithCache<GitHubRepository[]>(url);
  }

  async getUser(): Promise<GitHubUser> {
    const url = `${this.BASE_URL}/users/${this.USERNAME}`;
    return this.fetchWithCache<GitHubUser>(url);
  }

  getLanguageColor(language: string): string {
    const colors: Record<string, string> = {
      TypeScript: '#3178c6',
      JavaScript: '#f7df1e',
      HTML: '#e34c26',
      CSS: '#563d7c',
      SCSS: '#c6538c',
      Python: '#3572A5',
      Java: '#b07219',
      'C#': '#178600',
      Vue: '#41b883',
      React: '#61dafb',
      Angular: '#dd0031',
      Go: '#00ADD8',
      Rust: '#dea584',
      Ruby: '#701516',
      PHP: '#4F5D95',
    };
    return colors[language] || '#6e7681';
  }
}

export const githubService = new GitHubService();
