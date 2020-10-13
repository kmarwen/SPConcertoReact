const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        footer: './src/footer.jsx',
        concerto: './src/concerto.jsx',
        concertoHomeApp: './src/concertoHomeApp.jsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    optimization: {
        runtimeChunk: {
            name: 'single-webpack'
        }
        // ,
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        //             name: 'vendor',
        //             chunks: 'all',
        //         }
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};