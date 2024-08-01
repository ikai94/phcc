export type BuildMode = 'production' | 'development';

export interface WebpackPath {
    html: string;
    entry: string;
    build: string;
    src: string;
}
export interface BuildOptions {
    paths: WebpackPath;
    port: number;
    mode: BuildMode;
    isDev: boolean;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
