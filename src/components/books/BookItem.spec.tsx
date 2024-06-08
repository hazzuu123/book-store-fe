import React from "react";
import { render, screen } from "@testing-library/react";

import BookItem from "./BookItem";
import { BookStoreThemeProvider } from "../../context/themeContext";
import { Book } from "../../models/book.model";

const dummy_book: Book = {
  id: 1,
  title: "Dummy title",
  image: 1,
  form: "Dummy form",
  isbn: "Dummy isbn",
  summary: "Dummy summary",
  detail: "Dummy detail",
  author: "Dummy author",
  pages: 100,
  contents: "Dummy contents",
  price: 10000,
  likes: 3,
  pubDate: "2021-01-01",
  categoryId: 1,
};

describe("bookItem 테스트", () => {
  it("렌더를 확인", () => {
    render(
      <BookStoreThemeProvider>
        <BookItem book={dummy_book} />
      </BookStoreThemeProvider>
    );

    expect(screen.getByText(dummy_book.title)).toBeInTheDocument();

    expect(screen.getByText(dummy_book.summary)).toBeInTheDocument();

    expect(screen.getByText(dummy_book.author)).toBeInTheDocument();

    expect(screen.getByText("10,000원")).toBeInTheDocument();

    expect(screen.getByText(dummy_book.likes)).toBeInTheDocument();

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummy_book.image}/600/600`
    );
  });
});
