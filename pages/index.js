import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fit Bodies Faster</title>
        <meta name="description" content="Fit Bodies Fast: Semiglutide Weight Loss" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <Navbar />
          <div class="main-body">
          <div class="grid">
              <img src='./weightloss2.jpg' alt="weight loss image 1" class="header-image" sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"/>
              <h2>Semaglutide Weight Loss: Our Mission</h2>
              <p>In Today’s society, one of the most common struggles with people’s self esteem is often geared towards their struggles with being overweight. That is why in a world full of crash dieting and weight loss gimmicks, we at Fit Body Faster aim to provide a medical, long lasting solution; Semaglutide treatment. </p>
          </div>
          <div class="grid">
              <h2>What is Semaglutide?</h2>
              <p>	Semaglutide, also known by its brand name Ozempic, was originally a treatment for Diabetes.  More recently, the FDA has approved semaglutide as a breakthrough weight loss medication that has provided life changing results to thousands of patients across the United States. </p>
          </div>
          <div class="grid">
              <img src='./weight-loss1.jpg' alt="weight loss image 1" class="mid-image"/>
              <h2>How Does Semaglutide Work?</h2>
              <p>As a part of the medication class of glucagon-like peptide-1 (GLP-1) agonists, this medication acts as a hunger suppressor in the body. Essentially, GLP-1 agonists work by stimulating the pancreas to elevate insulin production. This elevation of insulin in turn causes a signaling cascade in your body, leading to a prolonged time in which the stomach will empty itself. The end result is feeling fuller for a longer period of time, which allows you to curb cravings without the feelings of starvation or invasive surgeries.</p>
          </div>
          <div class="grid">
              <h2>How Can I Get Prescribed Semaglutide?</h2>
              <p>After filling out a brief document of your personal and contact information, a secure form will be sent directly to you in which we can obtain a more extensive background of your medical history. From there, we can book an online consultation in which one of our providers will be able to evaluate your eligibility. After you are medically cleared, our providers will create your personalized dosage schedule. Prescriptions can be shipped right to your front door without the hassle of going to the pharmacy.</p>
          </div>
          <div class="grid">
              <h2>How Do You Use Semaglutide?</h2>
              <p>Semaglutide is administered subcutaneously via a small injection. These injections are only to be administered once a week. Please watch this helpful youtube video on how to properly prepare yourself and administer an injection:</p>
              <iframe width="360" height="315" src="https://www.youtube.com/embed/SjrIit0fYgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
          </div>
          <div class="grid">
              <h2>Am I a Good Candidate for Semaglutide?</h2>
              <p>If you have been diagnosed as overweight or obese and you are tired of the trials and tribulations of weight loss, semaglutide may be for you. However, medical weight loss is not for everyone, and can be dangerous for some individuals. Semaglutide is not recommended for individuals who:</p>
              <div>    
                <li>Have a personal or family history of Medullary Thyroid Carcinoma.</li>
                <li>Have Multiple Endocrine Neoplasia Syndrome Type 2 (MEN 2)</li>
                <li>Are currently pregnant, breastfeeding, or plan to be pregnant or breastfeeding.</li> 
                <li>Have a known medicinal allergy or hypersensitivity to semaglutide. </li>
              </div>
          </div>
          <div class="grid">
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
              <p>If you experience any of these side effects, please contact your physician to receive medical treatment and/or guidance.</p> 
          </div> 
        </div>
        <Footer />
      </main>
    </div>

  )
}
