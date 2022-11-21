import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../costomHooks/hooks";
import { AuthDataContext } from "../../UseContext/AuthContext";

const AddPlace = () => {
  const { user, setUdate, update } = useContext(AuthDataContext);
  const navigate = useNavigate();
  useTitle("Add Place");
  // handle add place function
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const picture = form.picture.value;
    const name = form.name.value;
    const about = form.about.value;
    const price = form.price.value;
    const rating = form.rating.value;

    console.log(name, picture, about, price, rating);

    const addPlace = {
      picture: picture,
      name: name,
      about: about,
      price: price,
      rating: rating,
      user_uid: user.uid,
    };
    // post data mongodb
    fetch("http://localhost:5000/places", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addPlace),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          form.reset();
          setUdate(!update);
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.error);
      });
  };
  return (
    <div>
      <section className="p-6 bg-gray-600 rounded-md text-gray-50">
        <div className="text-center text-xl md:text-3xl font-bold py-3">
          <h1> Add New Place</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-700">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">{user?.displayName}</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="PhotoURL" className="text-sm">
                  PhotoURL
                </label>
                <input
                  id="photoURL"
                  name="picture"
                  type="text"
                  placeholder="photoURL"
                  className="w-full px-2 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="Name" className="text-sm">
                  Name
                </label>
                <input
                  id="Name"
                  name="name"
                  type="text"
                  placeholder="Place Name"
                  className="w-full px-2 py-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Uid
                </label>
                <input
                  id="email"
                  type="email"
                  defaultValue={user ? user.uid : "email not access"}
                  readOnly
                  className="w-full rounded-md px-2 py-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="about" className="text-sm">
                  Details
                </label>
                <textarea
                  id="about"
                  name="about"
                  placeholder="Type details..."
                  className="w-full h-3 md:h-16 lg:h-20 rounded-md px-2 py-3 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="Price" className="text-sm">
                  Price
                </label>
                <input
                  id="Price"
                  name="price"
                  type="text"
                  placeholder="Price"
                  className="w-full rounded-md px-2 py-1 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
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

export default AddPlace;
