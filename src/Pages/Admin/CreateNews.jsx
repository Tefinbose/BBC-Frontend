import React, { useState } from "react";
import axios from "axios";


function CreateNews() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "",
    status: "draft"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/news",
        formData
      );

      alert("News Created Successfully");

      console.log(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="flex">
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <h1 className="text-5xl font-bold mb-10">
          Create News
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5w-[600px]"
        >

          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="p-4 border text-xl"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="p-4 border text-xl"
          />

          <textarea
            name="content"
            placeholder="Content"
            rows="6"
            onChange={handleChange}
            className="p-4 border text-xl"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="p-4 border text-xl"
          />

          <select
            name="category"
            onChange={handleChange}
            className="p-4 border text-xl"
          >
            <option>Select Category</option>
            <option>sports</option>
            <option>technology</option>
            <option>business</option>
          </select>

          <select
            name="status"
            onChange={handleChange}
            className="p-4 border text-xl"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <button className="bg-black text-white p-4 text-2xl">
            Create News
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateNews;