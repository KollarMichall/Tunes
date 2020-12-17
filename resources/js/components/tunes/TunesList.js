import React from 'react';
import TunesMovie from './TunesMovie';
import { TransitionGroup, CSSTransition} from 'react-transition-group'


function TunesList(props) {
    const { movies }= props
   
    
    return (
        <TransitionGroup component="ul" className="tunes-list">
            {movies.map(movie => (
                <CSSTransition key={movie.id} timeout={200} className="movie"> 

    {/* <li key={movie.id}> */}
    <TunesMovie movie={movie}/>
    {/* </li> */}
                </CSSTransition>
))}
        </TransitionGroup>
      

    )}
export default TunesList;

