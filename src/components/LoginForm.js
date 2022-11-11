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
  errorMessage,
  setErrorMessage,
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
          try {
            const fetchData = async () => {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/login",
                data
              );
              console.log(response.data);
              if (response.data.token) {
                const token = response.data.token;
                handleToken(token);
                navigate("/");
              }
            };
            fetchData();
          } catch (error) {
            console.log(error.message);
            console.log(error.response.data);
          }
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
