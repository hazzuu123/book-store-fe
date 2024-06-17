export interface Book {
  id: number;
  title: string;
  image: number;
  form: string;
  isbn: string;
  summary: string;
  detail: string;
  author: string;
  pages: number;
  contents: string;
  price: number;
  likes: number;
  pubDate: string;
  categoryId: number;
}

export interface BookDetail extends Book {
  categoryName: string;
  isLiked: boolean;
}

export interface BookReviewItem {
  id: number;
  userName: string;
  content: string;
  createdAt: string;
  score: number;
}

export type BookReviewItemWrite = Pick<BookReviewItem, "content" | "score">;
