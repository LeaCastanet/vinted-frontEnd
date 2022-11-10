import Vinted_logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="imgHeader" src={Vinted_logo}></img>
      </Link>

      <input></input>
      <button className="buttonWhite">S'incrire</button>
      <button className="buttonWhite">Se connecter</button>
      <button className="buttonBlue">Vends tes articles</button>
    </div>
  );
};

export default Header;
