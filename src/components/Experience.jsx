import React from 'react'
import Modal from './Modal'
import { useState } from 'react'

const Experience = () => {

  const exp = [
    {
      id: 1,
      n: 'Research Assistant (SWE)',
      loc: 'Bioinformatics at University of Texas at Dallas',
      date: 'Jun 2023 to Dec 2023',
      detail1: 'Developed software solutions to analyze DNA data using object-oriented programing in Python as the primary language.', 
      detail2: 'Performed statistical analysis, data preprocessing and data visualization on genomic data using data structures and data science libraries including Pandas, NumPy, SciPy and Matplotlib.',
      detail3: 'Collaborated with the team to refactor existing codebase, applying OOP design to improve code organization and scalability as well as using Git for version control and collaboration.',
    },
    {
      id: 2,
      n: 'Data Engineer',
      loc: 'Bubble Insurance Inc.',
      date: 'Jan 2021 to Jun 2021',
      detail1: 'Independently preprocessed datasets of millions of entries using the NumPy, pandas and NLTK python libraries.',
      detail2: 'Utilized TensorFlow and matplotlib for data visualization and analysis. Applied programming techniques and advanced data structures and algorithms to optimize and improve the application.',
      detail3: 'Using Agile methodology to work with a team on software development.',
    }
  ]

  const [modal, setModal] = useState(false);
  const [selectitems, setSelectedItems] = useState(null);

  const handleItemsClick = (title,detail1,detail2, detail3) => {
    setSelectedItems({title, detail1, detail2, detail3})
  };

  const toggelModal = () => {
    setModal(!modal)
  }

  const close = () => {
    setModal(false);
    setSelectedItems(null);
}
  return (
    <div name='experience' className='h-screen items-center bg-gray-800 md:h-screen sm:h-screen text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className='p-10 h-screen lg:rounded-r-3xl md:w-fit lg:w-fit'>
          <div className='pb-8 h-full bg-lime-500 rounded-3xl shadow-sm shadow-gray-500 items-center p-10'>
            <p className='text-4xl font-bold font-signature inline border-b-4'>Experience </p>  
            {
              exp.map((exp) => (
                <ul>
                  <li key={exp.id} onClick={() => handleItemsClick(exp.n, exp.detail1, exp.detail2, exp.detail3)} className='text-xl text-wrap text-white pt-10 p-2 hover:scale-105 duration-200 hover:text-black'>
                    {exp.n}
                    <ul>
                      <li className='px-5 py-5'>{exp.loc}</li>
                      <li className='px-5 pb-5'>{exp.date}</li>
                    </ul>
                  </li>
                </ul>
              ))
            }
          </div>
        </div>
          <div className='md:hidden'>
            {
              selectitems && (
                <Modal onClose={close} visible={toggelModal} data={selectitems}/>
              )}
            
          </div>
          <div className='py-28 px-10 items-center hidden md:block'>
            {
              selectitems &&(
              <div className='justify-center items-center text-white p-10 h-full'>
              <h1 className='text-center text-2xl font-bold inline border-b-4 border-white'>{selectitems.title}</h1>
              <ul>
                <li className='py-6'>{selectitems.detail1}</li>
                <li className='py-6'>{selectitems.detail2}</li>
                <li className='py-6'>{selectitems.detail3}</li>
              </ul>
              <p><h2 className='font-bold'>Tech Stack:</h2></p>
            </div>)}
          </div>
      </div>
    </div>
  )
}

export default Experience