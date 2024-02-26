import React from 'react'

const Modal2 = ({visible, data, onClose}) => {
    const handleonclose = (e) =>{
        if(e.target.id === 'container')onClose();
    };



    if (!visible) return null;

  return (
    
    <div id='container' onClick={handleonclose} className='fixed inset-0 bg-opacity-30 bg-gray-600 backdrop-blur-sm
    flex justify-center items-center lg:'>
        <div className='bg-gray-300 w-4/5 shadow-md mx-auto items-center justify-center h-fit lg:h-1/2 lg:w-1/2 rounded-xl text-black p-2'>
            <p className='text-4xl lg:px-16 font-bold '>{data.title}</p>            
            <ul>
              <li className='py-6'>{data.detail}</li>
              <li><h2 className='font-bold'>{`Tech Stack: ${data.techstack}`}</h2></li>
            </ul> 
            <div className='flex items-center justify-center'>
              <button className='text-xl px-6 py-2 m-2 duration-200 hover:scale-105' onClick={onClose}>&times;</button>
            </div>
        </div>
        
        
    </div>
    
  )
}

export default Modal2