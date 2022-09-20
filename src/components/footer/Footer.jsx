import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>
        
        <div className="contacteme">
            <img className='imagen-aj' src="media/aj.png" alt="" />
            <h2 className='h2'>Si desea saber mas sobre mi...</h2>
            <Link className='contacto' to='/contacto'>
                <span>Contacteme! </span>
                <span><ion-icon name="chatbox-outline"></ion-icon></span>
            </Link>
        </div>

        <div className="h3"><h3>© Sitio Web @2022 Almada Julian.</h3></div>
    </div>
  )
}

export default Footer