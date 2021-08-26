import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>Julia Chen</Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='#about' className='nav-links' onClick={closeMobileMenu}><span>About</span></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#experience' className='nav-links' onClick={closeMobileMenu}><span>Experience</span></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='#projects' className='nav-links' onClick={closeMobileMenu}><span>Projects</span></Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}><span>Resume</span></Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='bnt--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar