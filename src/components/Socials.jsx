import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md' 

const Socials = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
                ),
                href: 'https://linkedin.com/in/amey-athavia/',
        },
        {
            id: 2,
            child: (
                <>
                GitHub<FaGithub size={30}/>
                </>
                ),
                href: 'https://github.com/AmeyAthavia',
        },
        {
            id: 3,
            child: (
                <>
                Mail<MdOutlineMail size={30}/>
                </>
                ),
                href: 'mailto:athavia.amey@gmail.com',
                
        }
    ]

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            {links.map(({id, child, href, style}) => (
                <li key={id} className="flex justify-between w-40 h-14 bg-red-500 px-4 items-center ml-[-100px] hover:rounded-lg duration-200 hover:ml-[-10px]">
                    <a href={href} className='flex justify-between items-center w-full text-white'
                    targer='_blank' 
                    rel='noreferrer'>
                    {child}
                                       
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Socials