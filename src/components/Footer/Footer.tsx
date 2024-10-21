import { FaGithub, FaLinkedin } from 'react-icons/fa'
import classNames from 'classnames'

import { PERSONAL_GITHUB_REPO_URL, PERSONAL_LINKEDIN_URL } from 'utils'
import styles from './footer.module.css'

export const Footer: React.FC = () => (
  <div className={styles.footer} id='footer' aria-label='footer'>
    <div className={classNames('container', styles.footerContent)}>
      <nav className={styles.socialMediaLinks}>
        <a
          href={PERSONAL_GITHUB_REPO_URL}
          target='_blank'
          rel='noreferrer'
          className={styles.socialMediaLink}
        >
          <FaGithub />
        </a>
        <a
          href={PERSONAL_LINKEDIN_URL}
          target='_blank'
          rel='noreferrer'
          className={styles.socialMediaLink}
        >
          <FaLinkedin />
        </a>
      </nav>
    </div>
  </div>
)
