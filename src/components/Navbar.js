import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand text-warning" href="/">NewsMonkey</a>
            <button className="navbar-toggler text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink className="nav-link text-warning ite" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning ite" to="/business">Business</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning ite" to="/entertainment">Entertainment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning ite" to="/health">Health</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning ite" to="/science">Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning ite" to="/sports">Sports</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-warning ite" to="/technology">Technology</NavLink>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
