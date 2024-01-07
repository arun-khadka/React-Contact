import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex h-[30vh] justify-center items-center gap-8'>
        <div className='p-10'> 
        <img src="images/contact.svg" alt=""/>
        </div>
        <h2 className='text-white font-semibold text-md m-10 '>No contacts</h2>
    </div>
  )
}

export default NotFoundContact