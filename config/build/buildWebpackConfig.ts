import webpack from 'webpack'
import { buildLoader } from './buildLoader'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'
import { BuildOptions } from '../types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      assetModuleFilename: 'images/[name].[contenthash][ext]',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoader(isDev),
    },
    resolve: buildResolve(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
