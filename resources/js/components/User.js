import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './About';
import Tunes from './Tunes';
import Home from './Home';
import Header from './Header';



function User() {
    return (
        <BrowserRouter>
        <Header/>
       <Switch>
        <Route exact path="/tunes" component={Tunes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
        
      </Switch>
      

        </BrowserRouter>
            )}
          
export default User;

// DOM element
if (document.getElementById('app')) {
    ReactDOM.render(<User />, document.getElementById('app'));
}