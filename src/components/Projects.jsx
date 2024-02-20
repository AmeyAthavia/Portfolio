import React from 'react'

const Projects = () => {
  
  const project = [
      {
        id: 1,
        n: 'Project1'
      },
      {
        id: 2,
        n:' Project2'
      },
      {
        id: 3,
        n:' Project3'
      },
      {
        id: 4,
        n: 'Project4'
      },
      {
        id: 5,
        n: 'Project5'
      },
      {
        id: 6,
        n: 'Project6'
      }
  ];

  return (

    <div name='projects' className='w-full text-white bg-gradient-to-b from-blue-800 to-gray-200 lg:bg-gradient-to-r from-blue-800 to-white md:h-screen sm:h-screen'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold font-signature inline border-b-4'>Projects</p>
          <p className='py-6'>Projects I have worked on</p>
        </div>

        <div key='id' className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0'>
        {
          project.map(({id, n}) => (
            
              <div className='shadow-md text-center shadow-gray-500 rounded-lg bg-gray-600 justify-center'>
                <div className='rounded-lg bg-cyan-300 text-center text-gray-700 font-bold hover:scale-105 duration-200'>
                  <p className='text-3xl p-2'>
                    {n}
                  </p>
                </div>
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
           
          ))
        }
       </div>
        
      </div>
      
    </div>
  )
}

export default Projects