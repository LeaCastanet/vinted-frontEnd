import Vinted_logo from "../images/Vinted_logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({ token, handleToken }) => {
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers",
          {
            textSearch,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [textSearch]);

  return (
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
  );
};

export default Header;
