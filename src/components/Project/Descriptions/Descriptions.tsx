interface ProjectDescriptionsProps {
  paragraphs: string[]
}

export const ProjectDescriptions: React.FC<ProjectDescriptionsProps> = ({ paragraphs }) => (
  <>
    {paragraphs.map((paragraph: string, index) => (
      <p className="text-justify text-xl" key={index}>
        {paragraph}
      </p>
    ))}
  </>
)
