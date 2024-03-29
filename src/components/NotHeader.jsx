//The header component which contains the logo, navbar and sign out button

import Navbar from "./navbar/NavBar"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

function NotHeader() {
    const navigate = useNavigate()

    //navigate to login page when the login button is clicked
    function logIn() {
        navigate('/login', { replace: true })
    }

    //navigate to sign up page when the sign up button is clicked
    function signUp() {
        navigate('/signup', { replace: true })
    }

    return (
        <div className='border-2 h-12 p-2 rounded-md flex justify-between'>
            <Link to="/"><p className=' font-mono font-extrabold text-xl'>NigeriaMyWay</p></Link>
            <div className=' flex gap-3'>
                <Navbar />
                <Button onClick={() => { logIn() }} className=' bg-black text-white hover:bg-white hover:text-black border-2 -mt-1 h-17 w-18'>Log In</Button>
                <Button onClick={() => { signUp() }} className=' bg-black text-white hover:bg-white hover:text-black border-2 -mt-1 h-17 w-18'>Sign up</Button>
            </div>
        </div>
    )
}

export default NotHeader