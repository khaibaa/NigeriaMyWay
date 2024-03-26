import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData'; // import the SidebarData from the SideBarData.jsx file
import MenuIcon from "../../assets/MenuIcon.svg"
import CloseIcon from "../../assets/CloseIcon.svg"
import { Button } from '../ui/button';
import "./NavBar.css" //importing the navbar css styles


function Navbar() {
    // set the initial state of the sidebar to false i.e for mobile so it doesnt show by default
    const [sidebar, setSidebar] = useState(false);
    // function to toggle the sidebar i.e show or hide the sidebar
    const showSidebar = () => setSidebar(!sidebar);

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
                </ul>
            </nav>
        </>
    );
}

export default Navbar;