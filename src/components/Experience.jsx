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
      detail: `Developed software solutions to analyze DNA data using object-oriented programing in Python as the primary language. 
      Performed statistical analysis, data preprocessing and data visualization on genomic data using data structures and data science libraries including Pandas, NumPy, SciPy and Matplotlib.
      Collaborated with the team to refactor existing codebase, applying OOP design to improve code organization and scalability as well as using Git for version control and collaboration`
    },
    {
      id: 2,
      n: 'Data Engineer',
      loc: 'Bubble Insurance Inc.',
      date: 'Jan 2021 to Jun 2021',
      detail: `Independently preprocessed datasets of millions of entries using the NumPy, pandas and NLTK python libraries.
      Utilized TensorFlow and matplotlib for data visualization and analysis.
      Applied programming techniques and advanced data structures and algorithms to optimize and improve the application.
      Using Agile methodology to work with a team on software development.`
    }
  ]

  const [modal, setModal] = useState(false);
  const [selectitems, setSelectedItems] = useState(null);

  const handleItemsClick = (title,detail) => {
    setSelectedItems({title, detail})
  };

  const toggelModal = () => {
    setModal(!modal)
  }

  const close = () => {
    setModal(false);
    setSelectedItems(null);
}
  return (
    <div name='experience' className='h-screen items-center bg-gradient-to-b from-blue-800 to-gray-200 lg:bg-gradient-to-r from-blue-800 to-white md:h-screen sm:h-screen text-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <div className='p-20 h-screen bg-blue-600 lg:rounded-r-3xl md:w-fit lg:w-fit'>
          <div className='pb-8 '>
            <p className='text-4xl font-bold font-signature inline border-b-4'>Experience </p>  
            {
              exp.map((exp) => (
                <ul>
                  <li key={exp.id} onClick={() => handleItemsClick(exp.n, exp.detail)} className='text-xl text-wrap text-white pt-10 p-2 hover:scale-105 duration-200 hover:text-black'>
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
          <div>
            {
              selectitems && (
                <Modal onClose={close} visible={toggelModal} title={selectitems.title} detail={selectitems.detail}/>
              )}
            
          </div>
      </div>
    </div>
  )
}

export default Experience