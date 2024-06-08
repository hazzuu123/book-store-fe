import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../models/book.model";

interface Props {
  books: Book[];
}
const BookList = ({ books }: Props) => {
  return (
    <BookListStyle>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </BookListStyle>
  );
};

const BookListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
export default BookList;
