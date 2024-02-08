import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Project1 from '../media/project1.png'
import Project2 from '../media/project2.png'
import Project3 from '../media/project3.png'

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

const Work = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollY > 1800);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <motion.div id='Work' initial="initial" animate={isVisible ? "animate" : "initial"} variants={textVariants} className='pt-[200px] lg:px-[100px] flex flex-col place-content-center'>
            <motion.h1 variants={textVariants} className='flex place-content-center bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold'>Work</motion.h1>
            <motion.h2 variants={textVariants} className='flex place-content-center bg-gradient-to-r from-indigo-600 to-fuchsia-700 bg-clip-text uppercase text-transparent text-2xl font-bold tracking-[10px] pt-[10px]'>My Recent Works</motion.h2>
            <div className='lg:flex lg:flex-row md:flex md:flex-col place-content-center gap-10 pt-[80px]'>
                <div className='relative group h-[200px] w-[400px] flex place-content-center place-items-center' style={{ backgroundImage: `url(${Project1})`, backgroundSize: 'cover' }}>
                    <div className="absolute flex place-content-center place-items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-700 opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                        <a className='group-hover:flex place-content-center place-items-center' href="https://github.com/JakobVapper/tailwind-project2"><button className=' absolute hidden group-hover:flex place-items-center h-10 rounded-lg px-4 py-3 m-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:border-transparent font-bold text-lg'>Code</button></a>
                    </div>
                </div>
                <div className='relative group h-[200px] w-[400px] flex place-content-center place-items-center' style={{ backgroundImage: `url(${Project2})`, backgroundSize: 'cover' }}>
                    <div className="absolute flex place-content-center place-items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-700 opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                        <a className='group-hover:flex place-content-center place-items-center' href="https://github.com/JakobVapper/karli-tailwind2"><button className=' absolute hidden group-hover:flex place-items-center h-10 rounded-lg px-4 py-3 m-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:border-transparent font-bold text-lg'>Code</button></a>
                    </div>
                </div>
                <div className='relative group h-[200px] w-[400px] flex place-content-center place-items-center' style={{ backgroundImage: `url(${Project3})`, backgroundSize: 'cover' }}>
                    <div className="absolute flex place-content-center place-items-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-700 opacity-0 transition duration-300 ease-in-out hover:opacity-70">
                        <a className='group-hover:flex place-content-center place-items-center' href="https://github.com/JakobVapper/books-rest-api"><button className=' absolute hidden group-hover:flex place-items-center h-10 rounded-lg px-4 py-3 m-2 bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:border-transparent font-bold text-lg'>Code</button></a>
                    </div>
                </div>
            </div>
            <div className='flex place-content-center pt-[30px]'>
                <a href="https://github.com/JakobVapper"><button className='border-white border-2 rounded-md text-white w-40 h-8 hover:bg-white hover:text-black'>See all of my work</button></a>
            </div>
        </motion.div>
    )
}

export default Work