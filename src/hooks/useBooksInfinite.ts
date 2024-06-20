import { useInfiniteQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { fetchBooks } from "../api/books.api";
import { LIMIT } from "../constants/pagination";
import { QUERYSTRING } from "../constants/querystring";

export const useBooksInfinite = () => {
  const location = useLocation();

  const getBooks = ({ pageParam }: { pageParam: number }) => {
    const params = new URLSearchParams(location.search);
    const categoryId = params.get(QUERYSTRING.CATEGORY_ID)
      ? Number(params.get(QUERYSTRING.CATEGORY_ID))
      : undefined;
    const isLatest = params.get(QUERYSTRING.NEWS) ? true : undefined;
    const page = params.get(QUERYSTRING.PAGE)
      ? Number(params.get(QUERYSTRING.PAGE))
      : 1;
    const perPage = LIMIT;

    return fetchBooks({ categoryId, isLatest, page, perPage });
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ["books", location.search],
    ({ pageParam = 1 }) => getBooks({ pageParam }),
    {
      getNextPageParam: (lastPage) => {
        const isLastPage =
          Math.ceil(lastPage.pagination.totalCount / LIMIT) ===
          lastPage.pagination.page;

        return isLastPage ? null : lastPage.pagination.page + 1;
      },
    }
  );

  const books = data ? data.pages.flatMap((page) => page.books) : [];

  const pagination = data ? data.pages[data.pages.length - 1].pagination : {};

  const isEmpty = books.length === 0;

  return {
    books,
    pagination,
    isEmpty,
    isBooksLoading: isFetching,
    fetchNextPage,
    hasNextPage,
  };
};
