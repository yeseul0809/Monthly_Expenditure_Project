import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
  const [date, setDate] = useState("2024-05-23"); // 날짜
  const [category, setCategory] = useState(""); // 지출항목
  const [price, setPrice] = useState(""); // 지출금액
  const [description, setDescription] = useState(""); // 지출내용

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              date={date}
              setDate={setDate}
              category={category}
              setCategory={setCategory}
              price={price}
              setPrice={setPrice}
              description={description}
              setDescription={setDescription}
            />
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Detail
              setDescription={setDescription}
              setPrice={setPrice}
              setDate={setDate}
              setCategory={setCategory}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
