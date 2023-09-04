import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
        <div className='container'>
        <NavLink class="navbar-brand" to="#"><img style={{ width: "50px", height: "50px" }}
          src="https://m.economictimes.com/thumb/msid-57220384,width-1200,height-900,resizemode-4,imgsize-86728/here-are-5-apps-to-help-you-find-a-room-house-to-rent.jpg"
          alt="" /></NavLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="signup">
                SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="login">
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="addrentproperty">
                Add Rent Property
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="browsespace">
                Browse Space
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="managespace">
                Manage Space
              </NavLink>
            </li>
          </ul>

        </div>
    </div>
      </nav>

  )
}

export default Navbar