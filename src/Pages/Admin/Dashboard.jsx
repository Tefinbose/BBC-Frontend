import React from "react";
import { Link } from "react-router-dom";



function Dashboard() {
  return (
    <>
     
      
      <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-6xl font-bold mb-10">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-8">

        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold">
            Total Posts
          </h2>

          <p className="text-5xl mt-5 font-bold">
            24
          </p>
        </div>

        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold">
            Published
          </h2>

          <p className="text-5xl mt-5 font-bold">
            18
          </p>
        </div>

        <div className="bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold">
            Drafts
          </h2>

          <p className="text-5xl mt-5 font-bold">
            4
          </p>
        </div>

      </div>

      {/* Recent Posts */}
      <div className="bg-white mt-10 p-8 rounded shadow">

        <h2 className="text-3xl font-bold mb-5">
          Recent Posts
        </h2>

        <table className="w-full">

          <thead>
            <tr className="text-left border-b">
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

              <td>
                Technology
              </td>

              <td>
                Published
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-4">
                Football Championship
              </td>

              <td>
                Sports
              </td>

              <td>
                Draft
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
    

    
    </>
   

    
  )
}

export default Dashboard