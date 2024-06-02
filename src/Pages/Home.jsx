import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Nav from '../Navbar/Nav'
import img1 from '../Assets/ai.jpg'
import img2 from '../Assets/img1.jpg'
import temp1 from '../Assets/temp1.JPG';
import temp2 from '../Assets/temp2.JPG';
import temp3 from '../Assets/temp3.JPG';
import temp4 from '../Assets/template1.PNG';
import temp5 from '../Assets/heart.PNG';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <Nav />
      <Grid container spacing={2} minHeight={1}>
      <Grid item xs={12} md={6}>
                    <h1 style={{ padding: '10px', marginTop: '20px', marginLeft: '10px' }}>Social Media</h1>
                    <h1 style={{ padding: '5px', marginLeft: '10px' }}>The easiest way to manage your brands on social media</h1>
                    <p style={{ padding: '10px', marginLeft: '10px' }}>Schedule unlimited posts, monitor what matters, and create custom-reports to analyze your social media performance with Social Media.</p>
                    <Link to="/signUp"><button style={{ backgroundColor: '#ba343b', color: '#fff', padding: '18px 28px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '18px', fontWeight: '600', margin: '20px' }}>Get Started With Free</button></Link>
                </Grid>
                <Grid item xs={12} md={6}>
                    <video autoPlay loop muted style={{ width: '100%', height: '100%', padding: '10px' }}>
                        <source src="https://quantumshare.quantumparadigm.in/vedio/SocialMedia.mp4" type="video/mp4" />
                    </video>
                </Grid>
        <Grid item xs={12} md={12}>
          <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: 34, textAlign: 'center',color:'#d40d17' }}>An Innovative Approach to Social Media Management</h1>
            <p style={{ fontSize: 20, marginTop: '20px' }}>Our integrated social media management platform maximizes the power of social media to revolutionize your marketing strategy and enhance every aspect of your organization.</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={img1} alt="" style={{ width: '500px', maxWidth: '100%', height: '300px', border: 'none', borderRadius: '20px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ padding: '50px', margin: '10px' }}>
            <h1 style={{ fontSize: 34 }}>Create Your AI Images</h1>
            <p style={{ fontSize: 20, marginTop: '20px' }}>Experience instant image creation tailored to your needs. Customize styles, colors, and themes effortlessly. Seamlessly integrate our intuitive tool into your workflow.</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ padding: '50px', margin: '10px' }}>
            <h1 style={{ fontSize: 34 }}>Multi-platform social posting</h1>
            <p style={{ fontSize: 20, marginTop: '20px' }}> Efficiently manage and publish content across various social media platforms at the same time. Save time and ensure consistent messaging. Enhance your social media presence with streamlined, synchronized posts.</p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={img2} alt="" style={{ width: '500px', maxWidth: '100%', border: 'none', borderRadius: '20px' }} />
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={{ padding: '20px' }}>
            <h1 style={{ fontSize: 34, textAlign: 'center',color:'#d40d17' }}>Template</h1>
            <p style={{ fontSize: 20, marginTop: '20px' , textAlign: 'center'}}>Elevate your social media game with our customizable templates, enabling you to create and share captivating content effortlessly.</p>
            <div style={{margin:'20px'}}>
              <img src={temp1} alt="" style={{ width: '200px',height:'200px', maxWidth: '100%', border: 'none', borderRadius: '20px',margin:'18px' }}/>
              <img src={temp2} alt="" style={{ width: '200px', maxWidth: '100%', border: 'none', borderRadius: '20px',margin:'18px' }}/>
              <img src={temp3} alt="" style={{ width: '200px', maxWidth: '100%', border: 'none', borderRadius: '20px',margin:'18px' }}/>
              <img src={temp4} alt="" style={{ width: '200px',height:'200px', maxWidth: '100%', border: 'none', borderRadius: '20px',margin:'18px' }}/>
              <img src={temp5} alt="" style={{ width: '200px',height:'200px', maxWidth: '100%', border: 'none', borderRadius: '20px',margin:'18px' }}/>
            </div>
          </div>
        </Grid>
      </Grid >
      <Footer />
    </>
  );
}
const Footer = () => {
  return (
    <Box p={2} textAlign="center" bgcolor="#ba343b" marginTop={12} >
      
      <Typography variant="body1" textAlign='center' color='#fff'>
        &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
      </Typography>
    </Box>
  );
}



export default Home;