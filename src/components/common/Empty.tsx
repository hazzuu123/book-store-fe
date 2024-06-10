import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { FaSmileWink } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  icon?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
}
const Empty = ({ icon, title, description }: Props) => {
  return (
    <EmptyStyle>
      {icon && <div className="icon">{icon}</div>}

      <Title size="large" color="secondary">
        {title}
      </Title>
      {description && <p>{description}</p>}
    </EmptyStyle>
  );
};
const EmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }
`;
export default Empty;
