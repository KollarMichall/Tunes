import React, {  useState } from 'react';
import logo from '../../img/react.svg'

function Home() {
    const [title] = useState("React !");
    
    
   
    
    return (
        <div className="home">


    <h1 >{title}</h1>
    <img className="App-logo" src={logo} alt="logo"></img>

        </div>

      
      

    )}
export default Home;

