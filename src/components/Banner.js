import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Banner() {
  return (
    <div className='bg-gray-900 py-8'>
        <div className='text-white font-bold justify-center'>
            <h1 className='text-4xl mt-8'>ANDREW 
                <span className='text-white'> RANSOM</span>
            </h1>
            <div className="text-2xl font-bold">
                <span className="text-white">I AM A </span>
                <TypeAnimation className='text-green-300' sequence={[
                    'BUISINESS PRO',
                    2000,
                    'DEVELOPER',
                    2000,
                    'DESIGNER',
                    2000,
                ]}/>
                <div className='flex justify-center items-center gap-3'>
                <button className='bg-green-300 rounded-full text-gray-900 text-sm py-2 px-4 mt-2'>Contact</button>
                    <a>
                        <AiFillGithub/>
                    </a>
                    <AiFillLinkedin/>
                </div>
            </div>
        </div>
    </div>
  )
}
