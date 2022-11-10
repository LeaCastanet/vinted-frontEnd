import { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";

const Login = ({ handleToken, token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleToken={handleToken}
        token={token}
        setToken={setToken}
      />
    </>
  );
};

export default Login;
