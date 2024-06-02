/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './global.css'
import Dashboard from './Sidebar/Dashboard'
import Home from './Pages/Home'
import Login from './Navbar/Login'
import SignUp from './Navbar/SignUp'
import Verification from './Navbar/Verification'
import About from './Pages/About'
import Feature from './Pages/Feature'
import AccountOverview from './Sidebar/AccountOverview'
import Analytics from './Sidebar/Analytics';
import DitiAi from './Pages/DitiAi'
import SocialMediaLogin from './Sidebar/SocialMediaLogin'
import LinkedInCallback from './MediaLogin/LinkedInCallback'

const App = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/verify' element={<Verification />} />
                    <Route path='/signUp' element={<SignUp />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/feature' element={<Feature />} />
                    <Route path='/ditiai' element={<DitiAi />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='//social-integration' element={<SocialMediaLogin />} />
                    <Route path='/account-overview' element={<AccountOverview />} />
                    <Route path='/analytics' element={<Analytics />} />
                    {/* <Route path='/quantum-share/connect/linkedin' element={<LinkedInLogin />} /> */}
                    <Route path='/quantum-share/callback/success' element={<LinkedInCallback />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App 