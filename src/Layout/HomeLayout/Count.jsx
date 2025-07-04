import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Count = () => {

  const {ref,inView} = useInView()

    return (
        <div className="grid py-8 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-white bg-primary rounded-full sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            
            <h6 ref={ref} className="text-3xl font-bold text-deep-purple-accent-400">
            {inView && <CountUp start={1} duration={2} end={253}></CountUp>}
            </h6>
              
            <p className="mb-2 font-bold text-md uppercase">victory awards</p>
            
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8  text-white bg-primary rounded-full sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {inView && <CountUp start={1} duration={2} end={2687}></CountUp>}
            </h6>
            <p className="mb-2 font-bold text-md uppercase">active and & energetic members</p>
            
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8  text-white bg-primary rounded-full sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {inView && <CountUp start={1} duration={2} end={149}></CountUp>}
            </h6>
            <p className="mb-2 font-bold text-md uppercase">event and challenges</p>
            
          </div>
        </div>
     
    );
};

export default Count;