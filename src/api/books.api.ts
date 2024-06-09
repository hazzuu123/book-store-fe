import { Book, BookDetail } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBookParams {
  categoryId?: number;
  isLatest?: boolean;
  perPage: number;
  page: number;
}
interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}
export const fetchBooks = async (params: FetchBookParams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });
    return response.data;
  } catch (err) {
    return {
      books: [],
      pagination: {
        page: 1,
        totalCount: 0,
      },
    };
  }
};

export const fetchBook = async (bookId: string) => {
  const response = await httpClient.get<BookDetail>(`/books/${bookId}`);
  return response.data;
};

export const likeBook = async (bookId: number) => {
  const response = await httpClient.post(`likes/${bookId}`);
  return response.data;
};

export const unLike = async (bookId: number) => {
  const response = await httpClient.delete(`likes/${bookId}`);
  return response.data;
};
