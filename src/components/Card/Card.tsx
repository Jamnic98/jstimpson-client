'use client'

// import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const cardImgDimensions = { width: 300, height: 300 }

export interface CardProps {
  title: string
  description: string
  imageURI: string
  linkURI: string
}

export const Card: React.FC<CardProps> = ({ title, description, imageURI, linkURI }) => (
  <Link
    href={linkURI}
    className="group flex h-full w-full max-w-96 cursor-pointer flex-col justify-between overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105"
  >
    {/* Image Container */}
    <div className="relative aspect-square w-full overflow-hidden">
      <Image
        src={imageURI}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        width={cardImgDimensions.width}
        height={cardImgDimensions.height}
      />
    </div>
    {/* Content */}
    <div className="flex grow flex-col p-4">
      <div className="mb-2 text-2xl font-semibold text-orange-600 group-hover:text-gray-900">
        {title}
      </div>
      <div className="line-clamp-3 text-xl">{description}</div>
    </div>
  </Link>
)
