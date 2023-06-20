import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A192F] text-gray-300'>
        <div className ='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-600'>About</p>
                </div>
                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>
                            Hi. I'm Lance, Welcome to my portfolio. Please scroll around.
                        </p>
                    </div>
                    <div>
                    I have some decent knowledge in software development, video editing, and 3D modeling. 
                    I excel at crafting user-friendly websites, transforming raw footage into captivating videos, and creating realistic 3D models. 
                    With a passion for digital innovation, I'm always ready to take on new challenges and turn visions into stunning digital masterpieces. 
                    Let's collaborate and bring your ideas to life!
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About