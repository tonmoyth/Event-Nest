import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const {userUpdateProfile,setUser,user} = useContext(AuthContext);
    const [name,setName] = useState('');
    const [photo,setPhoto] = useState('')

    const handleUpdateFrom = (e) => {
        toast.loading('Loading...',{id:'updateProfile'})
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const updateData = {
            displayName:name,
            photoURL: photo
        }
        userUpdateProfile(updateData)
        .then(()=>{
            setUser({...user,...updateData});
            setName('');
            setPhoto('');
            toast.success('Success',{id:'updateProfile'});
        })
        .catch(error => {
            toast.error(error.message,{id:'updateProfile'});
        })

    }
  return (
    <div className="min-h-[calc(100vh-108px)] flex justify-center items-center">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>

      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl text-center mb-8">Update Your Profile</h1>
        <form onSubmit={handleUpdateFrom} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Your Name
            </label>
            <input
            value={name}
            required
            onChange={(e)=>setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 border py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
            value={photo}
            required
            onChange={(e)=>setPhoto(e.target.value)}
              type="text"
              name="photo"
              id="photo"
              placeholder="Your Photo"
              className="w-full px-4 border py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            
          </div>
          <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            Save
          </button>
        </form>
        
        
        
      </div>
    </div>
  );
};

export default UpdateProfile;
