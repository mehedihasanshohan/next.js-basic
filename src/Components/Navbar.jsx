"use client";
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links =[
    {
      title:"Home",
      path: "/"
    },
    {
      title:"About",
      path: "/about"
    },
    {
      title:"Contact",
      path: "/contact"
    },
    {
      title:"login",
      path: "/login"
    },
    {
      title:"blogs",
      path: "/blogs"
    },
  ]

  const handler = () => {
    router.push('/login');
  }

  return (
    <div>
      <nav className='bg-gray-600 py-4 px-6 flex justify-between items-center'>
        <h6 className='text-3xl text-white'>Next <span className='text-yellow-200'>Basic</span></h6>
        <ul className='flex justify-between text-white items-center space-x-4'>
          {
            links?.map((link) => <Link className={`${pathName=== link.path && "text-green-200"}`} key={link.path} href={link.path}>{link.title}</Link>)
          }
         </ul>
         <button onClick={handler} className="bg-rose-100 text-orange-700 rounded px-4">Login</button>
      </nav>
    </div>
  )
}

export default Navbar