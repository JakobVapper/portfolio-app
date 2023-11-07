import React from 'react'
import Logo from '../media/logo.png'
import Burger from '../media/Burger.png'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black'>
            <div>
                <img src={Logo} alt="Website logo" style={{width: '50px'}} />
            </div>
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Experience</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='hidden'>
                <img src={Burger} alt="Hamburger menu" style={{width: '50px'}} />
            </div>
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar