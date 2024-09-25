import React, { useState } from 'react';
import styles from './ModifyCategoryForm.module.css';

const ModifyCategoryForm = ({ category, onClose }) => {
  const [categoryName, setCategoryName] = useState(category.name);
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Modified Category Name:', categoryName);
    console.log('Image:', image);

    // Call the onClose function to hide the form
    onClose();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Modifier la Catégorie</h2>
        <label>
          Nom:
          <input 
            type="text" 
            value={categoryName} 
            onChange={handleNameChange} 
            required 
          />
        </label>
        <label>
          Image:
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
        </label>
        <button type="submit" className={styles.submitButton}>Modifier</button>
        <button type="button" className={styles.closeButton} onClick={onClose}>Annuler</button>
      </form>
    </div>
  );
};

export default ModifyCategoryForm;
