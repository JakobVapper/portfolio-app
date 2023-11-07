import React, {useState} from 'react'
import Logo from '../media/logo.png'
import Burger from '../media/Burger.png'
import Cross from '../media/Cross.png'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-black'>
            <div>
                <img src={Logo} alt="Website logo" style={{width: '50px'}} />
            </div>

            <ul className='hidden md:flex'>
                <li className='text-white'>Home</li>
                <li className='text-white'>About</li>
                <li className='text-white'>Experience</li>
                <li className='text-white'>Work</li>
                <li className='text-white'>Contact</li>
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