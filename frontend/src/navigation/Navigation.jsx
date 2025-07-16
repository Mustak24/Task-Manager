import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import ProfilePage from '../pages/ProfilePage'

export default function Navigation(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/d' element={<LandingPage/>} />
                <Route path='/' element={<ProfilePage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/sign-up' element={<SignUpPage/>} />
            </Routes>
        </BrowserRouter>
    )
}