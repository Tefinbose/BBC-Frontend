import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllPosts() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/news`)
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Delete News
  const deleteNews = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/news/${id}`);

      alert("News deleted");

      setNews(news.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Heading */}
      <h1
        className="
          text-3xl
          md:text-5xl
          font-bold
          mb-8
          text-center
        "
      >
        All Posts
      </h1>

      {/* Table Container */}
      <div
        className="
          bg-white
          rounded-xl
          shadow
          p-3
          md:p-5
          overflow-x-auto
        "
      >
        <table className="w-full min-w-[700px]">
          {/* Table Head */}
          <thead className="bg-black text-white">
            <tr>
              <th className="p-4 text-left">Title</th>

              <th className="p-4 text-left">Category</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {news.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-100">
                {/* Title */}
                <td className="p-4 font-semibold">{item.title}</td>

                {/* Category */}
                <td className="p-4 capitalize">{item.category}</td>

                {/* Status */}
                <td className="p-4 capitalize">{item.status}</td>

                {/* Actions */}
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {/* Edit */}
                    <Link to={`/admin/edit-news/${item._id}`}>
                      <button
                        className="
                          bg-blue-500
                          text-white
                          px-3
                          py-2
                          rounded
                          text-sm
                          md:text-base
                        "
                      >
                        Edit
                      </button>
                    </Link>

                    {/* Delete */}
                    <button
                      onClick={() => deleteNews(item._id)}
                      className="
                        bg-red-500
                        text-white
                        px-3
                        py-2
                        rounded
                        text-sm
                        md:text-base
                      "
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllPosts;
