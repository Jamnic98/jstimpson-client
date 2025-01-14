import Image from 'next/image'

const IMAGE_DIMENSIONS = { width: 275, height: 275 }

interface ProjectGalleryProps {
  screenshotURIs: string[]
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ screenshotURIs }) => (
  <>
    {screenshotURIs.map((screenshotURI, index) => (
      <Image
        src={screenshotURI}
        key={index}
        alt="project image"
        width={IMAGE_DIMENSIONS.width}
        height={IMAGE_DIMENSIONS.height}
      />
    ))}
  </>
)
