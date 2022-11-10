import Vinted_logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
  return (
    <div className="header">
      <Link to="/">
        <img className="imgHeader" src={Vinted_logo}></img>
      </Link>

      <input className="inputHeader"></input>

      {token ? (
        <button
          className="buttonDeconexion"
          onClick={() => {
            handleToken(null);
          }}
        >
          Deconexion
        </button>
      ) : (
        <>
          <Link to="/signup">
            <button className="buttonWhite">S'incrire</button>
          </Link>

          <Link to="/login">
            <button className="buttonWhite">Se connecter</button>
          </Link>
        </>
      )}

      <button className="buttonBlue">Vends tes articles</button>
    </div>
  );
};

export default Header;
