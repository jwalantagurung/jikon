import React from 'react'
import { Link } from 'react-router-dom' 

const MovieCard = ({anime: {mal_id, title,images,rating}}) => {
  return (
    <div className='movie_card'>
      <Link to={`/Anime_details/${mal_id}`} key={mal_id}><img src={images? images.jpg.image_url : '/No-Poster.png'}  alt='No Anime'/></Link>
      <p className='mt-2'>{title}</p>

      <div className="content">
        <img src='star-1.png' /> <span> {rating}</span>
       
      </div>
    </div>
  )
}

export default MovieCard
