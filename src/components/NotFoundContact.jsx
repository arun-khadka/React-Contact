import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex h-[20%] justify-center flex-col items-center '>
        <div className='p-10 m-20'> 
        <img src="images/contact.svg" alt=""/>
        </div>
        <h2 className='text-white font-semibold text-md m-auto '>No contacts found</h2>
    </div>
  )
}

export default NotFoundContact