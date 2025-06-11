import axios from 'axios';
import * as cheerio from 'cheerio';

export interface MediumArticle {
  title: string;
  link: string;
  date: string;
  description: string;
}

export async function getMediumArticles(username: string): Promise<MediumArticle[]> {
  try {
    const response = await axios.get(`https://medium.com/feed/@${username}`);
    const $ = cheerio.load(response.data);
    const articles: MediumArticle[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    $('item').each((_: number, element: any) => {
      const title = $(element).find('title').text();
      const link = $(element).find('link').text();
      const date = $(element).find('pubDate').text();
      const description = $(element).find('description').text();

      articles.push({
        title,
        link,
        date,
        description,
      });
    });

    return articles.slice(0, 6); // Return latest 6 articles
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    return [];
  }
} 