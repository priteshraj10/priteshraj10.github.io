export interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    updated_at: string;
}

export async function getPublicRepos(username: string): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
            {
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch repos');
        }

        const data = await response.json();
        return data as GitHubRepo[];
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
