/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Nav from "../Navbar/Nav"
import { Dialog, DialogContent } from "@mui/material";
import { IconButton, Typography } from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
// import CloseIcon from '@mui/icons-material/Close';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import bg from '../Assets/bg7.jpg'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import QS1 from '../Assets/QS-01.jpg'
import about from '../Assets/social-media-platforms-01.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import bg1 from '../Assets/bground1.jpg'
import why from '../Assets/why.gif'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Sidenav from '../Navbar/Sidenav';

const About = () => {
    const token = localStorage.getItem('token')
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [isMuted, setIsMuted] = React.useState(false);
    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    return (
        <div>
            <Nav />
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex' }}>
                    {token && <Sidenav />}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <div style={{
                                height: '300px', width: '100%', backgroundImage: `url(${bg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center', textAlign: 'center'
                            }}>
                                <h1 style={{ color: '#d40d17', fontSize: 40, paddingBottom: '20px', paddingTop: '50px' }}>Welcome to Quantum Share</h1>
                                <p style={{ fontSize: 18 }}> Revolutionize Your Social Sharing Experience!</p>
                                <Typography sx={{ fontSize: 24, fontFamily: 'initial', fontWeight: 'bold', paddingTop: '20px' }} gutterBottom>
                                    Watch
                                </Typography>
                                <IconButton>
                                    <PlayCircleFilledIcon onClick={handleClickOpen} sx={{ color: 'white', bgcolor: '#ba343b', width: '50px', height: '50px', padding: '7px', borderRadius: '50%' }} />
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogContent>
                                            <video autoPlay loop muted={isMuted} style={{ width: '100%', height: 'auto' }}>
                                                <source src="https://quantumshare.quantumparadigm.in/vedio/SocialMedia.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                            <IconButton onClick={toggleMute} style={{ position: 'absolute', left: '10px', color: '#BA343B' }}>
                                                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
                                            </IconButton>
                                        </DialogContent>
                                    </Dialog>
                                </IconButton>
                            </div>
                        </Grid>
                        {token && (
                            <Grid item xs={12} md={6} lg={6}>
                                <div style={{ textAlign: 'center', marginTop: '70px' }}>
                                    <h1 style={{ color: '#d40d17' }}>WE'RE QUANTUM PARADIGM</h1>
                                    <p style={{ marginTop: '20px', fontSize: '18px' }}>We’ve spent the last decade at the intersection of value-driven solutions and technology-fueled impact. Quantum is the product of a shared obsession for science and technology and its ability to bring about large-scale change in the lives of real people. Our clients command our actions and our teams establish our brand and its values. Up close, we’re a refreshing mix of youthful candor and skilled know-how, with a burning desire for innovation.</p>
                                </div>
                            </Grid>
                        )}
                        <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img style={{ borderRadius: "50%", width: "60%", height: "auto", marginLeft: "5rem" }} src={about} alt="image" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img style={{ borderRadius: "50%", width: "50%", height: "auto", marginLeft: "5rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={QS1} alt="image" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <h1 style={{ color: '#d40d17' }}>What is Quantum Share?</h1>
                                <p style={{ marginTop: '20px', fontSize: '18px' }}>Quantum Share is your ultimate solution for seamless social media
                                    sharing. It's a powerful platform designed to simplify the process of
                                    publishing your creative content across multiple social media
                                    channels simultaneously. Whether you're a digital artist, content
                                    creator, marketer, or business owner, Quantum Share empowers
                                    you to reach your audience effortlessly.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <h1 style={{ color: '#d40d17' }}>How Does Quantum Share Work?</h1>
                                <div style={{
                                    backgroundImage: `url(${bg1})`, backgroundSize: 'cover',
                                    backgroundPosition: 'center', padding: '40px', marginTop: '20px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'
                                }}>
                                    <Card sx={{
                                        width: 270, height: 'auto', margin: 1, borderRadius: '8px', marginLeft: '50px', transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        },
                                    }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 18, textAlign: 'center', color: '#000066', padding: '5px', borderRadius: '8px', fontWeight: 'bold' }} gutterBottom>
                                                Connect Your Accounts
                                            </Typography>
                                            <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Link all your social media accounts
                                                to Quantum Share. We support all major platforms including
                                                Facebook, Instagram, Twitter, LinkedIn, and more.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{
                                        width: 270, height: 'auto', margin: 1, borderRadius: '8px', marginLeft: '50px', transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        },
                                    }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 18, textAlign: 'center', color: '#000066', padding: '5px', borderRadius: '8px', fontWeight: 'bold' }} gutterBottom>
                                                Create Your AI Images
                                            </Typography>
                                            <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Experience instant image creation tailored to your needs. Customize styles, colors, and themes effortlessly. Seamlessly integrate our intuitive tool into your workflow.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{
                                        width: 270, height: 'auto', margin: 1, borderRadius: '8px', marginLeft: '50px', transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        },
                                    }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 18, textAlign: 'center', color: '#000066', padding: '5px', borderRadius: '8px', fontWeight: 'bold' }} gutterBottom>
                                                Customize Your AI Text
                                            </Typography>
                                            <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Revolutionize your messaging with AI-generated text, hashtags, and emojis. Craft engaging content effortlessly and boost engagement with just a few clicks!                                        </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{
                                        width: 270, height: 'auto', margin: 1, borderRadius: '8px', marginLeft: '50px', transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        },
                                    }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 18, textAlign: 'center', color: '#000066', padding: '5px', borderRadius: '8px', fontWeight: 'bold' }} gutterBottom>
                                                Customize Your Posts
                                            </Typography>
                                            <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Tailor your messages and visuals to
                                                suit each platform's unique requirements. Quantum Share
                                                allows you to customize your posts for maximum engagement.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{
                                        width: 270, height: 'auto', margin: 1, borderRadius: '8px', marginLeft: '50px', transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        },
                                    }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 18, textAlign: 'center', color: '#000066', padding: '5px', borderRadius: '8px', fontWeight: 'bold' }} gutterBottom>
                                                Publish Instantly
                                            </Typography>
                                            <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Choose whether to schedule your posts for optimal timing or publish them instantly across all connected platforms.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{
                                        width: 270, height: 'auto', margin: 1, borderRadius: '8px', marginLeft: '50px', transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        },
                                    }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 18, textAlign: 'center', color: '#000066', padding: '5px', borderRadius: '8px', fontWeight: 'bold' }} gutterBottom>
                                                Track Performance                                        </Typography>
                                            <Typography sx={{ fontSize: 14, textAlign: 'center' }} color="text.secondary" gutterBottom>
                                                Monitor the performance of your posts
                                                with Quantum Share's advanced analytics. Gain valuable
                                                insights into engagement metrics and audience behavior.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center' }}>
                            <h1 style={{ color: '#d40d17' }}>Why Choose Quantum Share?</h1>
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img style={{ borderRadius: "50%", width: "50%", height: "auto", marginLeft: "5rem", display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={why} alt="image" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} sx={{ marginBottom: '40px' }}>
                            <div style={{ display: 'flex' }}>
                                <AccessTimeIcon sx={{ color: 'white', bgcolor: '#ba343b', width: '40px', height: '40px', padding: '7px', borderRadius: '50%', marginRight: '20px' }} />
                                <div>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        Save Time and Effort:
                                    </Typography>
                                    <Typography sx={{ fontSize: 10 }}>
                                        Forget about logging in and out of
                                        multiple accounts. With Quantum Share, you can share your
                                        content across all your social media platforms in one go,
                                        saving you valuable time and effort.
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '10px' }}>
                                <GroupAddIcon sx={{ color: 'white', bgcolor: '#ba343b', width: '40px', height: '40px', padding: '7px', borderRadius: '50%', marginRight: '20px' }} />
                                <div>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        Maximize Reach:
                                    </Typography>
                                    <Typography sx={{ fontSize: 10 }}>
                                        Reach a wider audience by broadcasting
                                        your content across various social media channels
                                        simultaneously. Expand your online presence effortlessly with
                                        Quantum Share.
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '10px' }}>
                                <DeveloperBoardIcon sx={{ color: 'white', bgcolor: '#ba343b', width: '40px', height: '40px', padding: '7px', borderRadius: '50%', marginRight: '20px' }} />
                                <div>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        Streamlined Workflow:
                                    </Typography>
                                    <Typography sx={{ fontSize: 10 }}>
                                        Simplify your content distribution
                                        process with Quantum Share's intuitive interface and powerful
                                        features. Focus on creating great content while we handle the
                                        rest.
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '10px' }}>
                                <TrendingUpIcon sx={{ color: 'white', bgcolor: '#ba343b', width: '40px', height: '40px', padding: '7px', borderRadius: '50%', marginRight: '20px' }} />
                                <div>
                                    <Typography sx={{ fontSize: 14, fontWeight: 'bold' }}>
                                        Data-Driven Insights:
                                    </Typography>
                                    <Typography sx={{ fontSize: 10 }}>
                                        Make informed decisions about your
                                        social media strategy with Quantum Share's comprehensive
                                        analytics. Track the performance of your posts and optimize
                                        your content for better results.
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default About;