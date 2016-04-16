import _ from 'lodash'
import fs from 'fs-extra'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'

import Welcome from './containers/index'

const factories = {
  welcome: React.createFactory(Welcome)
}

const outputDir = path.resolve('dist')

_.forEach(factories, (factory, key) => {
  const rendered = renderToString(factory())
  const output = `${outputDir}/${key}.html`

  fs.ensureFileSync(output)
  fs.writeFileSync(output, rendered)
})
