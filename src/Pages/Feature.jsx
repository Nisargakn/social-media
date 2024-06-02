import React from 'react'
import Nav from '../Navbar/Nav'
import { Box, Grid } from '@mui/material';
import social from '../Assets/social-media-platforms-01.jpg'
import Sidenav from '../Navbar/Sidenav';

const Feature = () => {
    const token = localStorage.getItem('token')

    return (
        <div>
            <Nav />
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex' }}>
                    {token && <Sidenav />}
                    <section id="start">
                        <article>
                            <Grid container spacing={2}>
                                <Grid className='feature-1-container' item xs={12} sm={6} md={6}>
                                    <typography>
                                        <p className='item-3-text' style={{ color: "white", textAlign: "center" }}>All the features you need</p>
                                        <p style={{ marginTop: "3rem" }} className='item-4-text'>Our plans are packed with the right features, based on your unique business needs. Switch plans at any time or select from our growing list of platform add-ons.

                                        </p>
                                    </typography>
                                </Grid>
                                <Grid className='feature-0-container' item xs={12} sm={6} md={6}>
                                    <img className='img-feature-social' src={social} alt="Logo" />
                                </Grid>
                            </Grid>
                            <h1 style={{ textAlign: "center", marginTop: "3rem", marginBottom: "3rem" }}>ALL FEATURES</h1>
                            <Grid className=' feature-main-container' style={{ backgroundColor: "aliceblue", padding: "0px", paddingBottom: '1rem' }} container spacing={2}>
                                <Grid className='feature-2-container-2' item xs={12} sm={6} md={4}>
                                    <div className='feature-2-container' >
                                        <typography>
                                            <p className='item-1-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Unified Dashboard</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-2-text'>Provide users with a single dashboard to manage and monitor multiple social media accounts from different platforms.

                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                                <Grid className='feature-2-container-1' item xs={12} sm={6} md={4}>
                                    <div className='feature-3-container' >
                                        <typography>

                                            <p className='item-5-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Cross-Platform Posting</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-6-text'>The ability to create and schedule posts across multiple social media networks simultaneously, optimizing posting times based on AI insights.

                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                                <Grid className='feature-2-container-1' item xs={12} sm={6} md={4}>
                                    <div className='feature-4-container'>
                                        <typography>
                                            <p className='item-5-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Content Suggestions</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-6-text'>AI-driven content recommendations based on user interests, trending topics, and historical engagement data across different platforms
                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid className='main-container' style={{ backgroundColor: "aliceblue", padding: "0px" }} container spacing={2}>
                                <Grid className='feature-2-container-2' item xs={12} sm={6} md={4}>
                                    <div className='feature-5-container' >
                                        <typography>
                                            <p className='item-7-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Privacy and Security</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-8-text'> Implement robust privacy and security measures to protect user data and ensure compliance with each social media platform's policies.
                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                                <Grid className='feature-2-container-1' item xs={12} sm={6} md={4}>
                                    <div className='feature-6-container' >
                                        <typography>
                                            <p className='item-1-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Create a Post</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-2-text'>Use the tool to create a new post. You can write your message, add any media (e.g., images, videos), and include hashtags or mentions as needed.
                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                                <Grid className='feature-2-container-1' item xs={12} sm={6} md={4}>
                                    <div className='feature-7-container'>
                                        <typography>
                                            <p className='item-5-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Analytics and Insights</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-6-text'> Provide users with analytics and insights into their social media performance across different platforms, helping them understand their audience and improve their content strategy.
                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid className='main-container' style={{ backgroundColor: "aliceblue", padding: "0px" }} container spacing={2}>
                                <Grid className='feature-2-container-2' item xs={12} sm={6} md={4}>
                                    <div className='feature-8-container' >
                                        <typography>
                                            <p className='item-5-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Unified Notifications</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-6-text'>Provide a unified notification system that alerts users to activity across all linked social media platforms.
                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                                <Grid className='feature-2-container-1' item xs={12} sm={6} md={4}>
                                    <div className='feature-9-container' >
                                        <typography>
                                            <p className='item-7-text' style={{ textAlign: "center", fontWeight: "bold", fontSize: "1rem" }}>Theme Selection Interface</p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-8-text'>Provide users with an interface where they can select and customize themes. This could include options for selecting color schemes, typography, layout styles, and other visual elements.
                                            </p>
                                        </typography>
                                    </div>
                                </Grid>
                                <Grid className='feature-2-container-1' item xs={12} sm={6} md={4}>
                                    <div className='feature-9-container' >
                                        <typography>
                                            <p style={{ paddingTop: "2rem", textAlign: "center", fontWeight: "bold", fontSize: "1rem" }} className='item-5-text'>Schedule And Post </p>
                                            <p style={{ paddingBottom: "2rem", padding: "2rem" }} className='item-6-text'>Plan and automate your social media posts with our scheduled post feature. Stay organized and engage your audience effortlessly.</p>
                                        </typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </article>
                    </section>
                </Box>
            </Box>
        </div>
    )
}

export default Feature