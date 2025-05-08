import React, { useState } from "react";
import toast from "react-hot-toast";

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
    
     <dialog id="my_modal_1" className="modal">
      
      <div className="modal-box">
      <h1 className="text-2xl text-center font-bold mb-4">Buy Ticket</h1>
        <form onSubmit={handleModal} className="space-y-4">
          <input required value={textValue}
            onChange={(e)=>setTextValue(e.target.value)} type="text" placeholder="Enter Your Name" className="py-2 rounded-xl px-2 w-full border" /><br />
          <input required value={email}
              onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email" className="py-2 rounded-xl px-2 w-full border" /><br />
         
          <button
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Submit
          </button>
        </form>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
   </div>
  );
};

export default Modal;
