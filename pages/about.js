import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div class="background">
            <Navbar />
            <div class="bio">
                <img src="#" alt="Image Coming Soon!" />
                <p>Dr. Mehta and Dr. Schube are board certified emergency medicine physicians keen on caring for their patients overall health. Through their vast experience, they have identified weight loss and the prevention of illness as the goal to achieving better treatment and care for their patient. With this in mind, Fit Body Faster was started with the aim to provide FDA approved weight loss medication with personalized telehealth medicine to assist with lifestyle goals of their patients.</p>
            </div>
            <div class="doctors">
                <div class="bio">
                    <img src="#" alt="Image Coming Soon!" />
                    <p>Dr. Schube graduated from The University of Georgia with a Bachelors of Science and then attended Tel Aviv University Sackler School of Medicine where he earned his Medical Degree. After completing residency training at New York Medical College Metropolitan Hospital, he moved back home to the metro Atlanta area to care for the community and raise a family.</p>
                </div>
                <div class="bio">
                    <img  src="#" alt="Image Coming Soon!" />
                    <p>Dr. Mehta attended Georgia State University where he graduated with a degree in Microbiology and Immunology. Afterwards, he attended Medical College of Wisconsin and then completed a residency at Resurrection Medical Center in Chicago. Dr. Mehta moved back to the metro Atlanta area and began focusing his efforts on treating his patients' overall health needs.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}