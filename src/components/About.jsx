import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import Animation from '../media/About-anim.json'
import { motion } from 'framer-motion'

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

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='bg-black lg:flex lg:flex-row md:flex-col pb-[70px]'>
            <Lottie className='h-[600px]' animationData={Animation} />
            <motion.div initial="initial" animate={isVisible ? "animate" : "initial"} variants={textVariants} className='flex flex-col lg:max-w-[800px] place-items-center text-center'>
                <motion.h1 variants={textVariants} className='bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold pt-14'>About Me</motion.h1>
                <motion.p variants={textVariants} className='text-indigo-300 lg:w-[800px] pt-14'>Hi, I am Jakob! I am currently enrolled in the Web Development program at Kuressaare Ametikool, currently in my second year of studies. This program has provided me with a solid foundation in front-end and back-end technologies, including various frameworks and libraries. Looking ahead, I am eager to continue my academic journey and explore advanced topics in web development. I am also excited about the prospect of internships and professional experiences that will allow me to further refine my skills and make meaningful contributions to real-world projects.</motion.p>
            </motion.div>
        </div>
    )
}

export default About;