import React from 'react';

const Statistic = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 row-gap-8 md:grid-cols-3">
          
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Viewer
            </p>
          </div>
        </div>
      </div>
    );
  };

export default Statistic;