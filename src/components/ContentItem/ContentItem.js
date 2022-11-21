import React from 'react';
import { Link } from 'react-router-dom';
import {  FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ContentItem = ({place}) => {
  
    const {_id, name, about, picture, price, rating} = place
    return (
        <div>
            <div  aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <PhotoProvider>
          <PhotoView src={picture}>
          <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={picture}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
            
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-xl text-center py-3 font-medium tracking-wide text-white">
                {name}
              </p>
              <div className='flex justify-between justify-center py-2'>
                <p className='font-semibold text-orange-500'>Price : $ {price}</p>
                <p className="text-sm flex items-center font-medium tracking-wide text-white">
                  <small className='flex text-orange-400'>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>

                  </small>
                 
                {rating}
              </p>
              </div>
              <p className="text-sm font-sm text-justify tracking-wide text-white">
              {
            about.length > 140 ?
            <small> {about.slice(0, 140) + '...'} <Link className='text-sky-700' to={`/place/${_id}`}>Read More</Link></small>
            :
            <>{about}</>
            }
              </p>
              <div className='text-center'>
                <Link to={`/place/${_id}`}>
          <button className='btn btn-sm bg-sky-500 hover:bg-sky-700'>View Details</button>
                </Link>
          </div>
            </div>
          </div>
          
           </div>
            
        </div>
    );
};

export default ContentItem;