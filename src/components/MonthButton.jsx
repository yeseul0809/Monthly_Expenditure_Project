import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MonthButton = () => {
  const [activeIndex, setActiveIndex] = useState("");

  const clickHandler = (index) => {
    setActiveIndex(index);
  };

  // 12월까지의 배열생성
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }

  return (
    <StButtonGroup>
      {months.map((month, index) => (
        <StButton
          key={index}
          $active={activeIndex === index}
          onClick={() => clickHandler(index)}
        >{`${month}월`}</StButton>
      ))}
    </StButtonGroup>
  );
};

export default MonthButton;

const StButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StButton = styled.button`
  text-align: center;
  line-height: normal;
  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: var(--black-alpha-100, #000);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#b9aee2" : "white")};
`;
