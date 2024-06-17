import { useEffect, useState } from "react";
import {
  BookDetail,
  BookReviewItem,
  BookReviewItemWrite,
} from "../models/book.model";
import { fetchBook, likeBook, unLike } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";
import { addBookReview, fetchBookReview } from "@/api/review.api";

export const useBookDetail = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const { isLoggedIn } = useAuthStore();
  const { showAlert } = useAlert();
  const [reviews, setReviews] = useState<BookReviewItem[]>([]);

  const [cartAdded, setCartAdded] = useState<boolean>(false);

  const likeToggle = () => {
    if (!isLoggedIn) {
      showAlert("로그인이 필요합니다.");
      return;
    }

    if (!book) return;

    if (book.isLiked) {
      // 좋아요 => 해제
      unLike(book.id).then(() => {
        setBook({ ...book, isLiked: false, likes: book.likes - 1 });
      });
    } else {
      // 해제 => 좋아요 등록
      likeBook(book.id).then(() => {
        setBook({ ...book, isLiked: true, likes: book.likes + 1 });
      });
    }
  };

  const addToCart = (quantity: number) => {
    if (!book) return;

    addCart({
      bookId: book.id,
      quantity,
    }).then(() => {
      setCartAdded(true);

      setTimeout(() => {
        setCartAdded(false);
      }, 3000);
    });
  };
  useEffect(() => {
    if (!bookId) return;

    fetchBook(bookId).then((book) => {
      setBook(book);
    });

    fetchBookReview(bookId).then((reviews) => {
      setReviews(reviews);
    });
  }, [bookId]);

  const addReview = (data: BookReviewItemWrite) => {
    if (!book) return;

    addBookReview(book.id.toString(), data).then((res) => {
      fetchBookReview(book.id.toString()).then((reviews) => {
        setReviews(reviews);
      });
    });
  };
  return { book, likeToggle, addToCart, cartAdded, reviews, addReview };
};
