import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const dateRef = useRef("");
  const categoryRef = useRef("");
  const priceRef = useRef("");
  const descriptionRef = useRef("");

  const modifyHandler = (e) => {
    const detailStoredData = JSON.parse(localStorage.getItem("localData"));
    const modifyData = {
      id,
      date: dateRef.current.value,
      category: categoryRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
    };

    // 기존 데이터에서 현재 id와 일치하는 데이터를 찾아 수정.
    const updatedData = detailStoredData.map((item) =>
      item.id === id ? modifyData : item
    );
    localStorage.setItem("localData", JSON.stringify(updatedData));
    navigate(`/`); // 홈으로 이동
  };

  // 기존 데이터에서 현재 id와 일치하는 데이터를 찾아 삭제.
  const deleteHandler = (e) => {
    Swal.fire({
      title: "정말 이 지출내역을 삭제하시겠습니까?",
      text: "이 작업은 되돌릴 수 없습니다.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        const detailStoredData = JSON.parse(localStorage.getItem("localData"));
        const deletedData = detailStoredData.filter((item) => item.id !== id);
        localStorage.setItem("localData", JSON.stringify(deletedData));
        navigate(`/`);
      }
    });
  };

  // 넘어오는 id 가 달라질때마다 참조 바꾸기
  useEffect(() => {
    const detailStoredData = JSON.parse(localStorage.getItem("localData"));
    const detailData = detailStoredData.find((data) => data.id === id);

    dateRef.current.value = detailData.date;
    categoryRef.current.value = detailData.category;
    priceRef.current.value = detailData.price;
    descriptionRef.current.value = detailData.description;
  }, [id]);

  return (
    <>
      <h1>지출 내역 수정</h1>
      <StDetailWrap>
        <StDetailGroup>
          <label htmlFor="date">날짜</label>
          <StDetailInput
            type="date"
            id="date"
            ref={dateRef}
            placeholder="YYYY-MM-DD"
          />
        </StDetailGroup>
        <StDetailGroup>
          <label htmlFor="category">항목</label>
          <StDetailInput
            type="text"
            id="category"
            ref={categoryRef}
            placeholder="지출항목"
          />
        </StDetailGroup>
        <StDetailGroup>
          <label htmlFor="price">금액</label>
          <StDetailInput
            type="number"
            id="price"
            ref={priceRef}
            placeholder="지출금액"
          />
        </StDetailGroup>
        <StDetailGroup>
          <label htmlFor="description">내용</label>
          <StDetailInput
            type="text"
            id="description"
            ref={descriptionRef}
            placeholder="지출내용"
          />
        </StDetailGroup>
        <StButtonWrap>
          <StDetailButton onClick={modifyHandler}>수정</StDetailButton>
          <StDetailButton $backgroundColor="#e98282" onClick={deleteHandler}>
            삭제
          </StDetailButton>
          <StDetailButton
            $backgroundColor="#4c9b6ee6"
            onClick={() => {
              navigate(`/`);
            }}
          >
            뒤로가기
          </StDetailButton>
        </StButtonWrap>
      </StDetailWrap>
    </>
  );
};

export default Detail;

const StDetailWrap = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(106 185 172 / 53%);
  border-radius: 16px;
`;

const StDetailGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  & > label {
    margin-bottom: 5px;
    font-size: 14px;
    color: rgb(51, 51, 51);
    text-align: left;
  }
`;

const StDetailInput = styled.input`
  padding: 10px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  font-size: 14px;
  font-family: "Gowun Dodum", sans-serif;
`;

const StButtonWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const StDetailButton = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
  font-family: "Gowun Dodum", sans-serif;
  background-color: ${(props) => props.$backgroundColor || "rgb(111 164 39)"};
`;
