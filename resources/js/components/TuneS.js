import axios from 'axios';
import React, {useState} from 'react';
import TunesList from './tunes/TunesList'
import TunesSearchForm from './tunes/TunesSearchForm'



function Tunes() {
    const [movies, setMovies] = useState([])
     
     function handleSearch(query){
         axios.get(`https://itunes.apple.com/search?term=${encodeURI(query)}
         &entity=movie
         &limit=5`).then(response => {
             let iTunesMovies = response.data.results.filter((song) => song.kind == 'feature-movie')
             .map((song) => extractData(song))
             setMovies(iTunesMovies);
            })
         
        
  }
  function extractData( { trackId: id, trackName: title, artistName:artist, previewUrl:videoFile, artworkUrl100:artwork, collectionName: film }){
      return {id, title, artist, videoFile, artwork, film  }
  }
  

    return (
    <article className="tunes">
        <h1>Tunes</h1>
            <TunesSearchForm onSearch={handleSearch}/>
            <TunesList movies={movies} />
    </article>
      

    )}
export default Tunes;

