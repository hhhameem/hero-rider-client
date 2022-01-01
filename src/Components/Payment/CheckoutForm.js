import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
  const { user } = useAuth();
  console.log(price);
  const [clientSecret, setClientSecret] = useState("");
  const [clicked, setClicked] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios
      .post("http://localhost:5000/create-payment-intent", { price })
      .then(function (response) {
        setClientSecret(response.data.clientSecret);
      })
      .catch(function (error) {
        window.alert(error.message + "Try Again");
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    setClicked(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email,
          },
        },
      });
    if (intentError) {
      window.alert(intentError.message);
    } else {
      console.log(paymentIntent);
      window.alert("Success");
      setClicked(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#000000",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {!clicked && (
        <button
          type='submit'
          disabled={!stripe}
          style={{
            padding: "5px 10px",
            border: "1px solid green",
            backgroundColor: "#42d942",
            marginTop: "20px",
          }}
        >
          Pay ${price}
        </button>
      )}
    </form>
  );
};

export default CheckoutForm;
<h1>ok</h1>;
