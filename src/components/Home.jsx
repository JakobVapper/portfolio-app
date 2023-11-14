import React from 'react';
import Portrait from '../media/Portrait.png'
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Home = () => {
    return (
        <div className='bg-black pt-[120px]' id='Home'>
            <div className='overflow-hidden min-h-screen lg:flex lg:flex-row lg:justify-between md:flex md:flex-col lg:px-28'>
                <motion.div initial="initial" animate="animate" variants={textVariants} className='lg:pt-44'>
                    <motion.h2 variants={textVariants} className='bg-gradient-to-r from-indigo-600 to-fuchsia-700 bg-clip-text uppercase text-transparent text-2xl font-bold tracking-[10px]'>Jakob Vapper</motion.h2>
                    <motion.h1 variants={textVariants} className='bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold pb-5'>Web developer</motion.h1>
                    <motion.div variants={textVariants} className='flex lg:gap-4'>
                        <Link to="Work" spy={true} smooth={true} offset={50} duration={500}><motion.button variants={textVariants} className='border-white border-2 rounded-md text-white w-40 h-8 hover:bg-white hover:text-black'>My Work</motion.button></Link>
                        <Link to="Contact" spy={true} smooth={true} offset={50} duration={500}><motion.button variants={textVariants} className='border-white border-2 rounded-md text-white w-40 h-8 hover:bg-white hover:text-black'>Contact Me</motion.button></Link>
                    </motion.div>
                </motion.div>
                <div className='flex place-content-end top-0'>
                    <img className='lg:h-[85vh] md:h-14' src={Portrait} alt="Portrait" />
                </div>
            </div>
        </div>
    )
}

export default Home