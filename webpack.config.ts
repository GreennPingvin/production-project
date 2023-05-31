import path from 'path'

import {
  BuildEnv,
  BuildMode,
  BuildOptions,
  BuildPaths,
} from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

module.exports = (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
  }
  return buildWebpackConfig(options)
}
