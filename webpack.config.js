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
};