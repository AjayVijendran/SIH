import React, { useState } from 'react';
import './userprofile.css'
import defaultPic from './defaultpic.png'; // Import your default profile picture

function Userprofile() {
  // Sample user data (you'd typically fetch this from an API)
  const [user, setUser] = useState({
    id: 1,
    username: 'fardeen_khan',
    fullName: 'Fardeen Khan',
    email: 'gamefardeen@gmail.com',
    avatarUrl: null,
    address: null,
    contact: null,
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  // Handle form field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle avatar upload
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
  
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const maxWidth = 150; // Set your desired max width
          const maxHeight = 150; // Set your desired max height
          let width = img.width;
          let height = img.height;
  
          if (width > maxWidth) {
            const ratio = maxWidth / width;
            width = maxWidth;
            height *= ratio;
          }
  
          if (height > maxHeight) {
            const ratio = maxHeight / height;
            height = maxHeight;
            width *= ratio;
          }
  
          canvas.width = width;
          canvas.height = height;
  
          ctx.drawImage(img, 0, 0, width, height);
          const resizedImageUrl = canvas.toDataURL('image/jpeg', 0.8);
          setUser({ ...user, avatarUrl: resizedImageUrl });
        };
      };
  
      reader.readAsDataURL(file);
    }
  };

  return (
      <>
      <div className="profile-header">
        <img className='profile-avatar' src={user.avatarUrl || defaultPic} 
        alt="User Avatar"/>   

        {isEditing && (
        <label className="custom-upload-button">
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          style={{ display: 'none' }} // Hide the default input field
        />
        
        <i className='fa fa-pencil upload-icon'></i>
        
        </label>
        )}     

        <h1>
          {isEditing ? (
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleFieldChange}
              className='input-field'
            />
          ) : (
            user.fullName
          )}
        </h1>
        <p>
        @{user.username}
        </p>
      </div>
      <div className="user-profile">
      <div className="profile-details">
        <h2>User Details</h2>
        <p>
          Email: {isEditing ? (
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleFieldChange}
              className='input-field'
            />
          ) : (
            user.email
          )}
        </p>
        <p>
          Address: {isEditing ? (
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleFieldChange}
              className='input-field'
            />
          ) : (
            user.address
          )}
        </p>
        <p>
          Contact: {isEditing ? (
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleFieldChange}
              className='input-field'
            />
          ) : (
            user.contact
          )}
        </p>
      </div>
      <button className={isEditing ? 'save-button' : 'edit-button'} onClick={() => setIsEditing(!isEditing)}>
  {isEditing ? 'Save' : 'Edit'}
</button>

    </div>
    
    </>
  );
}

export default Userprofile;
