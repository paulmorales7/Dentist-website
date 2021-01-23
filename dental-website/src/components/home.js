import React from 'react';
import './home.css';
import logoImg from '../Images/GE_official_logo.png'
import { FaBars } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";


const nav = document.getElementsByClassName('navLinks');

function showMenu(){
    nav.style.right = "0";
}

function closeMenu(){
    nav.style.right = "-200px"
}

function home() {
 
    return (
        <div className='background'>
            <div className='navBar'>
                <div className='logo'>
                    <img src={logoImg} />
                </div>
                <div className='navLinks'>
                    <GrFormClose className='closeIcon' onClick={closeMenu()}/>
                    <ul>
                        <a href="#"><li>HOME</li></a>
                        <a href="#"><li>ABOUT</li></a>
                        <a href="#"><li>SERVICES</li></a>
                        <a href="#"><li className='scheduleBtn'>SCHEDULE APPOINTMENT</li></a>
                    </ul>
                </div>
                <FaBars className='barsIcon' onClick={showMenu()}/>
            </div>
            <div className='main-text'>
                <h1>Smile about your Smile!</h1>
                <button className='main-textBtn'>Book Online!</button>
            </div>
        </div>
    )
}

export default home;