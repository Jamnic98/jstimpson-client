import Link from 'next/link'
import { CgExternal, CgInternal } from 'react-icons/cg'

import { LinkType, type ProjectLink } from 'types'

export interface ProjectLinksProps {
  links: ProjectLink[]
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => (
  <nav className="inset-0 flex flex-row flex-wrap text-xl font-medium">
    {links.map((link, index) => {
      if (link.type === LinkType.EXTERNAL) {
        return (
          <a
            className="group my-2 mr-2"
            href={link.URL}
            target="_blank"
            rel="noreferrer"
            key={index}
          >
            <span className="flex w-fit flex-row bg-slate-100 px-12 py-2 text-xl font-semibold text-orange-500 group-hover:text-black">
              {link.label} <CgExternal className="text-2xl" />
            </span>
          </a>
        )
      } else if (link.type === LinkType.INTERNAL) {
        return (
          <Link
            className="flex flex-row bg-slate-100 px-12 py-2 text-xl font-semibold text-orange-500 hover:text-black"
            href={link.URL}
            key={index}
          >
            <span className="flex flex-row text-orange-500">
              {link.label} <CgInternal className="text-2xl" />
            </span>
          </Link>
        )
      }
    })}
  </nav>
)
