import SectionTitle from "../../Component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  // TODO:  add public key
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutFrom />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
