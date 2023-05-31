import path from 'path'

import {
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

const mode: BuildMode = 'development'
const isDev = mode === 'development'

const options: BuildOptions = {
  mode,
  paths,
  isDev,
}

module.exports = buildWebpackConfig(options)
