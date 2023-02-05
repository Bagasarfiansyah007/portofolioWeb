import './Header2.css';
import React from 'react';
import Button from '../Button/Button';

class Header2 extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <div className='container-nav'>
                    <div className='row1'>
                        <div className='col4 brand'>
                            <h5>Bagas.</h5>
                        </div>
                        <div className='col4 navlink'>
                            <ul>
                                <li id='list'><a href="#home">Home</a></li>
                                <li id='list'><a href="#about">About</a></li>
                                <li id='list'><a href="#porto">Portofolio</a></li>
                                <li id='list'><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className='col4 btn-nav'>         
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='col4'>
                            <Button nama="Download Resume" alamat="#"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header2;