import React, { useEffect, useState } from 'react'
import Search from './search';
import { useDebounce } from 'react-use';
import MovieCard from './MovieCard';
import Spinner from './Spinner';

const API_BASE_URL = 'https://api.jikan.moe/v4/anime' 

const App = () => {

  const[search,setSearch]= useState('');
  const[anime,setAnime]= useState([]);
  const[loading,setLoading]= useState(false);
  const[errorMessage,setErrorMessage]= useState('')
  const[debouncedSearch, setDebouncedSearch] = useState('');

  useDebounce(() => {
    setDebouncedSearch(search)}
  , 600, [search]);
  
  const fetchAnime = async (query='') => {
    setLoading(true);
    setErrorMessage('')
    try {
      const endpoint = query ? `${API_BASE_URL}?q=${encodeURIComponent(search)}&limit=20` : API_BASE_URL;

      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if(data === false){
        setErrorMessage('failed to load');
      }
      console.log(data)
      setAnime(data.data);
    } catch (error) {
      console.error('Error fetching anime data:', error);
    }finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchAnime(debouncedSearch);
  },[debouncedSearch] )
  return (
    <div>
      <header className='flex p-8 bg-black flex-row sm'>
      <h1 className=' ml-30 text-4xl font-bold text-white basis-2/3'>Anime hub</h1>
      <Search search={search} setSearch={setSearch}/>
      </header>

      <h2 className='text-xl font-bold ml-6'>All Animes</h2>
      {loading && <Spinner/> }
      <section className='mx-15'>
        <ul className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {anime.map((anime) => (
            <MovieCard key= {anime.mal_id} anime={anime}/>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
