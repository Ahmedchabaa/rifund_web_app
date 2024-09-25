import React, { useState } from 'react';
import styles from './ManageUsers.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

function ManageUsers() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showValiderDialog, setShowValiderDialog] = useState(false);
  const [showRefuserDialog, setShowRefuserDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const users = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@example.com' },
    { id: 2, nom: 'Doe', prenom: 'Jane', email: 'jane.doe@example.com' },
    // Add more users as needed
  ];

  const handleSelectUser = (userId) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(userId)
        ? prevSelected.filter((id) => id !== userId)
        : [...prevSelected, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map((user) => user.id));
    }
  };

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleValiderClick = (user) => {
    setCurrentUser(user);
    setShowValiderDialog(true);
  };

  const handleRefuserClick = (user) => {
    setCurrentUser(user);
    setShowRefuserDialog(true);
  };

  const closeDialog = () => {
    setShowDeleteDialog(false);
    setShowValiderDialog(false);
    setShowRefuserDialog(false);
    setCurrentUser(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Gérer Utilisateurs</h2>
        <button
          className={styles.deleteButton}
          onClick={handleDeleteClick}
          disabled={selectedUsers.length === 0}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectedUsers.length === users.length}
                onChange={handleSelectAll}
              />
            </th>
            <th>#</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleSelectUser(user.id)}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className={styles.actionButton}
                  title="Valider"
                  onClick={() => handleValiderClick(user)}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  className={styles.actionDelete}
                  title="Refuser"
                  onClick={() => handleRefuserClick(user)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Dialog */}
      {showDeleteDialog && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3>Supprimer Utilisateurs</h3>
            <p>Êtes-vous sûr de vouloir supprimer les utilisateurs sélectionnés ?</p>
            <div className={styles.dialogButtons}>
              <button className={styles.confirmButton} onClick={closeDialog}>Oui</button>
              <button className={styles.cancelButton} onClick={closeDialog}>Non</button>
            </div>
          </div>
        </div>
      )}

      {/* Valider Dialog */}
      {showValiderDialog && currentUser && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3>Valider Utilisateur</h3>
            <p>Êtes-vous sûr de vouloir valider l'utilisateur {currentUser.prenom} {currentUser.nom}?</p>
            <div className={styles.dialogButtons}>
              <button className={styles.confirmButton} onClick={closeDialog}>Oui</button>
              <button className={styles.cancelButton} onClick={closeDialog}>Non</button>
            </div>
          </div>
        </div>
      )}

      {/* Refuser Dialog */}
      {showRefuserDialog && currentUser && (
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>
            <h3>Refuser Utilisateur</h3>
            <p>Êtes-vous sûr de vouloir refuser l'utilisateur {currentUser.prenom} {currentUser.nom}?</p>
            <div className={styles.dialogButtons}>
              <button className={styles.confirmButton} onClick={closeDialog}>Oui</button>
              <button className={styles.cancelButton} onClick={closeDialog}>Non</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUsers;
