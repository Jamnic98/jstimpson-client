'use client'

import { FaTimes, FaBars } from 'react-icons/fa'

export interface MenuToggleProps {
  isOpen: boolean
  onClick?: () => void
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, onClick }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div
      id="menu-toggle"
      onClick={handleOnClick}
      className="text-neutral block h-fit w-fit cursor-pointer text-4xl hover:text-orange-600 md:hidden"
      aria-label="menu toggle"
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </div>
  )
}
