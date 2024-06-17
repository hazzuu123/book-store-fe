import { BookReviewItem, BookReviewItemWrite } from "@/models/book.model";
import { requestHandler } from "./http";

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>("get", `/reviews/${bookId}`);
};

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler<AddBookReviewResponse, BookReviewItemWrite>(
    "post",
    `/reviews/${bookId}`,
    data
  );
};
