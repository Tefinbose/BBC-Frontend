import React from "react"
function Footer() {
  return (
    <footer className="bg-black text-white mt-10">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            NewsHub
          </h1>

          <p className="text-gray-400 text-sm leading-6">
            Stay updated with the latest breaking news,
            technology, sports, business and world updates.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Categories
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>Technology</li>
            <li>Sports</li>
            <li>Business</li>
            <li>Health</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Latest News</li>
            <li>Trending</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Admin */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Admin
          </h2>

          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="/admin/login"
                className="hover:text-white"
              >
                Admin Login
              </a>
            </li>

            <li>Dashboard</li>
            <li>Manage Posts</li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-400 text-sm text-center">
            © 2026 NewsHub. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-400 text-sm">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer">
              Support
            </span>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer