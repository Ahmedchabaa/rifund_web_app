import React from 'react';
import styles from './Home.module.css';
import Listeprojet from '../components/homepage/Listedeprojet';
import Categorie from '../components/homepage/categorie';
import ProjectGrid from '../components/homepage/ProjectGrid';
import About from '../components/contactpage/About';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.imageContainer}>
        <img
          className={styles.homeimg}
          alt="Home"
          src="/home.png"
          data-scroll-to="home"
        />
        <img
          className={styles.homeimg2}
          alt="Home 2"
          src="/home2.jpg"
        />
        <div className={styles.overlayText}>
          <div className={styles.Text}>
            <pre>Nous sommes là pour vous <br />accompagner à chaque étape</pre>
          </div>
          <div className={styles.text2}>
            <p>Donner<br />  un coup de main s'impliquer</p>
          </div>
        </div>
      </div>
      <div className={styles.listeprojet}>
        <Listeprojet />
        <Categorie />
        <ProjectGrid />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
