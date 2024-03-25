import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import picture from '../assets/nigeriamyway.jpg'

export default function NotLoggedIn() {
    const navigate = useNavigate()

    function logIn() {
        navigate('/login', { replace: true })
    }

    function signUp() {
        navigate('/signup', { replace: true })
    }


    return (
        <>
            <div className=" lg:hidden">
                <div className=" flex-col w-full text-center font-mono h-screen">
                    <div className=" h-2/4 w-full"><img src={picture} className=" h-full w-full" alt="" /></div>
                    <div>
                        <h1 className=" text-2xl text-black mt-10 mb-5">Welcome to Nigeria My Way</h1>
                        <h1 className=" mb-10 text-gray-500 text-xl">Log in with an account to access site</h1>
                        <div className=" flex items-center justify-center gap-20">
                            <Button onClick={() => { logIn() }} className=' border-2 text-lg w-28'>Log In</Button>
                            <Button onClick={() => { signUp() }} className=' border-2 text-lg w-28'>Sign Up</Button>
                        </div>
                    </div>

                </div>
            </div>
            <div className=" hidden lg:contents">
                <div className=" flex w-full text-center font-mono h-screen">
                    <div className=" w-2/3"><img src={picture} className=" h-full w-full" alt="" /></div>
                    <div>
                        <h1 className="text-6xl text-black mt-10 mb-16">Welcome to Nigeria My Way</h1>
                        <h1 className=" mb-10 text-gray-500 text-xl md:text-4xl">Log in with an account to access site</h1>
                        <div className=" flex items-center justify-center gap-20">
                            <Button onClick={() => { logIn() }} className=' border-2 text-lg w-28'>Log In</Button>
                            <Button onClick={() => { signUp() }} className=' border-2 text-lg w-28'>Sign Up</Button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
