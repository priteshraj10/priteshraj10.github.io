import axios from 'axios';

export interface KaggleProfile {
  rank: number;
  tier: string;
  points: number;
  competitions: number;
  datasets: number;
}

export async function getKaggleProfile(username: string): Promise<KaggleProfile | null> {
  try {
    const response = await axios.get(`https://www.kaggle.com/api/v1/users/${username}/profile`);
    const data = response.data;

    return {
      rank: data.rank || 0,
      tier: data.tier || 'Novice',
      points: data.points || 0,
      competitions: data.competitions || 0,
      datasets: data.datasets || 0,
    };
  } catch (error) {
    console.error('Error fetching Kaggle profile:', error);
    return null;
  }
} 