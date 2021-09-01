import React, { useState } from 'react';
import NavBar from "../components/Navbar/NavBar";
import Layout from "../components/Layout/Layout";
import Footer from '../components/Footer/Footer';
import DropDown from '../components/Dropdown/DropDown';
import '../components/Dropdown/DropDown.css';
import './portfolio.css';
import LightBox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import pImgs from '../components/SlideShow/ssImages/pImg.js';


const Portfolio = () => {
    
    const [drop, setDrop] = useState(false);
    
    const [zoom, setZoom] = useState(
        {
            src: {},
            isOpen: false
        }
    );

    const toggleDrop = () => {
        setDrop(!drop);
    }

    const toggleZoom = (src) => {
        setZoom({
            src: src,
            isOpen: true
        });
    }

    

    return (
        <Layout>
            {drop && <DropDown drop={drop} toggleDrop={toggleDrop}/>}
            <NavBar drop={drop} toggleDrop={toggleDrop}/>
            <div className="portfolioBody">
            {zoom.isOpen && <LightBox mainSrc={zoom.src.img} onCloseRequest={() => setZoom({src: '', isOpen: false})} imageCaption={zoom.src.content}/>}
                <div className="portfolio-container">
                    
                    <div className="column-a" data-aos='fade-up' data-aos-delay='100'>
                        <img src={pImgs.a1.img} onClick={() => toggleZoom(pImgs.a1)}/>
                        <img src={pImgs.a2.img} onClick={() => toggleZoom(pImgs.a2)}/>
                        <img src={pImgs.a3.img} onClick={() => toggleZoom(pImgs.a3)}/>
                        <img src={pImgs.a4.img} onClick={() => toggleZoom(pImgs.a4)}/>
                        <img src={pImgs.a5.img} onClick={() => toggleZoom(pImgs.a5)}/>
                    </div>

                    <div className="column-b" data-aos='fade-up'>
                        <img src={pImgs.b1.img} onClick={() => toggleZoom(pImgs.b1)} />
                        <img src={pImgs.b2.img} onClick={() => toggleZoom(pImgs.b2)} />
                        <img src={pImgs.b3.img} onClick={() => toggleZoom(pImgs.b3)} />
                        <img src={pImgs.b4.img} onClick={() => toggleZoom(pImgs.b4)} />
                        <img src={pImgs.b5.img} onClick={() => toggleZoom(pImgs.b5)} />
                        <img src={pImgs.b6.img} onClick={() => toggleZoom(pImgs.b6)} />
                        <img src={pImgs.b7.img} onClick={() => toggleZoom(pImgs.b7)} />
                    </div>                    
                    
                    <div className="column-c" data-aos='fade-up' data-aos-delay='200'>
                        <img src={pImgs.c1.img} onClick={() => toggleZoom(pImgs.c1)} />
                        <img src={pImgs.c2.img} onClick={() => toggleZoom(pImgs.c2)} />
                        <img src={pImgs.c3.img} onClick={() => toggleZoom(pImgs.c3)} />
                        <img src={pImgs.c4.img} onClick={() => toggleZoom(pImgs.c4)} />
                        <img src={pImgs.c5.img} onClick={() => toggleZoom(pImgs.c5)} />
                    </div>
                </div>
            </div>
            <Footer />
        </Layout>
    );
}

export default Portfolio;