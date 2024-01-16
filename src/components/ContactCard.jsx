import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import { useDisclosure } from '@chakra-ui/react'
import { toast } from 'react-toastify'


const ContactCard = ( {contact} ) => {
  const {onOpen, onClose, isOpen} = useDisclosure();
  
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      toast.success('Contact deleted successfully',{
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",})
    } catch (error) {
      console.log(error);  
    }
  }

  return (
    <>
         <div 
           key={contact.id}
           className='bg-green rounded-md flex items-center justify-between p-3'>
            <div className='flex gap-2'>
              <HiOutlineUserCircle className='text-4xl text-white'/>
                <div className=''> 
                  <h2 className='text-white font-medium'>{contact.name}</h2>
                  <p className='text-white text-sm'>{contact.email}</p>
                </div>
            </div>
            <div className='flex gap-2'> 

              <RiEditCircleLine 
               onClick={onOpen} 
               className='text-dark-yellow text-2xl cursor-pointer'/>

              <IoMdTrash 
               onClick={() => deleteContact (contact.id)} 
               className='text-red text-2xl cursor-pointer'/>

            </div>
          </div>
          {isOpen && (
            <AddAndUpdateContact 
            contact={contact} 
            isUpdate
            isOpen={isOpen} 
            onClose={onClose}
            />
           )}    
    </>
  )
}

export default ContactCard