import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import MonthButton from "../components/MonthButton";
import List from "../components/List";

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
  background-color: lightblue;
`;

const Home = () => {
  return (
    <>
      <StMain>
        <StHomeSection>
          <InputForm />
        </StHomeSection>
        <StHomeSection>
          <MonthButton />
        </StHomeSection>
        <StHomeSection>
          <List />
        </StHomeSection>
      </StMain>
    </>
  );
};

export default Home;
