import webpack from 'webpack';
import path from 'path';
import { BuildEnv, WebpackPath } from './config/types/config';
import { buildWebpack } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
    const paths: WebpackPath = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpack({
        paths,
        mode,
        port: PORT,
        isDev,
    });
    return config;
};
