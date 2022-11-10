import { Link } from "react-router-dom";

const OfferInfo = ({ data, setData, id }) => {
  return (
    <div className="offerBody">
      <div className="offerInfo">
        {data.product_pictures.map((images) => {
          return (
            <div className="container.OfferImg">
              <img className="offerImg" key={images.id} src={images.url}></img>
            </div>
          );
        })}

        <div className="infoOffer">
          <p className="price">{data.product_price} €</p>
          <div className="containerOfferDescription">
            {data.product_details.map((info) => {
              return (
                <div>
                  <div className="offerDescription">
                    {info.MARQUE ? (
                      <>
                        <p>Marque</p> <p>{info.MARQUE}</p>
                      </>
                    ) : null}
                  </div>
                  <div className="offerDescription">
                    {info.TAILLE ? (
                      <>
                        <p>Taille</p> <p>{info.TAILLE}</p>
                      </>
                    ) : null}
                  </div>
                  <div className="offerDescription">
                    {info.ETAT ? (
                      <>
                        <p>Etat</p> <p>{info.ETAT}</p>
                      </>
                    ) : null}
                  </div>
                  <div className="offerDescription">
                    {info.COULEUR ? (
                      <>
                        <p>Couleur</p> <p>{info.COULEUR}</p>
                      </>
                    ) : null}
                  </div>
                  <div className="offerDescription">
                    {info.EMPLACEMENT ? (
                      <>
                        <p>Emplacement</p> <p>{info.EMPLACEMENT}</p>
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <p className="productName">{data.product_name}</p>
            <p className="productDescription">{data.product_description}</p>

            <div className="offerAvatarUsername">
              {data.owner ? (
                <>
                  <p className="avatar">avatar</p>{" "}
                  <p>{data.owner.account.username}</p>
                </>
              ) : null}
            </div>
          </div>
          <div className="containerButtonAcheter">
            <button className="buttonAcheter">Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferInfo;
