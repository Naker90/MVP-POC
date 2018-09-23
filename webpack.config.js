const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ['env']
                }
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
};