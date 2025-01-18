'use client'

import { FaTimes, FaBars } from 'react-icons/fa'

export interface MenuToggleProps {
  isOpen: boolean
  clickFunction?: () => void
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, clickFunction }) => {
  const handleOnClick = () => {
    if (clickFunction) {
      clickFunction()
    }
  }

  return (
    <div
      id="menu-toggle"
      onClick={handleOnClick}
      className="block h-fit w-fit cursor-pointer text-4xl text-neutral hover:text-neutral-light md:hidden"
      aria-label="menu toggle"
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </div>
  )
}
