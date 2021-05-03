import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default function StripeButton({ price }) {
  const stripePrice = price * 100;
  const publishKey =
    "pk_test_51ImwdFSFmIY4eaow2aMui0i2vZEkGrrhgEbfJ8gGlVVafzNp94ZydtaZRmy5av858buIVm2zWxSZzeWs12s1jP4Y00oSdZdyQs";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="SHOPLO"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
}
