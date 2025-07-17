import { Link, useNavigate } from "react-router-dom";
import Button from "../components/elements/Button";
import { useEffect, useMemo } from "react";
import { useStore } from "../context/StoreProvider";

export default function LandingPage() {

    const {userInfo, fetchUserInfo, isLoading} = useStore();
    const navigation = useNavigate()
    
    useEffect(() => {
        fetchUserInfo()
    }, []);

    useEffect(() => {
        if(!localStorage.getItem('token')) return
        if(userInfo.role) navigation('/home')
    }, [userInfo])

    return isLoading ? null : (
        <div className="flex items-center justify-center w-full h-full flex-col gap-5" >
            <div className="text-4xl">Welcome to Task Manager</div>
            <div className="flex items-center gap-5">
                <Link to={'/login'} >
                    <Button>
                        Have a account
                    </Button>
                </Link>

                <Link to={'/sign-up'} >
                    <Button>
                        Get a account
                    </Button>
                </Link>
            </div>
        </div>
    )
}