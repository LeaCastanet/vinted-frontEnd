import imgHomeVinted from "../images/imgHomeVinted.jpg";

const HomeHeader = () => {
  return (
    <div className="homeHeader">
      <img src={imgHomeVinted}></img>
      <div className="containerBlock">
        <div className="blockSurImg">
          <p>Prêts à faire du tri dans vos placards?</p>
          <button className="buttonBlue">Commencer à vendre</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
