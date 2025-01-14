interface ProjectDescriptionsProps {
  paragraphs: string[]
}

export const ProjectDescriptions: React.FC<ProjectDescriptionsProps> = ({ paragraphs }) => (
  <>
    {paragraphs.map((paragraph: string, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </>
)
