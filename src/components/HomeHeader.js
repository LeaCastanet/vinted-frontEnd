import imgHomeVinted from "../images/imgHomeVinted.jpg";
import { Link } from "react-router-dom";

const HomeHeader = ({ token }) => {
  return (
    <div className="homeHeader">
      <div className="homeImg">
        <img src={imgHomeVinted}></img>
      </div>

      <div className="containerBlock">
        <div className="blockSurImg">
          <p>Prêts à faire du tri dans vos placards?</p>
          {token ? (
            <Link to="/publish">
              <button className="buttonBlue">Commencer à vendre</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="buttonBlue">Commencer à vendre</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
