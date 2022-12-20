import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AiOutlineWarning } from 'react-icons/ai'
export default function Semaglutide() {
    return (
        <div>
            <Navbar />
            <div class="semaglute">
                <div class="glute-sec">
                    <img src='./weight-loss1.jpg' alt="weight loss image 1" class="mid-image"/>
                    <div class="blok">
                        <h2>What is Semaglutide?</h2>
                        <p>Semaglutide, also known by its brand name Ozempic, was originally a treatment for Diabetes.  More recently, the FDA has approved semaglutide as a breakthrough weight loss medication that has provided life changing results to thousands of patients across the United States. </p>
                    </div>
                </div>
                <div class="how-sec">
                    <h2>How Does Semaglutide Work?</h2>
                    <p>As a part of the medication class of glucagon-like peptide-1 (GLP-1) agonists, this medication acts as a hunger suppressor in the body. Essentially, GLP-1 agonists work by stimulating the pancreas to elevate insulin production. This elevation of insulin in turn causes a signaling cascade in your body, leading to a prolonged time in which the stomach will empty itself. The end result is feeling fuller for a longer period of time, which allows you to curb cravings without the feelings of starvation or invasive surgeries.</p>
                </div>
                <div class="use">
                    <div>
                        <h2>How Do You Use Semaglutide?</h2>
                        <p>Semaglutide is administered subcutaneously via a small injection. These injections are only to be administered once a week. Please watch this helpful youtube video on how to properly prepare yourself and administer an injection:</p>
                    </div>
                    <iframe src="https://www.youtube.com/embed/SjrIit0fYgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
                </div>
                <div class="use">
                    <h2>Am I a Good Candidate for Semaglutide?</h2>
                    <p>If you have been diagnosed as overweight or obese and you are tired of the trials and tribulations of weight loss, semaglutide may be for you. However, medical weight loss is not for everyone, and can be dangerous for some individuals. Semaglutide is not recommended for individuals who:</p>
                    <div>    
                        <li>Have a personal or family history of Medullary Thyroid Carcinoma.</li>
                        <li>Have Multiple Endocrine Neoplasia Syndrome Type 2 (MEN 2)</li>
                        <li>Are currently pregnant, breastfeeding, or plan to be pregnant or breastfeeding.</li> 
                        <li>Have a known medicinal allergy or hypersensitivity to semaglutide. </li>
                    </div>
                </div>
                <div class="use">
                    <h2>What Are the Side Effects and Adverse Reactions?</h2>
                    <p>Semaglutide has some potential side effects as the dosing is being increased from week to week. Common and less serious side effects include:</p>
                    <div>
                        <li>Nausea</li>
                        <li>Vomiting</li>
                        <li>Diarrhea</li>
                        <li>Abdominal pain</li>
                        <li>constipation</li>
                        <p>Less common but more serious side effects are:</p>
                        <li>Dizziness</li>
                        <li>Feeling light headed</li>
                        <li>Lethargy</li>
                        <li>A suppressed appetite that surpasses the desired effect.</li> 
                    </div>
                    <p><AiOutlineWarning /> If you experience any of these side effects, please contact your physician to receive medical treatment and/or guidance.</p> 
                </div> 
            </div>
            <Footer />
        </div>
    );
}