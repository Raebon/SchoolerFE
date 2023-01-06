import React from 'react'

const SidebarMenu = () => {
  return (
    <div className="ui left demo vertical inverted sidebar labeled icon menu visible">
      <a className="item">
        <i className="home icon"></i>
        Home
      </a>
      <a className="item">
        <i className="block layout icon"></i>
        Topics
      </a>
      <a className="item">
        <i className="smile icon"></i>
        Friends
      </a>
    </div>
  )
}

export default SidebarMenu