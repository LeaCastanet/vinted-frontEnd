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
    <div>
      <p>S'inscrire</p>
      <form
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
      <Link to="/signup">
        <p>Tu as déjà un compte? Connecte-toi!</p>
      </Link>
    </div>
  );
};

export default SignupForm;
