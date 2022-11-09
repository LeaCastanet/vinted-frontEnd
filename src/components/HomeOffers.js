import { Link } from "react-router-dom";

const HomeOffers = ({ data }) => {
  return (
    <div className="homeOffers">
      {data.offers.map((offer, index) => {
        const id = offer._id;
        // console.log(offer.owner.account.avatar.url);
        return (
          <>
            <div className="ImgEtUsername">
              <div>avatar</div>
              {/* <img>
              {offer.owner.account.avatar ? offer.owner.account.avatar.url : ""}
            </img> */}
              <div>{offer.owner ? offer.owner.account.username : ""}</div>
            </div>

            <Link to={`/offer/${id}`}>
              <img key={index} src={offer.product_image.url}></img>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default HomeOffers;
