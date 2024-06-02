/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import FacebookLogin from './FacebookLogin';
import InstagramLogin from './InstagramLogin';
import LinkedInLogin from '../MediaLogin/LinkedInLogin'
import { Box } from '@mui/material';
import Nav from '../Navbar/Nav';
import Sidenav from '../Navbar/Sidenav';
const SocialMediaLogin = () => {

    return (
        <>
        <Nav/>
    <div style={{ display: 'flex' }}>
      <Sidenav/>
    
    <Box sx={{ flexGrow: 1, marginLeft:'1rem' }}>
            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <h1 style={{ fontSize: '2rem', textAlign: 'center',color:'#ba343b' }}>
                    Connect a Social Network
                </h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='container-soc'>
                        <div className='box-container-soc' style={{ display: 'flex', justifyContent: 'space-around', margin: '25px auto', alignItems: 'center', gap: '80px' }}>
                            <FacebookLogin />
                            <InstagramLogin />
                            <LinkedInLogin />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            </Box>
            </div>
        </>
    );
}

export default SocialMediaLogin;