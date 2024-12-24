import React from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

import styles from './mobileMenuToggle.module.css'

export interface MobileMenuToggleProps {
  handleClick: () => void
  isOpen: boolean
}

export const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ handleClick, isOpen }) => (
  <span onClick={handleClick} className={styles.menuIcon} aria-label="mobile menu toggle">
    {isOpen ? <FaTimes /> : <FaBars />}
  </span>
)
