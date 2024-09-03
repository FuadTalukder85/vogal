"use client";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/payment/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import Container from "../../../components/container/Container";
import useCarts from "../../../components/hooks/useCarts";

const stripePromise = loadStripe(
  "pk_test_51NFcc9HiKihjMle8zJVuk4BL9UAeYsK1ITglwbaqFFAQGicflQHHTl27Ryyy8pFAPg2ix4NyIMNhOB4lCz0NrZq5005iFgUWZ1"
);

const Payment = () => {
  // const stripePromise = loadStripe(
  //   "pk_test_51NFcc9HiKihjMle8zJVuk4BL9UAeYsK1ITglwbaqFFAQGicflQHHTl27Ryyy8pFAPg2ix4NyIMNhOB4lCz0NrZq5005iFgUWZ1"
  // );

  const [carts, error] = useCarts(); // Destructure to get carts and error
  // console.log(carts);

  // Ensure carts is an array and calculate the total price
  const total = carts.reduce((sum, item) => sum + item.totalPrice, 0);
  const price = parseFloat(total.toFixed(2));
  const quantity = carts.reduce((sum, quantity) => sum + quantity.quantity, 0);
  // console.log(quantity);

  //   console.log(price);

  return (
    <Container>
      <div className="mt-10 px-5 md:px-0">Payment</div>
      {error && <div className="error">Error: {error}</div>}
      <div className="px-5 md:px-0 mt-2">
        Total: <span className="text-red-500">${total}.00</span>
      </div>{" "}
      {/* Display the total price */}
      <Elements stripe={stripePromise}>
        <CheckoutForm carts={carts} price={price} quantity={quantity} />
      </Elements>
    </Container>
  );
};

export default Payment;
