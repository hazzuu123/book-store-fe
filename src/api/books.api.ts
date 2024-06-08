import { Book } from "../models/book.model";
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
