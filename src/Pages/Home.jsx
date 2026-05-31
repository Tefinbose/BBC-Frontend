import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import NewsCard from "../Components/NewsCard";
import Footer from "../Components/Footer";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
Link
function Home() {
  const [news, setNews] = useState([]);

  // Fetching all news
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

  return (
    <>
      <Navbar />
      <Hero/>
        <div className="bg-gray-100 min-h-screen">

      {/* News Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">

        {news.map((item) => (

          <Link
            to={`/news/${item._id}`}
            key={item._id}
          >

            <div className="bg-white rounded-xl shadow hover:scale-105 transition overflow-hidden">

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-cover"
              />

              {/* Content */}
              <div className="p-5">

                <p className="text-red-500 font-bold">
                  {item.category}
                </p>

                <h1 className="text-3xl font-bold mt-3">
                  {item.title}
                </h1>

                <p className="text-gray-600 mt-4">
                  {item.description}
                </p>

                <button className="bg-black text-white px-5 py-2 rounded mt-5">

                  Read More

                </button>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>
      
      <Footer />
    </>
  );
}

export default Home;
