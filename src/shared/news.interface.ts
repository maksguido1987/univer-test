export interface IArticle {
  title: string;
  author: string;
  description: string;
  url: string;
  publishedAt: string;
  content: string;
}

export interface INews {
  news: IArticle[];
  error: string;
  isLoading: boolean;
}
