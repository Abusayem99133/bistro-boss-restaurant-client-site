import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  // TODO:  add public key
  const stripePromise = loadStripe("");
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}></Elements>
      </div>
    </div>
  );
};

export default Payment;
