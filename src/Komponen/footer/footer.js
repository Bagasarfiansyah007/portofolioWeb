import './footer.css';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='logo'>
                    <h4>Bagas.</h4>
                    <p>You can download my resume, to look the detail of my experience and achievement as UI/UX Designer. Click this to see more detail!</p>
                </div>
                <div className='informasi'>
                    <div className='portofolio kol3'>
                        <h6>Portofolio</h6>
                        <ul>
                            <a href='#'>
                                <li>Akademika</li>
                            </a>
                            <a href='#'>
                                <li>Diceritain</li>
                            </a>
                            <a href='#'>
                                <li>Unjani</li>
                            </a>
                            <a href='#'>
                                <li>Eazy</li>
                            </a>
                        </ul>
                    </div>
                    <div className='conten kol3'>
                        <h6>content</h6>
                        <ul>
                            <a href='#'>
                                <li>Home</li>
                            </a>
                            <a href='#'>
                                <li>About me</li>
                            </a>
                            <a href='#'>
                                <li>Portofolio</li>
                            </a>
                            <a href='#'>
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
                    <div className='socialmedia kol3'>
                        <h6>Social Media</h6>
                        <ul>
                            <a href='#'>
                                <li>
                                   <FiPhone size={24}></FiPhone> 
                                   Bagas Arfiansyah
                                </li>
                            </a>
                            <a href='#'>
                                <li>
                                    <FiDribbble size={24}></FiDribbble> 
                                    089630049636
                                </li>
                            </a>
                            <a href='#'>
                                <li>
                                    <FiInstagram size={24}></FiInstagram> 
                                    baarf1501
                                </li>
                            </a>
                            <a href='#'>
                                <li>
                                    <FiLinkedin size={24}></FiLinkedin> 
                                    Bagas Arfiansyah
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;