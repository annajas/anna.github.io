import React, { useEffect } from 'react';
import MainBody from '../MainBody/mainBody.js';
import './About.css';
import firstImg from './first.png';
import secondImg from './second.png';
import { Link } from 'gatsby';


const About = () => {


    return (
        <div className='about-container'>
            <div className='about-para' data-aos='fade-right'>
                Hi, I'm <text id='anna' className='blackText'>Anna</text>
                <br/>
                I am currently working at <text id='tccld' className='blackText'>Toronto CCLD</text>
                <br/>
                This is my ongoing portfolio of things I see (and design).
                <br/>
                <hr/>
                <Link to='/portfolio' style={{textDecoration: 'none', color: 'inherit'}}>
                    <span className="blackText more-portfolio">
                        view my portfolio <text className='arrows'>>>></text>
                    </span>
                </Link>
            </div>
            <img className='firstImg' src={firstImg} data-aos='zoom-out' data-aos-delay='100'></img>
            <img className='secondImg' src={secondImg} data-aos='zoom-in' data-aos-delay='100'></img>
        
        </div>

    );
}

export default About