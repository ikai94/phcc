import { ModuleOptions, RuleSetRule } from "webpack";
import path from 'path'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoader(isDev: boolean): RuleSetRule[] {

    const webFonts = {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name].[contenthash][ext]',
        },
    }

    const svgLoader = {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
            filename: 'icons/[name].[contenthash][ext]',
        },
    };


    const imgLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
             {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../',
                },
            },
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: any ) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader'
        ],
    };


    return [
        svgLoader,
        imgLoader,
        webFonts,
        tsLoader,
        cssLoader
    ];
}
