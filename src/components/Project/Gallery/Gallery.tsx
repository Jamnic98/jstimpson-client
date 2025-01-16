'use client'

import Image from 'next/image'
import { useState } from 'react'

const IMAGE_DIMENSIONS = { width: 275, height: 275 }

interface ProjectGalleryProps {
  screenshotURIs: string[]
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshotURIs }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      {/* Grid Gallery */}
      <div className="flex flex-row flex-wrap">
        {screenshotURIs.map((screenshotURI, index) => (
          <div
            key={index}
            className="relative w-fit cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedImage(screenshotURI)}
          >
            <Image
              src={screenshotURI}
              alt={`Project screenshot ${index + 1}`}
              width={IMAGE_DIMENSIONS.width}
              height={IMAGE_DIMENSIONS.height}
              className="m-4 rounded shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected project image"
              width={800}
              height={800}
              className="rounded"
            />
            <button
              className="absolute right-4 top-4 text-2xl text-white"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
