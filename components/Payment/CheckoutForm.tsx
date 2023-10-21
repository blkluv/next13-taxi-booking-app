import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

/*
    To safely pass the payment information collected by the Payment Element to the Stripe API, access the Elements instance so that you can use it with stripe.confirmPayment. If you use the React Hooks API, then useElements is the recommended way to access a mounted Element. If you need to access an Element from a class component, use ElementsConsumer instead.

    The useStripe hook returns a reference to the Stripe instance passed to the Elements provider. If you need to access the Stripe object from a class component, use ElementsConsumer instead.
*/

const CheckoutForm = () => {
    const stripe:any = useStripe();
    const elements = useElements();

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        if(elements == null) return;
        const { error: submitError } = await elements.submit();
        if(submitError) {
            return;
        };
        // Create a PaymentIntent with the specified amount, and fetch the client secret from the response, for every payment attempt/transaction.
        const res = await fetch('/api/create_intent', {
            method: 'POST',
            body: JSON.stringify({
                amount: 149,
            }),
        });
        const secret = await res.json();
        // const { client_secret: clientSecret } = await res.json();
        const { error } = await stripe.confirmCardPayment(
            {
                clientSecret: secret,
                elements,
                confirmParams: {
                    // This url should be replaced with the appropiate url on Production
                    return_url: "http://localhost:3000/",
                },
            }
        );
    };


    return (
        <div className="flex flex-col justify-center items-center w-full">
            <form className='max-w-md' onSubmit={handleSubmit}>
                {/* Predefined form for using the payment gateway */}
                <PaymentElement />
                <button 
                    type="submit" 
                    className='w-full bg-yellow-400 p-2 rounded-lg mt-2'
                    disabled={!stripe || !elements}
                >
                    Pay
                </button>
            </form>
        </div>
    )
}


export default CheckoutForm