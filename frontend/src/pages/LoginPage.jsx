import { Link } from "react-router-dom";
import Button from "../components/elements/Button";
import { InputText } from "../components/elements/Input";
import { login } from "../service/auth";

export default function LoginPage() {

    function handleForm(e){
        e.preventDefault();

        const {username, password} = Object.fromEntries(new FormData(e.target))
        if(!(username && password)) return;
        
        const res = login({username, password});
        

    }

    return (
        <div className="w-full h-full flex items-center justify-center" >
            <form onSubmit={handleForm} className="max-w-[500px] w-full flex flex-col gap-2 items-center" >
                <div className="text-2xl mb-5">-- Login Form --</div>
                
                <div className="flex flex-col gap-5 w-full " >
                    <div className="w-full" >
                        <InputText name="username" label="Username" placeholder="Enter your username" />
                    </div>

                    <div className="w-full" >
                        <InputText name="password" label="Password" placeholder="Enter your password" />
                    </div>

                    <div className="w-full flex" >
                        <Button className="flex-1" >Login</Button>
                    </div>
                </div>
                
                <div className="text-sm" >don't hane account <Link to={'/login'} className="text-blue-500" >Login</Link></div>
            </form>
        </div>
    )
}