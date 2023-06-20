import React from 'react'
import Interstellar from '../assets/Interstellar.png'
import Noli from '../assets/noli.png'
import Filtra from '../assets/0078.png'
import BirthdayCalendar from '../assets/BirthdayMonthCalendar.png'

const Projects = () => {
  return (
    <div name ='projects' className='w-full md:h-screen text-gray-300 bg-[#0A192F]'>
        {/*Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 boreder-blue-600'>Projects</p>
                <p className='py-6'>//Some of the projects I've/We've worked with recently</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage:`url(${Filtra})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover fx */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Filtra: 3d Animation

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://drive.google.com/file/d/1HPxeydDU5lBe7Ymptml1Dt4F7BgvhoVJ/view?usp=drive_link'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Promo Ad Animation
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage:`url(${Noli})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover fx */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Noli Me Tangere

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://caloocansti-my.sharepoint.com/personal/parayno_276446_caloocan_sti_edu_ph/_layouts/15/stream.aspx?id=%2Fpersonal%2Fparayno%5F276446%5Fcaloocan%5Fsti%5Fedu%5Fph%2FDocuments%2Fnoli%20final%2FnoliFinal%5Fv5%2Emp4&ga=1'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Watch the Film
                                </button>
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{backgroundImage:`url(${Interstellar})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/*hover fx */}
                    <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Interstellar: Space Shooter

                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://caloocansti-my.sharepoint.com/personal/godio_275115_caloocan_sti_edu_ph/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fgodio%5F275115%5Fcaloocan%5Fsti%5Fedu%5Fph%2FDocuments%2FENTREP%20INTERSTELLAR1%2FInterstellarLostInSpace12%2Eapk&parent=%2Fpersonal%2Fgodio%5F275115%5Fcaloocan%5Fsti%5Fedu%5Fph%2FDocuments%2FENTREP%20INTERSTELLAR1&ga=1'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Download the Game
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects