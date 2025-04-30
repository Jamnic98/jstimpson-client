'use client'

import { useState } from 'react'
import { IoCaretDownOutline } from 'react-icons/io5'

export interface SelectProps {
  defaultValue?: string
  items: string[]
  onChange: (value: string) => void
}

export const Select: React.FC<SelectProps> = ({ defaultValue = 'All', items, onChange }) => {
  const [selectedItem, setSelectedItem] = useState<string>(defaultValue)
  const [hideDropdown, setHideDropdown] = useState<boolean>(true)

  const selectItems = [defaultValue, ...items]

  const handleOnSelectClick = () => {
    setHideDropdown(!hideDropdown)
  }

  const handleOnOptionClick = (item: string) => {
    setHideDropdown(true)
    setSelectedItem(item)
    onChange(item)
  }

  return (
    <div className="relative">
      {/* Select Bar */}
      <div
        className={`${hideDropdown ? 'rounded shadow' : 'rounded-t-sm'} cursor-pointer bg-neutral-50`}
        onClick={handleOnSelectClick}
        data-testid="select"
      >
        <span className="flex items-center justify-between px-4 py-1">
          <span className="text-xl font-semibold">{selectedItem}</span>
          <IoCaretDownOutline
            className={`text-xl ${hideDropdown ? '' : 'rotate-180'}`}
            data-testid="dropdown-icon"
          />
        </span>
      </div>

      {/* Dropdown */}
      <div
        className={`${hideDropdown ? 'hidden shadow' : ''} absolute z-10 w-full`}
        hidden={hideDropdown}
        data-testid="select-dropdown"
      >
        {/* Options */}
        {selectItems
          .filter((item) => item !== selectedItem)
          .map((item, index) => (
            <div
              className="hover:text-neutral-light cursor-pointer bg-neutral-50 px-4 py-1 hover:bg-orange-600"
              onClick={() => handleOnOptionClick(item)}
              key={index}
              data-testid="select-option"
            >
              <span className="text-xl font-semibold">{item}</span>
            </div>
          ))}
      </div>
    </div>
  )
}
