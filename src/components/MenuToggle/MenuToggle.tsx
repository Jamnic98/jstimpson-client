'use client'

import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

export interface MenuToggleProps {
  clickFunction?: () => void
}

export const MenuToggle: React.FC<MenuToggleProps> = ({ clickFunction }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const handleOnClick = () => {
    if (clickFunction) {
      clickFunction()
    }
    setIsOpen(!isOpen)
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
