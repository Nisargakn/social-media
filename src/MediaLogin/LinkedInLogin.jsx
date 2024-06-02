import React, { useState, useEffect } from 'react';
import linkedIn from '../Assets/linkedin.svg';
import { ReactSVG } from 'react-svg';
import { Button } from '@mui/material';
import axiosInstance from '../Helper/AxiosInstance';
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { toast } from 'react-toastify';

const LinkedInLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [disconnecting, setDisconnecting] = useState(false);
  const [username, setUsername] = useState('');
  const token = localStorage.getItem('token');
  const Username = localStorage.getItem('Username');
  useEffect(() => {
    const storedUsername = localStorage.getItem('Username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
    }
  }, [token])
  const handleLinkedInLogin = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get('/quantum-share/connect/linkedin', {
        headers: {
          Authorization: `Bearer ${token}`,  // Note the template literal for proper string interpolation
          'Accept': 'application/json',
        }
      });
      const { clientId, redirectUri, scope } = response.data;

      const authorizationUrl = `https://www.linkedin.com/oauth/v2/authorization` +
        `?response_type=code` +
        `&client_id=${clientId}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&scope=${encodeURIComponent(scope)}`;

      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("Failed to fetch LinkedIn authorization URL:", error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };


  const handleDisconnect = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirmDisconnect = async () => {
    handleClose();
    setDisconnecting(true);
    try {
      await axiosInstance.get('/quantum-share/disconnect/linkedin', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      localStorage.removeItem('Username');
      setIsLoggedIn(false);
      setUsername('');
      toast.success("Disconnected from LinkedIn!");
    }
    catch (error) {
      console.error('Error disconnecting from LinkedIn:', error);
      toast.error("Error disconnecting from LinkedIn. Please try again later.");
    } finally {
      setDisconnecting(false);
    }
  }
  return (
    <>
      <section className='box-soc' style={{ paddingTop: '20px' }}>
        {/* {isLoggedIn ? (
          <div className="profile-container">
            <div className="instagram-icon">
              <ReactSVG src={linkedIn} />
            </div>
          </div>
        ) : ( */}
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            <ReactSVG src={linkedIn}></ReactSVG>
          </div>
        {/* )} */}

        <div style={{ marginTop: '15px' }}>
          <p style={{ marginTop: '1px', fontSize: '1.3rem' }}>
            <span style={{ color: 'gray', fontFamily: 'sans-serif' }}>
              {Username ? Username : 'LinkedIn'}
            </span>
          </p>
        </div>

        {loading || disconnecting ? (
          <Button variant='contained' sx={{ margin: '30px auto', marginBottom: '10px', fontWeight: '600' }} disabled>
            {loading ? 'Connecting...' : 'Disconnecting...'}
          </Button>
        ) : (
          !isLoggedIn ? (
            <Button variant='contained' sx={{ margin: '30px auto', marginBottom: '10px', fontWeight: '600' }} onClick={handleLinkedInLogin}>Connect</Button>
          ) : (
            <Button variant='contained' sx={{ margin: '30px auto', marginBottom: '10px', fontWeight: '600' }} onClick={handleDisconnect}>Disconnect</Button>
          )
        )}
      </section>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
        <DialogContent>
          <DialogContentText sx={{ color: 'black', fontSize: '18px' }}>
            Are you sure you want to disconnect from LinkedIn?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirmDisconnect} autoFocus>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LinkedInLogin;
