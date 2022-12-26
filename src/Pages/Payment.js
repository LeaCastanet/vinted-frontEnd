import { Navigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;
  const { _id } = location.state;

  console.log(title);

  const fraisProtectionAchat = Number(0.4);
  const fraisPort = Number(0.8);
  let total = fraisPort + fraisProtectionAchat + price;
  let totalFinal = total.toFixed(2);

  return token ? (
    <div className="paymentBody">
      <div className="paymentContainer">
        {/* <PaymentForm title={title} price={price} /> */}
        <div className="paymentForm">
          <p className="titleCommande">Resumé de la commande</p>
          <div className="infoProduitAchat">
            <div className="ligneProduitAchat">
              <p>Commande</p>
              <p>{price} €</p>
            </div>
            <div className="ligneProduitAchat">
              <p>Frais de protection acheteur</p>
              <p>{fraisProtectionAchat} €</p>
            </div>
            <div className="ligneProduitAchatFin">
              <p>Frais de port</p>
              <p>{fraisPort} €</p>
            </div>
          </div>
          <div className="infoTotal">
            <p>Total</p>
            <p>{totalFinal} €</p>
          </div>
          <div className="phraseAchat">
            <p>
              Il ne vous reste plus qu'une étape pour vous offrir
              <span> {title}</span>. Vous allez payer{" "}
              <span>{totalFinal} € </span>
              (frais de protection et frais de port inclus).
            </p>
          </div>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm _id={_id} title={title} price={totalFinal} />
        </Elements>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
