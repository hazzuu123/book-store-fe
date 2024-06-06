import React from "react";
import { FaBookOpen } from "react-icons/fa6";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <h1 className="logo">
        <FaBookOpen className="img" />
        BookStore
      </h1>
      <div className="copyright">
        <p>copyright(c), 2024, book store</p>
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.background};
  padding: 20px 0;

  .logo {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 1rem;

    svg {
      width: 20px;
    }
  }

  .copyright {
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.text};
    }
  }
`;
export default Footer;
