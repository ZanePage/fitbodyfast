import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Injection = () => {
    return (
        <div class="injections">
            <Navbar />
            <div class="use">
                <div>
                    <h2>How to Draw Medicine?</h2>
                    <p>Semaglutide is administered subcutaneously via a small injection. These injections are only to be administered once a week. Please watch this helpful youtube video on how to properly prepare yourself and administer an injection:</p>
                </div>
                <iframe src="https://www.youtube.com/embed/SjrIit0fYgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
            </div>

            <div class="use">
                <h2>How to Inject Medication?</h2>
                <p>information to be added</p>
                <iframe src="https://www.youtube.com/embed/-8KnAmpXXko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Footer />
        </div>
    );
} 
export default Injection;