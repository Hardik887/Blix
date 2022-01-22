import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    const [showNav, handleShowNav] = useState(false)

    const transitionNavbar = () => {
        if(window.scrollY > 100) {
            handleShowNav(true)
        }
        else {
            handleShowNav(false)
        }
    }

    //runs once when component is mounted
    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar) //attach an EventListener which runs transitionNavbar every time user scrolls
        return () => window.removeEventListener('scroll', transitionNavbar) //return function is run when component unmounts, cleaning up the EventListener
    }, [])

    return (
        <div className={`nav ${showNav && 'nav_black'}`}>
            <div className='nav_contents'>
                <Link to='/'><img className='nav_logo' src='https://res.cloudinary.com/hardiksinghrana/image/upload/v1641733823/Blix/BLIX_1__prev_ui_f434d0.png' alt='' /></Link>
                <Link to='/profile'><img className='nav_avatar' src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg' alt='' /></Link>
            </div>
        </div>
    )
}

export default Nav