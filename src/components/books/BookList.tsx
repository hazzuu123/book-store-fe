import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { QUERYSTRING } from "../../constants/querystring";
import { ViewNode } from "./BooksViewSwitcher";

interface Props {
  books: Book[];
}
const BookList = ({ books }: Props) => {
  const location = useLocation();
  const [view, setView] = useState<ViewNode>("grid");

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get(QUERYSTRING.VIEW)) {
      setView(params.get(QUERYSTRING.VIEW) as ViewNode);
    }
  }, [location.search]);
  return (
    <BookListStyle view={view}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} view={view} />
      ))}
    </BookListStyle>
  );
};

interface BooksListStyleProps {
  view: ViewNode;
}
const BookListStyle = styled.div<BooksListStyleProps>`
  display: grid;
  grid-template-columns: ${({ view }) =>
    view === "grid" ? "repeat(4, 1fr)" : "repeat(1, 1fr)"};

  gap: 24px;
`;
export default BookList;
