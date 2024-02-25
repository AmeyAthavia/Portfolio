import React from 'react'
import css from '../assets/css.png';
import html from '../assets/html.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import reactImage from '../assets/react.png';
import javascript from '../assets/javascript.png';


export const Skills = () => {

    const skill = [
        {
          id: 1,
          src: html,
          title: 'HTML',
          style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 5,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: tailwind,
            title: 'HTML',
            style: 'shadow-sky-400'
        }
    ];

  return (
    <div name='skills' className='w-full text-white bg-gray-800 md:h-screen sm:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='font-signature text-4xl font-bold inline border-b-4'>Skills</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 px-8 sm:px-0'>
                
                {
                    skill.map(({id, src, title, style}) => (
                        <div key={id} 
                        className={`rounded-lg shadow-md hover:scale-105 duration-200 py-2 ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }

            </div>
        </div>
    </div>
  )
}
