import styled from "styled-components";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}
const CheckIconButton = ({ isChecked, onCheck }: Props) => {
  return (
    <CheckIconButtonStyle onClick={onCheck}>
      {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
    </CheckIconButtonStyle>
  );
};

const CheckIconButtonStyle = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default CheckIconButton;
