import React, { useState } from "react";
import styles from './Dashbord.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faUser, faProjectDiagram, faUsers, faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Profile from '../../components/admin/Profile.js';
import ManageCategories from "../../components/admin/ManageCategories.js";
import ManageProjets from "../../components/admin/ManageProjets.js";
import ManageCommunities from "../../components/admin/ManageCommunities.js";
import ManageUsers from "../../components/admin/ManageUsers.js";
import { useNavigate } from "react-router-dom";

function Dashbord() {
  const [activeItem, setActiveItem] = useState('profile'); // Set 'profile' as the initial state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    localStorage.setItem("login", false);
    navigate("/home");
  };

  const menuItems = [
    { icon: faUserCircle, text: "Profil", id: "profile" },
    { icon: faLayerGroup, text: "Gérer Catégorie", id: "manageCategories" },
    { icon: faUser, text: "Gérer Utilisateurs", id: "manageUsers" },
    { icon: faProjectDiagram, text: "Gérer Projets", id: "manageProjects" },
    { icon: faUsers, text: "Gérer Communautés", id: "manageCommunities" },
  ];

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h1 className={styles.logo}>
          <strong>RiFund</strong>
        </h1>
        <div className={styles.userProfile}>
          <hr className={styles.divider} />
          <img src={"user.png"} alt="Profile" className={styles.profilePhotoImage} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>Khadhraoui Insaf</span>
            <FontAwesomeIcon icon={faCaretDown} className={styles.userStatus} onClick={handleDropdownToggle} />
          </div>
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <button className={styles.dropdownItem} onClick={handleLogout}>
                Déconnexion
              </button>
            </div>
          )}
          <hr className={styles.divider} />
        </div>
        <nav className={styles.sidebarMenu}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.menuItem} ${activeItem === item.id ? styles.active : ""}`}
              onClick={() => handleItemClick(item.id)}
            >
              <FontAwesomeIcon icon={item.icon} className={styles.menuIcon} />
              <span>{item.text}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className={styles.mainContent}>
        {activeItem === 'profile' && <Profile />}
        {activeItem === 'manageCategories' && <ManageCategories />}
        {activeItem === 'manageProjects' && <ManageProjets />}
        {activeItem === 'manageCommunities' && <ManageCommunities />}
        {activeItem === 'manageUsers' && <ManageUsers />}
      </main>
    </div>
  );
}

export default Dashbord;
