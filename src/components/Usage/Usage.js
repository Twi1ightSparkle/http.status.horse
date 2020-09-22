import React from 'react'

import getString from '../../lib/strings'
import styles from './Usage.module.css'

const Usage = () => (
  <div className={styles.container}>
    <h2>{getString('USAGE_TITLE')}:</h2>
    <pre>https://http.status.horse/[{getString('USAGE_PARAM')}]</pre>
    <p>
      <b>{getString('USAGE_NOTE_LABEL')}:</b> {getString('USAGE_NOTE_TEXT')} <code>.jpg</code>.
    </p>
    <p>
      There will be <span role="img" aria-label="Horse head emoji">&#x1F434;</span> here soon <span role="img" aria-label="Trademark symbol">&#8482;</span>
    </p>
  </div>
)

export default Usage
