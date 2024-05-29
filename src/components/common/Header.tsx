import { styled } from "styled-components";
const Header = () => {
  return (
    <HeaderStyle>
      <h1>book store</h1>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.background};
  h1 {
    color: ${({ theme }) => theme.color.primary};
  }
`;

export default Header;
