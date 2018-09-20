import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Bio
        </Link>
        <Link className="navbar-item" to="/products">
          Date
        </Link>
        <Link className="navbar-item" to="/products">
          Videos
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
