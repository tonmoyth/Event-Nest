import React, { useContext, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../Provider/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const {userSignUp,userLoginAndSignInGoogle,userLoginAndSigninGithub} = useContext(AuthContext);
    const [eyeShow,setEyeShow] = useState(false)
    console.log(eyeShow)
    

    const handleForm = (e) => {
        toast.loading('loading',{id:'signup'})
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(!/[A-Z]/.test(password)){
            return toast.error('Must have an Uppercase letter in the password', {id:'signup'})
        }else if (!/[a-z]/.test(password)){
            return toast.error('Must have a Lowercase letter in the password ', {id:'signup'})
        }else if(password.length < 6){
            return toast.error('Length must be at least 6 character ', {id:'signup'})
        }else{
            userSignUp(email,password)
        .then(result => {
            console.log(result)
            toast.success('successfully sign up', {id:'signup'})
        })
        .catch(error => {
            toast.error(error.message, {id:'signup'})
        })
        }
    }

    const signupGoogle = () => {
        userLoginAndSignInGoogle()
        .then(result => {
            console.log(result)
            toast.success('success',{id:'signup'})
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message,{id:'signup'})

        })
    }
    const signupGithub = () => {
        userLoginAndSigninGithub()
        .then(result => {
            console.log(result)
            toast.success('success',{id:'signup'})
        })
        .catch(error => {
            console.log(error)
            toast.error(error.message,{id:'signup'})
        })
    }

  return (
    <div className="min-h-[calc(100vh-107px)]">
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <form onSubmit={handleForm} className="space-y-6">
            {/* name */}
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Enter Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* photo url */}
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-gray-600">
              Enter Your Photo Url
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Your Photo Url"
              className="w-full px-4 border py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          {/* email */}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Enter Your Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <div className="relative">
            <input
              type={eyeShow ? "text" : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 border py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            
            />
            <p onClick={()=>setEyeShow(!eyeShow)} className="absolute right-4 top-3">
                {eyeShow ? <FaEyeSlash size={20}/> : <FaEye size={20} />}
            </p>
            </div>
          
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={signupGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          
          <button onClick={signupGithub} aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link
          to='/login'
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            <span className="text-blue-700 font-bold">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
