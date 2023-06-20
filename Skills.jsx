import React from 'react'
import Html from '../assets/HTMLLogo.png'
import Css from '../assets/CSSLogo.png'
import PremierePro from '../assets/Adobe_Premiere_Pro_CC_icon.svg-removebg-preview.png'
import JavaScript from '../assets/JSLogo.png'
import Blender from '../assets/BlenderLogo.png'
import CSharp from '../assets/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo-removebg-preview.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0A192F] text-gray-300'>
        {/*Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills & Experience</p>
                <p className='py-4'>//These are the languages and softwares that I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PremierePro} alt="PremierePro icon" />
                    <p className='my-4'>PREMIERE PRO</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Blender} alt="Blender icon" />
                    <p className='my-4'>BLENDER</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSharp} alt="CSharp icon" />
                    <p className='my-4'>C#</p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Skills