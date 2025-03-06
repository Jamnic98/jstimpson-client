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
                className="rounded-sm object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
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
              className="rounded-sm object-cover"
            />
            <button
              className="focus:outline-hidden absolute right-4 top-4 text-2xl text-white"
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
