import React from 'react';
import './styles/Profile.css';

const Profile = ({ userInfo }) => {
  if (userInfo === undefined) {
    return null;
  }
  const { email, phone, address, lastName, firstName, profileImage } = userInfo;
  return (
    <div className='profile_wrapper container'>
      <div
        className='profile_image_wrapper'
        style={{ backgroundImage: `url(${profileImage})` }}
      >
        <img className='profile_image' src={profileImage} alt='profile_image' />
      </div>
      <div className='profile_info'>
        <div className='profile_info_title'>Basic Info</div>
        <div>
          name
          <span>{`${firstName} ${lastName}`}</span>
        </div>
        <div>
          email
          <span>
            <a href={`mailto:${email}`} title='Send mail'>
              {email}
            </a>
          </span>
        </div>
        <div>
          phone
          <span title='Call'>
            <a href={`tel:${phone}`}>{phone}</a>
          </span>
        </div>
      </div>
      <div className='profile_info'>
        <div className='profile_info_title'>Address Details</div>
        {Object.keys(address).map((key, index) => {
          return (
            <div key={index} className='clearfix'>
              {key}
              <span>{address[key]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
