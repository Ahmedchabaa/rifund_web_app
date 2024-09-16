import React from 'react';
import styles from './About.module.css';

function About() {
  const stats = [
    { icon: "user.png", value: "25270", label: "Membres" },
    { icon: "project.png", value: "500", label: "Projets" },
    { icon: "money.png", value: "10 000", label: "RiFund" }
  ];
  const services = [
    { icon: "magic.png", name: "Création" },
    { icon: "communiquer.png", name: "Communiquer" },
    { icon: "money2.png", name: "Collecter" },
    { icon: "bank.png", name: "Dépenser" }
  ];
  return (
    <section id="stats" className={styles.statisticsSection}>
      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <img src={stat.icon} alt="" className={styles.statIcon} />
            <p className={styles.statValue}>{stat.value}</p>
            <div className={styles.statUnderline}></div>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
          
        ))}
   </div>
   <div className={styles.sectionHeader}>
        <div className={styles.underline}></div>
        <h2 className={styles.sectionTitle}>
          Services de <span className={styles.highlight}>RiFund</span>
        </h2>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            <img src={service.icon} alt="" className={styles.serviceIcon} />
            <p className={styles.serviceName}>{service.name}</p>
          </div>
        ))}
      </div>
      <img
        src="homme.jpg"
        alt="Services illustration"
        className={styles.servicesIllustration}
      />
      <div className={styles.aboutSection}>
        <h3>RiFund</h3>
         <p className={styles.aboutTitle}>
          Est une solution innovante de financement participatif 
      qui se distingue par son approche centrée
         sur la transparence et la sécurité des investissements.
           </p>
          </div>
    </section>
  );
}

export default About;