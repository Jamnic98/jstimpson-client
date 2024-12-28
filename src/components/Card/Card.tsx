'use client'
import { useState } from 'react'
import Image from 'next/image'

export interface CardProps {
  title: string
  description: string
  imageURI: string
}

const cardImgDimensions = { width: 300, height: 200 }

export const Card: React.FC<CardProps> = ({ title, description, imageURI }) => {
  const [isFocused, setIsFocused] = useState(false)
  const toggleFocus = () => setIsFocused(!isFocused)

  return (
    <div
      onMouseOver={toggleFocus}
      onMouseOut={toggleFocus}
      className="group flex h-48 cursor-pointer flex-row bg-gray-50 shadow-md"
    >
      <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden">
        <Image
          src={imageURI}
          alt={title}
          className="group-hover:scale-105"
          width={cardImgDimensions.width}
          height={cardImgDimensions.height}
        />
      </div>
      <div className="box-border line-clamp-5 overflow-hidden px-3 py-4 text-left">
        <div className="mb-2 text-3xl font-medium text-orange-600 group-hover:text-gray-950">
          {title}
        </div>
        <div className="text-2xl text-gray-950">{description}</div>
      </div>
    </div>
  )
}
