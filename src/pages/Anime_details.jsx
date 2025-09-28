import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const Anime_details = () => {
  const {id} = useParams();


  //state
  const [animeDetail, setAnimeDetail] = useState({});


    //destructure 
  const {title, images, rating, synopsis, status,aired
    , duration, score, rank, popularity,type,
      members, favorites, background, studios, genres} = animeDetail;
    
      //fetch anime detail
   const fetchAnimeDetail = async (anime) => {
      try{
        const result =await fetch(`https://api.jikan.moe/v4/anime/${anime}`);
        if (!result.ok){
          throw new Error('Network response was not ok');
        }
        const detail =await result.json();
        setAnimeDetail(detail.data);
        console.log(detail.data)
      }catch(error){
        console.error('Error fetching anime detail:', error);
      }
    };

  useEffect(() =>{
        fetchAnimeDetail(id);
    
  }, [])

  return (
    <div>
      <h1 className='text-2xl text-white font-bold p-10'>{title}</h1>
      <div className='details flex gap-20 ml-10'>
        <div className="contain ">
        <img src={images? images.jpg.image_url : '/No-Poster.png'} alt='No Anime' className='detail_img'/>
      </div>
      <div className="writing text-lg/12">
        <p>Rating: {rating}</p>
        <p>Type:  {type}</p>
        <p>Status:  {status}</p>
        <p>Aired: <span>{aired?.string}</span></p>
        <p>Duration:  {duration}</p>
        <p>Score:  {score}</p>
        <p>Rank:  {rank}</p>
        </div>
      </div>

    </div>
  )
}

export default Anime_details
