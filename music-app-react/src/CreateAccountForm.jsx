import React, { useState } from "react";

const CreateAccountForm = ({ onClose, foo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateAccount = () => {
    try {
      const userData = { username, password };

      // Your logic here (if needed), e.g., validation or other operations.

      localStorage.setItem("userData", JSON.stringify(userData));
      console.log("Account created successfully!", userData);
      onClose();
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <label htmlFor="newUsername">Username:</label>
      <input
        type="text"
        id="newUsername"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
      />
      <label htmlFor="newPassword">Password:</label>
      <input
        type="password"
        id="newPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="password"
      />
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default CreateAccountForm;
