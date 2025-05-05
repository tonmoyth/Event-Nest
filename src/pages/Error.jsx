import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="max-w-md text-center">
            <h2 className="mb-6 font-extrabold text-9xl dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold mb-8 md:text-3xl">
            Not found page
            </p>
            <Link
            to={`/`}
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              Back to homepage
            </Link>
          </div>
       
      
    </div>
  );
};

export default Error;
