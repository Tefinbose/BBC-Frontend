function NewsCard({ item }) {

  if (!item) {
    return <p>No News Found</p>
  }

  return (
    <div className='shadow-lg rounded overflow-hidden'>
      <img
        className='h-52 w-full object-cover'
        src={item.image}
        alt='news'
      />

      <div className='p-4'>
        <span className='text-red-600 text-sm'>
          {item.category}
        </span>

        <h2 className='text-xl font-bold mt-2'>
          {item.title}
        </h2>

        <p className='text-gray-600 mt-2'>
          {item.description}
        </p>
      </div>
    </div>
  )
}
export default NewsCard