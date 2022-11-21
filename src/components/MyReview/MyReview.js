import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../costomHooks/hooks";
import { AuthDataContext } from "../../UseContext/AuthContext";
import MyReviewItem from "../MyReviewItem/MyReviewItem";

const MyReview = () => {
  const { user, logOut } = useContext(AuthDataContext);
  const [review, setReview] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useTitle("My Review");

  // review load UI
  useEffect(() => {
    fetch("http://localhost:5000/review", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("place-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setReview(data.data));
  }, [refresh, logOut]);
  const findEmail = review.filter((v) => v.user_uid === user.uid);
  // handle delete function
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you Sure ?");
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setRefresh(true);
            toast.success(data.message, { autoClose: 500 });
          }
        })
        .catch((error) => {
          toast.error(error.message, { autoClose: 500 });
        });
    }
  };
  // handle update function
  const handleUpdate = (id) => {
    console.log(id);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            {findEmail.length === 0 && (
              <h2 className="font-2xl font-bold">
                No reviews were added{" "}
                <Link to="/places">
                  <small className="text-sky-600 hover:underline">
                    View Places more
                  </small>
                </Link>
              </h2>
            )}
            <table className="min-w-full leading-normal">
              {!findEmail.length ? (
                ""
              ) : (
                <thead>
                  <tr className="text-semibold">
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase "
                    >
                      Place Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase "
                    >
                      Review
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase "
                    >
                      Email / Uid
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
              )}

              <tbody>
                {findEmail?.map((find) => (
                  <MyReviewItem
                    key={find._id}
                    find={find}
                    handleUpdate={handleUpdate}
                    handleDelete={handleDelete}
                  ></MyReviewItem>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
