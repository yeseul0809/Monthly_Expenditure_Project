import React, { useEffect, useState } from "react";
import { stringify, v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
    id: uuidv4(),
    date: "2024-01-05",
    category: "식비",
    price: 100000,
    description: "세광양대창",
  },
  {
    id: uuidv4(),
    date: "2024-01-10",
    category: "도서",
    price: 40500,
    description: "모던 자바스크립트",
  },
  {
    id: uuidv4(),
    date: "2024-02-02",
    category: "미용",
    price: 155000,
    description: "미용실",
  },
  {
    id: uuidv4(),
    date: "2024-02-02",
    category: "도서",
    price: 75000,
    description:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];

const List = ({ activeIndex, data, setData }) => {
  const navigate = useNavigate();

  // 클릭한 월 에 맞는 데이터 필터링
  const filterDataByMonth = (data, activeIndex) => {
    const currentMonth = new Date().getMonth() + 1; // Date 객체는 월을 나타내는 값이 0부터 시작. -> 1 더해줘야한다.
    return data.filter(
      (item) =>
        new Date(item.date).getMonth() + 1 === (activeIndex || currentMonth)
    );
  };
  const filteredData = filterDataByMonth(data, activeIndex);

  // 로컬 스토리지에서 데이터 가져오기
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("localData"));
    if (storedData) {
      setData(storedData);
    } else {
      // 로컬 스토리지에 데이터가 없을 경우 더미데이터로 초기화
      localStorage.setItem("localData", JSON.stringify(dummyData));
      setData(dummyData);
    }
  }, []);

  return (
    <StList>
      {filteredData.map((data) => (
        <StDataWrap
          key={data.id}
          onClick={() => {
            navigate(`/detail/${data.id}`);
          }}
        >
          <StDataGroup>
            <span>{data.date}</span>
            <span>
              {data.category} - {data.description}
            </span>
          </StDataGroup>
          <StPrice>{data.price} 원</StPrice>
        </StDataWrap>
      ))}
    </StList>
  );
};

export default List;

const StList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 가격까지 포함된 리스트 한 줄
const StDataWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

// 날짜, 카테고리, 설명 묶음
const StDataGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & > span:first-child {
    margin-bottom: 5px;
    color: rgb(102, 102, 102);
    font-size: 14px;
  }

  & > span:last-child {
    font-weight: bold;
    color: #e98282;
    flex-shrink: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;

const StPrice = styled.span`
  flex-shrink: 0;
  font-weight: 500;
`;
