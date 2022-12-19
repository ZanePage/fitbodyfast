import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from '../components/Header';
import { FaBars } from 'react-icons/fa';

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>

      <main className={styles.main}>
        <Navbar />
        <Header />
          <div class="main-body">
          <div class="mission">
              <h2>Semaglutide Weight Loss: Our Mission</h2>
              <p>In Today’s society, one of the most common struggles with people’s self esteem is often geared towards their struggles with being overweight. That is why in a world full of crash dieting and weight loss gimmicks, we at Fit Body Faster aim to provide a medical, long lasting solution; Semaglutide treatment. </p>
              <a href="/initial"><button>Contact Us for a Free Consulation</button></a>
              <hr />
          </div>
          <div class="getstarted">
            <h2>It has never been easier to lose weight!</h2>            
            <div class="box-container">
              <div class="box">
                Analyze
              </div>
              <div class="box">
                Plan
              </div>
              <div class="box">
                Service
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>

  )
}
