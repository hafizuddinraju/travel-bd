import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ContentItem from '../../components/ContentItem/ContentItem';
import { AuthDataContext } from '../../UseContext/AuthContext';


const Content = () => {
  const {data, spinner} = useContext(AuthDataContext);
  if(spinner){
    return <div className="w-16  h-16 border-4 border-dashed text-center rounded-full animate-spin dark:border-violet-400"></div>
  }
  
    return (
      <div id='content' className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
        <div className=" mb-6 md:mb-8">
          <h2 className="mb-5 font-sans text-center  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6">
            <span className="inline-block text-center mb-1 sm:mb-4">
            The Most Beautiful Places
              <br className="hidden md:block" />
              In Bangladesh
            </span>
            <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
          </h2>
          
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
          {
            data?.slice(0, 3).map(place => 
              

                <ContentItem key={place._id} place={place} ></ContentItem>
              )
          }
          
          
          
          
        </div>

        <Link to='/places'>
              <div className='text-center mt-3'>
                <button className='btn btn-sm border-none bg-sky-500 hover:bg-sky-700'>See All</button>
              </div>
              </Link>
        
      </div>
    );
  };

export default Content;