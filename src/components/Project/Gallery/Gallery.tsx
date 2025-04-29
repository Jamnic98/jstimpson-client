'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'

import { Loader } from 'components'

interface ProjectGalleryProps {
  screenshotURIs: string[]
  imageDimensions?: { width: number; height: number }
  isBlenderImage?: boolean
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  screenshotURIs,
  imageDimensions = { width: 600, height: 600 },
  isBlenderImage = false,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (selectedImage) {
      const img = new window.Image()
      img.src = selectedImage

      if (img.complete) {
        // already cached
        setLoading(false)
      } else {
        // still loading
        setLoading(true)
      }

      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [selectedImage])

  return (
    <>
      {/* Grid Gallery */}
      <div className="flex justify-center">
        <div
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${isBlenderImage ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}
        >
          {screenshotURIs.map((screenshotURI, index) => (
            <Image
              key={index}
              className="relative cursor-pointer rounded shadow-md transition-transform hover:scale-[103%]"
              onClick={() => setSelectedImage(screenshotURI)}
              src={screenshotURI}
              alt={`Project screenshot ${index + 1}`}
              width={imageDimensions.width}
              height={imageDimensions.height}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/75"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative mx-4" onClick={(e) => e.stopPropagation()}>
            {loading && <Loader />}

            <Image
              key={selectedImage}
              src={selectedImage}
              alt="Selected project image"
              width={isBlenderImage ? 1280 : imageDimensions.width}
              height={isBlenderImage ? 720 : imageDimensions.height}
              className={`rounded object-cover transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setLoading(false)}
              priority
            />

            <button
              className="absolute top-4 right-4 cursor-pointer focus:outline-hidden"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <IoClose className="text-3xl text-white hover:text-orange-600" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
