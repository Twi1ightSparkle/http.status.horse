import React from 'react'

import GithubButton from '../GithubButton'
import getString from '../../lib/strings'
import styles from './Footer.module.css'

const Footer = () => (
  <div className={styles.container}>
    <div className={styles.social}>
      <GithubButton />
    </div>

    <nav>
      <a href="/?lang=cat">{getString('LANGUAGE_LINK_TEXT')}</a>
    </nav>

    <p>{getString('DEVELOPED_BY')} <a href="https://twitter.com/rogeriopvl">@rogeriopvl</a></p>
    <p>{getString('IMAGES_BY')} Tomomi Imura (<a href="https://twitter.com/girlie_mac">@girlie_mac</a>)</p>
  </div>
)

export default Footer
