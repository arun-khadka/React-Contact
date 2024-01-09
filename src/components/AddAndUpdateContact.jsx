import Modal from './Modal'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import { db } from '../config/firebase'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import * as Yup from 'yup'


const contactSchemaValidation = Yup.object().shape({
  name: Yup.string()
    .required('Name required')
    .transform((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }),

  email: Yup.string()
   .email('Invalid Email')
   .required('Email is Required')
});


const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

  const addContacts = async (contact) => {
    try {
        const capitalizedContact = {
          ...contact,
          name: contact.name.charAt(0).toUpperCase() + contact.name.slice(1),
          email: contact.email.toLowerCase(),
        };

      
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, capitalizedContact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);   
    }
  }

  const updateContacts = async (values, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, {
        name: values.name,
        email: values.email,
      });
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
              updateContacts(values, contact.id) : addContacts(values);
            }} 
        >
            <Form className='flex flex-col gap-4 pr-4'>
              <div className='flex flex-col pl-5'>
                  <label htmlFor="name">Name</label>
                  <Field name='name' className='border h-10 w-[100%] rounded-md pl-2'/>
                  <div className='text-xs text-red'>
                    <ErrorMessage name='name' className='flex'/>
                  </div>
              </div>
              <div className='flex flex-col pl-5'>
                  <label htmlFor="email">Email</label>
                  <Field name='email' className='border h-10 rounded-md pl-2 w-[100%] text-md'/>
                  <div className='text-xs text-red'>
                    <ErrorMessage name='email'/>
                  </div>
              </div>
              <button className='border mt-2 bg-green text-white h-10 w-[92%] rounded-md self-end items-center'>
                { isUpdate ? 'Update' : 'Add' }  Contact
              </button>
            </Form>
        </Formik>
      </Modal>
    </div>   
  )
}

export default AddAndUpdateContact