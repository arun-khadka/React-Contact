import Modal from './Modal'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import { db } from '../config/firebase'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape(
  {
  name: Yup.string().required('Name required'), 
  email: Yup.string().email('Invalid Email').required('Email is Required    '),
});

const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

  const addContacts = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);   
    }
  }

  const updateContacts = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);   
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}> 
        <Formik 
          validationSchema={contactSchemaValidation}
          initialValues={ 
            isUpdate ?
            {
              name: contact.name,
              email: contact.email,
            } : 
            {
              name: '',
              email: '',
            }
          }
          onSubmit={(values) => {
            console.log(values);
            isUpdate ? 
              updateContacts(values, contact.id) 
            : 
              addContacts(values);
          }} 
        >
            <Form className='flex flex-col gap-3'>
              <div className='flex flex-col pl-6'>
                  <label htmlFor="name">Name</label>
                  <Field name='name' className='border h-10 w-[90%] rounded-md pl-2'/>
                  <div className='text-xs text-red-500'>
                    <ErrorMessage name='name'/>
                  </div>
              </div>
              <div className='flex flex-col pl-6'>
                  <label htmlFor="email">Email</label>
                  <Field name='email' className='border h-10 rounded-md pl-2 w-[90%] text-md'/>
                  <div className='text-xs text-red-500'>
                    <ErrorMessage name='email'/>
                  </div>
              </div>
              <button className='border mt-3 bg-green text-white h-10 w-[40%] rounded-md self-end items-center mr-7 '>
                { isUpdate ? 'update' : 'add' }  Contact
              </button>
            </Form>
        </Formik>
      </Modal>
    </div>   
  )
}

export default AddAndUpdateContact