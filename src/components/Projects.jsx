import { useState } from "react";
import React from 'react'
import Modal2 from "./Modal2";

const Projects = () => {
  
  const project = [
      {
        id: 1,
        n: 'Object Detection, Tracking in Video Surveillance',
        detail:`Led the development for this project and was responsible for applying the
        machine learning algorithm and using Python, TensorFlow, SciPy, OpenCV,
        OOP to concepts of inheritance and polymorphism.`,
        techstack: 'Python, Tensorflow, Pandas, Jupyter',
      },
      {
        id: 2,
        n:' WebApp to post and read Blogs',
        detail:`Introduction and usage to Node JS, Express apps, use of MongoDB to store and
        retrieve data.`,
        techstack: 'JavaScript, NodeJS, Express Apps, HTML, CSS, MongoDB'
      },
      {
        id: 3,
        n:' Portfolio',
        detail:'Using ReactJS and Tailwind CSS to develop a reactive Portfolio website.',
        techstack: 'JavaScript, ReactJS, Tailwind CSS, HTML',
      },
      {
        id: 4,
        n: 'Modified Morris Nine Mens using game trees',
        detail: `Developed a modified version of Nine men’s Morris game using game trees,
        minimax algorithm as well as AB search trees and employed the use of
        object-oriented programming in python.`,
        techstack: 'Python, Git',
      },
      {
        id: 5,
        n: 'Booking and management system',
        detail:`Transformed a robust management system capable of efficiently storing, retrieving, and seamlessly displaying historical bookings while empowering users with cutting-edge functionality to secure train or flight reservations.`,
        techstack: 'Java, SQL',
      },
      {
        id: 6,
        n: 'Semantic Relation Classification',
        detail:`Developed and executed a model using NLP, aimed at mastering sentence comprehension, particularly those embedded with intricate relationship tags.
        Utilized a Bi-LSTM model to develop a robust framework for predicting semantic relations within diverse sentence contexts and classify them based on the identified classes.`,
        techstack: 'Python, NLTK, Git',
      }
  ];

  const [modal, setModal] = useState(false);
  const [selectitems, setSelectedItems] = useState(null);

  const handleItemsClick = (title,detail, techstack) => {
    setSelectedItems({title, detail, techstack})
  };

  const toggelModal = () => {
    setModal(!modal)
  }

  const close = () => {
    setModal(false);
    setSelectedItems(null);
}

  return (

    <div name='projects' className='h-screen items-center bg-gray-800 md:h-screen sm:h-screen text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className='p-12 h-screen lg:rounded-r-3xl md:w-fit lg:w-fit'>
          <div className='pb-8 h-full bg-amber-500 rounded-3xl shadow-sm shadow-gray-500 items-center p-10'>
            <p className='text-4xl font-bold font-signature inline border-b-4'>Projects </p>  
            <p className='pt-5 font-bold'>Click for more details</p>
            {
              project.map((project) => (
                <ul>
                  <li key={project.id} onClick={() => handleItemsClick(project.n, project.detail, project.techstack)} className='text-base text-wrap text-white md:pb-10 pt-5 p-1 hover:scale-105 duration-200 hover:text-black cursor-pointer'>
                    {project.n}
                  </li>
                </ul>
              ))
            }
          </div>
        </div>
          <div className='md:hidden'>
            {
              selectitems && (
                <Modal2 onClose={close} visible={toggelModal} data={selectitems}/>
              )}
            
          </div>
          <div className='py-28 px-10 items-center hidden md:block'>
            {
              selectitems &&(
              <div className='justify-center items-center border-4 border-amber-500 text-white p-10 h-fit'>
              <h1 className='text-center text-2xl font-bold inline border-b-4 border-white'>{selectitems.title}</h1>
              <ul>
                <li className='py-6'>{selectitems.detail}</li>
              </ul>
              <p><h2 className='font-bold'>{`Tech Stack: ${selectitems.techstack}`}</h2></p>
            </div>)}
          </div>
      </div>
      
    </div>
  )
}

export default Projects