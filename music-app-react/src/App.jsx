import { useState } from "react";
import "./App.css";
import Header from "./Header";
import FindSamples from "./components/FindSamples";
import Genres from "./Genres";
import CreateAccountForm from "./CreateAccountForm";
// import Footer from "./Footer";

const App = () => {
  const [isCreateAccountOpen, setIsCreateAccountOpen] = useState(false);
  const [count, setCount] = useState();

  const handleOpenCreateAccount = () => {
    setIsCreateAccountOpen(true);
  };

  const handleCloseCreateAccount = () => {
    setIsCreateAccountOpen(false);
  };

  return (
    <>
      <div>
        <Header />
        <CreateAccountForm />
        <FindSamples />
        <Genres />
        {/* <button onClick={handleOpenCreateAccount}>Create Account</button> */}
        {isCreateAccountOpen && (
          <div className="popup">
            <CreateAccountForm onClose={handleCloseCreateAccount} foo="foo" />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
