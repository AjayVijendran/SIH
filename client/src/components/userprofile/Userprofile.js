import React, { useState } from 'react';
import './userprofile.css'
import defaultPic from './defaultpic.png'; // Import your default profile picture
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateMutation } from '../../features/usersApiSlice';
import { setCredentials } from '../../features/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
function Userprofile() {
  // Sample user data (you'd typically fetch this from an API)
  const {userInfo} = useSelector((state)=>state.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [update] = useUpdateMutation();
  const [user, setUser] = useState({
    ...userInfo
  });

  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  // Handle form field changes
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleClick = async (event) =>{
    event.preventDefault();
    if(isEditing){
      try {
        const res = await update(user).unwrap();
        dispatch(setCredentials({...res}));
        toast.success("Data Updated and saved")
      } catch (e) {
        setUser({...userInfo})
        toast.error(e?.data?.Error || e.Error)
        if (e.status ===401){
            navigate('/auth')
        }
      }
    }
    setIsEditing(!isEditing)
  }

  const navigateHome = () => {
    navigate('/home')
  }
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
          const resizedImageUrl = canvas.toDataURL('image/jpeg', 1.0);
          setUser({ ...user, avatarURL: resizedImageUrl });
        };
      };
  
      reader.readAsDataURL(file);
    }
  };

  return (
      <div className='container'>
      <div className="profile-header">
        <img className='profile-avatar' src={user.avatarURL || defaultPic} 
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
              name="name"
              value={user.name}
              onChange={handleFieldChange}
              className='input-field'
            />
          ) : (
            user.name
          )}
        </h1>
        <p>
        ID : {user._id}
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
            <textarea
              type="text"
              name="address"
              id='address'
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
      <button className={isEditing ? 'save-button' : 'edit-button'} onClick={handleClick}>
  {isEditing ? 'Save' : 'Edit'}
</button>
      <button className='edit-button' onClick={navigateHome}>Back</button>

    </div>
    
    </div>
  );
}

export default Userprofile;
