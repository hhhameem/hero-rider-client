import React from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KCsPRBnrLiltbK7xQiXvuaxfwUlCKuZNg1OYKbGneXBG2OM5Eu9rjNBamY05I3g9BG6Q9UYwELS9I6z0PGu0ozd00M8VEbM7B"
);

const Payment = () => {
  const { serviceId } = useParams();
  let price;
  if (serviceId === "1") {
    price = 100;
  } else {
    price = 200;
  }
  return (
    <div>
      <h1>Pay for: {serviceId}</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
<h1>coming</h1>;
