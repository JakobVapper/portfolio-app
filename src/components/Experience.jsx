import React from 'react';
import { motion } from 'framer-motion'
import HTML from '../media/html.png'
import CSS from '../media/css.png'
import Javascript from '../media/javascript.png'
import ReactJS from '../media/react.png'
import TailwindCSS from '../media/tailwind.png'
import Python from '../media/python.png'
import PHP from '../media/php.png'
import MySQL from '../media/mysql.png'

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

const Experience = () => {
    return (
        <div className='bg-black flex flex-col pt-20'>
            <motion.div initial="initial" animate="animate" variants={textVariants}>
                <motion.h1 variants={textVariants} className='flex place-content-center bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold'>Experience</motion.h1>
            </motion.div>
            <div className='lg:grid lg:grid-cols-4 pt-14'>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto' src={HTML} alt="HTML picture" />
                    <h2 className='text-indigo-300 text-center'>HTML</h2>
                </div>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto' src={CSS} alt="CSS picture" />
                    <h2 className='text-indigo-300'>CSS</h2>
                </div>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto' src={Javascript} alt="Javascript picture" />
                    <h2 className='text-indigo-300'>Javascript</h2>
                </div>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto' src={ReactJS} alt="ReactJS picture" />
                    <h2 className='text-indigo-300'>React JS</h2>
                </div>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto' src={TailwindCSS} alt="Tailwind CSS picture" />
                    <h2 className='text-indigo-300'>Tailwind CSS</h2>
                </div>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto' src={Python} alt="Python picture" />
                    <h2 className='text-indigo-300'>Python</h2>
                </div>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto' src={PHP} alt="PHP picture" />
                    <h2 className='text-indigo-300'>PHP</h2>
                </div>
                <div className='h-auto flex items-center justify-center flex-col'>
                    <img className='h-32 w-auto'  src={MySQL} alt="MySQL picture" />
                    <h2 className='text-indigo-300'>MySQL</h2>
                </div>
            </div> 
        </div>
    )
}

export default Experience