import React from "react";
import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

        <ul className="space-y-6">
          <li>
            <Link to={"/admin/allposts"}>All Posts</Link>
          </li>
          <li>
            <Link to={"/admin/create-news"}>Create News</Link>
          </li>
         <Link to={"/admin/drafts"}><li>Draft</li></Link>
         
          <li>Scheduled</li>
          <li>Published</li>
          <Link to="/admin/profile"><li>Profile</li></Link>
        </ul>
      </aside>

      {/* Dynamic Content */}
      <div className="flex-1 bg-gray-100 min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
