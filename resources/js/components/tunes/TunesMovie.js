import React from 'react'

function TunesMovie(props) {
    const {movie} = props
    
    return (
        <article className="movie">
            <div className="inside">
    <h2>{ movie.artist + '-' + movie.title}</h2>
                <div className="player">

                   { movie.artwork && ( <img src={ movie.artwork } alt="artwork"></img>)}

                </div>
                <video controls src={ movie.videoFile }></video>
                
            </div>
    <footer className="meta">{ movie.film }</footer>
        </article>
    )
}

export default TunesMovie
