import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from '../hooks/useDisclose'
import Modal from './Modal'
import { toast } from 'react-toastify'

const ContactCard = ( {contact} ) => {
  const {onOpen, onClose, isOpen} = useDisclouse();
  
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      toast.success('Contact deleted successfully')
    } catch (error) {
      console.log(error);  
    }
  }

  return (
    <>
    <div className='mb-2'>
         <div 
           key={contact.id}
           className='bg-green rounded-lg flex items-center justify-between p-2'>
            <div className='flex gap-2'>
              <HiOutlineUserCircle  onClick={Modal} className='text-4xl text-white'/>
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
          <AddAndUpdateContact 
           contact={contact} 
           isUpdate
           isOpen={isOpen} 
           onClose={onClose}/>
    </div>
    </>
  )
}

export default ContactCard