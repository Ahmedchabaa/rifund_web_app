import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBar.module.css';

function SearchBar() {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Searching for:', event.target.value);
    }
  };

  return (
    <div className={styles.searchBar}>
      <label htmlFor="search" className={styles.visuallyHidden}>Rechercher</label>
      <input 
        type="text" 
        id="search" 
        placeholder="Rechercher" 
        className={styles.searchInput} 
        onKeyDown={handleKeyDown} 
      />
      <FontAwesomeIcon 
        icon={faMagnifyingGlass} 
        className={styles.searchIcon} 
        onClick={() => console.log('Searching for:', document.getElementById('search').value)} 
      />
    </div>
  );
}

export default SearchBar;
