import React, {useState} from 'react';
import TunesList from './tunes/TunesList'
import TunesSearchForm from './tunes/TunesSearchForm'



function Tunes() {
    const [movies, setMovies] = useState([])
     
     function handleSearch(query){
        fetch(`https://itunes.apple.com/search?term=${encodeURI(query)}
          &entity=movie
          &limit=5`)
        .then(response => response.json())
        .then(data => {
            let iTunesMovies = data.results.filter((movie) => movie.kind == 'feature-movie')
         .map((movie) => extractData(movie))
          setMovies(iTunesMovies);
  });
        
        
        
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

