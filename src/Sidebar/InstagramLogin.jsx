/* eslint-disable no-unused-vars */
/* global FB */
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import axiosInstance from "../Helper/AxiosInstance";
import instagram1 from '../Assets/instagram.svg';
import instaicon from '../Assets/instagramsmall.svg';
import { ReactSVG } from 'react-svg';
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';

const InstagramLogin = () => {
    const token = localStorage.getItem('token');
    const [code, setCode] = useState('');
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disconnecting, setDisconnecting] = useState(false)
    const [instagramUrl, setInstaProfileImage] = useState('');
    const [InstagramUsername, setInstaUsername] = useState('');
    const [Instagram_follwers_count, setInstaFollowers] = useState('');

    useEffect(() => {
        const storedUrl = localStorage.getItem('instagramUrl');
        const storedUsername = localStorage.getItem('InstagramUsername');
        const storedFollowers = localStorage.getItem('Instagram_follwers_count');
        if (storedUrl && storedUsername && storedFollowers) {
            setIsLoggedIn(true);
            setInstaProfileImage(storedUrl);
            setInstaUsername(storedUsername);
            setInstaFollowers(storedFollowers);
        }
    }, [token]);

    const loadInstagramSdk = () => {
        return new Promise((resolve, reject) => {
            if (window.FB) {
                resolve();
            } else {
                window.fbAsyncInit = function () {
                    FB.init({
                        appId: '421449853704517',
                        cookie: true,
                        xfbml: true,
                        version: 'v19.0'
                    });
                    resolve();
                };

                (function (d, s, id) {
                    var js,
                        fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        resolve();
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://connect.facebook.net/en_US/sdk.js';
                    fjs.parentNode.insertBefore(js, fjs);
                })(document, 'script', 'facebook-jssdk');
            }
        });
    };

    const handleInstagramLogin = () => {
        setLoading(true);
        loadInstagramSdk()
            .then(() => {
                FB.login(function (response) {
                    if (response.authResponse) {
                        checkLoginState();
                    } else {
                        console.log('User canceled login or didn\'t authorize the app');
                        setLoading(false);
                    }
                }, { scope: 'instagram_basic,instagram_content_publish,business_management' });
            })
            .catch(error => {
                console.error('Error loading Instagram SDK:', error);
                toast.error('Error loading Instagram SDK. Please try again later.');
                setLoading(false);
            })
    }

    const checkLoginState = () => {
        FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    };

    const statusChangeCallback = async (response) => {
        console.log('statusChangeCallback');
        console.log(response);
        if (response.status === 'connected') {
            const accessToken = response.authResponse.accessToken;
            await sendTokenToBackend(accessToken);
        } else {
            setIsLoggedIn(false);
            setLoading(false);
        }
    };

    const sendTokenToBackend = async (accessToken) => {
        try {
            const response = await axiosInstance.post(`/quantum-share/instagram/user/verify-token?code=${accessToken}`, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });
            console.log('Token sent to backend successfully');
            if (response.data.status === 'success' && response.data.data) {
                console.log(response);
                const { instagramUrl, InstagramUsername, Instagram_follwers_count } = response.data.data;
                setInstaProfileImage(instagramUrl);
                setInstaUsername(InstagramUsername);
                setInstaFollowers(Instagram_follwers_count);
                localStorage.setItem('instagramUrl', instagramUrl);
                localStorage.setItem('InstagramUsername', InstagramUsername);
                localStorage.setItem('Instagram_follwers_count', Instagram_follwers_count);
                setIsLoggedIn(true);
                toast.success("Connected to Instagram!");
            }
        } catch (error) {
            console.error('Error sending token to backend:', error);
            toast.error("Error connecting to Instagram. Please try again later.");
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
        setDisconnecting(true)
        try {
            await axiosInstance.get('/quantum-share/disconnect/instagram', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('instagramUrl');
            localStorage.removeItem('InstagramUsername');
            localStorage.removeItem('Instagram_follwers_count');
            setIsLoggedIn(false);
            setInstaUsername('');
            setInstaFollowers('');
            toast.success("Disconnected from Instagram!");
        } catch (error) {
            console.error('Error disconnecting from Instagram:', error);
            toast.error("Error disconnecting from Instagram. Please try again later.");
        } finally {
            setDisconnecting(false)
        }
    };

    return (
        <>
            <section className='box-soc' style={{ paddingTop: '20px' }}>
                {isLoggedIn ? (
                    <div className="profile-container">
                        <div className="profile-circle">
                            <img
                                src={instagramUrl}
                                alt="User Profile"
                                style={{ width: '3.9rem', height: '3.9rem', borderRadius: '50%' }}
                            />
                            <div className="instagram-icon">
                                <ReactSVG src={instaicon} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                        <ReactSVG src={instagram1}></ReactSVG>
                    </div>
                )
                }
                <div style={{ marginTop: '15px' }}>
                    <p style={{ marginTop: '1px', fontSize: '1.3rem' }}><p style={{ color: 'gray', fontFamily: 'sans-serif' }}>{InstagramUsername ? InstagramUsername : 'Instagram'}</p></p>
                    <h5>{Instagram_follwers_count ? `Followers : ${Instagram_follwers_count}` : ''}</h5>
                </div>
                {loading || disconnecting ? (
                    <Button variant='contained' sx={{ margin: '30px auto', marginBottom: '10px', fontWeight: '600' }} disabled>
                        {loading ? 'Connecting...' : 'Disconnecting...'}
                    </Button>
                ) : (
                    !isLoggedIn ? (
                        <Button variant='contained' sx={{ margin: '30px auto', marginBottom: '10px', fontWeight: '600' }} value={code} name="code" onClick={handleInstagramLogin}>Connect</Button>
                    ) : (
                        <Button variant='contained' sx={{ margin: '30px auto', marginBottom: '10px', fontWeight: '600' }} onClick={handleDisconnect}>Disconnect</Button>
                    )
                )}
            </section >
            <Dialog open={open} onClose={handleClose} maxWidth='lg'>
                <DialogContent>
                    <DialogContentText sx={{ color: 'black', fontSize: '18px' }}>
                        Are you sure you want to disconnect from Instagram?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleConfirmDisconnect} autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default InstagramLogin;