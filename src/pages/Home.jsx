import React from "react";
import { useState } from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import MonthButton from "../components/MonthButton";
import List from "../components/List";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState("");
  const [data, setData] = useState([]);

  return (
    <>
      <h1>가계부</h1>
      <StMain>
        <StHomeSection>
          <InputForm setData={setData} />
        </StHomeSection>
        <StHomeSection>
          <MonthButton
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </StHomeSection>
        <StHomeSection>
          <List activeIndex={activeIndex} data={data} setData={setData} />
        </StHomeSection>
      </StMain>
    </>
  );
};

export default Home;

const StMain = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;
const StHomeSection = styled.section`
  border-radius: 16px;
  padding: 20px;
  background-color: rgb(106 185 172 / 53%);
`;
