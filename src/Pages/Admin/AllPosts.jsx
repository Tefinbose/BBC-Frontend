import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
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

  //   Delete news api
  const deleteNews = async (id) => {
    try {
      const result = await axios.delete(`${import.meta.env.VITE_API_URL}/api/news/${id}`);
      alert("News deleted");
      setNews(news.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold mb-10 text-center mt-2">All Posts</h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow p-5">
          <table className="w-full">
            {/* Table Head */}
            <thead className="bg-black text-white">
              <tr>
                <th className="p-5 text-left">Title</th>

                <th className="p-5 text-left">Category</th>

                <th className="p-5 text-left">Status</th>

                <th className="p-5 text-left">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {news.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="p-5 font-semibold">{item.title}</td>

                  <td className="p-5">{item.category}</td>

                  <td className="p-5">{item.status}</td>

                  <td className="p-5 flex gap-3">
                    <Link to ={`/admin/edit-news/${item._id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                    </Link>

                    <button
                      onClick={() => deleteNews(item._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllPosts;
