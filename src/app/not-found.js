import Link from 'next/link'
import React from 'react'

const NOtFoundPage = () => {
  return (
    <div>
      <h1>This page is not avilable</h1>
      <Link href={'/'}>Go to home</Link>
    </div>
  )
}

export default NOtFoundPage
