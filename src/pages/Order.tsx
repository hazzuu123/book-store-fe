import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Title from "../components/common/Title";

const Order = () => {
  const location = useLocation();

  const orderDataFromCart = location.state;

  console.log(orderDataFromCart);
  return (
    <OrderStyle>
      <Title size="large" color="primary">
        주문
      </Title>
    </OrderStyle>
  );
};

const OrderStyle = styled.div``;
export default Order;
