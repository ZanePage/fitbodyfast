import Footer from "../components/Footer";
import { ContactForm } from "../components/initial-contact-form";
import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <div class="cont">
            <Navbar />
            <div class="styledform">
                <div>
                    <p>Thank you for your interest! Please fill out the contact form and we will reach out to you shortly about a consulation!</p>
                    <p>We wish you the best on your weight loss journey!</p>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}