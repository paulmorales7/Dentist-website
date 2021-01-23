import React from 'react';
import './home.css';
import logoImg from '../Images/GE_official_logo.png'

function home() {
    return (
        <div className='background'>
            <div className='navBar'>
                <div className='logo'>
                    <img src={logoImg}/>
                </div>
                <div className='navLinks'>
                    <ul>
                        <a href="#"><li>HOME</li></a>
                        <a href="#"><li>ABOUT</li></a>
                        <a href="#"><li>SERVICES</li></a>
                        <a href="#"><li className='scheduleBtn'>SCHEDULE APPOINTMENT</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default home;