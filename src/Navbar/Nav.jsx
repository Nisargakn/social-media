/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QS from '../Assets/QS.png';
import { Link, NavLink } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, ListItemIcon, Menu, MenuItem } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { Person, PersonOutline, PrivacyTipOutlined } from "@mui/icons-material";

const Nav = () => {
    let token = localStorage.getItem("token");
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false)
    let navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/")
    };
    const handleMouseEnterButton = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMouseLeaveButton = () => {
        setTimeout(() => {
            if (!anchorEl) {
                setAnchorEl(null);
            }
        }, 200);
    };

    const handleMouseEnterMenu = () => {
        setAnchorEl(anchorEl);
    };

    const handleMouseLeaveMenu = () => {
        setTimeout(() => {
            setAnchorEl(null);
        }, 200);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose1 = () => {
        setOpen(false)
    }

    return (
        <nav>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <div className={menuOpen ? "bar open" : "bar"}></div>
                <div className={menuOpen ? "bar open" : "bar"}></div>
                <div className={menuOpen ? "bar open" : "bar"}></div>
            </div>
            <div className="logo-container">
                <Link to="/" className="title">
                    <img src={QS} alt="" style={{ height: 30, marginLeft: '1rem' }} />
                </Link>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                {token ? null : (
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                )}
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/feature">Features</NavLink>
                </li>
                <li>
                    <NavLink to="/ditiAi">Diti Ai</NavLink>
                </li>
            </ul>
            <div className="login-container">
                {token ? (
                    <div style={{ display: "flex" }}>
                        <div style={{
                            display: { xs: 'inline', sm: 'inline', md: 'inline', lg: 'inline', xl: 'inline' }
                        }}>
                            <Link to='/dashboard'>
                                <Button sx={{ color: '#ba343b', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", fontSize: '16px', fontWeight: '800' }}>
                                    Dashboard
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Button
                                onMouseEnter={handleMouseEnterButton}
                                onMouseLeave={handleMouseLeaveButton}
                                sx={{
                                    color: '#ba343b'
                                }}
                            >
                                <Person />
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                MenuListProps={{
                                    onMouseEnter: handleMouseEnterMenu,
                                    onMouseLeave: handleMouseLeaveMenu,
                                }}
                            >
                                <MenuItem component={Link} to='/account-overview'>
                                    <ListItemIcon>
                                        <PersonOutline />
                                    </ListItemIcon>
                                    Profile</MenuItem>
                                <MenuItem >
                                    <ListItemIcon>
                                        <PrivacyTipOutlined />
                                    </ListItemIcon>
                                    Privacy Policy</MenuItem>
                                <MenuItem onClick={handleClickOpen}>
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    Logout</MenuItem>
                                <Dialog open={open} onClose={handleClose1} fullWidth>
                                    <DialogContent>
                                        <DialogContentText sx={{ color: 'black', fontSize: '18px' }}>
                                            Are you sure you want to Logout ?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose1} color="primary">cancel</Button>
                                        <Button onClick={handleLogout} color="primary">yes</Button>
                                    </DialogActions>
                                </Dialog>
                            </Menu>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Link to='/login'>
                            <Button sx={{
                                mr: 1, color: '#ba343b', fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                                fontSize: '16px', fontWeight: '800', border: '1px solid #ba343b'
                            }}
                                variant="outlined" >
                                Login
                            </Button>
                        </Link>
                        <Link to='/signUp'>
                            <Button sx={{
                                mr: 1, bgcolor: '#ba343b',
                                '&:hover': { bgcolor: '#9e2b31' }, borderRadius: '25px', fontSize: '16px',
                                fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                                display: { xs: 'none', sm: 'none', md: 'inline', lg: 'inline', xl: 'inline' } // Hide on smaller screens
                            }}
                                variant="contained" >
                                Try Free Trail
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;