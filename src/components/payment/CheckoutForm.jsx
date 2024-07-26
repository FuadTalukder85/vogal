"use client";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAddPaymentsMutation } from "../../redux/features/paymentApi/PaymentApi";

const CheckoutForm = ({ carts, price, quantity }) => {
  // console.log(carts);
  const stripe = useStripe();
  const elements = useElements();
  const user = useAppSelector(useCurrentUser);
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const [addPayments] = useAddPaymentsMutation();

  const totalProfits = carts?.map((profits) => profits.totalProfit);
  const totalProfit = totalProfits.reduce((item, sum) => item + sum, 0);
  // console.log(totalProfit);

  useEffect(() => {
    console.log(price);
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.clientSecret);
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("Payment Method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    // console.log("payment Intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // Save payment info to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity,
        totalProfit,
        cartsId: carts.map((item) => item._id),
        items: {},
      };
      // console.log(item);
      carts.forEach((item, index) => {
        const itemKey = `items${(index + 1).toString().padStart(2, "0")}`;
        const productKey = `product${(index + 1).toString().padStart(2, "0")}`;
        const quantityKey = `quantity${(index + 1)
          .toString()
          .padStart(2, "0")}`;

        payment.items[itemKey] = [
          {
            [productKey]: item.title,
            [quantityKey]: item.quantity,
          },
        ];
      });
      addPayments(payment);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with TransactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
