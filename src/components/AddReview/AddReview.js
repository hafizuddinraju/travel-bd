import React, { useContext, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../costomHooks/hooks";
import { AuthDataContext } from "../../UseContext/AuthContext";

const AddReview = () => {
  const { user } = useContext(AuthDataContext);
  const place = useLoaderData();
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const { _id, name } = place.data;
  useTitle("Add Review");

  // handle submit function
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.fullName.value;

    const review = form.review.value;
    const rating = form.rating.value;

    const addReview = {
      place_id: _id,
      place_name: name,
      userName: userName,
      userEmail: user?.email,
      user_photo: user?.photoURL,
      user_uid: user?.uid,
      review,
      rating,
      date_time: value,
    };
    // console.log(addReview)
    // post review mongodb
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          form.reset();
          toast.success(data.message, { autoClose: 500 });
          navigate("/myreview");
        }
      })
      .catch((error) => {
        toast.error(error.error, { autoClose: 500 });
      });
  };
  return (
    <div>
      <section className="p-6 bg-gray-600 rounded-md text-gray-50">
        <div className="text-center text-xl md:text-3xl font-bold py-3">
          <h1> {name}</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-700">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Information</p>
              <p className="text-xs">{user?.displayName}</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Name" className="text-sm">
                  Full Name
                </label>
                <input
                  id="Name"
                  name="fullName"
                  required
                  type="text"
                  placeholder="Place Name"
                  className="w-full px-2 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="PhotoURL" className="text-sm">
                  PhotoURL
                </label>
                <input
                  id="photoURL"
                  name="picture"
                  type="text"
                  defaultValue={user?.photoURL}
                  readOnly
                  className="w-full px-2 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email/Uid
                </label>
                <input
                  id="email"
                  type="email"
                  readOnly
                  defaultValue={user?.email ? user.email : user.uid}
                  className="w-full rounded-md px-2 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="review" className="text-sm">
                  Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  placeholder="Type your review..."
                  className="w-full h-3 md:h-16 lg:h-20 rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-2 relative">
                <label htmlFor="Price" className="text-sm">
                  Date & Time
                </label>
                <DateTimePicker
                  format="y-MM-dd h:mm:ss a"
                  className="text-black bg-white absolute"
                  readOnly
                  onChange={onChange}
                  value={value}
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Rating" className="text-sm">
                  Rating
                </label>
                <input
                  id="Rating"
                  name="rating"
                  type="text"
                  placeholder="Rating"
                  className="w-full px-2 py-1 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full text-center md:text-end sm:col-span-2 py-4">
                <button
                  type="submit"
                  className="px-4 py-2 border text-black hover:bg-sky-600 bg-sky-400 font-semibold rounded-md dark:border-gray-100"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddReview;
