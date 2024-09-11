import React from 'react'
import Link from 'next/link'


const Blogspage = () => {

  const blogs  = [
    {
      "age" : "25",
      "name" : "Shohan"
    },
    {
      "age" : "21",
      "name" : "Lima"
    },
    {
      "age" : "3",
      "name" : "Humayra"
    },
  ]
  return (
    <div className='mt-6'>
      <h2>Blogs Page</h2>
      {
        blogs.map(blog =>
        <div key={blog.id}>
          <div key={blog.id} className='border-2 p-6 gap-2 mt-4 text-center'>
            <h2>name: <span className='text-xl font-bold'> {blog.name}</span></h2>
            <h3>age: {blog.age}</h3>
            <button className='px-4 py-2 rounded-lg mt-2 text-yellow-400 bg-slate-500'>
              <Link href={`/blogs/${blog.age}`}>Details</Link>
            </button>
          </div>
        </div>


        )
      }
    </div>
  )
}

export default Blogspage;