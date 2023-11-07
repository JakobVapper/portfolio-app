import React from 'react';
import Portrait from '../media/Portrait.png'

const Home = () => {
    return (
        <div>
            <div className='overflow-hidden min-h-screen bg-black '>
                <div>
                    <h2>Jakob Vapper</h2>
                    <h1>Web developer</h1>
                </div>
                <div className='flex place-content-end'>
                    <img className='h-[85vh]' src={Portrait} alt="Portrait" />
                </div>
            </div>
        </div>
    )
}

export default Home