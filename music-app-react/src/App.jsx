import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FindSamples from "./components/FindSamples";
// import Footer from "./Footer";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <div>
        <Header />
        <FindSamples />
      </div>
    </>
  );
}

export default App;
