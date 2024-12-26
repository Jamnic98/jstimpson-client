import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { PERSONAL_GITHUB_URL, PERSONAL_LINKEDIN_URL } from 'utils'

export const Footer: React.FC = () => (
  <div id="footer" className="" aria-label="footer">
    <div className="container">
      <nav className="">
        <a href={PERSONAL_GITHUB_URL} target="_blank" rel="noreferrer" className="">
          <FaGithub />
        </a>
        <a href={PERSONAL_LINKEDIN_URL} target="_blank" rel="noreferrer" className="">
          <FaLinkedin />
        </a>
      </nav>
    </div>
  </div>
)
