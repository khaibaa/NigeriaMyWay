//The header component which contains the logo, navbar and sign out button

import Navbar from "./navbar/NavBar"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import supabase from "@/config/supabaseClient"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'


function Header() {
    const navigate = useNavigate()

    //function to sign out user when sign out button is clicked
    async function signOut() {
        await supabase.auth.signOut()
        navigate("/login", { replace: true })
    }

    return (
        <div className='border-1 mt-4 h-12 p-2 rounded-md flex justify-around'>
            <Link to="/"><p className=' font-rubik font-extrabold text-3xl'>NigeriaMyWay</p></Link>
            <div className=' flex gap-3'>
                <Navbar />
                <Button onClick={() => { signOut() }} className=' bg-white -mt-1 h-17 w-18'><FontAwesomeIcon icon={faRightToBracket} /></Button>
            </div>
        </div>
    )
}

export default Header