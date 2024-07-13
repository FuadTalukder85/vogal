"use client";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Container from "../../components/container/Container";
import useCarts from "../../components/hooks/useCarts";

const stripePromise = loadStripe(
  "pk_test_51NFcc9HiKihjMle8zJVuk4BL9UAeYsK1ITglwbaqFFAQGicflQHHTl27Ryyy8pFAPg2ix4NyIMNhOB4lCz0NrZq5005iFgUWZ1"
);

const Payment = () => {
  const [carts, error] = useCarts(); // Destructure to get carts and error
  //   console.log(carts);

  // Ensure carts is an array and calculate the total price
  const total = carts.reduce((sum, item) => sum + item.totalPrice, 0);
  const price = parseFloat(total.toFixed(2));

  //   console.log(price);

  return (
    <Container>
      <div className="mt-10">Payment</div>
      {error && <div className="error">Error: {error}</div>}
      <div>Total: {total}</div> {/* Display the total price */}
      <Elements stripe={stripePromise}>
        <CheckoutForm price={total} />
      </Elements>
    </Container>
  );
};

export default Payment;
