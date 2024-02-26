import React from 'react'
import heroimg from '../assets/heroImage.png';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-gray-900  to-gray-600 lg:bg-gradient-to-r items-center">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center
        justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-5xl sm:text-7xl font-bold font-signature text-white'>
                    Amey Athavia</h2>
                <p className='text-gray-400 py-4 max-w-md'>
                    Software Engineer, actively looking for a Full-time opportunity.

                </p>
                <div className='flex flex-row space-x-5'>
                    <Link to='projects' smooth duration={500}
                    className='group text-white w-fit px-4 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-red-700 to-orange-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer'>
                        Projects 
                        <span className='group-hover:rotate-90 duration-200'>
                            <MdKeyboardDoubleArrowRight size={30} className='ml-1'/>
                        </span>
                    </Link>

                    <button className='group text-white w-fit px-6 py-3 my-2
                    flex p-15 items-center rounded-md bg-gradient-to-r from-red-700 to-orange-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer'>
                        
                        <a href="./Amey_Athavia_new.pdf" className='flex w-fit my-2 max-w-2xl' download={true}>
                        Resume <BsFillPersonLinesFill size={30} className='ml-2'/>
                        </a>                        
                    </button>
                </div>
            </div>
            <div>
                <img src={heroimg} alt="My profile"
                className='rounded-full mx-auto w-6/12 md:max-w-full border-white border-8' />
            </div>
        </div>
    </div>
  )
}

export default Home

