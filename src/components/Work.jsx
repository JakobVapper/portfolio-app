import React from 'react';
import Project1 from '../media/project1.png'
import Project2 from '../media/project2.png'
import Project3 from '../media/project3.png'

const Work = () => {
    return (
        <div className='pt-[200px] flex flex-col place-content-center'>
            <h1 className='flex place-content-center bg-gradient-to-r from-fuchsia-700 to-indigo-600 bg-clip-text text-transparent text-7xl font-bold'>Work</h1>
            <h2 className='flex place-content-center bg-gradient-to-r from-indigo-600 to-fuchsia-700 bg-clip-text uppercase text-transparent text-2xl font-bold tracking-[10px] pt-[10px]'>My Recent Works</h2>
            <div className='lg:flex lg:flex-row md:flex md:flex-col place-content-center gap-10 pt-[80px]'>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <div className='bg-cover h-[200px] w-[400px]' style={{backgroundImage: `url(${Project1})`}} ></div>
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-700 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
                    <a href="https://github.com/JakobVapper/tailwind-project2">
                            <button className='absolute text-center rounded-lg px-4 py-3 m-2 hover:bg-white hover:text-gray-700 font-bold text-lg'>Code</button>
                    </a>
                </div>  
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img className='h-[200px]' src={Project2} alt="Apple Remade Static Website Picture" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-700 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
                </div>
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img className='h-[200px]' src={Project3} alt="PHP Bookstore Website Picture" />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-700 opacity-0 transition duration-300 ease-in-out hover:opacity-70"></div>
                </div>
            </div>
            <div className='flex place-content-center pt-[30px]'>
                <button className='border-white border-2 rounded-md text-white w-40 h-8 hover:bg-white hover:text-black'>See all of my work</button>
            </div>
        </div>
    )
}

export default Work