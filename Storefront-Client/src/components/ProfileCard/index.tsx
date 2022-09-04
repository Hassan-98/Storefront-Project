import { useNavigate } from 'react-router-dom';
import { useStoreSelector } from 'store';

import "./profileCard.scss";

const ProfileCard = () => {
  const navigateTo = useNavigate();
  const user = useStoreSelector(({user}) => user.user);

  if (user === null) navigateTo('/login');

  return (
    <div className="profile-card">
      <h3>Profile</h3>
      <hr />
      <div className="details">
        <div className="firstname">
          <p>First Name: { user?.firstname }</p>
        </div>
        <div className="lastname">
          <p>Last Name: { user?.lastname }</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard