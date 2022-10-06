import React from 'react'

function NavBar() {
  return (
    <nav className="nav">
        <a href="/" className='site-title'>Todo App</a>
        <ul>
            <li className="active">
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="about">About</a>
            </li> 
        </ul>
    </nav>
  )
}

export default NavBar