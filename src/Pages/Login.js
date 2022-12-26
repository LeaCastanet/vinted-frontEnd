import { useState } from "react";

import LoginForm from "../components/LoginForm";

const Login = ({ handleToken, token, setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
};

export default Login;
