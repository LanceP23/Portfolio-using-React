import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className ='w-full h-screen bg-[#0A192F] flex justify-center items-center p-4' >
        <form method = 'POST' action ="https://getform.io/f/6a1d2b7e-588c-4ad7-ab07-b71927e63539" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className = 'text-4xl font-bold inline border-b-4 border-blue-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or compose an email - biggyfastboi@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2'type="text" placeholder='Name' name ='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name ='email' />
            <textarea className='bg-[#ccd6f6] p-2' name ="message" id="" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Hit Me Up!</button>
        </form>

    </div>
  )
}

export default Contact