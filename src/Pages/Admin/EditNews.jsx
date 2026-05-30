
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditNews() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "",
    status: ""
  });

  // Fetch Single News
  useEffect(() => {

    axios
      .get(`http://localhost:5000/api/news/${id}`)
      .then((res) => {

        setFormData(res.data);

      })
      .catch((err) => console.log(err));

  }, [id]);

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  // Update News
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `http://localhost:5000/api/news/${id}`,
        formData
      );

      alert("News Updated Successfully");

      navigate("/admin/allposts");

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div>

      <h1 className="text-5xl font-bold text-center ">
        Edit News
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 bg-white  p-4   rounded-xl shadow"
      >

        {/* Title */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 rounded text-xl"
        />

        {/* Description */}
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded text-xl"
        />

        {/* Content */}
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows="8"
          placeholder="Content"
          className="border p-2 rounded text-xl"
        />

        {/* Image */}
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 rounded text-xl"
        />

        {/* Category */}
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded text-xl"
        >

          <option value="">
            Select Category
          </option>

          <option value="Sports">
            Sports
          </option>

          <option value="Technology">
            Technology
          </option>

          <option value="Business">
            Business
          </option>

        </select>

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border p-2 rounded text-xl"
        >

          <option value="draft">
            Draft
          </option>

          <option value="published">
            Published
          </option>

        </select>

        {/* Button */}
        <button className="bg-black text-white p-2 rounded text-2xl">

          Update News

        </button>

      </form>

    </div>
  );
}

export default EditNews;