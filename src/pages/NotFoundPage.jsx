import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
   <div>
    <p>404 not found</p>
   <Link to='/'>Go to Home</Link>
   </div>
  )
}
export default NotFoundPage


