import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { CiEdit } from "react-icons/ci";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
   <div>
    <Helmet>
        <title>Profile</title>
    </Helmet>
     <div className="min-h-[calc(100vh-107px)] flex justify-center items-center">
      <div className="flex relative flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        
          <div className="avatar flex justify-center items-center">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
          <Link to={`/updateProfile`} title="Edit" className="absolute top-4 right-4 bg-primary p-1 cursor-pointer rounded-full">
            <CiEdit className="text-white" size={20} />
          </Link>
       
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default MyProfile;

