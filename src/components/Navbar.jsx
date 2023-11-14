import React, {useState} from 'react'
import Logo from '../media/logo.png'
import Burger from '../media/Burger.png'
import Cross from '../media/Cross.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black'>
            <div>
                <img src={Logo} alt="Website logo" style={{width: '50px'}} />
            </div>

            <ul className='hidden md:flex gap-[20px]'>
                <Link to="Home" spy={true} smooth={true} offset={50} duration={500} className='text-gray-400 hover:text-white'>Home</Link>
                <Link to="About" spy={true} smooth={true} offset={50} duration={500} className='text-gray-400 hover:text-white'>About</Link>
                <Link to="Experience" spy={true} smooth={true} offset={50} duration={500} className='text-gray-400 hover:text-white'>Experience</Link>
                <Link to="Work" spy={true} smooth={true} offset={50} duration={500} className='text-gray-400 hover:text-white'>Work</Link>
                <Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className='text-gray-400 hover:text-white'>Contact</Link>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <img style={{width: '50px'}} src={Burger} alt="Burger" /> : <img style={{width: '50px'}} src={Cross} alt="Cross" />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl text-white'>Home</li>
                <li className='py-6 text-4xl text-white'>About</li>
                <li className='py-6 text-4xl text-white'>Experience</li>
                <li className='py-6 text-4xl text-white'>Work</li>
                <li className='py-6 text-4xl text-white'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar