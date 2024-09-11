import React from 'react'
import Link from 'next/link'

const AboutContent = () => {
  return (
    <div>
      <h2>about content</h2>
      <div className='flex gap-4'>
        <Link href="/about/fb">FB</Link>
        <Link href="/about/email">email</Link>
      </div>
        </div>
  )
}

export default AboutContent