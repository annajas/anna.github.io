import React, { useState, useEffect } from 'react';
import './Slides.css';
import { CgChevronLeft } from "react-icons/cg";
import { CSSTransition } from 'react-transition-group';
import a from './ssImages/a1.jpg';
import b from './ssImages/a2.jpg';
import c from './ssImages/c3.jpg';
import d from './ssImages/c2.jpg';
import e from './ssImages/b1.jpg';



const Slides = () =>  {

    const slideImg = [
        {
            img: a,
            content: 'Miami, FL'
        },
        {
            img: b,
            content: 'Miami, FL'
        },
        {
            img: c,
            content: 'Farnsworth House. Plano, IL'
        },
        {
            img: d,
            content: 'Farnsworth House. Plano, IL'
        },
        {
            img: e,
            content: 'Zeitz MOCAA. Cape Town, South Africa'
        }
    ];

    const [index, setIndex] = useState(0);
    const [inProp, setInProp] = useState(true);

    const decrement = () => {
        setInProp(false);
        
        setTimeout(() => {
            
            if (index === 0) {
                setIndex(4);
                
            } else {
                setIndex(index - 1);
            
            }
            setTimeout(() => setInProp(true), 300);
        }, 400);
   
    }

    return (
        <div className="slide-container">
            <div className='slide-container-child'>
                <CgChevronLeft id='left' size={110}  onClick={decrement} />
                <CSSTransition in={inProp} timeout={1200} classNames='my-slide'>
                    <div className="slide-photos">
                        <img src={slideImg[index].img} alt="" className="main-img" data-aos='fade-up' />
                    </div>
                </CSSTransition>
            </div>
            <div className="info" data-aos='fade-left' data-aos-offset='500'>
                <CSSTransition in={inProp} timeout={1200} classNames='my-info'>
                    <span className="img-info">
                        
                        {slideImg[index].content}
                        
                    </span>
                </CSSTransition>
            </div>
        </div>
    )
}

export default Slides;