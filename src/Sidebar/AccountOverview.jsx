/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axiosInstance from '../Helper/AxiosInstance';
import Sidenav from '../Navbar/Sidenav';
import Nav from '../Navbar/Nav';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TailSpin } from 'react-loader-spinner';

const AccountOverview = () => {
    let token = localStorage.getItem('token')

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axiosInstance.get('/quantum-share/user/account-overview',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Method': 'GET',
                        'Authorization': `Bearer ${token}`
                    }
                });
            setUserData(response.data.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div >
            <Nav />
            <div >
                <Sidenav />
                <div style={{ flexGrow: 1 }} id='accountOverview'>
                    {loading ? (
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10rem auto' }}>
                            <TailSpin
                                height="50"
                                width="50"
                                color="#b4232a"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                visible={true}
                            />
                        </div>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (userData && (
                        <div id='accountDisplay'>
                            <h2 style={{ marginTop: '5px' }}>Personal Info</h2><br />
                            <div><AccountCircleIcon id='avatar' /></div><br />
                            <div id='accountInfo'>
                                <p>{userData.name}</p><br />
                                <p>{userData.email}</p><br />
                                <p>{userData.mobile}</p><br />
                                <p>{userData.company_name}</p><br />
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    );
}

export default AccountOverview;