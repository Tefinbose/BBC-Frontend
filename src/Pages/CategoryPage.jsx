import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

function CategoryPage() {
  const { category } = useParams();

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/news/category/${category}`)
      .then((res) => {
        setNews(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);
  console.log(news);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold capitalize text-center mb-5">{category} News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <NewsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
