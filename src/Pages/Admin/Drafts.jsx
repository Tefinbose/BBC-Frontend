import axios from "axios";
import React, { useEffect, useState } from "react";

function Drafts() {

  const [drafts, setDrafts] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/news/drafts")
      .then((res) => setDrafts(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div>

      <h1 className="text-5xl font-bold mb-10">
        Draft News
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow">

        <table className="w-full">

          {/* Head */}
          <thead className="bg-black text-white">

            <tr>

              <th className="p-5 text-left">
                Title
              </th>

              <th className="p-5 text-left">
                Category
              </th>

              <th className="p-5 text-left">
                Status
              </th>

            </tr>

          </thead>

          {/* Body */}
          <tbody>

            {drafts.map((item) => (

              <tr
                key={item._id}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-5">
                  {item.title}
                </td>

                <td className="p-5">
                  {item.category}
                </td>

                <td className="p-5 text-yellow-500 font-bold">
                  {item.status}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Drafts;