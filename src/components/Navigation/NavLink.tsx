import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

interface INavLinkProps extends LinkProps {}

const NavLink = ({ children, ...rest }: INavLinkProps) => (
  <Link className="btn btn-link" {...rest}>
    {children}
  </Link>
)

export default NavLink
