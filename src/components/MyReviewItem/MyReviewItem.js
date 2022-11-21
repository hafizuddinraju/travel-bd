import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { GrUpdate } from 'react-icons/gr';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewItem = ({find,handleUpdate, handleDelete}) => {
    
    const{userEmail,place_name,review, _id,user_uid} = find

    
    return (
        <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
                
                <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {place_name}
                    </p>
                </div>
            </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
                {review}
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap">
                {userEmail? userEmail: user_uid}
            </p>
        </td>
        
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <Link to={`/update/${_id}`}>
            <span onClick={()=>handleUpdate(_id)} className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                </span>
                <span className="relative text-2xl">
                    <GrUpdate></GrUpdate>
                </span>
            </span>
            </Link>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <span onClick={()=>handleDelete(_id)} className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                </span>
                <span className="relative text-red-500 text-2xl">
                    <MdDeleteForever></MdDeleteForever>
                </span>
            </span>
        </td>
        
    </tr>
    );
};

export default MyReviewItem;