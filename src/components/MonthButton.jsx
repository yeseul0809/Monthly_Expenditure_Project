import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../context/DataContext";

const MonthButton = () => {
  const { activeIndex, setActiveIndex } = useContext(DataContext);

  const clickHandler = (index) => {
    setActiveIndex(index);
  };

  // 월 정보를 객체 형태로 저장
  const months = [
    { index: 1, name: "1월" },
    { index: 2, name: "2월" },
    { index: 3, name: "3월" },
    { index: 4, name: "4월" },
    { index: 5, name: "5월" },
    { index: 6, name: "6월" },
    { index: 7, name: "7월" },
    { index: 8, name: "8월" },
    { index: 9, name: "9월" },
    { index: 10, name: "10월" },
    { index: 11, name: "11월" },
    { index: 12, name: "12월" },
  ];

  return (
    <StButtonGroup>
      {months.map((month, index) => (
        <StButton
          key={index}
          $active={activeIndex === month.index}
          onClick={() => clickHandler(month.index)}
        >
          {month.name}
        </StButton>
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
  /* color: var(--black-alpha-100, #000); */
  font-family: "Gowun Dodum", sans-serif;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#e98282" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
`;
