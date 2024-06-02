import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../Helper/AxiosInstance';
import { toast } from 'react-toastify';
import SocialMediaLogin from '../Sidebar/SocialMediaLogin';
const LinkedInCallback = () => {
  const location = useLocation();
  let navigate=useNavigate();
  const token = localStorage.getItem('token');
  const [Username,setUsername]=useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    if (code) {
      handleLinkedInCallback(code);
    } else {
      console.error('Authorization code is missing from the URL parameters.');
    }
  }, [location]);
  const handleLinkedInCallback = async (code) => {
    
    try {
      const response = await axiosInstance.post(`/quantum-share/callback/success?code=${code}`, { code }, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
        }
      });
      console.log(response.data.data);
      const data=JSON.parse(response.data.data);
      console.log(data);
      if (data && data.Username) {
        localStorage.setItem('Username', data.Username); // Save Username to localStorage
        setUsername(data.Username); // Optionally, update the state
      } else {
        console.error('Username is missing in the response data.');
      }
      
    } catch (error) {
      console.error('Error sending token to backend:', error);
      toast.error("Error connecting to LinkedIn. Please try again later.");
  };
}
  return (
    <div>
      <SocialMediaLogin/>

    </div>
  );
}
export default LinkedInCallback;