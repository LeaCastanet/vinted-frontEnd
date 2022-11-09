import imgHomeVinted from "../images/imgHomeVinted.jpg";

const HomeHeader = () => {
  return (
    <div>
      <img src={imgHomeVinted}></img>
      <div className="blockSurImg">
        <p>Prêts à faire du tri dans vos placards?</p>
        <button>Commencer à vendre</button>
      </div>
    </div>
  );
};

export default HomeHeader;
