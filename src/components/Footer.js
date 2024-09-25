import React, { useState } from 'react';
import styles from './Footer.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const socialIcons = [
  { iconClass: "fab fa-facebook-f", alt: "Facebook", url: "https://grouperif.com/" },
  { iconClass: "fas fa-globe", alt: "Site", url: "https://www.rifund.com" },
  { iconClass: "fab fa-instagram", alt: "Instagram", url: "https://www.instagram.com/rifund" },
  { iconClass: "fas fa-envelope", alt: "Email", url: "mailto:rhgrouperif@gmail.com" }
];

function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      // Process the email subscription here
      alert('Thank you for subscribing!');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.aboutSection}>
          <h3 className={styles.sectionTitle}>A propos de Rifund</h3>
          <p className={styles.aboutText}>
            Rifund.com est une plateforme en ligne dédiée aux dons bénévoles. Elle permet aux organismes de bienfaisance et aux particuliers de lancer des collectes de fonds pour soutenir leurs projets solidaires, humanitaires ou événementiels. La plateforme est entièrement sécurisée et très conviviale à utiliser.
          </p>
        </div>
        <div className={styles.linksSection}>
          
          <nav>
            <ul className={styles.footerNav}>
          
              <li><a href="/">Projets</a></li>
              <li><a href="/home#stats">Statistiques</a></li>
              <li><a href="/contact">Contacts</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.newsletterSection}>
          <form className={styles.newsletterForm} onSubmit={handleSubmit}>
            <input 
              type="email" 
              id="newsletterEmail" 
              placeholder="you@example.com" 
              className={styles.emailInput} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submitButton}>Envoyer</button>
            {error && <p className={styles.errorText}>{error}</p>}
          </form>

          <div className={styles.socialSection}>
            <p className={styles.socialText}>Suivez nous sur :</p>
            <div className={styles.socialIcons}>
              {socialIcons.map((icon, index) => (
                <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
                  <i className={icon.iconClass} aria-hidden="true" title={icon.alt}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightSection}>
        <p className={styles.copyrightYear}>Rifund Copyright © 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
