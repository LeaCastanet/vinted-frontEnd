import { Link } from "react-router-dom";

const OfferInfo = ({ data, setData, id, token }) => {
  // console.log(data);
  return (
    <div className="offerBody">
      <div className="offerInfo">
        <div className="containerOfferImg">
          {data.product_pictures.length <= 0 ? (
            <img src={data.product_image.url} className="offerImgFixe"></img>
          ) : (
            data.product_pictures.map((images) => {
              return (
                <div className="offerImgs">
                  <img
                    className="offerImg"
                    key={images.version_id}
                    src={images.url}
                  ></img>
                </div>
              );
            })
          )}
        </div>

        <div className="infoOffer">
          <p className="price">{data.product_price} €</p>
          <div className="containerOfferDescription">
            {data.product_details.map((info, index) => {
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
                    {info.ÉTAT ? (
                      <>
                        <p>Etat</p> <p>{info.ÉTAT}</p>
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

            <div>
              {data.owner ? (
                <div className="offerAvatarUsername">
                  {data.owner.account.avatar && (
                    <img
                      className="imgAvatar"
                      src={data.owner.account.avatar.secure_url}
                      key={data.owner._id}
                    />
                  )}
                  <p>{data.owner.account.username}</p>
                </div>
              ) : null}
            </div>
          </div>
          <div className="containerButtonAcheter">
            {token ? (
              <Link
                to="/payment"
                state={{
                  title: data.product_name,
                  price: data.product_price,
                  _id: data.owner.account._id,
                }}
              >
                <button className="buttonAcheter">Acheter</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="buttonAcheter">Acheter</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferInfo;
