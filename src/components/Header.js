import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Loading from "./Loading"; // Import the Loading component
import { useNavigate } from "react-router-dom";

const CreateButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleClick = () => (window.location.href = "/creerprojet");

  return (
    <button className={styles.createButton} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
      <img src={hovered ? "add.png" : "plus.png"} alt="" className={styles.buttonIcon} />
      <span>Créer Rifund</span>
    </button>
  );
};

const getNavLinkHref = (section) => {
  const links = {
    home: "/home",
    contact: "/contact",
    register: "/register",
    login: "/login",
  };
  return links[section] || "";
};

function Header() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading state
    const timer = setTimeout(() => setLoading(false), 1500); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check localStorage for login status
    const loginStatus = localStorage.getItem("login") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
    localStorage.setItem("login", false);
    navigate("/home");
  };
  return (
    <header className={styles.header}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.logo}>
            <a href={getNavLinkHref("home")} className={styles.logoImage}>
              <img src="rifund.jpg" alt="RIF UND Logo" className={styles.logoImage} />
            </a>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navList}>
              <li>
                <a href={getNavLinkHref("home")} className={styles.navLink}>
                 ACCEUIL
                </a>
              </li>
              <li>
                <a href={getNavLinkHref("contact")} className={styles.navLink}>
                  CONTACT
                </a>
              </li>
              {isLoggedIn || (
                <>
                  <li>
                    <a href={getNavLinkHref("register")} className={styles.navLink}>
                      S'INSCRIRE
                    </a>
                  </li>
                  <li>
                    <a href={getNavLinkHref("login")} className={styles.navLink}>
                      SE CONNECTER
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
          {!isLoggedIn || (
            <div className={styles.profileItem} onClick={handleDropdownToggle}>
              <img
                className={styles.profileImg}
                src="/user2.png"
                alt=""
              />
              <div>
                <div className={styles.profileName}>Nom & prenom</div>
                <div className={styles.profileDesc}>Description</div>
              </div>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <button className={styles.dropdownItem} onClick={handleLogout}>
                    Déconnexion
                  </button>
                  {/* Add more dropdown items if needed */}
                </div>
              )}
            </div>
          )}
          <CreateButton />
        </>
      )}
    </header>
  );
}

export default Header;
