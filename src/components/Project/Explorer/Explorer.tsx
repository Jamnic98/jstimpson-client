import Link from 'next/link'

import { type Project } from 'types'
// import styles from './explorer.module.css'

interface ExplorerProps {
  title: string
  projectData: Partial<Project>[]
}

export const Explorer: React.FC<ExplorerProps> = ({ title, projectData }) => (
  <>
    <h2 className="mb-0 text-3xl font-semibold">{title}</h2>
    <hr className="my-4" />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projectData.map((dataObj, index) => (
        <Link
          className="group col-span-1 block h-32 rounded-lg bg-gray-50 p-4 text-gray-950 hover:cursor-pointer"
          href={dataObj.projectPageURI || ''}
          key={index}
        >
          <h3 className="mb-4 text-2xl font-bold text-orange-500 group-hover:text-gray-950">
            {dataObj.title}
          </h3>
          <p className="line-clamp-1 overflow-hidden text-ellipsis text-xl">{dataObj.summary}</p>
        </Link>
      ))}
    </div>
    <div className="mt-8 flex justify-center">
      <Link className="rounded-lg bg-slate-50 px-12 py-2 text-xl font-medium" href="/projects">
        <span className="font-semibold text-orange-500 hover:text-gray-950">all projects</span>
      </Link>
    </div>
  </>
)
