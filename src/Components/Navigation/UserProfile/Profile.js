import React, { useContext, useState } from 'react';
import styles from './Profile.module.css'; 
import profilepic from '../../../Assets/UserProfile/girluser.png';
import UserPic from '../../../Assets/UserProfile/girliconpng1.png';
import { AuthContext } from '../../../Store/Context/AuthContext';

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const userEmail = localStorage.getItem("email");
  const userName =  userEmail && userEmail.split('@')[0];

  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const logoutHandler = () => {
    alert("Email is Logged Out");
    authCtx.logout();
    window.location.href = 'https://bhuvneshwari12.github.io/BeautYBar/'; 

  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileIcon} onClick={toggleProfile}>
        <img src={profilepic} alt="Profile" className={styles.profileIconImage} />
      </div>

      {showProfile && (
        authCtx.isLoggedIn ? (
          <div className={styles.profileBox}>
            <h3> User Profile </h3>
            <img src={UserPic} alt="Profile" className={styles.profilePic} />
            <p><strong>Username: {userName}</strong></p>
            <p><strong>Email:</strong> {userEmail}</p>
            <button onClick={logoutHandler}>Logout</button>
          </div>
        ) : (
          <div className={styles.profileBox}>
            <h3>!! Please Login</h3>
          </div>
        )
      )}
    </div>
  );
};

export default Profile;
