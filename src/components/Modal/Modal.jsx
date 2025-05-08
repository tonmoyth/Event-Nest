import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiSquareRemove } from "react-icons/ci";

const Modal = () => {

    const [textValue,setTextValue] = useState('');
        const [email , setEmail] = useState('')
        
    
        const handleModal = (e) => {
            e.preventDefault()
            toast.success('successfully')
            setTextValue('');
            setEmail('')
        }


  return (
   <div>
    
     <dialog id="my_modal_1" className="modal relative">
      
      <div className="modal-box">
      <h1 className="text-2xl text-center font-bold mb-4">Ticket</h1>
        <form onSubmit={handleModal} className="space-y-4">
          <input required value={textValue}
            onChange={(e)=>setTextValue(e.target.value)} type="text" placeholder="Enter Your Name" className="py-2 rounded-xl px-2 w-full border" /><br />
          <input required value={email}
              onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email" className="py-2 rounded-xl px-2 w-full border" /><br />
         
          <div className="flex justify-center items-center">
          <button
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Submit
          </button>
          </div>
        </form>

        <div className="modal-action absolute -top-4 right-4">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button ><CiSquareRemove className="text-primary cursor-pointer" size={30}/></button>
          </form>
        </div>
      </div>
    </dialog>
   </div>
  );
};

export default Modal;
