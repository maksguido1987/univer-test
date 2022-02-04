import { IArticle } from '../shared/news.interface';

export default class NewsApi {
  readonly baseURL: string | undefined;
  readonly news: string;
  readonly headers: HeadersInit;

  constructor() {
    this.baseURL = process.env.REACT_APP_API_URL;
    this.news = `${this.baseURL}`;
    this.headers = {
      Authorization: 'a0b7d0d16c4d4fed9f6b525217923926',
    };
  }

  async getNews(searchValue: string): Promise<IArticle[]> {
    const response = await fetch(`${this.news}q=${searchValue}`, {
      headers: this.headers
    });
    const body = await response.json();
    return body.articles;
  }
}
