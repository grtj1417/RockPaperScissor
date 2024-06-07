const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
        mode: 'development',
        entry: './home.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './index.html',
                minify: {
                    collapseWhitespace: true,
                    removeComments: true
                }
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'img/[name][ext]'
                    }
                }
            ]
    }
};