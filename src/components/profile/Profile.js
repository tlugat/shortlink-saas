import {useState} from 'react';
import styles from './Profile.module.scss';

const Profile = ({screenWidth}) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdown = _ => setIsActive(!isActive);
  
  return (
    
    <div onMouseEnter={handleDropdown } onMouseLeave={handleDropdown} className={styles.profile}>
      {isActive && screenWidth >= 580 &&
        <div className={styles.profile__dropdown}>
          <ul>
            <li>My profile</li>
            <li>API Settings</li>
            <li>Help</li>
            <li><button>Logout</button></li>
          </ul>
        </div>
      }
    </div>
  )
}

export default Profile