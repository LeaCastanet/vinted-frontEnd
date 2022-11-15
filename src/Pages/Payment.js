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

  return token ? (
    <div>
      <div className="infoProduitAchat">
        <p>Resumé de la commande</p>
        {/* <p>{title}</p> */}
        <p>Commande</p>
        <p>{price} €</p>
        <p>Frais de protection acheteur</p>
        <p>0,40 €</p>
        <p>Frais de port</p>
        <p>0,80 €</p>
      </div>
      <div>
        <p>Total</p>
        <p>Montant total</p>
      </div>
      <div>
        <p>
          Il ne vous reste plus qu'une étape pour vous offrir {title}. Vous
          allez payer "montant total" (frais de protection et frais de port
          inclus).
        </p>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm _id={_id} title={title} price={price} />
      </Elements>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Payment;
