import React from "react"
function SingleNews() {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <img
        className='w-full rounded-lg mb-6'
        src='https://images.unsplash.com/photo-1504711434969-e33886168f5c'
      />

      <h1 className='text-5xl font-bold mb-4'>
        Full News Title
      </h1>

      <p className='text-gray-600 mb-4'>
        Published on May 26, 2026
      </p>

      <p className='leading-8 text-lg'>
        Full news content goes here.
      </p>
    </div>
  )
}

export default SingleNews