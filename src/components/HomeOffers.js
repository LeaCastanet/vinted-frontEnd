import { Link } from "react-router-dom";
import { useRef } from "react";

const HomeOffers = ({ data, page, setPage }) => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="homeOffers" ref={ref}>
        {data.offers.map((offer, index) => {
          const id = offer._id;
          // console.log(offer.owner.account.avatar.url);
          return (
            <div className="homeOffer">
              <div className="avatarEtUsernameHome">
                {offer.owner?.account.avatar && (
                  <img
                    className="avatarImgHome"
                    src={offer.owner.account.avatar.url}
                    style={{ height: 50, width: 50 }}
                  ></img>
                )}

                <div>{offer.owner ? offer.owner.account.username : ""}</div>
              </div>

              <Link to={`/offer/${id}`}>
                <img key={index} src={offer.product_image.url}></img>
              </Link>
              <div>
                <p className="infoSousImgHomePrice">{offer.product_price} €</p>
                {offer.product_details.map((detail, index) => {
                  if (detail.TAILLE) {
                    return (
                      <p className="infoSousImgHome" key={index}>
                        {detail.TAILLE}
                      </p>
                    );
                  } else {
                    return null;
                  }
                })}
                {offer.product_details.map((detail, index) => {
                  if (detail.MARQUE) {
                    return (
                      <p className="infoSousImgHome" key={index}>
                        {detail.MARQUE}
                      </p>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        {page !== 1 && (
          <button
            className="buttonPage"
            onClick={() => {
              setPage(page - 1);
              handleClick();
            }}
          >
            Previous
          </button>
        )}

        <div className="pageNumber">{page}</div>

        <button
          className="buttonPage"
          onClick={() => {
            setPage(page + 1);
            handleClick();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default HomeOffers;
