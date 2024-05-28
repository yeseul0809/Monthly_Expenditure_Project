import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import MonthButton from "../components/MonthButton";
import List from "../components/List";
import store from "../redux/config/configStore";
import { Provider } from "react-redux";

const Home = () => {
  return (
    <Provider store={store}>
      <h1>가계부</h1>
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
    </Provider>
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
