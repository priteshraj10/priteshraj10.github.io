import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  topics: string[];
}

export async function getPublicRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const { data } = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 6,
    });

    return data.map(repo => ({
      name: repo.name,
      description: repo.description || '',
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count || 0,
      language: repo.language || '',
      topics: repo.topics || [],
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
} 