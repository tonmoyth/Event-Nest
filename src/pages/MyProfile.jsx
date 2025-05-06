import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { CiEdit } from "react-icons/ci";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="min-h-[calc(100vh-107px)] flex justify-center items-center">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <div className="relative">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
          <button className="absolute top-0 right-0 bg-primary p-1 cursor-pointer rounded-full">
            <CiEdit className="text-white" size={20} />
          </button>
        </div>
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
  );
};

export default MyProfile;
