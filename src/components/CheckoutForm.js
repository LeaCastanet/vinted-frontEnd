import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ _id, title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAcheter = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: _id,
      });
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { stripeToken: stripeToken, title: title, amount: price }
      );
      console.log("response :", response);

      if (response.data === "succeeded") {
        setIsLoading(false);
        setCompleted(true);
      } else {
        alert("Une erreur est survenue");
      }
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={handleAcheter}>
      <CardElement />
      {isLoading ? (
        <p>Loading...</p>
      ) : completed ? (
        <p>Paiement effectué</p>
      ) : (
        <input type="submit"></input>
      )}
    </form>
  );
};

export default CheckoutForm;
