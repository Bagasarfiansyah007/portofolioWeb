import './sosmednav.css';
import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';
import { FiDribbble } from 'react-icons/fi';

class SosmedNav extends React.Component {
   
    render() {
        
        return (
            <div className='NavigasiSosmed'>
                <ul>
                    <a href="https://wa.me/6289630049636">
                        <span className="changeColor">
                            <li><FiPhone className='icon' size={24}/></li>
                        </span>
                    </a>
                    <a href={this.props.alamat}>
                        <span className="changeColor">
                            <li><FiMail className='icon' size={24}/></li>
                        </span>
                    </a>
                    <a href={this.props.alamat}>
                        <span className="changeColor">
                            <li><FiDribbble className='icon' size={24}/></li>
                        </span>
                    </a>
                    <a href={this.props.alamat}>
                        <span className="changeColor">
                            <li><FiInstagram className='icon' size={24}/></li>
                        </span>
                    </a>
                    <a href={this.props.alamat}>
                        <span className="changeColor">
                            <li><FiLinkedin className='icon' size={24}/></li>
                        </span>
                    </a>
                </ul>
            </div>      
        );
    }
}

export default SosmedNav;