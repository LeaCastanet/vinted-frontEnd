import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="containerLogin">
      <p className="textSignupLogin">Se connecter</p>
      <form
        className="containerForm"
        onSubmit={(event) => {
          event.preventDefault();
          const data = {
            email: email,
            password: password,
          };
          const fetchData = async () => {
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              data
            );
            console.log(response.data);
            const token = response.data.token;
            handleToken(token);
          };
          fetchData();

          //   const token = "1234567890";

          navigate("/");
        }}
      >
        <input
          className="inputSignupLogin"
          placeholder="email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          className="inputSignupLogin"
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></input>
        <input
          className="buttonSignupLogin"
          type="submit"
          value="Se connecter"
        ></input>
      </form>
      <Link to="/signup">
        <p className="bottomTextSignupLogin">
          Pas encore de compte? Inscris-toi!
        </p>
      </Link>
    </div>
  );
};

export default LoginForm;
