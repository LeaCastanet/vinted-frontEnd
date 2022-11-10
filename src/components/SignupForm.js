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
}) => {
  const navigate = useNavigate();
  return (
    <div className="containerSignup">
      <p className="textSignupLogin">S'inscrire</p>

      <form
        className="containerForm"
        onSubmit={(event) => {
          event.preventDefault();
          const data = {
            username: userName,
            email: email,
            password: password,
          };
          const fetchData = async () => {
            const response = await axios.post(
              `https://lereacteur-vinted-api.herokuapp.com/user/signup`,
              data
            );
            console.log(response.data);
          };
          fetchData();

          //   const token = "1234567890";
          handleToken(token);
          // À la fin de cete procédure je suis redirigé vers Home
          navigate("/");
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
