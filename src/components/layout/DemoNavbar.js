import React, {useState} from 'react';
import "./DemoNavbar.css";
import { FaGithubSquare,
     FaTwitterSquare,
      FaInstagramSquare, 
    } from "react-icons/fa";

import {GiHamburgerMenu} from "react-icons/gi";

import { BsFillPersonFill } from "react-icons/bs"

import { Link, NavLink } from 'react-router-dom'

const DemoNavbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
      <>
      <nav className="main-nav">
          <div className="logo" >
              <Link to="/">
              <h2>
                  <span>C</span>edar
                  <span>G</span>ate
              </h2>
              </Link>
          </div>

          <div className= {
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
              <ul>
              <li>
                  <NavLink to="/">Home</NavLink>
              </li>
              <li>
                  <NavLink to="/about">About</NavLink>
              </li>
              <li>
                  <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                  <NavLink to="/contacts">Contacts</NavLink>
              </li>
              </ul>
          </div>

          <div className="social-media">
              <ul className="social-media-desktop">
              <li>
                      <Link to="/users/add">
                          <BsFillPersonFill  className="login" />
                      </Link>
                  </li>
                  <li>
                      <a href="https://www.github.com/" target="github">
                          <FaGithubSquare  className="github" />
                      </a>
                  </li>
                  <li>
                      <a href="https://www.twitter.com/" target="twitter">
                          <FaTwitterSquare className="twitter" />
                      </a>
                  </li>
                  {/* <li>
                      <a href="https://www.instagram.com/" target="instagram">
                          <FaInstagramSquare className="instagram" />
                      </a>
                  </li> */}
              </ul>
              <div className='hamburger-menu'>
                  <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                      <GiHamburgerMenu />
                  </a>
              </div>
          </div>
      </nav>

      {/* hero section */}

      {/* <section className="hero-section">
          <p>Welcome to</p>
          <h1>Cedar Gate Library</h1>
      </section>
       */}
      </>
  )
}

export default DemoNavbar