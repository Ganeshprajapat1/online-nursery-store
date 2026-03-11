import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on Email</h1>
      <p>Click Notify To Stay Updated</p>
      <div>
        <input type="email" placeholder='YOUR EMAIL ID' />
        <button>Notify me</button>
      </div>
    </div>
  )
}

export default NewsLetter
