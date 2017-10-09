import React from 'react'

interface INavBarProps {
  children: any
}

const NavBar = ({ children }: INavBarProps) => {
  return <header className="navbar">{children}</header>
}

export default NavBar
