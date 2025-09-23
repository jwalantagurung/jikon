import React from 'react'

const MovieCard = ({anime: {title,images,rating,genres}}) => {
  return (
    <div className='movie_card'>
      <img src={images? images.jpg.image_url : '/No-Poster.png'}  />
      <p className='mt-2'>{title}</p>

      <div className="content">
        <img src='star-1.png' /> <span> {rating}</span>
       
      </div>
    </div>
  )
}

export default MovieCard
