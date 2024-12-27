'use client'
import { useState } from 'react'
import Image from 'next/image'

export interface CardProps {
  title: string
  description: string
  imageURI: string
}

const cardImgDimensions = { width: 144, height: 144 }

export const Card: React.FC<CardProps> = ({ title, description, imageURI }) => {
  const [isFocused, setIsFocused] = useState(false)
  const toggleFocus = () => setIsFocused(!isFocused)

  return (
    <div
      onMouseOver={toggleFocus}
      onMouseOut={toggleFocus}
      className="group flex h-36 cursor-pointer flex-row bg-gray-50 shadow-md"
    >
      <div className="relative h-36 w-36 flex-shrink-0 overflow-hidden">
        <Image
          src={imageURI}
          alt={title}
          className="group-hover:scale-105"
          width={cardImgDimensions.width}
          height={cardImgDimensions.height}
        />
      </div>
      <div className="box-border overflow-hidden px-3 py-2 text-left text-orange-600">
        <div className="text-4xl text-orange-600">{title}</div>
        <div className="line-clamp-3 text-lg text-gray-950">{description}</div>
      </div>
    </div>
  )
}
