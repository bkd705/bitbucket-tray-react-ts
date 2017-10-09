import React from 'react'

interface INavSectionProps {
  children: any,
  isCenter: boolean
}

const NavSection = ({ children, isCenter }: INavSectionProps) => {
  return (
    <section className={isCenter ? 'navbar-center' : 'navbar-section'}>
      {children}
    </section>
  )
}

export default NavSection
