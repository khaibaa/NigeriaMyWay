import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideBarData';
import MenuIcon from "../../assets/MenuIcon.svg"
import CloseIcon from "../../assets/CloseIcon.svg"
import { Button } from '../ui/button';
import "./NavBar.css"


function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>

            <ul className="horizontal-menu">
                {SidebarData.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/*  */}
            <div className='navbar'>
                <Button className='menu-bars bg-white hover:bg-none'>
                    <img src={MenuIcon} alt="" onClick={showSidebar} />
                </Button>
            </div>
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