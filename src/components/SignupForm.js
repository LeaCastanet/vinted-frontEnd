import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SignupForm = ({
  userName,
  setUserName,
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
    <div className="containerSignup">
      <p className="textSignupLogin">S'inscrire</p>

      <form
        className="containerForm"
        onSubmit={(event) => {
          event.preventDefault();
          setErrorMessage("");
          const data = {
            username: userName,
            email: email,
            password: password,
          };
          const fetchData = async () => {
            try {
              const response = await axios.post(
                `https://lereacteur-vinted-api.herokuapp.com/user/signup`,
                data
              );
              // console.log(response.data);
              if (response.data.token) {
                const token = response.data.token;
                handleToken(token);
                navigate("/");
              }
            } catch (error) {
              if (error.response?.status === 409) {
                setErrorMessage("Cet email est déja utilisé");
              }
              if (error.response?.data.message === "Missing parameters") {
                setErrorMessage("Vous devez remplir tous les champs");
              }
            }
          };
          fetchData();
        }}
      >
        <input
          className="inputSignupLogin"
          placeholder="User name"
          type="text"
          value={userName}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        ></input>
        <input
          className="inputSignupLogin"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <input
          className="inputSignupLogin"
          placeholder="Password"
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
          value="S'incrire"
        ></input>
      </form>

      <Link to="/signup">
        <p className="bottomTextSignupLogin">
          Tu as déjà un compte? Connecte-toi!
        </p>
      </Link>
    </div>
  );
};

export default SignupForm;
