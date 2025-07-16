import { Link, useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import { InputText } from "../components/elements/Input";
import { login } from "../service/auth";
import { useState } from "react";

export default function LoginPage() {

    const navigation = useNavigate();

    const [isLoading, setLoading] = useState(false);
    const [errorMSg, setErrorMsg] = useState({ username: '', password: "", res: '' });

    function setError(key, val) {
        setErrorMsg(old => ({ ...old, [key]: val }))
    }

    async function handleForm(e) {
        e.preventDefault();

        const { username, password } = Object.fromEntries(new FormData(e.target))
        if (!(username && password)) {
            if (!username) setError('username', 'username is required')
            if (!password) setError('password', 'password is required')
            return;
        };

        setLoading(() => true)
        const res = await login({ username, password });
        setLoading(() => false)

        if (res.token) {
            localStorage.setItem('token', res.token);
            return navigation('/profile');
        }

        setError('res', res.msg)
        console.log(res.msg, errorMSg)
    }

    return (
        <div className="w-full h-full flex items-center justify-center" >
            <form onSubmit={handleForm} className="max-w-[500px] w-full flex flex-col gap-2 items-center" >
                <div className="text-2xl mb-5">-- Login Form --</div>

                <div className="flex flex-col gap-5 w-full " >
                    <div className="w-full" >
                        <InputText 
                            name="username" 
                            label="Username" 
                            placeholder="Enter your username" 
                            errorMsg={errorMSg.username} 
                            onChange={() => {
                                if(errorMSg.username) setError('username', '');
                                if(errorMSg.res) setError('res', '')
                            }} 
                        />
                    </div>

                    <div className="w-full" >
                        <InputText 
                            name="password" 
                            label="Password" 
                            placeholder="Enter your password" 
                            errorMsg={errorMSg.password} 
                            onChange={() => {
                                if(errorMSg.password) setError('password', '');
                                if(errorMSg.res) setError('res', '')
                            }} 
                        />
                    </div>


                    <div className="w-full flex flex-col gap-2" >
                        <p className="text-center text-red-500 text-sm">{errorMSg.res}</p>
                        <Button isLoading={isLoading} className="flex-1">Login</Button>
                    </div>
                </div>

                <div className="text-sm" >don't hane account <Link to={'/sign-up'} className="text-blue-500" >sign-up</Link></div>
            </form>
        </div>
    )
}