import { Link } from "react-router-dom";

const OfferInfo = ({ data, setData, id }) => {
  return (
    <div>
      <p>Je suis la page offer</p>
      <span>The product id is : {id}</span>
      <div>
        <div>
          {data.product_pictures.map((images) => {
            return <img key={images.id} src={images.url}></img>;
          })}

          <div className="infoOffer">
            <p>{data.product_price}</p>
            <div>
              {data.product_details.map((info) => {
                return (
                  <>
                    <div>
                      {info.MARQUE ? (
                        <>
                          <p>Marque</p> <p>{info.MARQUE}</p>
                        </>
                      ) : null}
                    </div>
                    <div>
                      {info.TAILLE ? (
                        <>
                          <p>Taille</p> <p>{info.TAILLE}</p>
                        </>
                      ) : null}
                    </div>
                    <div>
                      {info.ETAT ? (
                        <>
                          <p>Etat</p> <p>{info.ETAT}</p>
                        </>
                      ) : null}
                    </div>
                    <div>
                      {info.COULEUR ? (
                        <>
                          <p>Couleur</p> <p>{info.COULEUR}</p>
                        </>
                      ) : null}
                    </div>
                    <div>
                      {info.EMPLACEMENT ? (
                        <>
                          <p>Emplacement</p> <p>{info.EMPLACEMENT}</p>
                        </>
                      ) : null}
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <p>{data.product_name}</p>
              <p>{data.product_description}</p>

              <div>
                {data.owner ? (
                  <>
                    <p>avatar</p> <p>{data.owner.account.username}</p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">Retourner sur la page home</Link>
    </div>
  );
};

export default OfferInfo;
