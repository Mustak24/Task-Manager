import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'

export default function Navigation(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/sign-up' element={<SignUpPage/>} />
            </Routes>
        </BrowserRouter>
    )
}