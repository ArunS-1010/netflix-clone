import React, { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [show, setShow] = useState(false)

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)   
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)

    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <nav className={`nav ${show && 'nav_black'} `}>
      <div className="nav_contents">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix img"
          className="nav_logo"
        />
        <img
          src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg"
          alt="Nav avatar"
          className="nav_avatar"
        />
      </div>
    </nav>
  )
}

export default Nav
