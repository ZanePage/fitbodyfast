import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Injection = () => {
    return (
        <div class="injections">
            <Navbar />
            <div class="use">
                <div>
                    <h2>How to Draw and Inject Semaglutide?</h2>
                    <div>
                    <p>Semaglutide is administered subcutaneously via a small injection. These injections are only to be administered once a week. Please watch this helpful youtube video on how to properly prepare yourself and administer an injection:</p>
                        <ol class="ls">
                            <li>Remove plastic safety cap. You can discard this cap. </li>
                            <li>Clean top of the vial with an alcohol wipe</li>
                            <li>Hold vial upside down</li>
                            <li>Uncap the syringe( usually orange in color). Syringes are often capped on both end ( needle and plunger side)</li>
                            <li>Pierce the rubber top with syringe.</li>
                            <li>Pull back on the plunger of syringe and fill to appropriate dose. Please note, the dose on the syringe is in "units"</li>
                            <li>Clean injection site with alcohol swab.</li>
                            <li>Pinch injection area. </li>
                            <li>Inject into the pinched area. </li>
                            <li>Push plunger to injection medication </li>
                            <li>Remove needle, recap and dispose of needle</li>
                        </ol>
                    </div>
                </div>
                <iframe src="https://www.youtube.com/embed/SjrIit0fYgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                <br />
                <iframe src="https://www.youtube.com/embed/-8KnAmpXXko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    );
} 
export default Injection;