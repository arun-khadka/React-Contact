import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import {db} from "./config/firebase"
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclose from './hooks/useDisclose'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactCard from './components/ContactCard'
import NotFoundContact from './components/NotFoundContact'

const App = () => {
const [contacts, setContacts] = useState([]);

const {onOpen, onClose, isOpen} = useDisclose();

useEffect(() => {
  const getContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        setContacts(contactLists);
        return contactLists;
      }); 
    } catch (error) {
      console.log(error);  
    }
  }
  getContacts();
}, [])

const filterContacts = (e) => {
  const value = e.target.value;
  const contactsRef = collection(db, "contacts");

      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });

        const filteredContacts = contactLists.filter((contact) => 
          contact.name.toLowerCase().includes(value.toLowerCase())
        )
        setContacts(filteredContacts);
        return filteredContacts;
      });


      
}

  return (
  <>
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar/>
      <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow'>
          <FiSearch className='text-white text-3xl absolute ml-1'/>
          <input 
           type="text" 
           onChange={filterContacts}
           className='h-10 pl-9 bg-transparent text-white border-white rounded-md border flex-grow '
          />
        </div>

         <AiFillPlusCircle 
           onClick={onOpen}
           className='text-5xl cursor-pointer text-white '
         />
      </div>
      <div className='mt-3 flex flex-col gap-3'> 
        {contacts.length >= 0 ? (
        <NotFoundContact/>
        ) : (
         contacts.map((contact) => (
         <ContactCard key={contact.id} contact={contact}/>
        ))
      )}
      </div>
    </div>
    <ToastContainer position='bottom-center'/>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
  </>
  )
}

export default App