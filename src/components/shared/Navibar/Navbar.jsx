import React from 'react'

import { NavLink } from 'react-router-dom'

import './Navibar.styles.scss'


const Navbar = () => (
  <nav>
    <ul className="ul-style">
      <li className="li-style">
        <NavLink exact to="/">
          Top
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/posts/new">
          Add New Post
        </NavLink>
      </li>
    </ul>
  </nav>
)
export default Navbar