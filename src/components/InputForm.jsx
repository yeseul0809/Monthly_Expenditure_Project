import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { useState } from "react";

const InputForm = ({ setData }) => {
  const [date, setDate] = useState("2024-05-23"); // 날짜
  const [category, setCategory] = useState(""); // 지출항목
  const [price, setPrice] = useState(""); // 지출금액
  const [description, setDescription] = useState(""); // 지출내용

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!date || !price) {
      Swal.fire({
        title: "다시 입력해주세요.",
        text: "날짜와 금액 모두 입력해야합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }

    const newList = {
      id: uuidv4(),
      date,
      category,
      price: Number(price),
      description,
    };

    // 로컬 스토리지에 새롭게 추가되는 지출내역 저장하기
    setData((prevData) => {
      const updatedData = [...prevData, newList];
      localStorage.setItem("localData", JSON.stringify(updatedData));
      return updatedData;
    });

    setDate("2024-05-23");
    setCategory("");
    setPrice("");
    setDescription("");
  };

  return (
    <StInputFrom onSubmit={onSubmitHandler}>
      <StFromGroup>
        <label htmlFor="date">날짜</label>
        <StInput
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="YYYY-MM-DD"
        />
      </StFromGroup>
      <StFromGroup>
        <label htmlFor="category">항목</label>
        <StInput
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="지출항목"
        />
      </StFromGroup>
      <StFromGroup>
        <label htmlFor="price">금액</label>
        <StInput
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="지출금액"
        />
      </StFromGroup>
      <StFromGroup>
        <label htmlFor="description">내용</label>
        <StInput
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="지출내용"
        />
      </StFromGroup>
      <StInputButton>저장</StInputButton>
    </StInputFrom>
  );
};

export default InputForm;

const StInputFrom = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;
`;

const StFromGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  min-width: 120px;
  text-align: left;
`;

const StInput = styled.input`
  padding: 8px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
  font-family: "Gowun Dodum", sans-serif;
`;

const StInputButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: #e98282;
  color: white;
  border: none;
  border-radius: 4px;
  font-family: "Gowun Dodum", sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
`;
