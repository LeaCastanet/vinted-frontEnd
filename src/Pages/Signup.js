import { useState, useEffect } from "react";
import SignupForm from "../components/SignupForm";

const Signup = ({ handleToken, token, setToken }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <SignupForm
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleToken={handleToken}
        token={token}
        setToken={setToken}
      />
    </div>
  );
};

export default Signup;
