import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function AdminLayout() {

  const [open, setOpen] = useState(false);

  return (

    <div className="min-h-screen w-full overflow-x-hidden flex">

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-black text-white p-3 rounded"
        onClick={() => setOpen(!open)}
      >

        <FontAwesomeIcon
          icon={open ? faXmark : faBars}
        />

      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40
          h-screen w-64
          bg-black text-white
          p-6
          transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0 md:static
        `}
      >

        <h1 className="text-3xl font-bold mt-12 md:mt-0 mb-10">
          Admin Panel
        </h1>

        <ul className="space-y-7 text-lg">

          <li>
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/admin/allposts"
              onClick={() => setOpen(false)}
            >
              All Posts
            </Link>
          </li>

          <li>
            <Link
              to="/admin/create-news"
              onClick={() => setOpen(false)}
            >
              Create News
            </Link>
          </li>

          <li>
            <Link
              to="/admin/drafts"
              onClick={() => setOpen(false)}
            >
              Draft
            </Link>
          </li>

          <li>
            <Link
              to="/admin/profile"
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>
          </li>

        </ul>

      </aside>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <main
        className="
          flex-1
          min-w-0
          max-w-full
          bg-gray-100
          p-4
          md:p-8
          overflow-x-hidden
        "
      >

        <Outlet />

      </main>

    </div>
  );
}

export default AdminLayout;