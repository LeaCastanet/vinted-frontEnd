import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleToken,
  token,
  setToken,
}) => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const data = {
            email: { email },
            password: { password },
          };
          const response = await axios.get(
            "https://lereacteur-vinted-api.herokuapp.com/user/login",
            data
          );
          console.log(response.data);

          //   const token = "1234567890";
          handleToken(token);
          // À la fin de cete procédure je suis redirigé vers Home
          navigate("/");
        }}
      >
        <p>Se connecter</p>
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
        <input type="submit" value="Se connecter"></input>
      </form>
    </div>
  );
};

export default LoginForm;
