import React, { useState } from "react";
import axios from "axios";

function CreateNews() {
  const [customCategory, setCustomCategory] =useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: "",
    category: "",
    status: "draft",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/news`,
        formData,
      );

      alert("News Created Successfully");

      console.log(res.data);

      setFormData({
        title: "",
        description: "",
        content: "",
        image: "",
        category: "",
        status: "draft",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="bg-gray-100 min-h-screen p-4 md:p-8">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8">Create News</h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            shadow
            rounded-lg
            p-4
            md:p-8
            flex
            flex-col
            gap-5
            w-full
            max-w-3xl
          "
        >
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="
              p-3
              md:p-4
              border
              rounded
              text-base
              md:text-lg
              w-full
              outline-none
            "
          />

          {/* Description */}
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="
              p-3
              md:p-4
              border
              rounded
              text-base
              md:text-lg
              w-full
              outline-none
            "
          />

          {/* Content */}
          <textarea
            name="content"
            placeholder="Content"
            rows="6"
            value={formData.content}
            onChange={handleChange}
            className="
              p-3
              md:p-4
              border
              rounded
              text-base
              md:text-lg
              w-full
              outline-none
              resize-none
            "
          />

          {/* Image URL */}
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="
              p-3
              md:p-4
              border
              rounded
              text-base
              md:text-lg
              w-full
              outline-none
            "
          />

          {/* Category */}

         
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="
              p-3
              md:p-4
              border
              rounded
              text-base
              md:text-lg
              w-full
              outline-none">

            <option value="">Select Category</option>

            <option value="sports">Sports</option>

            <option value="technology">Technology</option>

            <option value="business">Business</option>

            <option value="custom">Custom Category</option>

          </select>

           {formData.category === "custom" && (
            <input
              type="text"
              placeholder="Enter Custom Category"
              value={customCategory}
              onChange={(e) => {
                setCustomCategory(e.target.value);
                setFormData({
                  ...formData,
                  category: e.target.value,
                });
              }}
              className="p-4 bordertext-xl rounded "
            />
          )}

          {/* Status */}
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
              p-3
              md:p-4
              border
              rounded
              text-base
              md:text-lg
              w-full
              outline-none
            "
          >
            <option value="draft">Draft</option>

            <option value="published">Published</option>
          </select>

          {/* Button */}
          <button
            type="submit"
            className="
              bg-black
              text-white
              p-3
              md:p-4
              rounded
              text-lg
              md:text-xl
              hover:bg-gray-800
              transition
            "
          >
            Create News
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNews;
