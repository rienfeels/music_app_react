import { useState } from "react";
import "./App.css";
import Header from "./Header";
// import Footer from "./Footer";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  );
}

export default App;
