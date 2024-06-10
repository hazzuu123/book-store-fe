import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookDetail } from "../../models/book.model";
import Button from "../common/Button";
import InputText from "../common/InputText";
import { useBookDetail } from "../../hooks/useBookDetail";

interface Props {
  book: BookDetail;
}
const AddToCart = ({ book }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);

  const { addToCart, cartAdded } = useBookDetail(book.id.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleIncreate = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <AddToCartStyle $added={cartAdded}>
      <div>
        <InputText
          inputType="number"
          value={quantity}
          onChange={handleChange}
        />
        <Button size="medium" schema="normal" onClick={handleIncreate}>
          +
        </Button>
        <Button size="medium" schema="normal" onClick={handleDecrease}>
          -
        </Button>
      </div>
      <Button
        size="medium"
        schema="primary"
        onClick={() => addToCart(quantity)}
      >
        담기
      </Button>

      <div className="added">
        <p>장바구니에 추가되었습니다.</p>
        <Link to="/cart">장바구니로 이동</Link>
      </div>
    </AddToCartStyle>
  );
};

interface AddToCartStyleProps {
  $added: boolean;
}
const AddToCartStyle = styled.div<AddToCartStyleProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background-color: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 8px 12px;
    opacity: ${({ $added }) => ($added ? "1" : "0")};
    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
    transition: all 0.5s ease;
  }
`;
export default AddToCart;
