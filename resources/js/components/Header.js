import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <div className="header">

    <nav >
    <NavLink exact to="/" activeClassName="active">
             Home
    </NavLink>
    <NavLink exact to="/tunes"  activeClassName="active">
             Tunes
    </NavLink>
    <NavLink exact to="/about" activeClassName="active">
             About
    </NavLink>
</nav> 
    </div>
)

export default Header
