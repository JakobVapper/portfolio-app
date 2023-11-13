import React, { useEffect, useState } from 'react'
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
            staggerChildren: 0.2,
        },
    },
};

const imageVariants = {
    hover: {
      scale: 1.2,
    },
  };

const Experience = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollY > 900);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='pt-[200px]'>
            <motion.div initial="initial" animate={isVisible ? "animate" : "initial"} variants={textVariants} className='bg-black flex flex-col'>
            <motion.div variants={textVariants}>
                <motion.h1 variants={textVariants} className='flex place-content-center bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold'>Experience</motion.h1>
            </motion.div>
            <motion.div variants={textVariants} className='lg:grid lg:grid-cols-4 md:flex md:flex-col pt-14'>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto' src={HTML} alt="HTML picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 text-center pt-[20px]'>HTML</motion.h2>
                </motion.div>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto' src={CSS} alt="CSS picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 pt-[20px]'>CSS</motion.h2>
                </motion.div>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto' src={Javascript} alt="Javascript picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 pt-[20px]'>Javascript</motion.h2>
                </motion.div>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto' src={ReactJS} alt="ReactJS picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 pt-[20px]'>React JS</motion.h2>
                </motion.div>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto' src={TailwindCSS} alt="Tailwind CSS picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 pt-[20px]'>Tailwind CSS</motion.h2>
                </motion.div>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto' src={Python} alt="Python picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 pt-[20px]'>Python</motion.h2>
                </motion.div>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto' src={PHP} alt="PHP picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 pt-[20px]'>PHP</motion.h2>
                </motion.div>
                <motion.div variants={textVariants} className='h-auto flex items-center justify-center flex-col pb-[50px]'>
                    <motion.img variants={imageVariants} whileHover="hover" className='h-32 w-auto'  src={MySQL} alt="MySQL picture" />
                    <motion.h2 variants={textVariants} className='text-indigo-300 pt-[20px]'>MySQL</motion.h2>
                </motion.div>
            </motion.div> 
        </motion.div>
        </div>
    )
}


export default Experience