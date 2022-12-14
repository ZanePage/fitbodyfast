import { ContactForm } from "../components/refill-contact-form";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div class="styledform">
                <div>
                    <p>We see you are interested in a refill! Fill out this form and we will contact you promptly!</p>
                    <p>We wish you the best on your weight loss journey!</p>
                </div>
                <ContactForm />
            </div>
]       </div>
    );
}