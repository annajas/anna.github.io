import React, { useEffect, useState } from "react";
import NavBar from "../components/Navbar/NavBar";
import './index.css';
import Layout from "../components/Layout/Layout";
import MainBody from "../components/MainBody/mainBody";
import About from "../components/About/About";
import AOS from 'aos';
import Link from 'gatsby';
import 'aos/dist/aos.css';
import Slides from '../components/SlideShow/Slides'
import Footer from "../components/Footer/Footer";
import DropDown from '../components/Dropdown/DropDown.js';
import '../components/Dropdown/DropDown.css';
import Contact from "../components/Contact/Contact";
import SEO from '../Seo';

// markup
const HomePage = () => {
  
  useEffect(() => {
    AOS.init({duration: 1000})
  }, []);

  const [drop, setDrop] = useState(false);

  const toggleDrop = () => {
    setDrop(!drop);
  }

  return (
    <Layout>
      <SEO 
        title='Home'
        description='Homepage'
        />
      {drop && <DropDown drop={drop} toggleDrop={toggleDrop}/>}
      <NavBar drop={drop} toggleDrop={toggleDrop} />
      <About />
      <MainBody name='secondBody' />
      <Slides />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default HomePage
