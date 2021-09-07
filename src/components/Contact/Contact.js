import React, { useState } from 'react';
import './Contact.css';
import first from './cImg/1.jpg';
import emailjs from 'emailjs-com';
import { FaLinkedinIn } from 'react-icons/fa';
import pp from './cImg/pp.jpg';
import { GrMail } from 'react-icons/gr'
import { BsChevronDoubleDown } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const copyClip = (text) => {
//     navigator.clipboard.writeText(text);
//     console.log('copied');
// }

const sID = 'service_lbbb0ig';
const tID = 'template_zzoiae6';
const uID = 'user_lOfLSO2t1g02HTpqfbFuA';

emailjs.init(uID);

const Contact = () => {
    
    const [linkedin, setLinkedin] = useState('https://www.linkedin.com/in/anna-jasinska-715994177/');
    const [email, setEmail] = useState('anjasinski07@gmail.com');
    const [sendButton, setSend] = useState(false);
    const [copied, setCopied] = useState(false);


    const updateLD = (new_url) => {
        setLinkedin(new_url);
    }
    
    const updateEmail = (new_email) => {
        setEmail(new_email);
    }

    const copytoClip = (text) => {
        const ta = document.createElement("textarea");
        ta.innerText = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
    }


    const sendEmail = (e) => {
    
        setSend(true);
        e.preventDefault();
        emailjs.sendForm(sID, tID, e.target, uID).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        )
        setTimeout(() => setSend(false), 3000);

    }

    const copyMessage = () => {
        toast('Copied to Clipboard');
    }

    return (
        <div className="thirdBody" id='contact-page'>
            
            <div className="cImg">
                <img src={first} alt="" className="first" data-aos='fade-right' data-aos-duration='1500' data-aos-ease='ease-in'/>
            </div>
            <div className="contact-me">
                <ToastContainer position='top-right' autoClose={1200} hideProgressBar />
                <div className="socials">
                    <a target="_blank" rel="noopener noreferrer" href={linkedin}>
                        <FaLinkedinIn className='icons' />
                    </a>
                    
                        <GrMail className='icons' onClick={copyMessage}/>
                    
                    <img src={pp} alt="" className="profile-pic" />
                </div>
                <div className="forms">
                    <span className="send-email">
                        leave a message <BsChevronDoubleDown />
                    </span>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='email' name='email' placeholder='Email' />
                        <textarea name='message' placeholder='Message' rows='10' required/>
                        <input type='submit' value={sendButton ? 'Message sent!' : 'Send'} className={sendButton ? 'sent-button' : 'send-button'} disabled={sendButton}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;