import React, { useState, useRef } from "react";
import styles from './Profile.module.css';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Missaoui Imen",
    role: "Admin",
    photo: "", // Add state for profile photo
  });
  const [photoPreview, setPhotoPreview] = useState(""); // State for photo preview

  const fileInputRef = useRef(null); // Create a ref for the file input

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo(prevInfo => ({
          ...prevInfo,
          photo: reader.result
        }));
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement save logic here (e.g., API call)
    setIsEditing(false);
  };

  const handlePhotoClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profilePhotoContainer} onClick={handlePhotoClick}>
        <img
          src={userInfo.photo || 'default-profile.jpg'} // Use a default profile photo if none is set
          alt="Profile"
          className={styles.profilePhotoImage}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className={styles.profilePhotoInput}
          ref={fileInputRef} // Attach the ref to the file input
        />
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit} className={styles.profileForm}>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className={styles.profileInput}
            placeholder="Nom"
          />
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={handleChange}
            className={styles.profileInput}
            placeholder="Nouveau mot de passe"
          />
          <button type="submit" className={styles.saveButton}>Enregistrer</button>
          <button type="button" onClick={handleEditToggle} className={styles.cancelButton}>Annuler</button>
        </form>
      ) : (
        <div className={styles.profileInfo}>
          <span className={styles.profileName}>{userInfo.name}</span>
          <span className={styles.profileRole}>{userInfo.role}</span>
          <button onClick={handleEditToggle} className={styles.editButton}>Modifier</button>
        </div>
      )}
    </div>
  );
}

export default Profile;
