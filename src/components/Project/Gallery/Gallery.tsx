'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ProjectGalleryProps {
  screenshotURIs: string[]
  imageDimensions?: { width: number; height: number }
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  screenshotURIs,
  imageDimensions = { width: 400, height: 400 },
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      {/* Grid Gallery */}
      <div className="my-8 flex justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {screenshotURIs.map((screenshotURI, index) => (
            <div
              key={index}
              className="relative w-fit cursor-pointer transition-transform hover:scale-[104%]"
              onClick={() => setSelectedImage(screenshotURI)}
            >
              <Image
                src={screenshotURI}
                alt={`Project screenshot ${index + 1}`}
                width={imageDimensions.width}
                height={imageDimensions.height}
                className="rounded object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/75"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
          >
            <Image
              src={selectedImage}
              alt="Selected project image"
              width={1280}
              height={720}
              className="rounded object-cover"
            />
            <button
              className="absolute top-4 right-4 cursor-pointer text-2xl text-white focus:outline-hidden"
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
