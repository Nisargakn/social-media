import React from 'react'
import Nav from '../Navbar/Nav';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../Assets/one.jpg'
import text from '../Assets/Screenshot (65).png'
import img from '../Assets/Screenshot (69).png'
import generated1 from '../Assets/generated_image (2).png'
import generated2 from '../Assets/generated_image.png'
import generated3 from '../Assets/generated_image (1).png'
import Sidenav from '../Navbar/Sidenav';

const DitiAi = () => {
    const token = localStorage.getItem('token')

    return (
        <div>
            <Nav />
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex' }}>
                    {token && <Sidenav />}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} lg={12}>
                            <div style={{
                                backgroundImage: `url(${bg})`, backgroundSize: 'cover',
                                backgroundPosition: 'center', textAlign: 'center', paddingBottom: '30px'
                            }}>
                                <h1 style={{ paddingTop: '60px' }}>Achieve More with Diti</h1>
                                <p style={{ fontSize: 20, margin: '70px', marginTop: '40px' }}>Meet Diti, the AI powerhouse capable of generating stunning images and compelling text effortlessly. Harness the potential of advanced artificial intelligence to bring your creative visions to life. Experience seamless and innovative content creation with Diti.</p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <div style={{ textAlign: 'center' }}>
                                <h1>AI Text Creation</h1>
                                <img src={text} alt="" style={{ margin: '20px', width: '900px', maxWidth: '100%' }} />
                                <p style={{ marginTop: '10px', fontSize: 20, margin: '20px', marginBottom: '40px' }}>
                                    Diti, the AI marvel designed to craft high-quality text with precision and creativity. Whether you need engaging articles, captivating stories, or persuasive copy, Diti delivers content that resonates with your audience. Empower your writing projects with the advanced capabilities of Diti AI, ensuring every word counts.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <div style={{ textAlign: 'center' }}>
                                <h1>AI Image Generate</h1>
                                <img src={img} alt="" style={{ margin: '20px', width: '900px', maxWidth: '100%' }} />
                                <p style={{ marginTop: '10px', fontSize: 20, margin: '20px', marginBottom: '40px' }}>
                                    Experience the visual creativity of Diti AI, your go-to solution for generating stunning images. From detailed illustrations to dynamic graphics, Diti transforms your ideas into visual masterpieces. Elevate your projects with the innovative power of Diti AI, where imagination meets technology."                                    </p>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <div style={{ textAlign: 'center' }}>
                                <h1>Generated Images</h1>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px', flexFlow: 'wrap' }}>
                                <img src={generated1} alt="" style={{ margin: '20px' }} />
                                <img src={generated2} alt="" style={{ margin: '20px' }} />
                                <img src={generated3} alt="" style={{ margin: '20px' }} />
                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default DitiAi