import Navbar from "../components/layout/Navbar";
import { MdDeleteForever } from "react-icons/md";
import { FiLogOut, FiUsers } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useStore } from "../context/StoreProvider";
import { FiChevronRight, FiUser, FiKey } from "react-icons/fi";
import CenterModal from "../components/layout/CenterModal";
import { InputText } from "../components/elements/Input";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";

export default function SettingPage() {

    const navigation = useNavigate()
    const {fetchUserInfo, userInfo} = useStore();

    const [isInfoUpdateModalVisible, setInfoUpdateModalVisible] = useState(false);
    const [isPasswordModalVisible, setPasswordModalVisible] = useState(false);


    useEffect(() => {
        fetchUserInfo();
    }, [])
    

    return (
        <div className="w-full h-full items-center flex flex-col">
            <Navbar />

            <div className="flex flex-col py-5 px-5 sm:p-10 max-w-[1024px] w-full items-center gap-4 ">

                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 font-semibold">Persnal Information</div>

                    <div className="rounded-lg bg-zinc-900 w-full px-5 h-10 flex items-center justify-between" >
                        <div>Name</div>
                        <div className="opacity-80">{userInfo.name}</div>
                    </div>
                
                    <div className="rounded-lg bg-zinc-900 w-full px-5 h-10 flex items-center justify-between" >
                        <div>Position</div>
                        <div className="opacity-80">{userInfo.role}</div>
                    </div>
                   
                    <div className="rounded-lg bg-zinc-900 w-full px-5 h-10 flex items-center justify-between" >
                        <div>Username</div>
                        <div className="opacity-80">{userInfo.username}</div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 font-semibold">Account Settings</div>

                    <button
                        onClick={() => {setInfoUpdateModalVisible(true)}}  
                        className="rounded-lg bg-zinc-900 w-full p-2 flex items-center justify-between gap-2 cursor-pointer " 
                    >
                        <div className="flex gap-2 items-center">
                            <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square min-w-10 ">
                                <FiUser className="size-6" />
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="text-sm text-left">Update Information</div>
                                <p className="text-xs opacity-70" >Update your persnal information like name or username</p>
                            </div>
                        </div>

                        <FiChevronRight />
                    </button>
                    
                    <button 
                        onClick={() => {setPasswordModalVisible(true)}}
                        className="rounded-lg bg-zinc-900 w-full p-2 flex items-center justify-between gap-2 cursor-pointer" 
                    >
                        <div className="flex gap-2 items-center">
                            <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square min-w-10 ">
                                <FiKey className=" size-6" />
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="text-sm text-left">Update Password</div>
                                <p className="text-xs opacity-70" >Replace your old password to new one</p>
                            </div>
                        </div>

                        <FiChevronRight />
                    </button>                    
                </div>
               
                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 font-semibold">Other</div>

                    <button 
                        onClick={() => {}}
                        className="rounded-lg bg-zinc-900 w-full p-2 flex items-center justify-between gap-2 cursor-pointer" 
                    >
                        <div className="flex gap-2 items-center">
                            <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square min-w-10 ">
                                <FiUsers className=" size-6" />
                            </div>
                            
                            <div className="flex flex-col">
                                <div className="text-sm text-left">Users Profile</div>
                                <p className="text-xs opacity-70" >View and update users information</p>
                            </div>
                        </div>

                        <FiChevronRight />
                    </button>
                    
                    <button 
                        onClick={() => {
                            localStorage.removeItem('token');
                            navigation('/');
                        }}
                        className="rounded-lg bg-zinc-900 w-full p-2 flex items-center gap-2 cursor-pointer " 
                    >
                        <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square min-w-10 ">
                            <FiLogOut className="size-6" />
                        </div>
                        
                        <div className="flex flex-col text-left">
                            <div className="text-sm">Logout</div>
                            <p className="text-xs opacity-70" >Logout from your account</p>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col items-center w-full gap-3" >
                    <div className="self-start text-md pl-2 opacity-80 text-red-500 font-semibold">Danger Zone</div>

                    <div className="rounded-lg bg-zinc-900 w-full p-2 flex items-center gap-2 cursor-pointer " >
                        <div className="bg-zinc-800 flex items-center justify-center rounded-sm aspect-square min-w-10 ">
                            <MdDeleteForever className="text-red-500 size-6" />
                        </div>
                        
                        <div className="flex flex-col text-red-500">
                            <div className="text-sm">Delete Account</div>
                            <p className="text-xs opacity-70" >Once you delete your account then no way to go back</p>
                        </div>
                    </div>
                </div>
            </div>

            <PersnalInfoUpdateModal
                visible={isInfoUpdateModalVisible} setVisible={setInfoUpdateModalVisible}
            />
            
            <PasswordUpdateModal
                visible={isPasswordModalVisible} setVisible={setPasswordModalVisible}
            />
        </div>
    )
}


function PersnalInfoUpdateModal({visible, setVisible}) {
    
    const {userInfo} = useStore();

    function handleSubmit(e) {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.target))

        console.log(data)
    }

    return (
        <CenterModal 
            title={'Update Information'} 
            visible={visible}
            setVisible={setVisible}
            containerClassName="max-w-[600px] w-full"
        >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 pt-4">
                <InputText  
                    name="name"
                    value={userInfo.name}
                    label={'Full Name'}
                    placeholder={'Enter full Name'}
                />

                <InputText  
                    name="username"
                    value={userInfo.username}
                    label={'username'}
                    placeholder={'Enter username'}          
                />

                <Button>Update</Button>
            </form>
        </CenterModal>
    )
}


function PasswordUpdateModal({visible, setVisible}) {
    return (
        <CenterModal 
            title={'Update Password '} 
            visible={visible}
            setVisible={setVisible}
            containerClassName="max-w-[600px] w-full"
            className="flex flex-col gap-5 pt-4"
        >
            <InputText  
                label={'Current Password'}
                placeholder={'Enter full Name'}
            />
            
            <InputText  
                label={'New Password'}
                placeholder={'Enter username'}          
            />

            <Button>Update</Button>
        </CenterModal>
    )
}