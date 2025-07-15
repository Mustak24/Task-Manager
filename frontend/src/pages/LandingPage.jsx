import { Link } from "react-router-dom";
import Button from "../components/elements/Button";

export default function LandingPage() {

    return (
        <div className="flex items-center justify-center w-full h-full flex-col gap-5" >
            <div className="text-4xl">Welcome to Task Manager</div>
            <div className="flex items-center gap-5">
                <Link to={'/login'} >
                    <Button>
                        Have a account
                    </Button>
                </Link>

                <Button>
                    Get a account
                </Button>
            </div>
        </div>
    )
}