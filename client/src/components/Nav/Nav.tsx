import React, { FunctionComponent } from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.scss'

const Nav: FunctionComponent = () => {
  //TODO: SELECT COURSE
  return ( 
    <div className="nav-grand-wrapper">
      <NavLink to="/home">
        <p>Recent Activity</p>
      </NavLink>
      <NavLink to="/rooms">
        <p>Chats</p>
      </NavLink>
      <NavLink to="/students">
        <p>Students</p>
      </NavLink>
      <NavLink to="/tasks">
        <p>Tasks</p>
      </NavLink>
      <NavLink to="/resources">
        <p>Resources</p>
      </NavLink>
    </div>
  )
}

export default Nav;