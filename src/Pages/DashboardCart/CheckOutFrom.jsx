import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    console.log("this is check item");
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    console.log(elements);
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    console.log("hlw2");
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
    } else {
      console.log("paymentMethod", paymentMethod);
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
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOutFrom;
