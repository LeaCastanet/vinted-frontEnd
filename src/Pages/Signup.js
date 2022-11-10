import { useState, useEffect } from "react";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <p>S'inscrire</p>
      <form>
        <input
          placeholder="user name"
          type="text"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        ></input>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <input type="submit" value="S'incrire"></input>
      </form>
    </div>
  );
};

export default Signup;
