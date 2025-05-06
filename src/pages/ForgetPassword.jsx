import React, { useContext, useRef } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";

const ForgetPassword = () => {
    const {email,resetPassword} = useContext(AuthContext);
    const ref = useRef();

    const handleReset = () => {
        const email = ref.current.value;
        resetPassword(email)
        .then(()=>{
            window.open('https://mail.google.com','_blank');
          })
          .catch(error => {
            toast.error(error.message,{id: 'reset'})
          })
    }
  return (
    <div className="min-h-[calc(100vh-107px)] flex justify-center items-center">
      <Helmet>
        <title>Forget Password</title>
      </Helmet>
      <div className="flex flex-col rounded-xl w-full max-w-md p-12 space-y-4 text-center dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-3xl font-semibold">Reset Your Password</h1>

        <form noValidate="" className="space-y-4">
          <div>
            
            <input
            defaultValue={email}
            ref={ref}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>

          <button
          onClick={handleReset}
            type="button"
            className="px-8 py-3 space-x-2 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
