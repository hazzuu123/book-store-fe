import { useEffect, useState } from "react";
import { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, unLike } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";

export const useBookDetail = (bookId: string | undefined) => {
  const [book, setBook] = useState<BookDetail | null>(null);
  const { isLoggedIn } = useAuthStore();
  const showAlert = useAlert();

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
  }, [bookId]);
  return { book, likeToggle, addToCart, cartAdded };
};
