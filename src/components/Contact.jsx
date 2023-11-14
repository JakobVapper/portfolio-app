import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react';
import Animation from '../media/Contact-anim.json'

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

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollY > 2600);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id='Contact' className='lg:flex md:flex lg:flex-row md:flex-col pt-[200px]'>
            <div className='w-full bg-black flex place-content-start md:px-[20px] lg:px-[100px] items-center p-4'>
                <div className='flex flex-col max-w-[600px] w-full'>
                    <motion.div initial="initial" animate={isVisible ? "animate" : "initial"} variants={textVariants} className='pb-8'>
                        <motion.h1 className='flex place-content-center bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold'>Contact</motion.h1>    
                        <motion.p className='text-white py-4 text-center'>Send me an email! - jakobvvapper@gmail.com</motion.p>
                    </motion.div>
                    <input className='bg-white p-2' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
                    <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                </div>
            </div>
            <div className='lg:flex lg:place-items-center'>
                <Lottie className='lg:w-[600px] md:w-[300px]' animationData={Animation}></Lottie>
            </div>
        </div>
    )
}

export default Contact