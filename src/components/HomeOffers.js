import { Link } from "react-router-dom";
import { useRef } from "react";

import AffinerRecherche from "./AffinerRecherche";

const HomeOffers = ({
  data,
  page,
  setPage,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  orderBy,
  setOrderBy,
}) => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={ref}>
        <AffinerRecherche
          priceMin={priceMin}
          setPriceMin={setPriceMin}
          priceMax={priceMax}
          setPriceMax={setPriceMax}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
        />
      </div>
      <div className="homeOffers">
        {data.offers.map((offer) => {
          const id = offer._id;
          // console.log(data.offers);
          return (
            <div className="homeOffer">
              <div className="avatarEtUsernameHome" key={offer.owner._id}>
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
                <img key={offer._id} src={offer.product_image.url}></img>
              </Link>
              <div>
                <p className="infoSousImgHomePrice">{offer.product_price} €</p>
                {offer.product_details.map((detail, index) => {
                  // console.log(offer.product_details);
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
                {offer.product_details.map((detail) => {
                  if (detail.MARQUE) {
                    return <p className="infoSousImgHome">{detail.MARQUE}</p>;
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
