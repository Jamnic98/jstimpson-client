'use client'

import Image from 'next/image'
import { useState } from 'react'

const IMAGE_DIMENSIONS = { width: 400, height: 400 }

interface ProjectGalleryProps {
  screenshotURIs: string[]
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshotURIs }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      {/* Grid Gallery */}
      <div className="my-8 flex justify-center">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                className="rounded-xs object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <Image
              src={selectedImage}
              alt="Selected project image"
              width={800}
              height={800}
              className="rounded-xs object-cover"
            />
            <button
              className="absolute top-4 right-4 text-2xl text-white focus:outline-hidden"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}
