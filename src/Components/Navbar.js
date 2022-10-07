import React from 'react'
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div>
        <NavLink
        to="/"
        
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
    
    </div>
  )
}

export default Navbar