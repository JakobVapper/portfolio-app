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
        <div id='Contact' className="lg:flex lg:justify-center lg:items-center min-h-screen pt-[200px]">
            <div className="lg:flex items-center gap-4">
                <div name='contact' className='w-full h-screen flex'>
                    <form method='POST' action="https://getform.io/f/3444e802-9dac-4638-949a-8fd86ed56d34" className='flex flex-col lg:w-[600px]'>
                        <motion.div initial="initial" animate={isVisible ? "animate" : "initial"} variants={textVariants} className='pb-8'>
                            <motion.p variants={textVariants} className='inline bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold'>Contact</motion.p>
                            <motion.p variants={textVariants} className='text-indigo-300 py-4'>Send me an email - jakobvvapper@gmail.com</motion.p>
                        </motion.div>
                        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
                        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
                    </form>
                </div>
                <div className=''>
                    <Lottie className='lg:w-[600px] md:w-[200px]' animationData={Animation}></Lottie>
                </div>
            </div>
        </div>
    )
}

export default Contact