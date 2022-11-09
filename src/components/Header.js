import Vinted_logo from "../images/Vinted_logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="imgHeader" src={Vinted_logo}></img>
      <input></input>
      <button>S'incrire</button>
      <button>Se connecter</button>
      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
