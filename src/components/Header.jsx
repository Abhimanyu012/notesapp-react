import React from 'react'

const Header = () => {
  return (
    <div className='w-full bg-linear-to-r from-blue-900 to-purple-900 rounded-lg shadow-xl p-6 flex justify-center items-center'>
      <h1 className='font-bold text-3xl text-white flex items-center gap-3'>
        📝 <span>My Notes App</span> 📝
      </h1>
    </div>
  )
}

export default Header
