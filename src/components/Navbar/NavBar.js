import React, { useState } from 'react';
import { Link } from "gatsby";
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Contact from '../Contact/Contact';
import './NavBar.css';
import { WiMoonAltWaxingGibbous4 } from "react-icons/wi";
import { FaHamburger } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';


const NavBar = (props) => {
    
    const [drop, setDrop] = useState(true);

    const dropDown = () => {
        setDrop(!drop);
    }

    return (
        <nav className='navbar'>
            <div className='name'>
                <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                    <h1 id='firstName'>
                        ANNA<WiMoonAltWaxingGibbous4 className='moonIcon' />
                    </h1>
                    <h1 id='secondName'>
                        JASINSKA
                    </h1>
                </Link>
            </div>
            <div className='tabs-container'>
                <div className='tabs'>
                    <Link to='/' style={{textDecoration: 'none', color: 'inherit'}} id='about'>
                        <span>
                            home
                        </span>
                    </Link>
                    <Link to='/portfolio' style={{textDecoration: 'none', color: 'inherit'}} id='portfolio'>
                        <span>
                            portfolio
                        </span>
                    </Link>
                    <Link id='contact'>
                        <AnchorLink to='/#contact-page'>
                            <span>
                                contact me
                             </span>
                        </AnchorLink>
                    </Link> 
                    {props.drop ? 
                    <AiOutlineClose className='drop-down' onClick={props.toggleDrop} /> : 
                    <FaHamburger className='drop-down' onClick={props.toggleDrop} />}
                </div>
                
            </div>
            
        </nav>
    );
}

export default NavBar