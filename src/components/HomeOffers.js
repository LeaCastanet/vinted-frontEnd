import { Link } from "react-router-dom";

const HomeOffers = ({ data }) => {
  return (
    <div className="homeOffers">
      {data.offers.map((offer, index) => {
        const id = offer._id;
        // console.log(offer.owner.account.avatar.url);
        return (
          <div className="homeOffer">
            <div className="avatarEtUsername">
              <p className="avatar">avatar</p>

              {/* {offer.owner.account.avatar ? (
                <img src={offer.owner.account.avatar.url}></img>
              ) : (
                ""
              )} */}

              <div>{offer.owner ? offer.owner.account.username : ""}</div>
            </div>

            <Link to={`/offer/${id}`}>
              <img key={index} src={offer.product_image.url}></img>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomeOffers;
