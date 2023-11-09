import React from 'react';
import Lottie from 'lottie-react';
import Animation from '../media/About-anim.json'

const About = () => {
    return (
        <div className='bg-black flex lg:flex-row'>
            <Lottie className='h-[600px]' animationData={Animation} />
            <div className='flex flex-col max-w-[800px] place-items-center text-center'>
                <h1 className='bg-gradient-to-r from-violet-900 to-indigo-400 bg-clip-text text-transparent text-7xl font-bold pt-14'>About Me</h1>
                <p className='text-indigo-300 w-[800px] pt-14'>Hi, I am Jakob! I am currently enrolled in the Web Development program at Kuressaare Ametikool, currently in my second year of studies. This program has provided me with a solid foundation in front-end and back-end technologies, including various frameworks and libraries. Looking ahead, I am eager to continue my academic journey and explore advanced topics in web development. I am also excited about the prospect of internships and professional experiences that will allow me to further refine my skills and make meaningful contributions to real-world projects.</p>
            </div>
        </div>
    )
}

export default About