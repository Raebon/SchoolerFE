import React from 'react'

const NavBar = () => {
  return (
    <div className="ui small menu">
      <a className="active item">
        Home
      </a>
      <a className="item">
        Messages
      </a>
      <div className="right menu">
        <div className="ui dropdown item">
          Language <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item">English</a>
            <a className="item">Russian</a>
            <a className="item">Spanish</a>
          </div>
        </div>
        <div className="item">
          <div className="ui primary button">Sign Up</div>
        </div>
      </div>
    </div>
  )
}

export default NavBar