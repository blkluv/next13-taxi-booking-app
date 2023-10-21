"use client";
import { SelectedCarAmountContext } from '@/Context/SelectedCarAmountContext';
import CheckoutForm from '@/components/Payment/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function Payment() {

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any);

  const options:any = {
    mode: 'payment',
    amount: 49,
    currency: 'usd',
  };

  return (
    <Elements
      stripe={stripePromise}
      options={options}
    >
      <CheckoutForm />
    </Elements>
  )
}

export default Payment