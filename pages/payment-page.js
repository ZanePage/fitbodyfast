import { checkout } from '../checkout.js'
import Navbar from '../components/Navbar.js'

export default function Payment() {
    return (
        <div>
            <Navbar />
            <div class="payments">
                <h1>Hello, you can make your payment here!</h1>
                <button onClick={() => {
                    checkout({
                        lineItems: [
                            {
                                price: "price_1MExfRFXPiISFqsupWUJ9eC7",
                                quantity: 1,
                            }
                        ]
                    })
                }}>Click Here to Pay with Stripe!</button>
            </div>
        </div>
    )
}