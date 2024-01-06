import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({isOpen, onClose, children}) => {
  return createPortal(
<> 
    {isOpen && (
    
    <div  
     className=' grid place-items-center z-40 h-screen w-screen absolute top-0 
     backdrop-blur'
    >
      <div className='relative z-50 min-h-[250px] mix-w-[80%] bg-white p-1 m-auto'> 
        <div className='flex justify-end'>
          <AiOutlineClose 
            onClick = {onClose} 
            className='text-2xl self-end'/>
         </div>
         {children}
      </div> 
     </div>
    )}    
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal 