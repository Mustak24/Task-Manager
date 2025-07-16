import Navbar from "../components/layout/Navbar";
import { MdDeleteForever } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export default function ProfilePage() {
    return (
        <div className="w-full h-full items-center flex flex-col">
            <Navbar navigator="user" />

            <div className="flex flex-col bg-zinc-800 mt-10 sm:p-10 p-2 sm:rounded-xl rounded-lg max-w-[500px] w-full relative items-center gap-4 ">
                {/* <div className="rounded-full bg-zinc-900 size-40 flex items-center justify-center text-6xl absolute top-0 translate-y-[-50%]">MK</div> */}

                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 font-semibold">Persnal Information</div>

                    <div className="rounded-lg bg-zinc-900 w-full px-5 h-10 flex items-center justify-between" >
                        <div>Username</div>
                        <div className="opacity-80">Jhone Wick</div>
                    </div>
                
                    <div className="rounded-lg bg-zinc-900 w-full px-5 h-10 flex items-center justify-between" >
                        <div>Position</div>
                        <div className="opacity-80">User</div>
                    </div>
                </div>
               
                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 font-semibold">Other</div>

                    <div className="rounded-lg bg-zinc-900 w-full p-2 flex items-center gap-2 cursor-pointer " >
                        <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square w-10 ">
                            <FiLogOut className="size-6" />
                        </div>
                        
                        <div className="flex flex-col">
                            <div className="text-sm">Logout</div>
                            <p className="text-xs opacity-70" >Logou from your account</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 text-red-500 font-semibold">Danger Zone</div>

                    <div className="rounded-lg bg-zinc-900 w-full p-2 flex items-center gap-2 cursor-pointer " >
                        <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square w-10 ">
                            <MdDeleteForever className="text-red-500 size-6" />
                        </div>
                        
                        <div className="flex flex-col text-red-500">
                            <div className="text-sm">Delete Account</div>
                            <p className="text-xs opacity-70" >Once you delete your account then no way to go back</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 text-red-500 font-semibold">Danger Zone</div>

                    <div className="rounded-lg bg-zinc-900 w-full p-2 flex items-center gap-2 cursor-pointer " >
                        <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square w-10 ">
                            <MdDeleteForever className="text-red-500 size-6" />
                        </div>
                        
                        <div className="flex flex-col text-red-500">
                            <div className="text-sm">Delete Account</div>
                            <p className="text-xs opacity-70" >Once you delete your account then no way to go back</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 text-red-500 font-semibold">Danger Zone</div>

                    <div className="rounded-lg bg-zinc-900 w-full p-2 flex items-center gap-2 cursor-pointer " >
                        <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square w-10 ">
                            <MdDeleteForever className="text-red-500 size-6" />
                        </div>
                        
                        <div className="flex flex-col text-red-500">
                            <div className="text-sm">Delete Account</div>
                            <p className="text-xs opacity-70" >Once you delete your account then no way to go back</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}