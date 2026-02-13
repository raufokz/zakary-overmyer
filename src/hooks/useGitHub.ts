import { useEffect, useState } from 'react';
import { githubService, GitHubRepository } from '@/services/github.service';

interface UseGitHubState {
  repos: GitHubRepository[];
  loading: boolean;
  error: string | null;
}

export function useGitHubRepos(limit = 6) {
  const [state, setState] = useState<UseGitHubState>({
    repos: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    const fetchRepos = async () => {
      try {
        const repos = await githubService.getRepositories(limit);
        if (mounted) {
          setState({ repos, loading: false, error: null });
        }
      } catch (err) {
        if (mounted) {
          setState({
            repos: [],
            loading: false,
            error: err instanceof Error ? err.message : 'Failed to fetch repositories',
          });
        }
      }
    };

    fetchRepos();

    return () => {
      mounted = false;
    };
  }, [limit]);

  return state;
}
