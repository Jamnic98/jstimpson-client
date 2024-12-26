import React from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

export interface MenuToggleProps {
  handleClick: () => void
  isOpen: boolean
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ handleClick, isOpen }) => (
  <div onClick={handleClick} className="" aria-label="menu toggle">
    {isOpen ? <FaTimes /> : <FaBars />}
  </div>
)
