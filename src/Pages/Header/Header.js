import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll'


import './Header.css'

const Header = () => {
  
    
    return (
      <div className="header">
        <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <Link to="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                  <svg
                    className="w-10 h-10 text-deep-purple-900"
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
              </Link>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6  text-center font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  <span className=" inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className=" top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="">We find after years of struggle</span>
                  </span>{' '}
                   that we do not take a trip But a trip takes us.
                </h2>
                <p className="text-base text-center text-indigo-100 md:text-lg">
                “It's the everyday experiences we encounter along the journey to who we wanna be that will define who we are when we get there.”
                </p>
              </div>
              <div className='text-center'>
                <ScrollLink
                  to="content"
                  spy={true}
                  smooth={true}
                  duration={800}
                  className="inline-flex cursor-pointer items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md  bg-sky-500 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                >
                  Get started
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Header;