import React, { useState } from "react";
import toast from "react-hot-toast";

const ReserveForm = () => {
    const [textValue,setTextValue] = useState('');
    const [emil , setEmail] = useState('')
    

    const handleForm = (e) => {
        e.preventDefault()
        toast.success('successfully')
        setTextValue('');
        setEmail('')
    }

  return (
    <div>
        <h1 className="text-3xl text-center mb-5 font-bold">form to reserve a seat</h1>
      <form  onSubmit={handleForm} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Enter Your Name
            </label>
            <input
            value={textValue}
            onChange={(e)=>setTextValue(e.target.value)}
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter Your Name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Enter Your Email
              </label>
              
            </div>
            <input
            value={emil}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
          Reserve Seat
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
