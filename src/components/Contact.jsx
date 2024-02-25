import React from 'react'

const Contact = () => {
  return (
    <div name='contact me' className='w-full p-4 text-white h-screen bg-gray-800 md:h-screen sm:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold font-signature inline border-b-4'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/Qe1gXjbJ"
                method='POST' 
                className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter name' 
                    className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'/>
                    
                    <input type="email" name='email' placeholder='Enter email' 
                    className='p-2 my-4 bg-transparent border-2 text-white rounded-md focus:outline-none'/>

                    <textarea name="message" rows="10" 
                    placeholder='Enter message....'
                    className='p-2 bg-transparent border-2 text-white rounded-md focus:outline-none'></textarea>
                <button className='text-white w-fit px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md bg-gradient-to-r from-red-700 to-orange-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact