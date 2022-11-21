import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link, useParams } from "react-router-dom";
import useTitle from "../../costomHooks/hooks";
import Reviews from "../Reviews/Reviews";

const ViewPlace = () => {
  // const place = useLoaderData();
  const { id } = useParams();
  const [place, setPlace] = useState({});
  const [loading, setLoading] = useState(true);
  useTitle("Place");
  console.log(place);
  const { picture, name, price, rating, about, _id } = place;

  useEffect(() => {
    fetch(`http://localhost:5000/place/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPlace(data.data);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <div className="w-16  h-16 border-4 border-dashed text-center rounded-full animate-spin dark:border-violet-400"></div>
    );
  }

  return (
    <div>
      <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <PhotoProvider>
            <PhotoView src={picture}>
              <img
                src={picture}
                alt=""
                className="w-full rounded-md h-60 sm:h-96 bg-gray-500"
              />
            </PhotoView>
          </PhotoProvider>
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
            <div className="space-y-2">
              <div
                rel="noopener noreferrer"
                className=" text-center text-2xl font-semibold sm:text-3xl"
              >
                {name}
              </div>
              <div className="flex justify-between items-center">
                <div
                  rel="noopener noreferrer"
                  className="text-xl  text-orange-500 font-semibold hover:underline"
                >
                  Price : $ {price}
                </div>
                <div
                  rel="noopener noreferrer"
                  className="text-xs hover:underline"
                >
                  <p className="text-sm flex items-center font-medium tracking-wide text-white">
                    <small className="flex text-orange-400">
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                    </small>

                    {rating}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-gray-100 text-justify">
              <p>{about}</p>
            </div>
            <div className="text-center">
              <Link to={`/review/${_id}`}>
                <button className="btn btn-sm bg-sky-500 hover:bg-sky-700">
                  Add Review
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Reviews p_id={_id}></Reviews>
    </div>
  );
};

export default ViewPlace;
