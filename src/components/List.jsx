import React, { useEffect, useState } from "react";
import { stringify, v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // List 컴포넌트 마운팅될때 로컬스토리지 데이터 확인
  // 저장된 값이 없다면 더미데이터 추가
  // 컴포넌트에서 상태관리할 setData도 함께 적용
  useEffect(() => {
    const storedData = localStorage.getItem("localData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
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
      setData(dummyData);
      localStorage.setItem("localData", JSON.stringify(dummyData));
    }
  }, []);

  return (
    <StList>
      {data.map((data) => (
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
          <span>{data.price} 원</span>
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
    color: #9982e9;
    flex-shrink: 0;
  }
`;
