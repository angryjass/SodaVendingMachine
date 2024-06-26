﻿const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        'polyfills': './App_Client/polyfills.ts',
        'app': './App_Client/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './wwwroot/dist'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/dist/',
        filename: "[name].js"       // название создаваемого файла
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [   //загрузчик для ts
            {
                test: /\.ts$/, // определяем тип файлов
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                    },
                    'angular2-template-loader'
                ]
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            }, {
                test: /\.css$/,
                include: path.resolve(__dirname, 'App_Client/app'),
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, 'App_Client'), // каталог с исходными файлами
            {} // карта маршрутов
        )
    ]
};