import React from 'react'

const BlogDetailspage = ({params}) => {


  console.log(params.id);
  const {name, age} = blogs.find((blog) => blog.age == params.age);




  return (
    <div>
    <div className='mt-4'></div>
      <h2>Blogs Details of {name}</h2>
    </div>
  )
}

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
export default BlogDetailspage;