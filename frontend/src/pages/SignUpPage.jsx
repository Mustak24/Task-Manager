import { Link } from "react-router-dom";
import Button from "../components/elements/Button";
import { InputText } from "../components/elements/Input";

export default function SignUpPage() {

    

    return (
        <div className="w-full h-full flex items-center justify-center" >
            <form className="max-w-[500px] w-full flex flex-col gap-2 items-center" >
                <div className="text-2xl mb-5">-- Sign Form --</div>
                
                <div className="flex flex-col gap-5 w-full " >
                    <div className="w-full" >
                        <InputText label="Username" placeholder="Enter your username" />
                    </div>

                    <div className="w-full" >
                        <InputText label="Password" placeholder="Enter your password" />
                    </div>
                   
                    <div className="w-full" >
                        <InputText label="Conferm Password" placeholder="Enter your password again" />
                    </div>

                    <div className="w-full flex" >
                        <Button className="flex-1" >Login</Button>
                    </div>
                </div>
                
                <div className="text-sm" >don't hane account <Link to={'/sign-up'} className="text-blue-500" >sign-up</Link></div>
            </form>
        </div>
    )
}