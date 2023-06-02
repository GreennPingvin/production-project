import path from 'path'
import { BuildOptions } from './types/config'

export function buildResolvers({ paths }: BuildOptions) {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferRelative: true,
    alias: {
      '@': paths.src,
    },

    // preferAbsolute: true,
    // modules: [paths.src, 'node-modules'],
    // mainFiles: ['index'],
    // alias: {},
  }
}
