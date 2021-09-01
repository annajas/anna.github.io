import React from 'react';
import { Link } from 'gatsby';

const DropDown = (props) => {

    return (
        <div className='drop-down-menu' data-aos='zoom-in' data-aos-duration='300'>
          <Link to='/' onClick={props.toggleDrop}>
            <span className='ddOptions'>
              about me
            </span>
          </Link>
          <Link to='/portfolio' onClick={props.toggleDrop}>
            <span className='ddOptions'>
              portfolio
            </span>
          </Link>
          <Link to='/#contact-page' onClick={props.toggleDrop}>
            <span className='ddOptions'>
              contact
            </span>
          </Link>
        </div>
    )
}

export default DropDown;