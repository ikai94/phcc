import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { WebpackPath } from "../types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

interface buildPluginsOptions {
    paths: WebpackPath;
}

export function buildPlugins(
    options: buildPluginsOptions
): webpack.WebpackPluginInstance[] {
    const { paths } = options;
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),

    ];

    return plugins;
}
