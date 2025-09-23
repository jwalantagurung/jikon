import React from 'react'

const search = ({search,setSearch}) => {
  return (
    <div className=" relative flex items-center basis-1/3">
      <div >
        <img src='searchpng.png' className='absolute left-2 h-5 w-5 my-3' />
      <input type="text"
        className="w-full pl-10  text-white pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search anime..." 
        value={search}
        onChange={(e) => {setSearch(e.target.value)}}
      />
      </div>
    </div>
  )
}

export default search
