import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { FaList, FaTh } from "react-icons/fa";

const viewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaTh />,
  },
];
const BooksViewSwitcher = () => {
  return (
    <BooksViewSwitcherStyle>
      {viewOptions.map((option, index) => (
        <Button size="medium" schema="normal" key={index}>
          {option.icon}
        </Button>
      ))}
    </BooksViewSwitcherStyle>
  );
};

const BooksViewSwitcherStyle = styled.div``;
export default BooksViewSwitcher;
