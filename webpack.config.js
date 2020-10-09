module.exports = {
    entry: {
        footer: './src/footer.jsx',
        concerto: './src/concerto.jsx',
        concertoHomeApp: './src/concertoHomeApp.jsx'
    },
    watch: false,
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    optimization: {
        minimize: false
    },
    mode: "production",
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