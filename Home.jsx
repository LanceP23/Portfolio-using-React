import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'
import{Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0A192F]'>
        {/*Container */}
        <div className ='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className ='text-blue-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-blue-200'>Lance Pantaleon</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer/Video Editor/Graphic Designer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm an aspiring software developer who also has some knowledge with 3d modelling and video editing, 
                I'm currently trying to get better at designing and developing responsive websites</p>
            <div>
                <button className ='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'><Link to="projects" smooth={true}  duration={500}>
          View Work
        </Link> 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' /> 
                </span>
                </button>
            </div>
        </div>
        

    </div>
  )
}

export default Home