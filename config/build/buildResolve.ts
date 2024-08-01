import { ResolveOptions } from 'webpack';
import { WebpackPath } from '../types/config';

interface BuildResolveOptions {
    paths: WebpackPath;
}

export function buildResolve(options: BuildResolveOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
    };
}
