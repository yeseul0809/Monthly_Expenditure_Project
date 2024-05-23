import { useState } from "react";
import Router from "./shared/Router";
import GlobalStyles from "./components/GlobalStyles";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
