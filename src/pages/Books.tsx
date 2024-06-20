import styled from "styled-components";
import Title from "../components/common/Title";
import BooksFilter from "../components/books/BooksFilter";
import Pagination from "../components/books/Pagination";
import BooksViewSwitcher from "../components/books/BooksViewSwitcher";
import BookList from "../components/books/BookList";

import BooksEmpty from "../components/books/BooksEmpty";
import Loading from "@/components/common/Loading";
import { useBooksInfinite } from "@/hooks/useBooksInfinite";
import Button from "@/components/common/Button";
const Books = () => {
  const {
    books,
    pagination,
    isEmpty,
    isBooksLoading,
    fetchNextPage,
    hasNextPage,
  } = useBooksInfinite();

  if (isEmpty) {
    return <BooksEmpty />;
  }
  if (!books || !pagination || isBooksLoading) {
    return <Loading />;
  }

  return (
    <>
      <Title size="large">도서 검색 결과</Title>
      <BooksStyle>
        <div className="filter">
          <BooksFilter />
          <BooksViewSwitcher />
        </div>

        <BookList books={books} />
        {/* <Pagination pagination={pagination} /> */}

        <div className="more">
          <Button
            size="medium"
            schema="normal"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            {hasNextPage ? "더보기" : "마지막 페이지"}
          </Button>
        </div>
      </BooksStyle>
    </>
  );
};

const BooksStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  .filter {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
  }
`;

export default Books;
