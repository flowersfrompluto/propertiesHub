import React from 'react'

const Admin_Navigation = (props) => {
  const {NavLinkName, NavLinkIcon} = props
  
  return (
    <div>
      <div className="nav-item">
        <div className="NavLink-icon">{NavLinkIcon}</div>
        <div className="NavLink-name">{NavLinkName}</div>
      </div>
    </div>
  )
}

export default Admin_Navigation
