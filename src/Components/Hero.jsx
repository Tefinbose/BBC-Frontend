import React from 'react'

function Hero() {

  return (
    <div className='relative h-screen'>
      <img
        className='w-full h-full object-cover'
        src='https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop'
        alt='news'
      />

      <div className='absolute inset-0 bg-black/50 flex items-center'>
        <div className='text-white p-10 max-w-2xl'>
          <h1 className='text-5xl font-bold mb-4'>
            Breaking News Today
          </h1>

          <p className='mb-4'>
            Stay updated with the latest technology, sports, and world news.
          </p>

          <button className='bg-red-600 px-5 py-2 rounded'>
            Read More
          </button>

          
        </div>
      </div>
    </div>
  )
}

export default Hero