import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <h1 className="text-2xl font-bold text-center p-3">NewsHub</h1>
      </div>
      <div className="flex justify-between items-center p-3">
        <h1 className="hidden md:block md:text-3xl font-bold">NewsHub</h1>
        <div className="hidden">
          <button className="border rounded me-2 px-3 py-2">
            {" "}
            <FontAwesomeIcon className=" " icon={faUser} /> Login
          </button>
        </div>
      </div>

      <nav className="bg-black text-white px-6 py-4 flex justify-between flex-col">
        <div className="flex justify-between w-full items-center md:hidden">
          <FontAwesomeIcon
            onClick={() => {
              setStatus(!status);
            }}
            icon={faBars}
          />
          <button className="border rounded me-2 px-3 py-2">
            {" "}
            <FontAwesomeIcon className="me-2 " icon={faUser} /> Login
          </button>
        </div>

        <ul className={status ? "md:flex " : "md:flex justify-center hidden"}>
          <li className="me-3">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="me-3">
            {" "}
            <Link to="/category/technology">Technology</Link>
          </li>
          <li className="me-3">
            {" "}
            <Link to="/category/sports">Sports</Link>
          </li>
          <li className="me-3">
            <Link to="/category/business">Business</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
