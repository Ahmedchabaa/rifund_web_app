import React, { useState } from 'react';
import styles from './AddCategoryForm.module.css';

const AddCategoryForm = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Category Name:', categoryName);
    console.log('Image:', image);

    // Call the onClose function to hide the form
    onClose();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Ajouter une Catégorie</h2>
        <label>
          Nom de catégorie:
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
            required 
          />
        </label>
        <button type="submit" className={styles.submitButton}>Ajouter</button>
        <button type="button" className={styles.closeButton} onClick={onClose}>Annuler</button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
