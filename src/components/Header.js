import Vinted_logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({ token, handleToken, textSearch, setTextSearch }) => {
  return (
    <>
      <div className="header">
        <div className="logoEtInput">
          <Link to="/" onClick="history.go(0)">
            <img className="imgHeader" src={Vinted_logo}></img>
          </Link>

          <input
            className="inputHeader"
            type="search"
            placeholder="Recherche des articles"
            value={textSearch}
            onChange={(event) => {
              setTextSearch(event.target.value);
            }}
          ></input>
        </div>
        <div className="buttonHeader">
          {token ? (
            <button
              className="buttonDeconexion"
              onClick={() => {
                handleToken(null);
              }}
            >
              Déconnexion
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
          {token ? (
            <Link to="/publish">
              <button className="buttonBlue">Vends tes articles</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="buttonBlue">Vends tes articles</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
