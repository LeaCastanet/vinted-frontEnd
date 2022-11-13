import Vinted_logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";

const Header = ({
  token,
  handleToken,
  textSearch,
  setTextSearch,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  orderBy,
  setOrderBy,
}) => {
  return (
    <>
      <div className="header">
        <Link to="/">
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
      <div className="AffinerRecherche">
        <input
          className="inputHeaderPriceMin"
          type="text"
          placeholder="prix minimum"
          value={priceMin}
          onChange={(event) => {
            setPriceMin(event.target.value);
          }}
        ></input>

        <input
          className="inputHeaderPriceMax"
          type="text"
          placeholder="prix maximum"
          value={priceMax}
          onChange={(event) => {
            setPriceMax(event.target.value);
          }}
        ></input>
        <button
          className="buttonPrice"
          onClick={(event) => {
            setOrderBy("price-asc");
          }}
        >
          Trier par prix croissant
        </button>
        <button
          className="buttonPrice"
          onClick={(event) => {
            setOrderBy("price-desc");
          }}
        >
          Trier par prix décroissant
        </button>
      </div>
    </>
  );
};

export default Header;
