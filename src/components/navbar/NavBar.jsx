import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SideBarData'; // import the SidebarData from the SideBarData.jsx file
import MenuIcon from "../../assets/MenuIcon.svg"
import CloseIcon from "../../assets/CloseIcon.svg"
import { Button } from '../ui/button';
import "./NavBar.css" //importing the navbar css styles
import { LanguageSelector } from '../LanguageSelector';
import supabase from '@/config/supabaseClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const navigate = useNavigate()

    const [isSession, setIsSession] = useState(false)

    // set the initial state of the sidebar to false i.e for mobile so it doesnt show by default
    const [sidebar, setSidebar] = useState(false);
    // function to toggle the sidebar i.e show or hide the sidebar
    const showSidebar = () => setSidebar(!sidebar);

    function logIn() {
        navigate('/login', { replace: true })
    }

    //navigate to sign up page when the sign up button is clicked
    function signUp() {
        navigate('/signup', { replace: true })
    }

    async function signOut() {
        await supabase.auth.signOut()
        navigate("/login", { replace: true })
    }

    useEffect(() => {
        async function authChange() {
            supabase.auth.onAuthStateChange((_, session) => {
                console.log(session)
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
        <>
            {/* mapping the sidebar items from SidebarData.jsx items so they show */}
            {/* FOR DESKTOP */}
            <ul className="horizontal-menu">
                {SidebarData.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className=' hidden md:contents'><LanguageSelector /></div>

            {/* menu button that shows the sidebar on mobile when clicked */}
            {/* FOR MOBILE */}
            <div className='navbar sm:hidden'>
                <Button className='menu-bars bg-white hover:bg-none'>
                    <img src={MenuIcon} alt="" onClick={showSidebar} />
                </Button>
            </div>

            {/* mapped items that get shown on mobile when the menu button is clicked */}
            <nav className={` z-50 ${sidebar ? 'nav-menu active' : 'nav-menu'}`}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link className='menu-bars'>
                            <img src={CloseIcon} alt="" />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>

                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <div className='pl-7'>
                        {isSession ? <><Button onClick={() => { signOut() }} className=' bg-white -mt-1 h-17 w-18'><FontAwesomeIcon icon={faRightToBracket} /></Button></> :
                            <div className=' flex flex-col gap-4 p-4'>
                                <Button onClick={() => { logIn() }} className=' bg-[#344E41] text-white hover:bg-white hover:text-black border-2 border-[#344E41] -mt-1 h-17 w-18'>Log In</Button>
                                <Button onClick={() => { signUp() }} className=' bg-[#344E41] text-white hover:bg-white hover:text-black border-2 border-[#344E41] -mt-1 h-17 w-18'>Sign up</Button>
                            </div>}
                    </div>
                    <LanguageSelector />

                </ul>
            </nav>
        </>
    );
}

export default Navbar;