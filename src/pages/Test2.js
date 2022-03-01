import { useState } from "react";

// Input Password Component
export default function Test2() {
  // Initialize a boolean state
  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <input type={passwordShown ? "text" : "password"} />
      <button onClick={togglePassword}>Show Password</button>
    </div>
  );
}