import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <div className="container nav__container">
            <Link className='logo' />
        </div>
    </div>
  )
}

export default NavBar