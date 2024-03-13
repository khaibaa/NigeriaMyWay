import Navbar from "./navbar/NavBar"
import ProfileIcon from "../assets/ProfileIcon.svg"
import { Link } from "react-router-dom"


function Header() {
    return (
        <div className=' bg-slate-600 h-12 p-2 rounded-md flex justify-between'>
            <Link to="/"><p className=' font-mono font-extrabold text-xl'>NigeriaMyWay</p></Link>
            <div className=' flex gap-3'>
                <Navbar />
                <Link to="/profile"><img src={ProfileIcon} alt="" /></Link>
            </div>
        </div>
    )
}

export default Header