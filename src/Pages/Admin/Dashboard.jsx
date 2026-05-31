import React from "react";

function Dashboard() {
  return (
    <div className="p-10 md:p-8 w-full overflow-hidden">

      {/* Heading */}
      <h1 className="text-3xl md:text-6xl font-bold mb-8 mt-5 ">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl md:text-2xl font-bold">
            Total Posts
          </h2>

          <p className="text-4xl md:text-5xl mt-4 font-bold">
            24
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl md:text-2xl font-bold">
            Published
          </h2>

          <p className="text-4xl md:text-5xl mt-4 font-bold">
            18
          </p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="text-xl md:text-2xl font-bold">
            Drafts
          </h2>

          <p className="text-4xl md:text-5xl mt-4 font-bold">
            4
          </p>
        </div>

      </div>

      {/* Table */}
      <div className="bg-white mt-8 p-4 md:p-6 rounded shadow overflow-x-auto">

        <h2 className="text-2xl md:text-3xl font-bold mb-5">
          Recent Posts
        </h2>

        <table className="w-full min-w-[500px]">

          <thead>
            <tr className="border-b text-left">
              <th className="py-3">Title</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-4">
                AI Conference 2026
              </td>

              <td>Technology</td>

              <td>Published</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">
                Football Championship
              </td>

              <td>Sports</td>

              <td>Draft</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Dashboard;