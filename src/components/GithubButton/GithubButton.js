import React from 'react'

import githubIcon from '../../assets/images/github.svg'
import styles from './GithubButton.module.css'

const GithubButton = ({ width, height}) => (
  <div className={styles.container}>
    <a
      href="https://github.com/Twi1ightSparkle/http.status.horse"
      target="_blank"
      rel="noopener noreferrer"
      title="http.status.horse github repository"
    >
      <img
        src={githubIcon}
        alt="Github logo"
        width={width}
        height={height}
      />
    </a>
  </div>
)

GithubButton.defaultProps = {
  width: '50px',
  height: '50px'
}

export default GithubButton
