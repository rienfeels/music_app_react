import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FindSamples from "./components/FindSamples";
import Genres from "./Genres";
// import Footer from "./Footer";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <div>
        <Header />
        <FindSamples />
        <Genres />
      </div>
    </>
  );
}

export default App;
