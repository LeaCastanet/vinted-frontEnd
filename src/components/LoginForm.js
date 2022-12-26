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
  // console.log(errorMessage);

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
            try {
              if (email || password) {
                const response = await axios.post(
                  "https://lereacteur-vinted-api.herokuapp.com/user/login",
                  data
                );
                // console.log(response.data);
                if (response.data.token) {
                  const token = response.data.token;
                  handleToken(token);
                  navigate("/");
                }
              } else {
                setErrorMessage("Merci de remplir tous les champs");
              }
            } catch (error) {
              if (error.response.status === 400) {
                setErrorMessage("Email ou mot de passe incorect");
              } else if (error.response.status === 401) {
                setErrorMessage("Email ou mot de passe incorect");
              }
              // console.log(error.message);
              // console.log(error.response.data);
              // console.log(errorMessage);
            }
          };
          fetchData();
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
        <p className="messageError">{errorMessage}</p>
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
