//The header component which contains the logo, navbar and sign out button

import Navbar from "./navbar/NavBar"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import supabase from "@/config/supabaseClient"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { useEffect, useState } from "react"


function Header() {
    const navigate = useNavigate()
    const { isSession, setIsSession } = useState()


    //navigate to login page when the login button is clicked
    function logIn() {
        navigate('/login', { replace: true })
    }

    //navigate to sign up page when the sign up button is clicked
    function signUp() {
        navigate('/signup', { replace: true })
    }

    //function to sign out user when sign out button is clicked
    async function signOut() {
        await supabase.auth.signOut()
        navigate("/login", { replace: true })
    }

    useEffect(() => {
        async function authChange() {
            supabase.auth.onAuthStateChange((session) => {
                if (session) {
                    setIsSession(true)
                } else {
                    setIsSession(false)
                }
            })
        }
        authChange()
    }, [])

    return (
        <div className='border-1 mt-4 h-12 p-2 rounded-md flex justify-around'>
            <Link to="/"><p className=' font-rubik font-extrabold text-3xl'>NigeriaMyWay</p></Link>
            <div className=' flex gap-3'>
                <Navbar />
                {isSession ? <><Button onClick={() => { signOut() }} className=' bg-white -mt-1 h-17 w-18'><FontAwesomeIcon icon={faRightToBracket} /></Button></> : <><Button onClick={() => { logIn() }} className=' bg-black text-white hover:bg-white hover:text-black border-2 -mt-1 h-17 w-18'>Log In</Button>
                    <Button onClick={() => { signUp() }} className=' bg-black text-white hover:bg-white hover:text-black border-2 -mt-1 h-17 w-18'>Sign up</Button></>}

            </div>
        </div>
    )
}

export default Header